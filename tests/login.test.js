const request = require("supertest");
const app = require("../app");

test("Login success", async () => {

  const res = await request(app)
    .post("/login")
    .send({
      email: "admin@test.com",
      password: "123456"
    });

  expect(res.statusCode).toBe(200);

});