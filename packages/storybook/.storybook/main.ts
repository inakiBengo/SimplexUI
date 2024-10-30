import type { StorybookConfig } from '@storybook/react-webpack5'
import type { Options } from '@swc/core'

const config: StorybookConfig = {
  stories: [
    '../../components/**/storybook/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react-webpack5',
  swc: (config: Options): Options => {
    config.jsc = {
      parser: {
        syntax: 'typescript',
        tsx: true,
        dynamicImport: true,
      },
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    }
    return config
  },
}

export default config
