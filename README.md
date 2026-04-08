# Justica - Law Firm React Application

A complete React conversion of the Justica Law Firm Framer template. This is a fully functional, multi-page legal services website with all original design elements, images, and functionality.

## 🎯 Features

✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Multi-page Navigation** - Home, About, Team, Practice Areas, Cases, FAQs, Contact
✅ **Professional Styling** - Complete CSS styling matching the original template
✅ **Contact Form** - Functional contact form with validation
✅ **Image Integration** - All original Framer images embedded
✅ **Team Gallery** - Professional team member profiles
✅ **Interactive FAQs** - Expandable accordion-style FAQ section
✅ **Statistics & Testimonials** - Success metrics and client reviews
✅ **SEO Optimized** - Meta tags and structured content

## 📋 Project Structure

```
justica-law-firm/
├── public/
│   └── index.html              # Main HTML template
├── src/
│   ├── components/
│   │   ├── Navigation.js        # Header navigation component
│   │   └── Footer.js            # Footer component
│   ├── pages/
│   │   ├── Home.js              # Home page
│   │   ├── About.js             # About page
│   │   ├── Team.js              # Team page
│   │   ├── PracticeAreas.js     # Practice areas page
│   │   ├── Cases.js             # Cases page
│   │   ├── FAQs.js              # FAQs page
│   │   └── Contact.js           # Contact page
│   ├── styles/
│   │   ├── App.css              # Global styles
│   │   ├── Navigation.css       # Navigation styles
│   │   ├── Footer.css           # Footer styles
│   │   ├── Home.css             # Home page styles
│   │   ├── About.css            # About page styles
│   │   ├── Team.css             # Team page styles
│   │   ├── PracticeAreas.css    # Practice areas styles
│   │   ├── Cases.css            # Cases page styles
│   │   ├── FAQs.css             # FAQs page styles
│   │   └── Contact.css          # Contact page styles
│   ├── App.js                   # Main app component with routing
│   └── index.js                 # React entry point
├── package.json                 # Dependencies and scripts
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. **Clone or extract the project:**
   ```bash
   cd justica-law-firm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open your browser:**
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't, manually navigate to that URL

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, stats, practices, team preview, testimonials |
| `/about` | About | Company information, experience, expectations |
| `/team` | Team | Full team member gallery |
| `/practice-areas` | Practice Areas | All legal service areas with descriptions |
| `/cases` | Cases | Successful case examples |
| `/faqs` | FAQs | Frequently asked questions with accordion |
| `/contact` | Contact | Contact form and location information |

## 🎨 Customization

### Colors
Main colors are defined in CSS files:
- Primary Color: `#1a3a52` (Dark Blue)
- Accent Color: `#d4af37` (Gold)
- Light Background: `#f5f5f5`

To change colors, update the hex values in the CSS files.

### Fonts
Default font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

To change fonts, update the `font-family` property in `App.css`

### Content
All text content is editable in the respective page components:
- Update company info in `Navigation.js` and `Footer.js`
- Modify team members in `Home.js` and `Team.js`
- Edit practice areas in `PracticeAreas.js`
- Update FAQs in `FAQs.js`
- Change contact details in `Contact.js`

### Images
All images use direct URLs from the Framer template. To use your own images:
1. Replace the image URLs in the components with your own
2. Or download images and place them in a `public/images` folder
3. Update references to use relative paths like `./images/image-name.jpg`

## 🔧 Building for Production

To create a production-ready build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that's ready for deployment.

### Deployment Options

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

**Traditional Hosting:**
- Upload the contents of the `build` folder to your web server

## ✨ Key Features Explained

### Navigation
- Sticky header with responsive hamburger menu
- Contact information in header
- Quick consultation buttons throughout

### Contact Form
- Real-time form validation
- Success message on submission
- Email, phone, and subject validation
- Responsive design for all devices

### Interactive FAQs
- Click to expand/collapse answers
- Smooth animations
- Organized Q&A pairs

### Team Section
- Professional team member cards
- Hover effects with elevation
- Role and specialty information
- Responsive grid layout

### Statistics
- Eye-catching stat cards
- Company achievements displayed
- Responsive grid layout

## 📞 Contact Modifications

Update contact information in:

1. **Navigation.js** (Header contact info)
2. **Footer.js** (Footer contact details)
3. **Contact.js** (Contact page information)

Replace:
- Email addresses
- Phone numbers
- Physical address
- Business hours

## 🛠️ Troubleshooting

**Port already in use:**
```bash
PORT=3001 npm start
```

**Dependencies issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**React Router issues:**
Make sure `react-router-dom` is installed:
```bash
npm install react-router-dom
```

## 📦 Dependencies

- **react** (18.2.0) - React library
- **react-dom** (18.2.0) - React DOM rendering
- **react-router-dom** (6.20.0) - Client-side routing
- **react-scripts** (5.0.1) - Build tools

## 📄 License

This template is provided as-is. Modify and use freely for your projects.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 📞 Support

For questions or issues:
1. Check the troubleshooting section
2. Review the React documentation
3. Check your browser console for error messages

## 🚀 Next Steps

1. Customize colors and fonts to match your brand
2. Replace images with your own
3. Update all contact information
4. Modify team members and company info
5. Add your own testimonials
6. Update practice areas and case details
7. Deploy to your hosting platform

---

**Happy coding! Your Justica Law Firm React app is ready to go! 🎉**
