// SmartCode Technology - Main Script

// Theme Configuration (tailoring Tailwind)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb', // Primary Blue
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

// Components
const Header = `
<nav class="bg-white shadow-lg fixed w-full z-50 transition-all duration-300" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
            <div class="flex items-center">
                <a href="index.html" class="flex-shrink-0 flex items-center gap-2">
                    <div class="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                    <span class="font-bold text-2xl text-gray-800 tracking-tight">SmartCode<span class="text-brand-600">Tech</span></span>
                </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
                <a href="index.html" class="text-gray-600 hover:text-brand-600 font-medium transition-colors">Home</a>
                <a href="about.html" class="text-gray-600 hover:text-brand-600 font-medium transition-colors">About</a>
                <a href="services.html" class="text-gray-600 hover:text-brand-600 font-medium transition-colors">Services</a>
                <a href="projects.html" class="text-gray-600 hover:text-brand-600 font-medium transition-colors">Projects</a>
                <a href="contact.html" class="px-5 py-2.5 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Contact Us</a>
            </div>
            <div class="flex items-center md:hidden">
                <button id="mobile-menu-btn" class="text-gray-600 hover:text-brand-600 focus:outline-none p-2">
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div class="md:hidden hidden bg-white border-t border-gray-100 absolute w-full" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
            <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Home</a>
            <a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">About</a>
            <a href="services.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Services</a>
            <a href="projects.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Projects</a>
            <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-brand-600 font-bold hover:bg-brand-50">Contact Us</a>
        </div>
    </div>
</nav>
<div class="h-20"></div> <!-- Spacer -->
`;

const Footer = `
<footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div class="col-span-1 md:col-span-1">
                <div class="flex items-center gap-2 mb-6">
                    <div class="w-8 h-8 bg-brand-500 rounded flex items-center justify-center text-white font-bold">S</div>
                    <span class="font-bold text-xl tracking-tight">SmartCode<span class="text-brand-400">Tech</span></span>
                </div>
                <p class="text-gray-400 leading-relaxed mb-6">
                    Empowering businesses with innovative software solutions. We build the future of technology, one line of code at a time.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-6 text-white border-b-2 border-brand-500 inline-block pb-2">Quick Links</h3>
                <ul class="space-y-3">
                    <li><a href="about.html" class="text-gray-400 hover:text-brand-400 transition-colors flex items-center"><span class="mr-2">›</span> About Us</a></li>
                    <li><a href="services.html" class="text-gray-400 hover:text-brand-400 transition-colors flex items-center"><span class="mr-2">›</span> Our Services</a></li>
                    <li><a href="projects.html" class="text-gray-400 hover:text-brand-400 transition-colors flex items-center"><span class="mr-2">›</span> Portfolio</a></li>
                    <li><a href="contact.html" class="text-gray-400 hover:text-brand-400 transition-colors flex items-center"><span class="mr-2">›</span> Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-6 text-white border-b-2 border-brand-500 inline-block pb-2">Services</h3>
                <ul class="space-y-3">
                    <li><a href="services.html" class="text-gray-400 hover:text-brand-400 transition-colors">Web Development</a></li>
                    <li><a href="services.html" class="text-gray-400 hover:text-brand-400 transition-colors">Mobile Apps</a></li>
                    <li><a href="services.html" class="text-gray-400 hover:text-brand-400 transition-colors">Cloud Solutions</a></li>
                    <li><a href="services.html" class="text-gray-400 hover:text-brand-400 transition-colors">IT Consulting</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-6 text-white border-b-2 border-brand-500 inline-block pb-2">Contact Info</h3>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <i class="fas fa-map-marker-alt mt-1.5 text-brand-500 mr-3"></i>
                        <span class="text-gray-400">Mogadishu, Somalia</span>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-phone-alt text-brand-500 mr-3"></i>
                        <span class="text-gray-400">+252 61 XXX XXXX</span>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-envelope text-brand-500 mr-3"></i>
                        <span class="text-gray-400">info@smartcode-tech.com</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; <span id="year"></span> SmartCode Technology. All rights reserved.</p>
            <div class="mt-4 md:mt-0">
                <a href="#" class="hover:text-white mr-4 transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>
`;

// Inject Functions
function injectComponents() {
    const headerContainer = document.getElementById('header-host');
    const footerContainer = document.getElementById('footer-host');

    if (headerContainer) headerContainer.innerHTML = Header;
    if (footerContainer) footerContainer.innerHTML = Footer;

    // Initialize Mobile Menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Set Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Highlight Active Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-brand-600');
            link.classList.remove('text-gray-600');
        }
    });

    // API Integration: Fetch Projects (if on projects page)
    if (window.location.pathname.includes('projects.html')) {
        renderProjectsPage();
    }

    // Case Study Integration (if on case-study page)
    if (window.location.pathname.includes('case-study.html')) {
        renderCaseStudyPage();
    }

    // Auth Handlers
    initAuthForms();
}

