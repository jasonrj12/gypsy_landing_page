# GYPSY - Bridal Jewelry Rental, Cosmetics & Salon Accessories

A modern, responsive landing page for bridal jewelry rentals, cosmetics, and salon accessories built with React and Tailwind CSS.

## Issue Fix

If you encounter the error about a corrupted `package.json` in the parent directory, you have two options:

### Option 1: Use the automated fix (Recommended)
The project includes a PowerShell script that temporarily renames the corrupted file:
```bash
npm run dev
```

### Option 2: Manually fix the corrupted file
1. Navigate to `C:\Users\user\`
2. Rename or delete the corrupted `package.json` file
3. Run `npm run dev` normally

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

## Project Structure

- `src/components/` - React components (Navbar, Hero, Products, About, Contact)
- `src/data/` - Product data
- `src/App.jsx` - Main app component
- `tailwind.config.js` - Tailwind CSS configuration

## Features

- Responsive design
- Smooth scroll navigation
- Product gallery with bridal jewelry rentals, cosmetics, and salon accessories
- Modern UI with Tailwind CSS
- Category-based product display
- Rental pricing for bridal jewelry items

