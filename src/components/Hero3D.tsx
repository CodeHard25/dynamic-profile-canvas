
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Hero3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);
  const connectionsRef = useRef<THREE.Line[]>([]);
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

    // Create web tech elements
    const createTechElements = () => {
      const grid = [];
      const gridSize = 4;
      const spacing = 3;
      
      // Materials for different tech categories
      const materialFrontend = new THREE.MeshStandardMaterial({
        color: 0x3498db, // Blue for frontend
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x3498db,
        emissiveIntensity: 0.2
      });
      
      const materialBackend = new THREE.MeshStandardMaterial({
        color: 0x9b59b6, // Purple for backend
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x9b59b6,
        emissiveIntensity: 0.2
      });
      
      const materialTools = new THREE.MeshStandardMaterial({
        color: 0x2ecc71, // Green for tools
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x2ecc71,
        emissiveIntensity: 0.2
      });
      
      // Create different shapes for different tech categories
      const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8); // Frontend: cubes
      const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32); // Backend: spheres
      const octaGeometry = new THREE.OctahedronGeometry(0.6); // Tools: octahedrons
      
      // Create grid of elements
      for (let x = -gridSize; x <= gridSize; x++) {
        for (let y = -gridSize; y <= gridSize; y++) {
          for (let z = -gridSize; z <= gridSize; z++) {
            // Skip some positions to make it less dense
            if (Math.random() > 0.8) {
              const position = new THREE.Vector3(
                x * spacing, 
                y * spacing, 
                z * spacing
              );
              
              // Only create elements within a spherical boundary
              if (position.length() < gridSize * spacing * 0.7) {
                // Determine tech category based on position
                let geometry, material;
                
                // Frontend (top)
                if (y > 0) {
                  geometry = cubeGeometry;
                  material = materialFrontend;
                } 
                // Backend (bottom)
                else if (y < 0) {
                  geometry = sphereGeometry;
                  material = materialBackend;
                } 
                // Tools (middle)
                else {
                  geometry = octaGeometry;
                  material = materialTools;
                }
                
                const element = new THREE.Mesh(geometry, material);
                element.position.copy(position);
                
                // Add random rotation and movement
                (element as any).rotation = {
                  x: Math.random() * 0.01,
                  y: Math.random() * 0.01,
                  z: Math.random() * 0.01
                };
                
                (element as any).oscillation = {
                  x: Math.random() * 0.02 - 0.01,
                  y: Math.random() * 0.02 - 0.01,
                  z: Math.random() * 0.02 - 0.01,
                  phase: Math.random() * Math.PI * 2
                };
                
                scene.add(element);
                nodesRef.current.push(element);
                grid.push({ element, position: position.clone() });
              }
            }
          }
        }
      }
      
      // Connect some elements with lines
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: 0.2 
      });
      
      for (let i = 0; i < grid.length; i++) {
        for (let j = i + 1; j < grid.length; j++) {
          const a = grid[i];
          const b = grid[j];
          
          const distance = a.position.distanceTo(b.position);
          
          // Connect if close enough
          if (distance < spacing * 1.5) {
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              a.position,
              b.position
            ]);
            
            const line = new THREE.Line(lineGeometry, lineMaterial);
            scene.add(line);
            connectionsRef.current.push(line);
            
            // Store connection information
            (line as any).connects = { a: a.element, b: b.element };
          }
        }
      }
    };
    
    createTechElements();

    // Animation loop
    const animate = () => {
      const time = Date.now() * 0.001;
      
      // Animate tech elements
      nodesRef.current.forEach(element => {
        // Rotate each element
        element.rotation.x += (element as any).rotation.x;
        element.rotation.y += (element as any).rotation.y;
        element.rotation.z += (element as any).rotation.z;
        
        // Add oscillating movement
        const osc = (element as any).oscillation;
        element.position.x += Math.sin(time + osc.phase) * osc.x;
        element.position.y += Math.cos(time + osc.phase) * osc.y;
        element.position.z += Math.sin(time + osc.phase * 2) * osc.z;
      });
      
      // Update connections
      connectionsRef.current.forEach(line => {
        const { a, b } = (line as any).connects;
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          a.position,
          b.position
        ]);
        line.geometry.dispose();
        line.geometry = lineGeometry;
      });
      
      // Slowly rotate entire scene
      scene.rotation.y += 0.001;
      
      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();
    
    // Add interactive camera movement
    const handleMouseMove = (event: MouseEvent) => {
      if (!cameraRef.current) return;
      
      // Calculate normalized mouse position
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Move camera slightly based on mouse position
      cameraRef.current.position.x = mouseX * 2;
      cameraRef.current.position.y = mouseY * 1;
      cameraRef.current.lookAt(0, 0, 0);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
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
      nodesRef.current.forEach(node => {
        node.geometry.dispose();
        (node.material as THREE.Material).dispose();
      });
      
      connectionsRef.current.forEach(line => {
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
