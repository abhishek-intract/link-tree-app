# 🔗 Custom Linktree on Web3 Infrastructure

A modern, customizable Linktree alternative built with React and TypeScript, designed for deployment on Web3 infrastructure using Spheron Network. Create your own branded link aggregation page with the reliability and permanence of decentralized hosting.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?logo=typescript)
![Web3](https://img.shields.io/badge/Web3-Infrastructure-green)
![Spheron](https://img.shields.io/badge/Powered%20by-Spheron-purple)

## ✨ Features

- **🎨 Fully Customizable**: Easy-to-edit configuration for branding, colors, and links
- **⚡ Fast & Responsive**: Built with modern React and optimized for all devices
- **🌐 Web3 Native**: Deploy on decentralized infrastructure with IPFS permanence
- **🔧 TypeScript Support**: Type-safe development with excellent developer experience
- **📱 Mobile First**: Responsive design that works beautifully on all screen sizes
- **🎯 SEO Optimized**: Built-in meta tags and structured data for better discoverability

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/link-tree-app.git
   cd link-tree-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your Linktree app running locally.

## ⚙️ Configuration

### Customizing Your Linktree

Edit the `src/config.ts` file to customize your Linktree:

```typescript
const config = {
  logoUrl: AppLogo,              // Your brand logo
  favicon: "../favicon.ico",      // Browser tab icon
  title: "Your Brand Name",       // Page title
  description: "Your tagline or description",
  links: [
    {
      key: "website",
      label: "Official Website", 
      iconUrl: WebsiteIcon,
      redirectUrl: "https://your-website.com",
    },
    // Add more links as needed
  ],
};
```

### Adding Custom Icons

1. Place your icon files in `src/assets/icons/`
2. Import them in `config.ts`
3. Reference them in your link configuration

### Styling Customization

- Main styles: `src/components/LinkTree.css`
- Global styles: `src/index.css`
- Customize colors, fonts, spacing, and animations

## 🏗️ Building for Production

### Local Build

```bash
npm run build
# or  
yarn build
```

This creates an optimized production build in the `build/` directory.

### Testing

```bash
npm test
# or
yarn test
```

## 🌐 Deployment Options

### Deploy on Spheron (Recommended)

Spheron provides Web3 infrastructure with IPFS hosting, custom domains, and global CDN.

#### Option 1: Spheron UI (No Code)

1. **Fork this repository** to your GitHub account
2. **Visit [Spheron App](https://app.spheron.network)**
3. **Connect your GitHub** account and install the Spheron GitHub App
4. **Select your forked repository**
5. **Choose your deployment settings**:
   - Framework: React
   - Build command: `npm run build`
   - Output directory: `build`
6. **Select decentralized network** (IPFS, Arweave, etc.)
7. **Deploy** with one click

#### Option 2: Spheron CLI

```bash
# Install Spheron CLI
npm install -g @spheron/cli

# Login to Spheron
spheron login

# Deploy your app
spheron deploy
```

#### Option 3: Traditional Hosting

This app can also be deployed on traditional platforms:
- **Netlify**: Connect your repo and deploy
- **Vercel**: Import from GitHub and deploy
- **GitHub Pages**: Enable Pages in repository settings

## 🌟 Why Web3 Infrastructure?

### Benefits of Decentralized Hosting

- **🔒 Permanence**: Your links will never die if IPFS hash is preserved
- **🌍 Global Distribution**: Content distributed across global node network  
- **🚫 Censorship Resistant**: No single point of failure or control
- **⚡ Performance**: Fast loading through decentralized CDN
- **💰 Cost Effective**: Often cheaper than traditional hosting
- **🔐 Security**: Cryptographic verification of content integrity

### Why Choose Spheron?

- **🎯 Simplified Deployment**: One-click deployment to multiple networks
- **🌐 Custom Domains**: Easy domain attachment and SSL certificates
- **📊 Analytics**: Built-in usage analytics and monitoring
- **🔄 Automatic Backups**: Long-term pinning and redundancy
- **⚡ Enterprise CDN**: High-performance content delivery network
- **🛠️ Developer Tools**: CLI, APIs, and GitHub integration

## 📁 Project Structure

```
link-tree-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── icons/          # Icon files
│   ├── components/
│   │   ├── LinkTree.tsx    # Main component
│   │   └── LinkTree.css    # Component styles
│   ├── config.ts           # App configuration
│   ├── App.tsx             # Root component
│   └── index.tsx          # Entry point
├── package.json
└── tsconfig.json
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production  
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (not recommended)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🆘 Support & Community

- **Documentation**: [Spheron Docs](https://docs.spheron.network/)
- **Discord**: [Join Spheron Community](https://discord.gg/spheron)
- **Twitter**: [@SpheronHQ](https://twitter.com/SpheronHQ)
- **Issues**: [GitHub Issues](https://github.com/your-username/link-tree-app/issues)

## 🎯 Roadmap

- [ ] Dark mode support
- [ ] Analytics dashboard
- [ ] Social media integrations
- [ ] QR code generation
- [ ] A/B testing capabilities
- [ ] Advanced customization options

## 💖 Show Your Support

If you found this template helpful:

1. ⭐ **Star this repository**
2. 🐦 **Share on social media** and tag [@SpheronHQ](https://twitter.com/SpheronHQ)  
3. 🔗 **Add "Powered by Spheron"** to your custom link page
4. 🤝 **Contribute** to make it even better

**Help us expand Web3 infrastructure adoption! 🚀**

---

<div align="center">
  <p>Made with ❤️ for the Web3 community</p>
  <p>
    <a href="https://spheron.network">
      <img src="src/logo.svg" alt="Powered by Spheron" height="30">
    </a>
  </p>
</div>
