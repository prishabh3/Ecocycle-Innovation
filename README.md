# Ecocycle Innovations Website

A modern, responsive website for Ecocycle Innovations featuring a content management system for easy blog post management.

## 🌟 Features

### Public Website
- **Homepage**: Company introduction with video showcases
- **About**: Company information and mission
- **Products**: Product showcase with videos and images
- **Technology**: Technology overview and innovations
- **Blog**: Dynamic blog section with featured posts
- **Team & Contact**: Team member profiles and contact information

### Admin Panel
- **Secure Authentication**: Password-protected admin access
- **Blog Management**: Add, delete, and manage blog posts
- **Content Editor**: Edit website content without coding
- **Image Upload**: Upload images directly from computer or use URLs
- **Hidden Access**: Multiple secure ways to access admin features

## 🚀 Quick Start

### Option 1: Local Development
1. Clone or download this repository
2. Open terminal in the project directory
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to `http://localhost:8000`

### Option 2: GitHub Pages (Recommended)
1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → "main" branch
4. Your website will be live at `https://yourusername.github.io/repository-name`


## 📝 Adding Blog Posts

### For HR Team (No Coding Required)
1. Access the admin panel using any method above
2. Go to "Blog Management"
3. Fill in the blog post form:
   - **Title**: Enter a catchy title
   - **Content**: Write your blog content
   - **Image**: Upload from computer OR paste image URL
   - **Author**: Leave as "Ecocycle Team" or change
   - **Category**: Choose from Sustainability, Education, Innovation, Technology, Featured
   - **Tags**: Add relevant tags (comma-separated)
   - **Featured**: Check if this should be the featured post
4. Click "Add Blog Post"
5. Your post will appear on the blog page immediately

### Image Options
- **Upload from Computer**: Click "Choose File" and select an image (max 5MB)
- **Use URL**: Upload to Imgur, PostImages, or Unsplash and paste the URL

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Tailwind CSS
- **JavaScript**: Dynamic content and interactions
- **JSON**: Data storage for blog posts
- **Local Storage**: Temporary data management

### File Structure
```
├── index.html              # Homepage
├── about.html              # About page
├── products.html           # Products showcase
├── technology.html         # Technology page
├── blog.html              # Blog listing page
├── team-contact.html      # Team and contact page
├── company-info.html      # Company information (admin access)
├── admin-login.html       # Admin login page
├── admin-dashboard.html   # Admin dashboard
├── admin.html            # Blog management
├── content-editor.html   # Content editing
├── blog-posts.json       # Blog posts data
├── blog-debug.html       # Debug tool
└── assets/               # Images and videos
```

### Security Features
- Password-protected admin access
- Hidden admin URLs
- Session management
- Input validation
- File upload restrictions

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Customization

### Changing Colors
Edit the CSS variables in each HTML file:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Adding New Pages
1. Create a new HTML file
2. Copy the structure from existing pages
3. Update navigation links
4. Add to admin dashboard if needed

### Modifying Blog Categories
Edit the category options in `admin.html`:
```html
<option value="YourCategory">Your Category</option>
```

## 🚨 Troubleshooting

### Blog Posts Not Appearing
1. Check browser console for errors
2. Clear browser cache and refresh
3. Verify all required fields are filled
4. Check image file size (max 5MB)

### Admin Access Issues
1. Make sure you're using the correct password: `<YOUR_PASSWORD_HERE>`
2. Try different access methods
3. Clear browser cache
4. Check if JavaScript is enabled

### Image Upload Problems
1. Ensure file is under 5MB
2. Use supported formats: JPG, PNG, GIF, WebP
3. For URLs, make sure it's a direct image link

## 📞 Support

For technical support or questions:
- Email: ecocycleinnovations1@gmail.com
- Website: ecocycleinnovations.in

## 📄 License

This project is proprietary to Ecocycle Innovations. All rights reserved.

## 🔄 Updates

### Recent Updates
- ✅ Added file upload for blog images
- ✅ Implemented secure admin access
- ✅ Added responsive design
- ✅ Created content management system
- ✅ Added hidden admin access methods

### Future Enhancements
- [ ] Edit existing blog posts
- [ ] Bulk blog post management
- [ ] Advanced image editing
- [ ] Analytics dashboard
- [ ] Multi-language support

---

**Built with ❤️ for Ecocycle Innovations**

*Last updated: September 2024*
