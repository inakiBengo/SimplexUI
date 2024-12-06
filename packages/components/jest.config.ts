import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  bail: true,
  displayName: 'SIMPLEX_COMPONENTS',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testMatch: [
    '**/__test__/*.test.tsx',
    '**/*.test.tsx',
  ],
  moduleFileExtensions: ['ts', 'js', 'jsx', 'tsx'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': '<rootDir>/__mocks__/styleMock.ts',
  },
}

export default config
