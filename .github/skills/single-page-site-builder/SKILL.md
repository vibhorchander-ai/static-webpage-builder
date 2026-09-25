---
name: single-page-site-builder
description: "Use when building a secure, polished single-page portfolio or marketing website using HTML, CSS, JavaScript, or React. Covers planning, structure, accessibility, security, performance, and proof-based validation for production-ready static pages without hacks or unsafe shortcuts."
---

# Single-Page Site Builder

## Purpose

Build a responsive, secure, and professional single-page website for a portfolio, landing page, personal brand, agency, or product showcase. Prioritize clean code, accessibility, maintainability, and verified proof over shortcut hacks.

## Core principles

- No hidden tricks, no risky scripts, no untrusted third-party code injection.
- Prefer semantic HTML, accessible markup, and understandable CSS.
- Keep JavaScript minimal and explicit; if React is used, keep state predictable and component logic clear.
- Validate real output and behavior before calling the page complete.
- Make every page secure by default: no eval, no innerHTML with untrusted content, no remote code execution, and no credentials in client code.

## Workflow

### 1. Clarify the requirement

Ask or infer the following before writing code:

- What is the purpose of the site? Portfolio, SaaS landing page, personal brand, event page, agency site, etc.
- Who is the audience and what action should they take?
- Is the site static or React-based?
- Does it need animations, forms, testimonials, project cards, pricing, contact, or team section?
- Is there a brand palette, logo, content, and preferred typography?

Decision point:
- If the site is mostly marketing content and no complex state is required, prefer HTML + CSS + JavaScript.
- If the site needs reusable UI sections, component logic, or stateful interactions, prefer React with modular components.

### 2. Define the page structure

Create a clear section order:

- Hero
- About or intro
- Services or highlights
- Featured work or portfolio items
- Social proof or testimonials
- Call to action
- Contact or footer

Requirements:
- Use semantic elements like header, nav, main, section, article, footer.
- Keep all content meaningful and easy to scan.
- Ensure the page has a strong visual hierarchy and clear call-to-action flow.

### 3. Design the system

Create a clean design foundation:

- Set a consistent color palette and typography scale.
- Define spacing, border radius, shadows, and layout rhythm.
- Ensure mobile-first responsiveness.
- Use contrast ratios that meet accessibility expectations.

Decision point:
- If the site is a portfolio, emphasize clarity, whitespace, and project showcases.
- If the site is a product page, emphasize trust signals, conversion flow, and readability.

### 4. Implement the UI

Build the interface with maintainable code:

- HTML for structure and semantic meaning.
- CSS for layout, style, responsive behavior, and visual polish.
- JavaScript or React for small, purposeful interactions only.

Do not:
- Create hidden overlays or misleading UI patterns.
- Depend on inline script injection or dynamic HTML generation from user-controlled strings.
- Include tracking or external script behaviors unless they are required and trusted.

### 5. Add secure, production-safe behavior

Security checklist:

- Sanitize or avoid user-controlled content in the DOM.
- Do not use eval, innerHTML with unsafely sourced content, or arbitrary code execution patterns.
- Keep third-party libraries minimal and verified.
- Use safe, declarative rendering patterns.
- Store API keys or secrets only in secure server-side environments, never in a static client page.
- For forms, validate input on the client and server side when a backend exists.

### 6. Optimize for performance and quality

Before finalizing the page:

- Remove unused CSS and JavaScript.
- Compress large assets and prefer modern image formats when needed.
- Use lazy loading for non-critical media.
- Ensure interactive elements are keyboard accessible.
- Test on desktop and mobile viewport sizes.

### 7. Verify with proof, not assumption

The page is not complete until proof shows it works.

Validate:

- Page loads without console errors.
- Links work and navigation is clear.
- Buttons, tabs, accordions, and interactions behave as expected.
- Layout remains readable and stable across screen sizes.
- Accessibility checks pass for focus order, labels, contrast, and landmark structure.
- No suspicious or unsafe code patterns are present.

## Decision tree

- Need a simple single page with no heavy state? Use HTML + CSS + JavaScript.
- Need reusable components and more structured UI? Use React.
- Need content-driven portfolio? Prioritize high readability, strong typography, and project case studies.
- Need conversion-focused landing page? Prioritize CTA flow, trust indicators, and faster load times.
- Need contact form? Use safe validation and secure backend handling if data is sent anywhere.

## Quality checklist

A completion-ready single-page site should show all of the following:

- Clear purpose and audience fit
- Responsive layout across common screen sizes
- Semantic structure and accessibility support
- Secure implementation with no unsafe execution patterns
- Visual polish and consistent design system
- Functional interactions without console errors
- Proof from real browser testing and review

## Output expectations

Deliver a complete single-page website with:

- clean project structure
- readable component or section organization
- accessible markup
- CSS or React styling consistent with the brief
- safe, maintainable implementation
- a final verification note confirming what was tested and why it is trustworthy

## Anti-patterns to avoid

- Building a site with raw untrusted HTML injection
- Using inline scripts to bypass proper structure
- Hiding broken functionality behind flashy animations
- Overusing libraries for trivial effects
- Shipping code without accessibility and mobile checks
- Claiming completion without testing in a real browser

## Example prompts

- Create a secure single-page portfolio website for a UI/UX designer with hero, services, work samples, and contact section.
- Build a clean React landing page for a startup with a modern dark theme and responsive mobile layout.
- Design a one-page personal brand website using HTML, CSS, and JavaScript with a contact form and testimonial section.
- Create a static portfolio site with accessible sections, subtle animations, and a proof-tested responsive layout.
