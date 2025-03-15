export const projectsData = [
  {
    id: 'enterprise-management',
    title: 'Enterprise Management System',
    description: 'A comprehensive system built with .NET Core and React for managing company resources, employees, and projects.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['C#', '.NET Core', 'React', 'TypeScript', 'SQL Server', 'Entity Framework'],
    github: 'https://github.com/example/enterprise-management',
    liveLink: 'https://example-enterprise-management.com',
    codeSnippet: `// Employee Controller
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _employeeService;

    public EmployeeController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<EmployeeDto>>> GetEmployees()
    {
        var employees = await _employeeService.GetAllEmployeesAsync();
        return Ok(employees);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<EmployeeDto>> GetEmployee(int id)
    {
        var employee = await _employeeService.GetEmployeeByIdAsync(id);
        
        if (employee == null)
        {
            return NotFound();
        }

        return Ok(employee);
    }
}`
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with a RESTful API backend and a responsive React frontend.',
    image: 'https://images.unsplash.com/photo-1556742077-0a6b7a4a0c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['ASP.NET', 'React', 'Redux', 'Azure', 'MongoDB', 'Docker'],
    github: 'https://github.com/example/ecommerce-platform',
    liveLink: 'https://example-ecommerce.com',
    codeSnippet: `// Product Catalog React Component
function ProductCatalog() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={() => dispatch(addToCart(product))}
        />
      ))}
    </div>
  );
}`
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Portal',
    description: 'A secure healthcare portal allowing patients to access medical records and communicate with providers.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['.NET', 'React', 'GraphQL', 'Azure AD B2C', 'SQL Server'],
    github: 'https://github.com/example/healthcare-portal',
    liveLink: 'https://example-healthcare.com',
    codeSnippet: `// GraphQL Schema for Patient Records
type Patient {
  id: ID!
  firstName: String!
  lastName: String!
  dateOfBirth: Date!
  medicalRecords: [MedicalRecord!]
  appointments: [Appointment!]
}

type MedicalRecord {
  id: ID!
  patientId: ID!
  date: DateTime!
  doctorName: String!
  diagnosis: String
  prescription: String
  notes: String
}

type Query {
  patient(id: ID!): Patient
  patients: [Patient!]!
  medicalRecord(id: ID!): MedicalRecord
}

type Mutation {
  createMedicalRecord(input: MedicalRecordInput!): MedicalRecord
  updateMedicalRecord(id: ID!, input: MedicalRecordInput!): MedicalRecord
}`
  },
  {
    id: 'collaboration-tool',
    title: 'Real-time Collaboration Tool',
    description: 'A web application enabling teams to collaborate on documents and projects in real-time.',
    image: 'https://images.unsplash.com/photo-1600267165089-12b07181450f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['SignalR', 'React', '.NET Core', 'WebSockets', 'Redis'],
    github: 'https://github.com/example/collaboration-tool',
    liveLink: 'https://example-collaboration.com',
    codeSnippet: `// SignalR Hub for Real-time Collaboration
public class DocumentHub : Hub
{
    private readonly IDocumentService _documentService;
    
    public DocumentHub(IDocumentService documentService)
    {
        _documentService = documentService;
    }
    
    public async Task JoinDocument(string documentId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, documentId);
        await Clients.Caller.SendAsync("LoadDocument", 
            await _documentService.GetDocumentAsync(documentId));
    }
    
    public async Task UpdateText(string documentId, string text, int position)
    {
        await _documentService.UpdateDocumentTextAsync(documentId, text, position);
        await Clients.OthersInGroup(documentId).SendAsync("TextUpdated", text, position);
    }
}`
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    description: 'An interactive dashboard for visualizing financial data with advanced filtering capabilities.',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['C#', 'React', 'D3.js', 'Entity Framework', 'Identity Server'],
    github: 'https://github.com/example/financial-dashboard',
    liveLink: 'https://example-finance.com',
    codeSnippet: `// Financial Chart Component with D3.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const FinancialChart = ({ data, width = 800, height = 400 }) => {
  const svgRef = useRef();
  
  useEffect(() => {
    if (!data || !data.length) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)))
      .range([0, innerWidth]);
    
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([innerHeight, 0]);
    
    const line = d3.line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);
    
    const g = svg.append("g")
      .attr("transform", \`translate(\${margin.left},\${margin.top})\`);
    
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#4f46e5")
      .attr("stroke-width", 2)
      .attr("d", line);
      
    // Add axes and labels
    g.append("g")
      .attr("transform", \`translate(0,\${innerHeight})\`)
      .call(d3.axisBottom(x));
    
    g.append("g")
      .call(d3.axisLeft(y));
  }, [data, width, height]);
  
  return (
    <svg ref={svgRef} width={width} height={height}></svg>
  );
};

export default FinancialChart;`
  },
  {
    id: 'fitness-app',
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile application for tracking workouts and nutrition with a .NET backend.',
    image: 'https://images.unsplash.com/photo-1571019113651-415d77c547f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['Xamarin', '.NET', 'React Native', 'Azure Functions', 'CosmosDB'],
    github: 'https://github.com/example/fitness-app',
    liveLink: 'https://example-fitness.com',
    codeSnippet: `// Workout Tracking in React Native
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useWorkouts } from '../hooks/useWorkouts';
import WorkoutCard from '../components/WorkoutCard';
import { useNavigation } from '@react-navigation/native';

export const WorkoutScreen = () => {
  const navigation = useNavigation();
  const { workouts, loading, error } = useWorkouts();
  
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error.message}</Text>
        <TouchableOpacity onPress={refetch} style={styles.retryButton}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <WorkoutCard
            workout={item}
            onPress={() => navigation.navigate('WorkoutDetail', { workoutId: item.id })}
          />
        )}
      />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateWorkout')}
      >
        <Text style={styles.addButtonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // More styles...
});`
  },
  {
    id: 'pawman',
    title: 'PAWMAN',
    description: 'A dynamic and responsive e-commerce platform for buying and selling pets and accessories.',
    image: 'https://images.unsplash.com/photo-1536489953177-f69220b0d6e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Redux'],
    github: 'https://github.com/CodeHard25/pawman',
    liveLink: 'https://pawman-ecommerce.com',
    codeSnippet: `// Authentication Controller with JWT
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    
    await newUser.save();
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id }, 
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.status(201).json({
      message: 'User created successfully',
      token,
      userId: newUser._id
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}`
  },
  {
    id: 'legal-repository',
    title: 'Legal Repository',
    description: 'Responsive and dynamic web application to provide insights into statutory compliance laws in India.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    technologies: ['ASP.NET MVC', 'Angular', 'SSMS', 'Entity Framework', 'IIS'],
    github: 'https://github.com/CodeHard25/legal-repository',
    liveLink: 'https://legal-repository.com',
    codeSnippet: `// Role-based access control implementation
public class RoleBasedAccessController : Controller
{
    private readonly ILegalActService _legalActService;
    private readonly IUserService _userService;

    public RoleBasedAccessController(ILegalActService legalActService, IUserService userService)
    {
        _legalActService = legalActService;
        _userService = userService;
    }

    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> ManageLegalActs()
    {
        var legalActs = await _legalActService.GetAllLegalActsAsync();
        return View(legalActs);
    }

    [Authorize(Roles = "Admin,Editor")]
    public async Task<IActionResult> EditLegalAct(int id)
    {
        var legalAct = await _legalActService.GetLegalActByIdAsync(id);
        if (legalAct == null)
        {
            return NotFound();
        }

        return View(legalAct);
    }

    [HttpPost]
    [Authorize(Roles = "Admin,Editor")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditLegalAct(int id, LegalActViewModel model)
    {
        if (id != model.Id)
        {
            return BadRequest();
        }

        if (ModelState.IsValid)
        {
            try
            {
                await _legalActService.UpdateLegalActAsync(model);
                return RedirectToAction(nameof(ManageLegalActs));
            }
            catch (Exception)
            {
                // Log error
                ModelState.AddModelError("", "Unable to save changes.");
            }
        }
        return View(model);
    }
}`
  }
];
