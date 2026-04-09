const request = require('supertest');
const http = require('http');
const app = require('./app');

let server;

beforeAll(() => {
  server = http.createServer(app);
});

afterAll(() => {
  server.close();
});

describe('App Tests', () => {
  test('GET / should return welcome message', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from my CI/CD pipeline!');
  });

  test('GET /health should return OK', async () => {
    const res = await request(server).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});