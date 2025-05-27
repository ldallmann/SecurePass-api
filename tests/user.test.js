import request from 'supertest';
import app from '../index.js';

test("Deve criar um novo usuário com sucesso", async () => {
    const res = await request(app)
      .post("/user/")
      .send({
        Nome_Usuario: "João",
        Email: "joao@email.com",
        Telefone: "(48)99999-0000",
        Permissoes_ID_Permissoes: 1
      });
  
    expect(res.statusCode).toBe(201);
    expect(res.body).toBe("Usuário criado com sucesso.");
  }); 

test("Não deve criar usuário com email inválido", async () => {
    const res = await request(app)
      .post("/user/")
      .send({
        Nome_Usuario: "Teste",
        Email: "invalido",
        Telefone: "(48)99999-0000",
        Permissoes_ID_Permissoes: 1
      });
  
    expect(res.statusCode).toBe(400);
  });
