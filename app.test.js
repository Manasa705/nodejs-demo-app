const app = require('./app');

describe('App Tests', () => {
  test('app is defined', () => {
    expect(app).toBeDefined();
  });

  test('basic math works', () => {
    expect(1 + 1).toBe(2);
  });
});