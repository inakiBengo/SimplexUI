import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'

import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'umd',
        sourcemap: true,
        name: 'simplexui',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        name: 'simplexui',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
      },
    ],
    external: ['react', 'react-dom', '@simplexui/core'],
    plugins: [
      nodeResolve(),
      postcss({
        modules: true,
        inject: true,
        minimize: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      babel({
        exclude: /node_modules/,
        extensions: ['.ts', '.tsx'],
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
        babelHelpers: 'bundled',
      }),
    ],
  },
]
