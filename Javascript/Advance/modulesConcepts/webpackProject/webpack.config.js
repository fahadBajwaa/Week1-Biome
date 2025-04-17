const path = require('path'); // imports Node.js's built-in path module, which provides utilities for working with file and directory paths.

module.exports = { // exports the configuration object so that Webpack can use it when bundling project.

    entry: './src/index.js', // Webpack will begin its bundling process at ""./src/index.js" and include all dependencies that are imported or required within that file.​

    output: { // Specifies the output settings for the bundled files.​

        filename: 'bundle.js', // name of the output file that Webpack will generate.

        path: path.resolve(__dirname, 'dist'), // Determines the absolute path to the output directory, "path.resolve" combines the current directory (__dirname) with 'dist' to create an absolute path.​

    },

    mode: 'development' // mode for Webpack, which can be 'development', 'production', or 'none'

};


// These are the different mode:

// 1. 'development': Enables useful names for modules and chunks, and sets process.env.NODE_ENV to 'development'. This mode is optimized for speed and debugging.
// 2. 'production': Enables optimizations like minification and tree-shaking, and sets process.env.NODE_ENV to 'production'. This mode is optimized for performance and smaller bundle sizes.
// 3. 'none': Disables all default optimizations.​