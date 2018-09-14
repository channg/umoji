import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'index.js',
  output: [{
    file: 'dist/umoji.umd.js',
    format: 'umd',
    name: 'umoji'
  }, {
    file: 'dist/umoji.esm.js',
    format: 'esm',
    name: 'umoji'
  }],
  
  plugins: [commonjs()]
};