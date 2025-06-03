# Portfolio Website Style Guide

## Overview
This document provides guidelines for maintaining and extending the portfolio website. It covers theme colors, typography, component styles, animations, and accessibility considerations.

## Theme System

The website uses a dual-theme system (light and dark) with CSS variables for consistent styling. Theme switching is handled via JavaScript and persisted in localStorage.

### Light Theme Colors
- **Primary Color**: `#0d6efd` (Blue)
- **Background**: `#ffffff` (White)
- **Text**: `#212529` (Dark Gray)
- **Card Background**: `#ffffff` (White)
- **Section Background**: `#f8f9fa` (Light Gray)
- **Borders**: `#dee2e6` (Light Gray)
- **Headings**: `#0a58ca` (Dark Blue)

### Dark Theme Colors
- **Primary Color**: `#00d1ff` (Neon Cyan)
- **Background**: `#121212` (Very Dark Gray)
- **Text**: `#f5f5f5` (Off-White)
- **Card Background**: `#1f1f1f` (Dark Gray)
- **Section Background**: `#1a1a1a` (Dark Gray)
- **Borders**: `#2f2f2f` (Medium Gray)
- **Headings**: `#00d1ff` (Neon Cyan)

### Accent Colors (Dark Theme)
- **Purple**: `#9f7aea`
- **Pink**: `#f687b3`
- **Light Blue**: `#54d6ff`

## Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Heading Weights**: 700 (Bold)
- **Body Text Weight**: 400 (Regular)
- **Line Height**: 1.6

## Components

### Buttons
- Use `.btn-primary` for primary actions
- Use `.btn-outline-primary` for secondary actions
- Buttons have hover effects (scale and shadow)
- Dark theme buttons have gradient backgrounds

### Cards
- Cards have subtle shadows that enhance on hover
- Dark theme cards have a gradient overlay on hover
- Use the `.card` class with appropriate modifiers

### Progress Bars
- Progress bars animate when they enter the viewport
- They have gradient backgrounds and shine effects
- Use the `.progress` and `.progress-bar` classes

### Forms
- Form controls have focus states with outlines
- Labels are colored appropriately for each theme
- Placeholders have proper contrast

## Animations

### Scroll Animations
The site uses Intersection Observer to trigger animations when elements enter the viewport:
- Section headings: Fade in from top
- Text blocks: Fade in from left
- Images: Fade in from right
- Cards: Fade in from bottom

### Particle Background
- The hero section uses particles.js for an interactive background
- Particles react to mouse movements
- Colors are theme-appropriate

### Progress Indicator
- A thin progress bar at the top of the page shows scroll position
- It has a gradient background that matches the theme

## Adding New Sections

When adding new sections:
1. Follow the existing HTML structure
2. Use appropriate CSS classes for consistency
3. Add the section to the navigation
4. Ensure it works in both light and dark themes

## Accessibility Guidelines

- All interactive elements have appropriate focus states
- Color contrast meets WCAG AA standards
- Navigation items have aria-labels
- Form fields have associated labels
- Images have alt text

## Responsive Design

The site uses Bootstrap's grid system with custom breakpoints:
- **Small**: < 640px (Stack all content vertically)
- **Medium**: ≥ 640px (Two-column layouts for cards)
- **Large**: ≥ 992px (Full desktop layout)

## JavaScript Components

- **Theme Toggle**: Switches between light and dark themes
- **Smooth Scrolling**: For navigation links
- **Scroll Progress**: Shows reading progress
- **Form Validation**: Client-side validation for the contact form
- **Typing Effect**: Animated text in the hero section
- **Scroll Animations**: Elements animate as they enter the viewport