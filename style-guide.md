# Illia Bilous Portfolio - Style Guide

## Table of Contents
1. [Color Palettes](#color-palettes)
2. [Typography](#typography)
3. [Components](#components)
4. [Animation System](#animation-system)
5. [Accessibility Guidelines](#accessibility-guidelines)
6. [Extending the Site](#extending-the-site)

## Color Palettes

### Light Theme
- **Primary Color**: `#0056b3` - Used for buttons, links, and accents
- **Primary Hover**: `#004494` - Used for hover states
- **Text Color**: `#333333` - Main text color (WCAG AA compliant)
- **Heading Color**: `#004494` - Used for headings
- **Background Color**: `#ffffff` - Main background
- **Section Background**: `#f8f9fa` - Used for alternating sections
- **Card Background**: `#ffffff` - Used for cards
- **Border Color**: `#c8cfd6` - Used for borders and dividers

### Dark Theme
- **Primary Color**: `#4cc9f0` - Used for buttons, links, and accents
- **Primary Hover**: `#7ad7f5` - Used for hover states
- **Text Color**: `#f0f0f0` - Main text color (WCAG AA compliant)
- **Heading Color**: `#4cc9f0` - Used for headings
- **Background Color**: `#121212` - Main background
- **Section Background**: `#1a1a1a` - Used for alternating sections
- **Card Background**: `#1f1f1f` - Used for cards
- **Border Color**: `#3a3a3a` - Used for borders and dividers

### Accent Colors
Light Theme:
- **Accent 1 (Purple)**: `#6200ee`
- **Accent 2 (Pink)**: `#c30052`
- **Accent 3 (Light Blue)**: `#0077cc`

Dark Theme:
- **Accent 1 (Purple)**: `#c084fc`
- **Accent 2 (Pink)**: `#fb7185`
- **Accent 3 (Light Blue)**: `#38bdf8`

All colors have been selected to meet WCAG AA standards for contrast, ensuring accessibility for all users.

## Typography

### Font Family
- Primary Font: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

### Font Sizes
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

### Font Weights
- Regular: 400
- Bold: 700

### Line Heights
- Body: 1.6
- Headings: 1.2

## Components

### Buttons
- **Primary Button**: Solid background with primary color
- **Outline Button**: Transparent with primary color border
- **Hover Effects**: Scale and elevation change with shadow
- **Focus States**: Visible outline for keyboard navigation

### Cards
- **Default**: White background with subtle shadow
- **Hover**: Slight elevation increase and scale
- **Dark Theme**: Darker background with subtle gradient overlay

### Form Elements
- **Inputs**: Clean borders with focus effects
- **Labels**: Bold with high contrast
- **Validation**: Clear error states with animations
- **Submit Button**: Gradient background with loading state

### Navigation
- **Links**: Underline animation on hover
- **Active State**: Highlighted with primary color
- **Mobile**: Collapsible with hamburger menu

## Animation System

### Section Entrance Animations
The site uses Intersection Observer API to trigger animations when elements enter the viewport:
- Headings: Fade in from top
- Content: Fade in from bottom
- Images: Fade in from sides

### Micro-interactions
- **Buttons**: Scale and elevation change on hover
- **Links**: Underline animation on hover
- **Cards**: Subtle scale and shadow change on hover
- **Form Fields**: Focus effects and validation animations

### Loading & Success States
- **Form Submission**: Loading spinner and success/error animations
- **Progress Bars**: Animated fill with gradient

### Custom Cursor (Desktop Only)
- Custom cursor with dot and outline
- Changes size and color when hovering interactive elements
- Disabled on touch devices

## Accessibility Guidelines

### Color Contrast
- All text meets WCAG AA standards (minimum 4.5:1 ratio for normal text, 3:1 for large text)
- Form elements have sufficient contrast against backgrounds

### Keyboard Navigation
- All interactive elements are focusable
- Focus states are clearly visible
- Skip to content link for keyboard users

### Screen Readers
- Proper ARIA roles and labels
- Decorative elements marked with `aria-hidden="true"`
- Form validation messages use `aria-live` regions

### Reduced Motion
- Respects user's preference with `prefers-reduced-motion` media query

## Extending the Site

### Adding New Sections
1. Follow the existing HTML structure pattern
2. Add appropriate ARIA roles and labels
3. Use the existing CSS variables for consistent styling
4. Add the section to the navigation menu

### Adding New Components
1. Use existing CSS variables for colors, spacing, and typography
2. Follow the established naming conventions
3. Ensure accessibility with proper ARIA attributes
4. Test on all screen sizes and with keyboard navigation

### Theme Customization
To modify the theme colors:
1. Update the CSS variables in the `:root` and `[data-theme="dark"]` selectors
2. Ensure all colors meet WCAG AA contrast requirements
3. Test both themes thoroughly

### Animation Guidelines
When adding new animations:
1. Keep animations subtle and purposeful
2. Ensure they can be disabled via `prefers-reduced-motion`
3. Use the existing animation timing variables for consistency
4. Avoid animations that flash or move too quickly

---