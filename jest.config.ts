export default {
  preset: 'ts-jest',
  clearMocks: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jest-environment-jsdom',
  transform: { '^.+\\.(ts|tsx)$': ['esbuild-jest', { sourcemap: true }] },
  setupFilesAfterEnv: ['./jest.setup.ts'],
}
