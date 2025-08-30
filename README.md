# Illia Bilous - DevOps Engineer Portfolio

![Portfolio Preview](assets/profile.jpg)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Design System](#design-system)
6. [Interactive Components](#interactive-components)
7. [Accessibility Features](#accessibility-features)
8. [Performance Optimizations](#performance-optimizations)
9. [Browser Compatibility](#browser-compatibility)
10. [Installation and Setup](#installation-and-setup)
11. [Customization Guide](#customization-guide)
12. [Deployment](#deployment)
13. [Contributing](#contributing)
14. [License](#license)
15. [Credits and Acknowledgments](#credits-and-acknowledgments)
16. [Contact Information](#contact-information)

## Project Overview

This repository contains the source code for Illia Bilous's professional portfolio website. The site showcases Illia's skills, experience, and projects as a DevOps Engineer, providing potential employers and clients with a comprehensive overview of his capabilities and accomplishments.

The portfolio is designed to be visually appealing, user-friendly, and accessible across all devices. It features a modern, responsive design with both light and dark themes, interactive elements, and smooth animations to create an engaging user experience.

### Purpose and Goals

The primary goals of this portfolio website are:

1. **Professional Presentation**: Showcase Illia's professional identity and brand as a DevOps Engineer
2. **Skills Demonstration**: Highlight technical skills and proficiency levels in various technologies
3. **Project Showcase**: Present completed projects with detailed information and technologies used
4. **Contact Facilitation**: Provide easy ways for potential employers or clients to get in touch
5. **Resume Access**: Offer downloadable resume and online preview options

The website serves as a digital business card and comprehensive portfolio, demonstrating not only Illia's technical expertise in DevOps but also his attention to detail, design sensibilities, and commitment to creating high-quality, user-friendly experiences.

## Features

### Responsive Design
- Mobile-first approach ensuring optimal viewing on all devices
- Fluid layouts that adapt to different screen sizes
- Responsive navigation with collapsible menu on smaller screens
- Optimized images and content for various viewport sizes

### Theme System
- Light and dark theme options with seamless switching
- System preference detection for automatic theme selection
- Persistent theme selection using localStorage
- WCAG AA compliant color contrast in both themes

### Interactive Elements
- Animated particle background in the hero section
- Filterable skills section with categorized skills
- Animated progress bars showing proficiency levels
- Filterable projects section with detailed modal views
- Interactive form with validation and feedback
- Smooth scrolling navigation
- Scroll progress indicator
- Back-to-top button

### Sections
1. **Hero Section**: Eye-catching introduction with animated particles background
2. **About Section**: Professional summary and key accomplishments with animated text reveal
3. **Skills Section**: Categorized skills with filterable tabs and animated progress bars
4. **Projects Section**: Showcase of key projects with filterable categories and detailed modal views
5. **Resume Section**: Downloadable resume with preview option
6. **Contact Section**: Contact form with validation and Telegram bot integration
7. **Footer**: Copyright information and social media links

### Accessibility Features
- Semantic HTML structure
- ARIA roles and labels
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Reduced motion support
- Color contrast compliance

### Performance Optimizations
- Optimized asset loading
- Responsive image loading
- Efficient animations using CSS transitions and transforms
- Conditional loading of particles based on device capability

## Technologies Used

### Frontend
- **HTML5**: Semantic markup for structure
- **CSS3**: Custom styling with variables for theming
- **JavaScript (ES6+)**: Interactive functionality
- **jQuery**: DOM manipulation and animations
- **Bootstrap 5**: Responsive grid system and components
- **Particles.js**: Interactive background effects
- **GSAP**: Advanced animations with ScrollTrigger
- **Intersection Observer API**: Scroll-based animations

### Icons and Fonts
- **Bootstrap Icons**: UI icons
- **Devicon**: Technology logos for skills section
- **Google Fonts**: Typography (via CDN)

### Development Tools
- **Git**: Version control
- **GitHub**: Repository hosting
- **VS Code**: Code editing
- **Chrome DevTools**: Testing and debugging

### Integrations
- **Telegram Bot API**: Contact form submission handling

## Project Structure

The project follows a clean, organized structure for easy maintenance and scalability:

```
/
├── assets/                  # Static assets
│   ├── js/                  # Third-party JavaScript libraries
│   │   ├── particles.json   # Particles.js configuration
│   │   └── particles.min.js # Particles.js library
│   ├── logos/               # SVG logos for skills
│   ├── profile.jpg          # Profile image
│   ├── project1.jpg         # Project image 1
│   ├── project2.jpg         # Project image 2
│   ├── project3.jpg         # Project image 3
│   └── resume.pdf           # Downloadable resume
├── css/
│   └── styles.css           # Main stylesheet with theme variables
├── js/
│   └── scripts.js           # Custom JavaScript functionality
├── index.html               # Main HTML file
├── style-guide.md           # Documentation of styles and components
└── README.md                # Project documentation
```

### Key Files and Their Purpose

- **index.html**: The main HTML file that contains the structure of the website
- **css/styles.css**: The main stylesheet that contains all the styling for the website, including theme variables
- **js/scripts.js**: The main JavaScript file that contains all the interactive functionality
- **assets/js/particles.json**: Configuration file for the particles.js background
- **assets/js/particles.min.js**: Minified particles.js library
- **style-guide.md**: Documentation of the design system, including colors, typography, and components

## Design System

The portfolio uses a comprehensive design system to ensure consistency and accessibility throughout the website. The design system is implemented using CSS variables, making it easy to maintain and update.

### Color Palettes

#### Light Theme
- **Primary Color**: `#0056b3` - Used for buttons, links, and accents
- **Primary Hover**: `#004494` - Used for hover states
- **Text Color**: `#333333` - Main text color (WCAG AA compliant)
- **Heading Color**: `#004494` - Used for headings
- **Background Color**: `#ffffff` - Main background
- **Section Background**: `#f8f9fa` - Used for alternating sections
- **Card Background**: `#ffffff` - Used for cards
- **Border Color**: `#c8cfd6` - Used for borders and dividers

#### Dark Theme
- **Primary Color**: `#4cc9f0` - Used for buttons, links, and accents
- **Primary Hover**: `#7ad7f5` - Used for hover states
- **Text Color**: `#f0f0f0` - Main text color (WCAG AA compliant)
- **Heading Color**: `#4cc9f0` - Used for headings
- **Background Color**: `#121212` - Main background
- **Section Background**: `#1a1a1a` - Used for alternating sections
- **Card Background**: `#1f1f1f` - Used for cards
- **Border Color**: `#3a3a3a` - Used for borders and dividers

#### Accent Colors
Light Theme:
- **Accent 1 (Purple)**: `#6200ee`
- **Accent 2 (Pink)**: `#c30052`
- **Accent 3 (Light Blue)**: `#0077cc`

Dark Theme:
- **Accent 1 (Purple)**: `#c084fc`
- **Accent 2 (Pink)**: `#fb7185`
- **Accent 3 (Light Blue)**: `#38bdf8`

All colors have been selected to meet WCAG AA standards for contrast, ensuring accessibility for all users.

### Typography

#### Font Family
- Primary Font: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

#### Font Sizes
- Base: `1rem` (16px)
- Large: `1.125rem` (18px)
- Small: `0.875rem` (14px)
- Headings:
  - H1: `3rem` (48px)
  - H2: `2.5rem` (40px)
  - H3: `2rem` (32px)
  - H4: `1.5rem` (24px)
  - H5: `1.25rem` (20px)
  - H6: `1rem` (16px)

#### Font Weights
- Regular: 400
- Bold: 700

#### Line Heights
- Body: 1.6
- Headings: 1.2

### Components

#### Buttons
- **Primary Button**: Solid background with primary color
- **Outline Button**: Transparent with primary color border
- **Hover Effects**: Scale and elevation change with shadow
- **Focus States**: Visible outline for keyboard navigation

#### Cards
- **Default**: White background with subtle shadow
- **Hover**: Slight elevation increase and scale
- **Dark Theme**: Darker background with subtle gradient overlay

#### Form Elements
- **Inputs**: Clean borders with focus effects
- **Labels**: Bold with high contrast
- **Validation**: Clear error states with animations
- **Submit Button**: Gradient background with loading state

#### Navigation
- **Links**: Underline animation on hover
- **Active State**: Highlighted with primary color
- **Mobile**: Collapsible with hamburger menu

## Interactive Components

The portfolio includes several interactive components that enhance the user experience and showcase Illia's skills and projects.

### Theme Toggle

The theme toggle allows users to switch between light and dark themes. The theme preference is stored in localStorage and persists across page reloads.

```javascript
function initTheme() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDarkScheme ? 'dark' : 'light';
    const currentTheme = savedTheme || defaultTheme;

    // Apply theme
    applyTheme(currentTheme);

    // Theme toggle button click handler
    $themeToggle.on('click', function() {
        const newTheme = $body.attr('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}
```

### Particles Background

The hero section features an interactive particles background created using particles.js. The particles are configured differently for light and dark themes, and their density and behavior are adjusted based on the device's screen size.

```javascript
function initParticles(theme) {
    if ($('#particles-js').length) {
        // Load particles configuration
        particlesJS.load('particles-js', 'assets/js/particles.json', function() {
            // Adjust particle colors based on theme
            if (window.pJSDom && window.pJSDom.length) {
                const pJS = window.pJSDom[0].pJS;

                // Set different colors for light theme
                if (theme === 'light') {
                    pJS.particles.color.value = ['rgba(0, 123, 255, 0.2)', 'rgba(200, 200, 200, 0.3)'];
                    pJS.particles.line_linked.color = 'rgba(0, 123, 255, 0.2)';
                    pJS.particles.line_linked.opacity = 0.5;
                    pJS.particles.opacity.value = 0.8;
                    pJS.particles.opacity.random = true;
                }

                // Update particles
                pJS.fn.particlesRefresh();
            }
        });
    }
}
```

### Skill Filtering

The skills section allows users to filter skills by category. The filtering is implemented using data attributes and jQuery.

```javascript
function initSkillFiltering() {
    $filterBtns.on('click', function() {
        const filter = $(this).data('filter');

        // Update active button
        $filterBtns.removeClass('active');
        $(this).addClass('active');

        // Filter skills
        if (filter === 'all') {
            $skillItems.fadeIn(300);
        } else {
            $skillItems.hide();
            $skillItems.filter('[data-category="' + filter + '"]').fadeIn(300);
        }
    });
}
```

### Progress Bars

The skills section features animated progress bars that show Illia's proficiency level in each skill. The progress bars are animated when they enter the viewport using the Intersection Observer API.

```javascript
function initProgressBars() {
    // Set initial state for all progress bars
    $('.progress-bar').addClass('init');

    // Create an Intersection Observer to detect when skill cards enter the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const $skillCard = $(entry.target);
                animateSkillProgress($skillCard);

                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all skill cards
    $('.skill-card').each(function() {
        observer.observe(this);
    });
}
```

### Project Filtering

Similar to the skills section, the projects section allows users to filter projects by category. The filtering is implemented using data attributes and jQuery.

```javascript
function initProjectFiltering() {
    $projectFilters.on('click', function() {
        const filter = $(this).data('filter');

        // Update active button
        $projectFilters.removeClass('active');
        $(this).addClass('active');

        // Filter projects
        if (filter === 'all') {
            $projectItems.fadeIn(300);
        } else {
            $projectItems.hide();
            $projectItems.each(function() {
                const categories = $(this).data('category').split(',');
                if (categories.includes(filter)) {
                    $(this).fadeIn(300);
                }
            });
        }
    });
}
```

### Contact Form with Telegram Integration

The contact form includes client-side validation and integration with the Telegram Bot API to send messages directly to Illia's Telegram account.

```javascript
function sendToTelegramBot(name, email, subject, message) {
    return new Promise((resolve, reject) => {
        // Replace with your actual bot token and chat ID
        const botToken = 'YOUR_TELEGRAM_BOT_TOKEN';
        const chatId = 'YOUR_CHAT_ID';

        // Format the message
        const formattedMessage = `
📨 New Contact Form Message:
👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message: ${message}
        `.trim();

        // Send the message to Telegram
        $.ajax({
            url: `https://api.telegram.org/bot${botToken}/sendMessage`,
            method: 'POST',
            data: {
                chat_id: chatId,
                text: formattedMessage,
                parse_mode: 'HTML'
            },
            success: function(response) {
                resolve(response);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}
```

### Scroll Animations

The website features various scroll-triggered animations that enhance the user experience. These animations are implemented using the Intersection Observer API and GSAP.

```javascript
function initScrollAnimations() {
    // Define animation mappings for different element types
    const animationMappings = {
        'section-heading': 'animate__fadeInDown',
        'divider': 'animate__fadeIn',
        'skill-card': 'animate__fadeInUp',
        'project-card': 'animate__fadeInUp',
        'profile-img-container': 'animate__fadeInRight',
        'contact-form': 'animate__fadeIn'
    };

    // Add animation classes to section elements
    $('section').each(function(index) {
        const $section = $(this);
        
        // Create an Intersection Observer for the section
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a class to indicate the section is in view
                    $section.addClass('section-in-view');

                    // Unobserve after animation is triggered
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        // Observe the section
        sectionObserver.observe(this);
    });
}
```

### About Text Animation

The About section features a sophisticated text reveal animation using GSAP and ScrollTrigger. The animation reveals each paragraph and list item with a mask effect when the section enters the viewport.

```javascript
function initAboutTextAnimation() {
    // Check if the about section exists
    if (!$('#aboutTextContainer').length) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // If user prefers reduced motion, make all text visible without animation
        $('.about-text-wrapper').css({
            'opacity': 1,
            'transform': 'none',
            'clip-path': 'none'
        });
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Get all text wrapper elements
    const textWrappers = $('.about-text-wrapper');

    // Create a GSAP timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#aboutTextContainer',
            start: 'top 70%',
            toggleActions: 'play none none none',
            markers: false
        }
    });

    // Add mask reveal effect to each text wrapper
    textWrappers.each(function(index) {
        const wrapper = $(this);

        // Set initial state with clip-path
        gsap.set(wrapper, {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            opacity: 0,
            y: 20
        });

        // Add to timeline with staggered delay
        tl.to(wrapper, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.1 * index,
            onComplete: function() {
                // Remove clip-path after animation to prevent rendering issues
                gsap.set(wrapper, { clearProps: 'clipPath' });
            }
        }, index * 0.1);
    });
}
```

## Accessibility Features

The portfolio is designed to be accessible to all users, including those with disabilities. The following accessibility features have been implemented:

### Semantic HTML
- Proper use of HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Logical document structure
- Appropriate heading hierarchy

### ARIA Roles and Labels
- ARIA roles for navigation, regions, and interactive elements
- ARIA labels for elements without visible text
- ARIA live regions for dynamic content

### Keyboard Navigation
- All interactive elements are focusable
- Focus states are clearly visible
- Skip to content link for keyboard users
- Logical tab order

### Screen Reader Compatibility
- Alt text for images
- ARIA labels for icons
- Descriptive link text
- Form labels and error messages

### Color Contrast
- All text meets WCAG AA standards for contrast
- Form elements have sufficient contrast against backgrounds
- Focus states are clearly visible

### Reduced Motion
- Respects user's preference with `prefers-reduced-motion` media query
- Animations are disabled for users who prefer reduced motion

## Performance Optimizations

The portfolio is optimized for performance to ensure a smooth user experience across all devices and network conditions.

### Asset Optimization
- Minified CSS and JavaScript
- Optimized images
- Lazy loading of images
- Efficient use of web fonts

### Code Optimization
- Efficient CSS selectors
- Optimized JavaScript code
- Debounced and throttled event handlers
- Efficient DOM manipulation

### Rendering Optimization
- CSS transitions and transforms for smooth animations
- Hardware-accelerated animations
- Reduced layout thrashing
- Efficient use of requestAnimationFrame

### Network Optimization
- Reduced number of HTTP requests
- Efficient use of caching
- Conditional loading of resources based on device capability

## Browser Compatibility

The portfolio is designed to work across all modern browsers and devices. It has been tested and confirmed to work on:

### Desktop Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Browsers
- Chrome for Android
- Safari for iOS
- Samsung Internet

### Devices
- Desktop computers
- Laptops
- Tablets
- Smartphones

## Installation and Setup

To set up the portfolio locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open the project in your preferred code editor.

3. To view the website, simply open the `index.html` file in a web browser.

### Setting Up Telegram Bot Integration

To enable the contact form to send messages to your Telegram account, you need to:

1. Create a Telegram bot using [BotFather](https://t.me/botfather).
2. Get your bot token from BotFather.
3. Get your chat ID (you can use the [userinfobot](https://t.me/userinfobot)).
4. Replace the placeholder values in the `sendToTelegramBot` function in `js/scripts.js`:

```javascript
// Replace with your actual bot token and chat ID
const botToken = 'YOUR_TELEGRAM_BOT_TOKEN';
const chatId = 'YOUR_CHAT_ID';
```

## Customization Guide

The portfolio is designed to be easily customizable to fit your personal brand and preferences.

### Changing Personal Information

1. Open `index.html` and update the following sections:
   - Name and title in the hero section
   - About Me text
   - Skills and proficiency levels
   - Projects and their descriptions
   - Resume file
   - Contact information
   - Social media links

### Customizing the Theme

1. Open `css/styles.css` and modify the CSS variables in the `:root` selector for the light theme and `[data-theme="dark"]` selector for the dark theme.

```css
:root {
    /* Light Theme Variables */
    --primary-color: #0056b3; /* Change to your preferred primary color */
    /* ... other variables ... */
}

[data-theme="dark"] {
    /* Dark Theme Variables */
    --primary-color: #4cc9f0; /* Change to your preferred primary color for dark theme */
    /* ... other variables ... */
}
```

### Adding New Skills

1. Open `index.html` and locate the Skills section.
2. Add a new skill item following the existing pattern:

```html
<div class="col-md-4 mb-4 skill-item" data-category="your-category">
    <div class="card h-100 skill-card">
        <div class="card-body text-center">
            <i class="devicon-yourskill-plain colored fs-1 mb-3"></i>
            <h4 class="card-title">Your Skill</h4>
            <div class="skill-level" tabindex="0" aria-label="Your Skill skill level: XX percent">
                <div class="skill-percentage">XX%</div>
                <div class="progress">
                    <div class="skill-bar__track">
                        <div class="skill-bar__fill progress-bar" role="progressbar" style="width: XX%;" aria-valuenow="XX" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="skill-tooltip">Your Skill: XX%</div>
            </div>
        </div>
    </div>
</div>
```

3. If you're adding a new category, also add a new filter button:

```html
<button class="btn btn-outline-primary m-2 filter-btn" data-filter="your-category">Your Category</button>
```

### Adding New Projects

1. Open `index.html` and locate the Projects section.
2. Add a new project item following the existing pattern:

```html
<div class="col-lg-4 col-md-6 mb-4 project-item" data-category="your-categories">
    <div class="card h-100 project-card">
        <img src="assets/your-project-image.jpg" class="card-img-top" alt="Your Project">
        <div class="card-body">
            <h4 class="card-title">Your Project</h4>
            <p class="card-text">Your project description.</p>
            <p class="tech-stack">
                <span class="badge bg-primary">Technology 1</span>
                <span class="badge bg-primary">Technology 2</span>
                <span class="badge bg-primary">Technology 3</span>
            </p>
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#yourProjectModal">Details</a>
            <a href="https://github.com/your-repo" target="_blank" class="btn btn-outline-secondary">GitHub</a>
        </div>
    </div>
</div>
```

3. Also add a corresponding modal for the project details:

```html
<div class="modal fade" id="yourProjectModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Your Project</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="assets/your-project-image.jpg" class="img-fluid mb-3" alt="Your Project">
                <h5>Project Overview</h5>
                <p>Detailed project description.</p>
                <h5>Technologies Used</h5>
                <p>
                    <span class="badge bg-primary">Technology 1</span>
                    <span class="badge bg-primary">Technology 2</span>
                    <span class="badge bg-primary">Technology 3</span>
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="https://github.com/your-repo" target="_blank" class="btn btn-primary">View on GitHub</a>
            </div>
        </div>
    </div>
</div>
```

## Deployment

The portfolio can be deployed to various hosting platforms. Here are instructions for some common options:

### GitHub Pages

1. Push your code to a GitHub repository.
2. Go to the repository settings.
3. Scroll down to the GitHub Pages section.
4. Select the branch you want to deploy (usually `main` or `master`).
5. Click Save.
6. Your site will be available at `https://yourusername.github.io/repository-name/`.

### Netlify

1. Sign up for a Netlify account.
2. Click "New site from Git".
3. Connect to your GitHub repository.
4. Configure the build settings (not needed for this static site).
5. Click "Deploy site".
6. Your site will be available at a Netlify subdomain, which you can customize.

### Vercel

1. Sign up for a Vercel account.
2. Click "Import Project".
3. Connect to your GitHub repository.
4. Configure the build settings (not needed for this static site).
5. Click "Deploy".
6. Your site will be available at a Vercel subdomain, which you can customize.

## Contributing

Contributions to improve the portfolio are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Test your changes thoroughly.
5. Submit a pull request with a clear description of your changes.

### Code Style Guidelines

- Use consistent indentation (2 or 4 spaces).
- Follow the existing naming conventions.
- Write clear, descriptive comments.
- Keep functions small and focused on a single task.
- Use semantic HTML elements.
- Follow accessibility best practices.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits and Acknowledgments

- [Bootstrap](https://getbootstrap.com/) - Frontend framework
- [jQuery](https://jquery.com/) - JavaScript library
- [Particles.js](https://vincentgarreau.com/particles.js/) - Particle background
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Devicon](https://devicon.dev/) - Technology icons
- [Bootstrap Icons](https://icons.getbootstrap.com/) - UI icons

## Contact Information

- **Email**: [illiaa.bilous@gmail.com](mailto:illiaa.bilous@gmail.com)
- **LinkedIn**: [Illia Bilous](https://www.linkedin.com/in/illia-bilous-32548a212)
- **GitHub**: [ilya776](https://github.com/ilya776)

---