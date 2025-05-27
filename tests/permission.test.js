import request from 'supertest';
import app from '../index.js';

test("Deve retornar todas as permissões", async () => {
    const res = await request(app).get("/permission/");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  
test("Deve retornar 404 para rota inexistente", async () => {
    const res = await request(app).get("/rota-invalida");
    expect(res.statusCode).toBe(404);
  });