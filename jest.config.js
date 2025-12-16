module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@/src/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
    ],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageDirectory: 'coverage',
    modulePathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/example/node_modules'],
    testMatch: ['<rootDir>/__tests__/**/*.test.{ts,tsx}'],
};
