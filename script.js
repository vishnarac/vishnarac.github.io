// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        date: 'Mar 15, 2026',
        title: 'Building High-Performance Microservices with Go and gRPC',
        excerpt: 'A comprehensive guide to building scalable microservices using Golang and gRPC. Learn about protocol buffers, streaming, and implementing efficient service-to-service communication.',
        tags: ['golang', 'grpc', 'microservices', 'backend'],
        url: 'blog/grpc-microservices.html'
    },
    {
        id: 2,
        date: 'Jan 8, 2026',
        title: 'Feature Engineering Techniques for Machine Learning',
        excerpt: 'Deep dive into advanced feature engineering methods that can significantly improve your ML model performance. Includes practical examples with scikit-learn and pandas.',
        tags: ['data-science', 'machine-learning', 'python', 'feature-engineering'],
        url: 'blog/feature-engineering-ml.html'
    },
    {
        id: 3,
        date: 'Nov 22, 2025',
        title: 'Infrastructure as Code with Terraform: Best Practices',
        excerpt: 'Learn how to manage cloud infrastructure efficiently using Terraform. Covers modules, state management, and multi-environment deployments on AWS and Azure.',
        tags: ['terraform', 'iac', 'devops', 'cloud'],
        url: 'blog/terraform-iac.html'
    },
    {
        id: 4,
        date: 'Sep 10, 2025',
        title: 'Goroutine Best Practices: Avoiding Common Pitfalls',
        excerpt: 'Master concurrent programming in Go. Learn about goroutine leaks, proper channel usage, context cancellation, and patterns for building robust concurrent applications.',
        tags: ['golang', 'concurrency', 'goroutines', 'backend'],
        url: 'blog/goroutine-best-practices.html'
    },
    {
        id: 5,
        date: 'Jul 3, 2025',
        title: 'Time Series Forecasting with Prophet and LSTM',
        excerpt: 'Comparing Facebook Prophet and LSTM neural networks for time series prediction. Real-world case study with stock price and sales forecasting examples.',
        tags: ['data-science', 'time-series', 'deep-learning', 'prophet'],
        url: 'blog/time-series-forecasting.html'
    },
    {
        id: 6,
        date: 'Apr 18, 2025',
        title: 'Kubernetes Deployment Strategies Explained',
        excerpt: 'Understanding rolling updates, blue-green deployments, and canary releases in Kubernetes. Includes practical YAML configurations and best practices.',
        tags: ['kubernetes', 'devops', 'deployment', 'containers'],
        url: 'blog/kubernetes-deployment.html'
    },
    {
        id: 7,
        date: 'Feb 5, 2025',
        title: 'Building RESTful APIs in Go: Design Patterns and Best Practices',
        excerpt: 'Complete guide to designing production-ready REST APIs with Go. Covers middleware, error handling, request validation, and structuring large Go applications.',
        tags: ['golang', 'rest-api', 'backend', 'design-patterns'],
        url: 'blog/go-rest-api.html'
    },
    {
        id: 8,
        date: 'Nov 28, 2024',
        title: 'Natural Language Processing with Transformers',
        excerpt: 'Introduction to transformer models for NLP tasks. Implementing BERT and GPT for text classification, sentiment analysis, and question answering systems.',
        tags: ['data-science', 'nlp', 'transformers', 'deep-learning'],
        url: 'blog/nlp-transformers.html'
    },
    {
        id: 9,
        date: 'Aug 14, 2024',
        title: 'CI/CD Pipeline with GitHub Actions and AWS',
        excerpt: 'Building automated deployment pipelines using GitHub Actions. Covers testing, building Docker images, and deploying to AWS ECS with zero-downtime deployments.',
        tags: ['devops', 'ci-cd', 'github-actions', 'aws'],
        url: 'blog/cicd-github-actions.html'
    },
    {
        id: 10,
        date: 'May 20, 2024',
        title: 'Exploratory Data Analysis: A Practical Guide',
        excerpt: 'Step-by-step approach to EDA using Python. Learn data cleaning, visualization techniques with matplotlib and seaborn, and statistical analysis for better insights.',
        tags: ['data-science', 'python', 'eda', 'visualization'],
        url: 'blog/exploratory-data-analysis.html'
    }
];

// Render Blog Posts
function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';

    if (posts.length === 0) {
        blogGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1;">No posts found matching your search.</p>';
        return;
    }

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <div class="blog-post-date">${post.date}</div>
            <div class="blog-post-tags">
                ${post.tags.map(tag => `<span class="blog-tag">#${tag}</span>`).join('')}
            </div>
            <h3 class="blog-post-title">${post.title}</h3>
            <p class="blog-post-excerpt">${post.excerpt}</p>
        `;
        blogGrid.appendChild(postElement);
    });
}

// Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        const filteredPosts = blogPosts.filter(post => {
            return post.title.toLowerCase().includes(searchTerm) ||
                   post.excerpt.toLowerCase().includes(searchTerm) ||
                   post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        });
        
        renderBlogPosts(filteredPosts);
    });
}

// Smooth Scroll for Navigation
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get target section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update Active Nav Link on Scroll
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Theme Toggle (Optional Enhancement)
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        // This is a placeholder for theme switching functionality
        // You can implement light/dark theme toggle here
        console.log('Theme toggle clicked');
    });
}

// Intersection Observer for Animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize Everything
function init() {
    renderBlogPosts(blogPosts);
    setupSearch();
    setupSmoothScroll();
    setupScrollSpy();
    setupThemeToggle();
    setupAnimations();
    
    console.log('Blog site initialized successfully!');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add some interactivity to blog posts
document.addEventListener('click', (e) => {
    const blogPost = e.target.closest('.blog-post');
    if (blogPost) {
        const postTitle = blogPost.querySelector('.blog-post-title').textContent;
        const post = blogPosts.find(p => p.title === postTitle);
        
        if (post && post.url && post.url !== '#') {
            window.location.href = post.url;
        } else {
            console.log('Blog post coming soon:', postTitle);
        }
    }
});

// Made with Bob
