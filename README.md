# fbla-inve-11tysite (foxesinvest.netlify.app)

### Getting started using the boilerplate

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Eleventy-Starter-Boilerplate.git my-project-name
cd my-project-name
npm install
```

### Getting started using this site

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/LukeDavies12/fbla-inv-11tysite.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:8080 with your favorite browser to see your blog.

### Project structure

```
.
├── public             # Static files
│   └── assets
│       └── images     # Images not needed by Webpack
└── src
    ├── _data          # Eleventy data folder
    ├── _includes
    │   └── layouts    # HTML layout files
    ├── assets         # Assets folder that needs to be processed by Webpack
    │   ├── images
    │   │   └── posts  # Images used in your blog posts (will be compressed by Webpack)
    │   └── styles     # Your blog CSS files
    └── posts          # Your blog posts
```
also, the references folder is in src/references

### Customization

You can easily configure Eleventy Starter Boilerplate. Please change the following file:

- `public/assets/images/logo.png`: your blog logo
- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your blog favicon, you can generate from https://favicon.io/favicon-converter/
- `src/_data/site.json`: your blog configuration
- `src/_includes/layouts`: your blog HTML layout
- `src/assets/styles/main.css`: your blog CSS file using Tailwind CSS

### Deploy to production

You can see the results locally in production mode with:

```
npm run serve
```

The generated HTML and CSS files are minified. It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build
```

Now, your blog is ready to be deployed. All generated files are located at `_site` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Eleventy-Starter-Boilerplate&stack=cms)

### Remove Netlify files and Netlify CMS

If you don't use Netlify, you can easily remove all Netlify related files:

- `public/admin`, the entier folder
- `src/_includes/layouts/base.ejs`, the loaded script `netlify-identity-widget.js` and the inline script `if (window.netlifyIdentity) { ...`
- `netlify.toml`, the entire file