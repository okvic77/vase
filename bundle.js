var assets = require('gulp-bundle-assets-append');
module.exports = {
  bundle: {
    main: {
      scripts: [
        './bower_components/semantic/dist/semantic.min.js',
      ],
      styles: [
        './bower_components/semantic/dist/semantic.min.css'
      ],
      options: {
        uglify: ['production'],
        minCSS: ['production'],
        rev: ['production'],
        maps: process.env.NODE_ENV == 'production',
        transforms: {
          styles: assets.append
        },
        result: {
          type: {
            scripts: 'plain',
            styles: 'plain'
          }
        }
      }
    }
  }
};
