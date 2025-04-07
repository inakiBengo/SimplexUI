import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import postcssImport from 'postcss-import'

// import packageJson from './package.json'

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: 'dist/simplexui.es.js',
        format: 'es',
        name: 'simplexui',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          core: 'core',
          simplex_hook: 'simplex_hook',
        },
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom', 'react-aria', 'clsx', 'react-stately'],
    plugins: [
      postcss({
        plugins: [postcssImport()],
        minimize: false,
        inject: true,
      }),
      resolve({
        extensions: ['.js', '.ts', '.tsx', '.css'],
      }),
      typescript({
        tsconfig: './tsconfig.build.json',
        exclude: ['./Autocomplete/**', './Accordion/**'],
      }),
      babel({
        babelHelpers: 'bundled',
        babelrc: false,
        exclude: /node_modules/,
        extensions: ['.ts', '.tsx'],
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      }),
      commonjs(),
    ],
  },
]