function initAuthForms() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('signup-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            btn.disabled = true;

            const username = document.getElementById('username').value;
            const email = document.getElementById('email-address').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // Success Scenario
                    document.getElementById('auth-message').classList.remove('hidden');
                    document.getElementById('auth-message-text').textContent = 'Thank you for signing up! Your account has been created successfully.';
                    document.getElementById('auth-error').classList.add('hidden');
                    signupForm.reset();

                    // Optional: Redirect after delay
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 3000);
                } else {
                    throw new Error(data.message || 'Registration failed');
                }
            } catch (err) {
                document.getElementById('auth-error').classList.remove('hidden');
                document.getElementById('auth-message').classList.add('hidden');
                document.getElementById('auth-error-text').textContent = err.message || 'Backend is not running. Please start the server.';
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('login-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
            btn.disabled = true;

            const email = document.getElementById('email-address').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // Store Token
                    localStorage.setItem('token', data.token);
                    document.getElementById('auth-error').classList.add('hidden');
                    window.location.href = 'index.html'; // Redirect to home on success
                } else {
                    throw new Error(data.message || 'Login failed');
                }
            } catch (err) {
                document.getElementById('auth-error').classList.remove('hidden');
                document.getElementById('auth-error-text').textContent = err.message || 'Backend is not running. Please start the server.';
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        });
    }
}

// Data Handling
const STATIC_PROJECTS = [
    {
        _id: '1',
        title: 'EdTech Learning Portal',
        category: 'Web Development',
        description: 'A comprehensive Learning Management System (LMS) for a leading university, featuring video streaming, quizzes, and student analytics.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'Node.js', 'MongoDB'],
        projectUrl: '#'
    },
    {
        _id: '2',
        title: 'SecurePay Wallet',
        category: 'Mobile App',
        description: 'A secure mobile wallet application allowing users to transfer funds, pay bills, and manage their finances on the go.',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['Flutter', 'Firebase', 'Stripe'],
        projectUrl: '#'
    },
    {
        _id: '3',
        title: 'FashionHub Store',
        category: 'E-Commerce',
        description: 'A modern e-commerce platform with real-time inventory management, AI-powered recommendations, and seamless checkout.',
        imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['Shopify', 'Liquid', 'JS'],
        projectUrl: '#'
    },
    {
        _id: '4',
        title: 'Hospital Management System',
        category: 'Internal System',
        description: 'An integrated system for managing patient records, appointments, and billing for a local hospital network.',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['Laravel', 'MySQL', 'Vue.js'],
        projectUrl: '#'
    }
];

// 1. Logic for Projects Page
async function renderProjectsPage() {
    const projectGrid = document.querySelector('.grid');
    if (!projectGrid) return;

    projectGrid.innerHTML = '<div class="col-span-3 text-center py-20"><i class="fas fa-spinner fa-spin text-4xl text-brand-600"></i><p class="mt-4 text-gray-500">Loading projects...</p></div>';

    let projects = [];
    try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) throw new Error('API not available');
        projects = await response.json();
    } catch (err) {
        console.log('Using static project data');
        projects = STATIC_PROJECTS;
    }

    projectGrid.innerHTML = '';
    if (projects.length === 0) {
        projectGrid.innerHTML = '<p class="col-span-3 text-center text-gray-500">No projects found.</p>';
        return;
    }

    projects.forEach(project => {
        const projectId = project._id || Math.random().toString(36).substr(2, 9);
        const projectCard = `
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div class="relative overflow-hidden h-48">
                <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="case-study.html?id=${projectId}" class="text-white font-bold text-lg border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">View Case Study</a>
                </div>
            </div>
            <div class="p-6">
                <span class="text-xs font-bold text-brand-600 uppercase tracking-wider">${project.category}</span>
                <h3 class="text-xl font-bold text-gray-900 mt-2 mb-2">${project.title}</h3>
                <p class="text-gray-500 text-sm mb-4 line-clamp-3">
                    ${project.description}
                </p>
                <div class="flex flex-wrap gap-2">
                        ${project.tags.map(tag => `<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        `;
        projectGrid.innerHTML += projectCard;
    });
}

// 2. Logic for Case Study Page
async function renderCaseStudyPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        document.getElementById('cs-title').textContent = 'Project Not Found';
        return;
    }

    let project = null;

    try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) throw new Error('API Off');
        const projects = await response.json();
        project = projects.find(p => p._id === id);
    } catch (err) {
        project = STATIC_PROJECTS.find(p => p._id === id);
    }

    if (!project) {
        document.getElementById('cs-title').textContent = 'Project Not Found';
        return;
    }

    document.title = `${project.title} - Case Study`;
    document.getElementById('cs-title').textContent = project.title;
    document.getElementById('cs-category').textContent = project.category;
    document.getElementById('cs-description').textContent = project.description;

    document.getElementById('cs-hero-bg').src = project.imageUrl;
    document.getElementById('cs-showcase-img').src = project.imageUrl;

    const tagsContainer = document.getElementById('cs-tags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">${tag}</span>`).join('');

    const liveLink = document.getElementById('cs-live-link');
    if (project.projectUrl && project.projectUrl !== '#' && liveLink) {
        liveLink.href = project.projectUrl;
    } else if (liveLink) {
        liveLink.classList.add('hidden');
    }
}

// Run on load
document.addEventListener('DOMContentLoaded', injectComponents);
