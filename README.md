# Gen56 Progressive Workspace

Welcome to the **Gen56** Next-Generation Digital Experiences asset bundle.

## Structure
- `index.html`, `about.html`, `services.html`, `contact.html`: Core semantic HTML structures.
- `css/style.css`: Customized, responsive dark and green theme layout configurations.
- `js/app.js`: Core event triggers and Progressive Web App service worker registrations.
- `sw.js` & `manifest.json`: Native PWA assets.
- `firebase.json` & `.firebaserc`: Deploy profiles for instant cloud hosting.

## Deployment Instructions
1. Initialize the Firebase CLI structure:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
2. Authenticate the remote setup and deploy straight to production:
   ```bash
   firebase deploy
   ```
