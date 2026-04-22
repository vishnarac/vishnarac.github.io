# Personal Blog Website

A modern, responsive personal blog website inspired by [iampavel.dev](https://iampavel.dev/), built with pure HTML, CSS, and JavaScript.

## ✨ Features

- **Dark Theme Design** - Beautiful dark color scheme with pink/purple gradient accents
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Navigation** - Animated smooth scrolling between sections
- **Blog Search** - Real-time search functionality to filter blog posts
- **Interactive UI** - Hover effects, animations, and smooth transitions
- **Modern Design** - Clean, minimalist aesthetic with gradient text effects
- **No Dependencies** - Pure vanilla JavaScript, no frameworks required

## 🎨 Sections

1. **Hero Section** - Eye-catching introduction with gradient text
2. **About Me** - Personal introduction and profile
3. **Services/What I Do** - Showcase your skills and expertise
4. **Blog** - Display blog posts with search functionality
5. **Contact** - Social media links and contact information

## 🚀 Getting Started

### Option 1: Open Locally
Simply open the `index.html` file in your web browser:
```bash
# Navigate to the project directory
cd /Users/vishnuc/Desktop/Blogs

# Open in your default browser (macOS)
open index.html

# Or double-click the index.html file
```

### Option 2: Use a Local Server
For a better development experience, use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then open http://localhost:8000 in your browser
```

## 📝 Customization

### 1. Personal Information
Edit [`index.html`](index.html) to update:
- Your name in the hero section (line 48-49)
- Logo/initials in the navbar (line 18)
- About Me content (lines 62-72)
- Contact links (lines 157-180)

### 2. Blog Posts
Edit [`script.js`](script.js) to add/modify blog posts:
```javascript
const blogPosts = [
    {
        id: 1,
        date: 'Apr 20, 2026',
        title: 'Your Blog Post Title',
        excerpt: 'Your blog post description...',
        tags: ['tag1', 'tag2', 'tag3']
    },
    // Add more posts...
];
```

### 3. Colors and Styling
Edit [`styles.css`](styles.css) to customize:
- Color scheme (lines 9-19 in `:root` variables)
- Fonts and typography
- Spacing and layout
- Animations and effects

### 4. Services Section
Update the services cards in [`index.html`](index.html) (lines 85-110) to reflect your skills.

## 🎨 Color Palette

- **Background Primary**: `#1a1a2e`
- **Background Secondary**: `#16213e`
- **Accent Primary**: `#ec4899` (Pink)
- **Accent Secondary**: `#a855f7` (Purple)
- **Text Primary**: `#e4e4e7`
- **Text Secondary**: `#a1a1aa`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Hosting Options (Free)

Deploy your blog for free using any of these platforms:

### GitHub Pages
1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click

### Cloudflare Pages
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Deploy automatically

## 📂 Project Structure

```
Blogs/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Tips

1. **Add Your Photo**: Replace the profile placeholder SVG with your actual photo
2. **Update Links**: Change all social media links to your actual profiles
3. **Add Analytics**: Consider adding Google Analytics or similar
4. **SEO**: Update meta tags in the HTML head section
5. **Blog Posts**: Link blog post cards to actual blog post pages when you create them

## 📄 License

This project is free to use for personal and commercial purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Support

If you have any questions or need help customizing your blog, feel free to reach out!

---

**Built with ❤️ using HTML, CSS, and JavaScript**