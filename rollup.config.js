const { terser } = require('rollup-plugin-terser');

module.exports = [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/lors.js',
            format: 'esm'
        }
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/lors.min.js',
            format: 'iife',
            name: 'lors'
        },
        plugins: [
            terser()
        ]
    }
];
