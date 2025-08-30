$(document).ready(function() {
    // Initialize variables
    const $window = $(window);
    const $body = $('body');
    const $navbar = $('#navbar');
    const $themeToggle = $('#theme-toggle');
    const $scrollToTop = $('#scrollToTop');
    const $contactForm = $('#contactForm');
    const $formSuccess = $('#formSuccess');
    const $formError = $('#formError');
    const $filterBtns = $('.filter-btn');
    const $projectFilters = $('.project-filter');
    const $skillItems = $('.skill-item');
    const $projectItems = $('.project-item');
    const $heroTitle = $('.hero-section h2');

    // Performance optimization utilities
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    };

    // Initialize all components
    initSmoothScrolling();
    initTheme();
    initScrollToTop();
    initFormValidation();
    initSkillFiltering();
    initProjectFiltering();
    initNavbarActiveState();
    initProgressBars();
    initTypingEffect();
    initScrollAnimations();
    initAboutTextAnimation();
    initLazyLoading();
    initPageTransitions();
    // REMOVED: initCustomCursor() - Custom cursor has been deprecated

    /**
     * Initialize particles.js background
     * @param {string} theme - 'light' or 'dark'
     */
    function initParticles(theme) {
        if ($('#particles-js').length) {
            // Clear existing particles if any
            if (window.pJSDom && window.pJSDom.length) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window['pJSDom'] = [];
            }

            // Load particles configuration
            particlesJS.load('particles-js', 'assets/js/particles.json', function() {
                console.log('Particles.js loaded successfully');

                // Adjust particle colors based on theme
                if (window.pJSDom && window.pJSDom.length) {
                    const pJS = window.pJSDom[0].pJS;

                    // Set different colors for light theme - Updated for better visibility
                    if (theme === 'light') {
                        // Use light pastel blue and light gray for better visibility on white background
                        pJS.particles.color.value = ['rgba(0, 123, 255, 0.2)', 'rgba(200, 200, 200, 0.3)'];
                        pJS.particles.line_linked.color = 'rgba(0, 123, 255, 0.2)';
                        pJS.particles.line_linked.opacity = 0.5; // Increased opacity for better visibility
                        pJS.particles.opacity.value = 0.8; // Increased particle opacity
                        pJS.particles.opacity.random = true; // Random opacity for varied appearance
                    }

                    // Update particles
                    pJS.fn.particlesRefresh();
                }

                // Add resize handler for responsive behavior
                const updateParticlesResponsive = () => {
                    if (window.pJSDom && window.pJSDom.length) {
                        const pJS = window.pJSDom[0].pJS;
                        const width = window.innerWidth;

                        if (width <= 768) {
                            // Mobile settings
                            pJS.particles.number.value = 40;
                            pJS.particles.line_linked.enable = false;
                            pJS.particles.move.speed = 1;
                            pJS.interactivity.events.onhover.enable = false;
                        } else {
                            // Desktop settings
                            pJS.particles.number.value = 80;
                            pJS.particles.line_linked.enable = true;
                            pJS.particles.move.speed = 2;
                            pJS.interactivity.events.onhover.enable = true;
                        }

                        // Update particles
                        pJS.fn.particlesRefresh();
                    }
                };

                // Initial check
                updateParticlesResponsive();

                // Add resize listener
                $(window).on('resize', updateParticlesResponsive);
            });
        }
    }

    /**
     * Initialize smooth scrolling for navigation links
     */
    function initSmoothScrolling() {
        $('a.nav-link, a.scroll-btn').on('click', function(e) {
            if (this.hash !== '') {
                e.preventDefault();
                const hash = this.hash;
                const offset = $navbar.outerHeight();

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - offset
                }, 800, function() {
                    window.history.pushState(null, null, hash);
                });
            }
        });
    }

    /**
     * Initialize theme toggle (light/dark mode)
     */
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

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                applyTheme(newTheme);
            }
        });

        /**
         * Apply theme to the document
         * @param {string} theme - 'light' or 'dark'
         */
        function applyTheme(theme) {
            $body.addClass('theme-transition');
            $body.attr('data-theme', theme);

            // Update toggle button icon
            if (theme === 'dark') {
                $themeToggle.html('<i class="bi bi-sun-fill"></i>');
                $themeToggle.attr('aria-label', 'Switch to light mode');
            } else {
                $themeToggle.html('<i class="bi bi-moon-fill"></i>');
                $themeToggle.attr('aria-label', 'Switch to dark mode');
            }

            // Initialize particles with the current theme
            if ($('#particles-js').length) {
                // Initialize new particles with a slight delay to allow CSS transitions to complete
                setTimeout(() => {
                    initParticles(theme);
                }, 300);
            }

            // Remove transition class after animation completes
            setTimeout(function() {
                $body.removeClass('theme-transition');
            }, 500);
        }
    }

    /**
     * Initialize scroll to top button and scroll progress indicator
     */
    function initScrollToTop() {
        const $scrollProgress = $('#scroll-progress');
        const $document = $(document);

        // Optimized scroll handler with throttling
        const handleScroll = throttle(function() {
            const scrollTop = $window.scrollTop();

            // Handle scroll to top button visibility
            if (scrollTop > 300) {
                $scrollToTop.addClass('visible');
            } else {
                $scrollToTop.removeClass('visible');
            }

            // Update scroll progress indicator
            const docHeight = $document.height() - $window.height();
            const scrollPercent = (scrollTop / docHeight) * 100;
            $scrollProgress.css('width', scrollPercent + '%');
        }, 16); // ~60fps

        $window.on('scroll', handleScroll);

        $scrollToTop.on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }

    /**
     * Initialize lazy loading for images
     */
    function initLazyLoading() {
        // Check if Intersection Observer is supported
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');

                        if (src) {
                            // Add skeleton loading class
                            img.classList.add('skeleton');

                            // Create a new image to preload
                            const newImg = new Image();
                            newImg.onload = () => {
                                img.src = src;
                                img.classList.remove('skeleton');
                                img.classList.add('loaded');
                                img.removeAttribute('data-src');
                            };
                            newImg.onerror = () => {
                                img.classList.remove('skeleton');
                                img.classList.add('error');
                            };
                            newImg.src = src;
                        }

                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            // Observe all images with data-src attribute
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without Intersection Observer
            $('img[data-src]').each(function() {
                const $img = $(this);
                const src = $img.attr('data-src');
                if (src) {
                    $img.attr('src', src).removeAttr('data-src');
                }
            });
        }
    }

    /**
     * Initialize page transitions for smooth loading
     */
    function initPageTransitions() {
        // Add page transition class to main sections
        $('section, .modal').addClass('page-transition');

        // Trigger loaded state after a short delay
        setTimeout(() => {
            $('.page-transition').addClass('loaded');
        }, 100);

        // Add intersection observer for section animations
        if ('IntersectionObserver' in window) {
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $(entry.target).addClass('loaded');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe all sections
            document.querySelectorAll('section').forEach(section => {
                sectionObserver.observe(section);
            });
        }
    }

    /**
     * Send message to Telegram bot
     * @param {string} name - Sender's name
     * @param {string} email - Sender's email
     * @param {string} subject - Message subject
     * @param {string} message - Message content
     * @returns {Promise} - Promise that resolves when the message is sent
     */
    function sendToTelegramBot(name, email, subject, message) {
        return new Promise((resolve, reject) => {
            // Replace with your actual bot token and chat ID
            const botToken = '7292760537:AAGGaaCVFxFj85SESAwqSK4Nci5pcQ65iGo';
            const chatId = '671586757';

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
                    console.log('Message sent to Telegram successfully:', response);
                    resolve(response);
                },
                error: function(error) {
                    console.error('Error sending message to Telegram:', error);
                    reject(error);
                }
            });
        });
    }

    /**
     * Initialize form validation and submission with enhanced animations
     */
    function initFormValidation() {
        // Add input field animations
        $('.contact-form .form-control').on('focus', function() {
            $(this).parent().addClass('input-focused');
        }).on('blur', function() {
            $(this).parent().removeClass('input-focused');
        });

        // Add error messages for each field
        const errorMessages = {
            name: 'Please enter your name',
            email: 'Please enter a valid email address',
            subject: 'Please enter a subject',
            message: 'Please enter your message'
        };

        // Create error message elements if they don't exist
        $('.contact-form .form-group').each(function() {
            const fieldId = $(this).find('.form-control').attr('id');
            const $errorMsg = $(this).find('.error-message');

            if ($errorMsg.length === 0) {
                $(this).find('.input-wrapper').append(`<div class="error-message" aria-live="polite"></div>`);
            }
        });

        // Form submission handler with animations
        $contactForm.on('submit', function(e) {
            e.preventDefault();

            // Get form fields
            const $name = $('#name');
            const $email = $('#email');
            const $subject = $('#subject');
            const $message = $('#message');
            const $submitBtn = $('.submit-btn');
            const $btnText = $('.btn-text');
            const $btnLoader = $('.btn-loader');

            // Reset previous error states
            $('.form-control').removeClass('is-invalid');
            $('.error-message').text('').css('display', 'none');

            // Simple validation with custom error messages
            let isValid = true;

            if ($name.val().trim() === '') {
                $name.addClass('is-invalid');
                $name.siblings('.error-message').text(errorMessages.name).css('display', 'block');
                isValid = false;
            }

            if ($email.val().trim() === '' || !isValidEmail($email.val())) {
                $email.addClass('is-invalid');
                $email.siblings('.error-message').text(errorMessages.email).css('display', 'block');
                isValid = false;
            }

            if ($subject.val().trim() === '') {
                $subject.addClass('is-invalid');
                $subject.siblings('.error-message').text(errorMessages.subject).css('display', 'block');
                isValid = false;
            }

            if ($message.val().trim() === '') {
                $message.addClass('is-invalid');
                $message.siblings('.error-message').text(errorMessages.message).css('display', 'block');
                isValid = false;
            }

            // If form is valid, simulate successful submission with loading animation
            if (isValid) {
                // Hide any previous messages
                $formSuccess.addClass('d-none').removeClass('animate__animated animate__fadeIn');
                $formError.addClass('d-none').removeClass('animate__animated animate__fadeIn');

                // Show loading spinner
                $btnText.addClass('d-none');
                $btnLoader.removeClass('d-none');
                $submitBtn.prop('disabled', true).css('cursor', 'wait');

                // Send form data to Telegram bot
                sendToTelegramBot($name.val(), $email.val(), $subject.val(), $message.val())
                    .then(function(response) {
                        // Hide loading spinner
                        $btnLoader.addClass('d-none');
                        $btnText.removeClass('d-none');
                        $submitBtn.prop('disabled', false).css('cursor', 'pointer');

                        // Reset form
                        $contactForm[0].reset();

                        // Show success message with animation
                        $formSuccess.removeClass('d-none').addClass('animate__animated animate__fadeIn');

                        // Hide success message after 5 seconds with fade out animation
                        setTimeout(function() {
                            $formSuccess.fadeOut(500, function() {
                                $(this).addClass('d-none').removeClass('animate__animated animate__fadeIn').css('display', '');
                            });
                        }, 5000);
                    })
                    .catch(function(error) {
                        console.error('Error sending message to Telegram:', error);

                        // Hide loading spinner
                        $btnLoader.addClass('d-none');
                        $btnText.removeClass('d-none');
                        $submitBtn.prop('disabled', false).css('cursor', 'pointer');

                        // Show error message
                        $formError.removeClass('d-none').addClass('animate__animated animate__fadeIn');

                        // Hide error message after 5 seconds
                        setTimeout(function() {
                            $formError.fadeOut(500, function() {
                                $(this).addClass('d-none').removeClass('animate__animated animate__fadeIn').css('display', '');
                            });
                        }, 5000);
                    });
            } else {
                // Focus on the first invalid field
                $('.form-control.is-invalid').first().focus();
            }
        });

        // Real-time validation as user types
        $('.contact-form .form-control').on('input', function() {
            const $field = $(this);
            const fieldId = $field.attr('id');
            const $errorMsg = $field.siblings('.error-message');

            // Validate on input change
            if (fieldId === 'email') {
                if ($field.val().trim() !== '' && isValidEmail($field.val())) {
                    $field.removeClass('is-invalid');
                    $errorMsg.text('').css('display', 'none');
                }
            } else {
                if ($field.val().trim() !== '') {
                    $field.removeClass('is-invalid');
                    $errorMsg.text('').css('display', 'none');
                }
            }
        });

        // Email validation helper function
        function isValidEmail(email) {
            const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
    }

    /**
     * Initialize skill filtering
     */
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

    /**
     * Initialize project filtering
     */
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

    /**
     * Initialize navbar active state on scroll
     */
    function initNavbarActiveState() {
        $window.on('scroll', function() {
            const scrollPosition = $window.scrollTop();

            // Get all sections
            $('section').each(function() {
                const target = $(this).attr('id');
                const offset = $(this).offset().top - $navbar.outerHeight() - 5;
                const height = $(this).outerHeight();

                if (scrollPosition >= offset && scrollPosition < offset + height) {
                    $('.nav-link').removeClass('active');
                    $('.nav-link[href="#' + target + '"]').addClass('active');
                }
            });
        });
    }

    /**
     * Initialize progress bars animation
     */
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

        // Function to animate skill progress - Updated as per requirements
        function animateSkillProgress($skillCard) {
            const $progressBar = $skillCard.find('.progress-bar');
            const $skillPercentage = $skillCard.find('.skill-percentage');
            const $skillLevel = $skillCard.find('.skill-level');
            const width = $progressBar.attr('aria-valuenow');

            // Add a slight delay before animation starts for a staggered effect
            const delay = Array.from($('.skill-card')).indexOf($skillCard[0]) * 150;

            setTimeout(() => {
                // Remove the init class to allow the transition to work
                $progressBar.removeClass('init');

                // Set the final width with the specified cubic-bezier easing
                $progressBar.css('transition', 'width 1s cubic-bezier(0.65, 0, 0.35, 1)');
                $progressBar.css('width', width + '%');

                // Animate the percentage with a counter effect
                $({ countNum: 0 }).animate({ countNum: parseInt(width) }, {
                    duration: 1000, // Match the 1s duration of the progress bar
                    easing: 'easeOutQuart',
                    step: function() {
                        $skillPercentage.text(Math.floor(this.countNum) + '%');
                    },
                    complete: function() {
                        $skillPercentage.text(width + '%');

                        // Add the filled class to trigger the bounce animation
                        $progressBar.addClass('filled');

                        // Remove the filled class after the animation completes
                        setTimeout(() => {
                            $progressBar.removeClass('filled');
                        }, 500); // Match the duration of the bounce-fill animation
                    }
                });
            }, delay);
        }

        // Observe all skill cards
        $('.skill-card').each(function() {
            observer.observe(this);
        });

        // Add keyboard support for skill levels
        $('.skill-level').on('keydown', function(e) {
            // Trigger animation on Enter or Space key
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const $skillCard = $(this).closest('.skill-card');
                animateSkillProgress($skillCard);
            }
        });

        // Add hover effect for skill cards
        $('.skill-card').hover(
            function() {
                $(this).find('i').addClass('animate__animated animate__rubberBand');
            },
            function() {
                $(this).find('i').removeClass('animate__animated animate__rubberBand');
            }
        );
    }

    // Add jQuery easing functions if not already available
    if ($.easing.easeOutQuart === undefined) {
        $.easing.easeOutQuart = function(x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        };
    }

    /**
     * Initialize typing effect for hero section
     */
    function initTypingEffect() {
        if ($heroTitle.length) {
            const text = $heroTitle.text();
            const roles = ["DevOps Engineer", "Cloud Specialist", "Infrastructure Expert", "Automation Engineer"];
            let currentRole = 0;

            // Clear the original text
            $heroTitle.text('');

            // Create a wrapper for the static part
            const $staticText = $('<span>').appendTo($heroTitle);

            // Create a wrapper for the changing part
            const $dynamicText = $('<span class="dynamic-text">').appendTo($heroTitle);

            // Add a blinking cursor
            const $cursor = $('<span class="cursor">|</span>').appendTo($heroTitle);

            // Start the typing animation
            typeRole();

            // Blink the cursor
            setInterval(() => {
                $cursor.toggleClass('blink');
            }, 500);

            function typeRole() {
                const role = roles[currentRole];
                let i = 0;

                // Type the role
                const typeInterval = setInterval(() => {
                    if (i < role.length) {
                        $dynamicText.text($dynamicText.text() + role.charAt(i));
                        i++;
                    } else {
                        clearInterval(typeInterval);

                        // Wait before erasing
                        setTimeout(eraseRole, 2000);
                    }
                }, 100);
            }

            function eraseRole() {
                let text = $dynamicText.text();

                // Erase the role
                const eraseInterval = setInterval(() => {
                    if (text.length > 0) {
                        text = text.substring(0, text.length - 1);
                        $dynamicText.text(text);
                    } else {
                        clearInterval(eraseInterval);

                        // Move to next role
                        currentRole = (currentRole + 1) % roles.length;

                        // Start typing next role
                        setTimeout(typeRole, 500);
                    }
                }, 50);
            }
        }
    }

    /**
     * REMOVED: Custom cursor functionality
     * The custom cursor has been deprecated as per requirements.
     * Native system cursor is now used throughout the site.
     */

    /**
     * Initialize sophisticated animation for the About Me section text
     * Uses GSAP and ScrollTrigger for advanced animation effects
     */
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
                start: 'top 70%', // Start animation when the top of the container is 70% from the top of the viewport
                toggleActions: 'play none none none', // Play animation once when entering the trigger
                markers: false // Set to true for debugging
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
                delay: 0.1 * index, // Staggered delay based on index
                onComplete: function() {
                    // Remove clip-path after animation to prevent rendering issues
                    gsap.set(wrapper, { clearProps: 'clipPath' });
                }
            }, index * 0.1); // Staggered start time
        });

        // Add a subtle fade-in for the social icons after all text is revealed
        tl.to('.social-icons', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '>-0.3'); // Start slightly before the last text animation finishes
    }

    /**
     * Initialize scroll animations for elements
     */
    function initScrollAnimations() {
        // Define animation mappings for different element types
        const animationMappings = {
            'section-heading': 'animate__fadeInDown',
            'divider': 'animate__fadeIn',
            'skill-card': 'animate__fadeInUp',
            'project-card': 'animate__fadeInUp',
            'about-text': 'animate__fadeInLeft',
            'profile-img-container': 'animate__fadeInRight',
            'social-icons': 'animate__fadeInUp',
            'contact-form': 'animate__fadeIn'
        };

        // Add animation classes to section elements
        $('section').each(function(index) {
            const $section = $(this);
            const sectionId = $section.attr('id');

            // Add a slight delay based on section index
            const delay = index * 0.1;

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

            // Find elements within the section to animate
            // Exclude about-text and social-icons in the about section as they're handled by custom animation
            $section.find('.section-heading, .divider, .skill-card, .project-card, .profile-img-container, .contact-form')
                   .not('#about .about-text, #about .about-text-wrapper, #about .social-icons')
                   .each(function(elementIndex) {
                const $element = $(this);
                let animationClass = 'animate__fadeInUp'; // Default animation

                // Determine the appropriate animation class based on element type
                for (const [className, animation] of Object.entries(animationMappings)) {
                    if ($element.hasClass(className)) {
                        animationClass = animation;
                        break;
                    }
                }

                // Add staggered delay based on element index
                const elementDelay = delay + (elementIndex * 0.1);

                // Add animation classes
                $element.addClass('animate__animated')
                       .addClass(animationClass)
                       .css({
                           'opacity': '0',
                           'animation-delay': `${elementDelay}s`,
                           'animation-fill-mode': 'both'
                       });

                // Create an Intersection Observer for the element
                const elementObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Add a class to trigger the animation
                            $element.css('opacity', '1');

                            // Unobserve after animation is triggered
                            elementObserver.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                // Observe the element
                elementObserver.observe(this);
            });
        });

        // Add a CSS rule for the animations
        const style = document.createElement('style');
        style.innerHTML = `
            .animate__animated {
                animation-duration: 0.8s;
                animation-fill-mode: both;
            }

            .animate__fadeIn {
                animation-name: fadeIn;
            }

            .animate__fadeInUp {
                animation-name: fadeInUp;
            }

            .animate__fadeInDown {
                animation-name: fadeInDown;
            }

            .animate__fadeInLeft {
                animation-name: fadeInLeft;
            }

            .animate__fadeInRight {
                animation-name: fadeInRight;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translate3d(0, 30px, 0);
                }
                to {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }
            }

            @keyframes fadeInDown {
                from {
                    opacity: 0;
                    transform: translate3d(0, -30px, 0);
                }
                to {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }
            }

            @keyframes fadeInLeft {
                from {
                    opacity: 0;
                    transform: translate3d(-30px, 0, 0);
                }
                to {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }
            }

            @keyframes fadeInRight {
                from {
                    opacity: 0;
                    transform: translate3d(30px, 0, 0);
                }
                to {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }
            }

            .section-in-view {
                position: relative;
            }

            .cursor {
                display: inline-block;
                margin-left: 3px;
                animation: blink 1s infinite;
            }

            .cursor.blink {
                opacity: 0;
            }

            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }

            .dynamic-text {
                color: white;
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
    }
});
