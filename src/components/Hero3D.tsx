
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Hero3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const spheresRef = useRef<THREE.Mesh[]>([]);
  const linesRef = useRef<THREE.Line[]>([]);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Create nodes (spheres)
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const nodeCount = 24;
    const nodes = [];

    // Create node materials with different colors
    const colors = [
      new THREE.Color(0x1E90FF), // Blue
      new THREE.Color(0x4169E1), // Royal Blue
      new THREE.Color(0x6495ED), // Cornflower Blue
      new THREE.Color(0x7EB0FF)  // Light Blue
    ];

    // Create node positions within a 3D space
    for (let i = 0; i < nodeCount; i++) {
      const xRange = 14;
      const yRange = 8;
      const zRange = 8;
      
      const x = (Math.random() - 0.5) * xRange;
      const y = (Math.random() - 0.5) * yRange;
      const z = (Math.random() - 0.5) * zRange;
      
      // Create sphere with random color
      const colorIndex = Math.floor(Math.random() * colors.length);
      const material = new THREE.MeshStandardMaterial({
        color: colors[colorIndex],
        emissive: colors[colorIndex],
        emissiveIntensity: 0.2,
        metalness: 0.7,
        roughness: 0.2
      });
      
      const sphere = new THREE.Mesh(sphereGeometry, material);
      sphere.position.set(x, y, z);
      
      // Add random velocity for animation
      (sphere as any).velocity = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      };
      
      scene.add(sphere);
      nodes.push({
        mesh: sphere,
        originalPos: { x, y, z }
      });
      spheresRef.current.push(sphere);
    }

    // Connect nodes with lines if they're close enough
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x1E90FF,
      opacity: 0.2,
      transparent: true
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const nodeA = nodes[i].mesh;
        const nodeB = nodes[j].mesh;
        
        // Calculate distance between nodes
        const distance = nodeA.position.distanceTo(nodeB.position);
        
        // Connect if nodes are within range
        if (distance < 5) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            nodeA.position,
            nodeB.position
          ]);
          
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);
          linesRef.current.push(line);
          
          // Store connection info
          (line as any).connects = { a: nodeA, b: nodeB };
        }
      }
    }

    // Animation loop
    const animate = () => {
      // Move spheres
      spheresRef.current.forEach((sphere, index) => {
        // Move based on velocity
        sphere.position.x += (sphere as any).velocity.x;
        sphere.position.y += (sphere as any).velocity.y;
        sphere.position.z += (sphere as any).velocity.z;
        
        // Boundary check and reverse direction if needed
        const bounds = { x: 7, y: 4, z: 4 };
        ['x', 'y', 'z'].forEach(axis => {
          if (Math.abs(sphere.position[axis]) > bounds[axis]) {
            (sphere as any).velocity[axis] *= -1;
          }
        });
      });
      
      // Update connecting lines
      linesRef.current.forEach(line => {
        const { a, b } = (line as any).connects;
        const points = [a.position, b.position];
        line.geometry.setFromPoints(points);
        
        // Update line opacity based on distance
        const distance = a.position.distanceTo(b.position);
        const maxDistance = 5;
        const opacity = Math.max(0, 1 - distance / maxDistance) * 0.4;
        (line.material as THREE.LineBasicMaterial).opacity = opacity;
      });
      
      // Rotate entire scene slightly
      scene.rotation.y += 0.001;
      scene.rotation.x += 0.0005;

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();
    
    // Mouse move effect
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Subtle camera movement based on mouse position
      if (cameraRef.current) {
        cameraRef.current.position.x = mouseX * 2;
        cameraRef.current.position.y = mouseY * 1;
        cameraRef.current.lookAt(0, 0, 0);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose geometries and materials
      spheresRef.current.forEach(sphere => {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
      });
      
      linesRef.current.forEach(line => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <div className="three-canvas-container" ref={mountRef}></div>
  );
};

export default Hero3D;
