import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  bail: true,
  displayName: 'SIMPLEX_HOOK',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testMatch: [
    '**/__test__/*test.ts',
  ],
  moduleFileExtensions: ['ts', 'js'],
}

export default config
