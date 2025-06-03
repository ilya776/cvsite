$(document).ready(function() {
    // Initialize variables
    const $window = $(window);
    const $body = $('body');
    const $navbar = $('#navbar');
    const $themeToggle = $('#theme-toggle');
    const $scrollToTop = $('#scrollToTop');
    const $contactForm = $('#contactForm');
    const $formSuccess = $('#formSuccess');
    const $filterBtns = $('.filter-btn');
    const $projectFilters = $('.project-filter');
    const $skillItems = $('.skill-item');
    const $projectItems = $('.project-item');

    // Initialize particles background
    initParticles();

    // Initialize AOS (Animate On Scroll)
    initFadeInElements();

    // Smooth scrolling for navigation links
    initSmoothScrolling();

    // Initialize theme (light/dark mode)
    initTheme();

    // Initialize scroll to top button
    initScrollToTop();

    // Initialize form validation
    initFormValidation();

    // Initialize skill filtering
    initSkillFiltering();

    // Initialize project filtering
    initProjectFiltering();

    // Add active class to navbar items on scroll
    initNavbarActiveState();

    // Initialize progress bars animation
    initProgressBars();

    /**
     * Initialize particles.js background
     */
    function initParticles() {
        if ($('#particles-js').length) {
            particlesJS.load('particles-js', 'assets/js/particles.json', function() {
                console.log('Particles.js loaded successfully');
            });
        }
    }

    /**
     * Initialize animations on scroll
     */
    function initFadeInElements() {
        // Add different animation classes to different elements
        $('.section-heading').addClass('fade-in');

        // Add staggered animations to skill cards
        $('.skill-card').each(function(index) {
            if (index % 3 === 0) {
                $(this).addClass('fade-in');
            } else if (index % 3 === 1) {
                $(this).addClass('slide-in-left');
            } else {
                $(this).addClass('slide-in-right');
            }
        });

        // Add animations to project cards
        $('.project-card').each(function(index) {
            if (index % 3 === 0) {
                $(this).addClass('fade-in');
            } else if (index % 3 === 1) {
                $(this).addClass('slide-in-left');
            } else {
                $(this).addClass('slide-in-right');
            }
        });

        // Add scale animation to profile image
        $('.profile-img-container').addClass('scale-in');

        // Add rotate animation to skill icons
        $('.skill-card i, .skill-card svg').addClass('rotate-in');

        // Add slide animations to about text paragraphs with alternating directions
        $('.about-text').each(function(index) {
            if (index % 2 === 0) {
                $(this).addClass('slide-in-left');
            } else {
                $(this).addClass('slide-in-right');
            }
        });

        // Add fade-in to social icons
        $('.social-icons a').addClass('fade-in');

        // Add scale-in to buttons
        $('.btn-lg').addClass('scale-in');

        // Check for all animated elements in viewport on scroll
        $window.on('scroll', function() {
            $('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in').each(function() {
                const elementTop = $(this).offset().top;
                const elementVisible = 150;

                if (elementTop < ($window.scrollTop() + $window.height() - elementVisible)) {
                    $(this).addClass('visible');
                }
            });
        });

        // Trigger scroll event to check for visible elements on page load
        $window.trigger('scroll');
    }

    /**
     * Initialize smooth scrolling for navigation links
     */
    function initSmoothScrolling() {
        // Smooth scroll for navigation links and other in-page links
        $('a.nav-link, a.scroll-btn').on('click', function(e) {
            if (this.hash !== '') {
                e.preventDefault();

                const hash = this.hash;
                const offset = $navbar.outerHeight();

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - offset
                }, 800, function() {
                    // Add hash to URL after scroll (without jumping)
                    window.history.pushState(null, null, hash);
                });
            }
        });
    }

    /**
     * Initialize theme toggle (light/dark mode)
     */
    function initTheme() {
        // Check for saved theme preference, system preference, or use default
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
                // Only apply if user hasn't manually set a preference
                const newTheme = e.matches ? 'dark' : 'light';
                applyTheme(newTheme);
            }
        });

        /**
         * Apply theme to the document
         * @param {string} theme - 'light' or 'dark'
         */
        function applyTheme(theme) {
            // Add transition class for smooth theme change
            $body.addClass('theme-transition');

            // Apply theme attribute
            $body.attr('data-theme', theme);

            // Update toggle button icon
            if (theme === 'dark') {
                $themeToggle.html('<i class="bi bi-sun-fill"></i>');
                $themeToggle.attr('aria-label', 'Switch to light mode');
                $themeToggle.attr('title', 'Switch to light mode');
            } else {
                $themeToggle.html('<i class="bi bi-moon-fill"></i>');
                $themeToggle.attr('aria-label', 'Switch to dark mode');
                $themeToggle.attr('title', 'Switch to dark mode');
            }

            // Reload particles with new theme colors
            if ($('#particles-js').length) {
                // Small delay to ensure theme change is applied first
                setTimeout(function() {
                    initParticles();
                }, 300);
            }

            // Remove transition class after animation completes
            setTimeout(function() {
                $body.removeClass('theme-transition');
            }, 1000);
        }
    }

    /**
     * Initialize scroll to top button
     */
    function initScrollToTop() {
        // Show/hide scroll to top button based on scroll position
        $window.on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                $scrollToTop.addClass('visible');
            } else {
                $scrollToTop.removeClass('visible');
            }
        });

        // Scroll to top when button is clicked
        $scrollToTop.on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }

    /**
     * Initialize form validation and Telegram integration
     */
    function initFormValidation() {
        // Create error message element if it doesn't exist
        if ($('#formError').length === 0) {
            $formSuccess.after('<div id="formError" class="alert alert-danger mt-4 d-none">Error sending message. Please try again later.</div>');
        }
        const $formError = $('#formError');

        $contactForm.on('submit', function(e) {
            e.preventDefault();

            // Get form fields
            const $name = $('#name');
            const $email = $('#email');
            const $subject = $('#subject');
            const $message = $('#message');

            // Simple validation
            let isValid = true;

            if ($name.val().trim() === '') {
                $name.addClass('is-invalid');
                isValid = false;
            } else {
                $name.removeClass('is-invalid');
            }

            if ($email.val().trim() === '' || !isValidEmail($email.val())) {
                $email.addClass('is-invalid');
                isValid = false;
            } else {
                $email.removeClass('is-invalid');
            }

            if ($subject.val().trim() === '') {
                $subject.addClass('is-invalid');
                isValid = false;
            } else {
                $subject.removeClass('is-invalid');
            }

            if ($message.val().trim() === '') {
                $message.addClass('is-invalid');
                isValid = false;
            } else {
                $message.removeClass('is-invalid');
            }

            // If form is valid, send to Telegram
            if (isValid) {
                // Hide any previous messages
                $formSuccess.addClass('d-none');
                $formError.addClass('d-none');

                // Get form values
                const name = $name.val().trim();
                const email = $email.val().trim();
                const message = $message.val().trim();

                // Send to Telegram
                sendToTelegram(name, email, message)
                    .then(function(response) {
                        if (response.ok) {
                            // Show success message
                            $contactForm[0].reset();
                            $formSuccess.removeClass('d-none');

                            // Hide success message after 5 seconds
                            setTimeout(function() {
                                $formSuccess.addClass('d-none');
                            }, 5000);
                        } else {
                            // Show error message
                            $formError.removeClass('d-none');
                            console.error('Telegram API error:', response.statusText);

                            // Hide error message after 5 seconds
                            setTimeout(function() {
                                $formError.addClass('d-none');
                            }, 5000);
                        }
                    })
                    .catch(function(error) {
                        // Show error message
                        $formError.removeClass('d-none');
                        console.error('Error sending message:', error);

                        // Hide error message after 5 seconds
                        setTimeout(function() {
                            $formError.addClass('d-none');
                        }, 5000);
                    });
            }
        });

        /**
         * Send message to Telegram Bot
         * @param {string} name - Sender's name
         * @param {string} email - Sender's email
         * @param {string} message - Message content
         * @returns {Promise} - Fetch promise
         */
        function sendToTelegram(name, email, message) {
            // Replace with your actual bot token and chat ID
            const botToken = '7292760537:AAGGaaCVFxFj85SESAwqSK4Nci5pcQ65iGo';
            const chatId = '671586757';

            // Format message according to requirements
            const telegramMessage = `📥 New Portfolio Message
👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}`;

            // Send to Telegram Bot API
            return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                    parse_mode: 'HTML'
                })
            });
        }

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
        // Store the original HTML of project cards on page load
        const originalProjectsHtml = $('.project-cards').html();

        $projectFilters.on('click', function() {
            const filter = $(this).data('filter');

            // Update active button
            $projectFilters.removeClass('active');
            $(this).addClass('active');

            // Filter projects with improved animation
            if (filter === 'all') {
                // First reset the HTML to ensure all projects are present
                $('.project-cards').html(originalProjectsHtml);

                // Get fresh reference to all project items
                const $allProjects = $('.project-item');

                // Show all projects with a staggered fade-in
                $allProjects.css('opacity', '0').show();

                $allProjects.each(function(index) {
                    $(this).delay(index * 50).animate({
                        opacity: 1
                    }, 400, 'easeOutCubic');
                });
            } else {
                // Make sure all projects are visible first
                $('.project-item').show().css('opacity', '1');

                // Animate filtering
                $('.project-item').each(function() {
                    const $item = $(this);
                    const categoriesRaw = $item.data('category');

                    // Handle case where data-category might be undefined or empty
                    if (!categoriesRaw) {
                        $item.animate({opacity: 0}, 300, function() {
                            $item.hide();
                        });
                        return;
                    }

                    const categories = categoriesRaw.split(',').map(cat => cat.trim());

                    if (!categories.includes(filter)) {
                        // Fade out and hide non-matching items
                        $item.animate({opacity: 0}, 300, function() {
                            $item.hide();
                        });
                    } else {
                        // Ensure matching items are fully visible
                        $item.css('opacity', '0').show().animate({opacity: 1}, 400);
                    }
                });
            }
        });

        // Trigger 'all' filter on page load to ensure everything is visible initially
        $projectFilters.filter('[data-filter="all"]').trigger('click');
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
     * Initialize progress bars animation with Apple-style animations
     */
    function initProgressBars() {
        // Create an Intersection Observer to detect when skill cards enter the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const $skillCard = $(entry.target);
                    const $progressBar = $skillCard.find('.progress-bar');
                    const $skillPercentage = $skillCard.find('.skill-percentage');
                    const width = $progressBar.attr('aria-valuenow');

                    // Add visible class to trigger CSS animations
                    $skillCard.addClass('in-view');

                    // Animate the progress bar with Apple-style cubic-bezier
                    $progressBar.css({
                        'transform': `scaleX(${width/100})`,
                        'transition': 'transform 1.2s cubic-bezier(0.42, 0, 0.58, 1)'
                    });

                    // Animate the percentage with a counter effect
                    const value = parseInt($skillPercentage.text());
                    $({ countNum: 0 }).animate({ countNum: value }, {
                        duration: 1200,
                        easing: 'easeOutQuart',
                        step: function() {
                            $skillPercentage.text(Math.floor(this.countNum) + '%');
                        },
                        complete: function() {
                            $skillPercentage.text(value + '%');
                        }
                    });

                    // Unobserve after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2, // Trigger when 20% of the element is visible
            rootMargin: '0px 0px -100px 0px' // Adjust the trigger point (negative value means "before it leaves the bottom")
        });

        // Observe all skill cards
        $('.skill-card').each(function() {
            observer.observe(this);

            // Reset initial state
            const $progressBar = $(this).find('.progress-bar');
            $progressBar.css({
                'transform': 'scaleX(0)',
                'transform-origin': 'left'
            });
        });

        // Add hover effect to skill cards with improved animations
        $('.skill-card').hover(
            function() {
                // On hover
                const $card = $(this);
                const $icon = $card.find('i, svg');
                const $progressBar = $card.find('.progress-bar');

                // Add glow effect to progress bar
                $progressBar.addClass('active');

                // Add 3D floating animation to the icon
                $icon.css({
                    'animation': 'floatAnimation 2s cubic-bezier(0.42, 0, 0.58, 1) infinite',
                    'transform-origin': 'center',
                    'filter': 'drop-shadow(0 5px 15px rgba(0,0,0,0.2))'
                });

                // Subtle card lift effect
                $card.css({
                    'transform': 'translateY(-8px) scale(1.02)',
                    'transition': 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
            },
            function() {
                // On hover out
                const $card = $(this);
                const $icon = $card.find('i, svg');
                const $progressBar = $card.find('.progress-bar');

                // Remove glow effect
                $progressBar.removeClass('active');

                // Remove floating animation
                $icon.css({
                    'animation': 'none',
                    'filter': 'none'
                });

                // Return card to original position
                $card.css({
                    'transform': '',
                    'transition': 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
            }
        );
    }
});
