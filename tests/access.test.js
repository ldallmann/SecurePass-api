import request from 'supertest';
import app from '../index.js';

test("Deve registrar uma tentativa de acesso", async () => {
    const res = await request(app).post("/access/").send({
      Codigo_Chave: 101,
      Data_Hora_acesso: '2024-06-01 08:00:00',
      Usuario_ID_Usuario: 1,
      Porta_ID_Porta: 1,
    });
    expect(res.statusCode).toBe(201);
  });  