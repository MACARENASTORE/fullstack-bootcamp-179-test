const request = require("supertest");
const app = require("../../index");

describe("GET /api/v1/hello", () => {
  it('should return a JSON response with message "Hello, World!"', async () => {
    const response = await request(app).get("/api/v1/hello");
    /* Verificar que la respuesta tenga como status code 200 */
    expect(response.statusCode).toBe(200);
    /* Verificar que la respuesta sea en formato JSON */
    expect(response.headers["content-type"]).toContain("application/json");
    /* Verificar que el cuerpo de la respuesta contenga el mensaje esperado */
    expect(response.body.message).toBe("Hello, World!");
    /* expect(response.body).toEqual({maessage:'Hello, World!'}); */
  });
});
