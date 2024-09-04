const request = require("supertest");
const app = require("../../index");

describe("POST /api/v1/user/new", () => {
  it("should return message error when name is not provided", async () => {
    const res = (await request(app).post("/api/v1/user/new")).send({});
    expect(res.statusCode).toBe(400);
    expect(res.headers["content-type"]).toContain("application/json");
    expect(res.body.message).toBe("Name is required");
  });
});
