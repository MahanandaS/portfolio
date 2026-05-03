# Portfolio Frontend - React + Vite

Modern, responsive portfolio website built with React and Vite.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will run on `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    - Sticky navigation with smooth scrolling
│   ├── Hero.jsx          - Hero section with intro and CTA buttons
│   ├── About.jsx         - About me section with contact info
│   ├── Skills.jsx        - Skills organized by categories
│   ├── Projects.jsx      - Project showcase with tech stacks
│   ├── Education.jsx     - Education and certifications
│   └── Contact.jsx       - Contact information and social links
├── App.jsx               - Main app component
├── App.css               - All component styles
├── main.jsx              - React entry point
└── index.css             - Global styles
```

## 🎨 Features

- ✅ Responsive navigation with mobile menu
- ✅ Smooth scrolling between sections
- ✅ Modern gradient designs
- ✅ Hover animations and transitions
- ✅ Mobile-first responsive design
- ✅ Dark and light theme support
- ✅ SEO optimized
- ✅ Fast performance with Vite

## 🛠️ Technologies

- **Framework:** React 18.2.0
- **Build Tool:** Vite 8.0.10
- **Styling:** CSS3 with CSS Variables
- **Plugin:** @vitejs/plugin-react 4.3.1

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: 768px+

## 🎨 Customization

### Update Colors
Edit `:root` variables in `src/App.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --text-color: #1f2937;
  --bg-color: #f9fafb;
  --border-color: #e5e7eb;
  --accent-color: #06b6d4;
}
```

### Update Personal Information
Edit component files in `src/components/`:
- `Hero.jsx` - Your name and title
- `About.jsx` - Your bio and contact info
- `Skills.jsx` - Your technical skills
- `Projects.jsx` - Your projects
- `Education.jsx` - Your education
- `Contact.jsx` - Contact links

## 📜 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder

### GitHub Pages
Build and push `dist` folder to `gh-pages` branch

## 📝 Notes

- All components are functional components with hooks
- CSS Grid and Flexbox for responsive layouts
- Smooth animations using CSS keyframes
- Mobile navigation uses hamburger menu on smaller screens
- Navigation automatically closes when link is clicked

## 📞 Contact

- Email: mihirshial@gmail.com
- Phone: +91 6202104895
- GitHub: github.com/MahanandaS
