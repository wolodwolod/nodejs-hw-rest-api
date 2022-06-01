const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const request = require("supertest");
require("dotenv").config();

const app = require("../app");
const {User} = require('../models_schemas/User');

const { DB_TEST_HOST } = process.env;

// const { describe, beforeAll, afterAll, beforeEach, afterEach, test, expect } = require("jest");


describe("test auth routes", () => {
  let server;
  beforeAll(() => { server = app.listen(3000) });
  afterAll(() => server.close());

  beforeEach(async () => {
    mongoose.connect(DB_TEST_HOST)
  });

  afterEach(async () => {
    User.collection.drop(() => {
    mongoose.connection.close()
    })
  });

  test("test login route", async () => {
    const newUser = {
      email: "bendyk@gmail.com",
      password: "1234567"
    };
   
    newUser.password = await bcrypt.hash(newUser.password, 10);
    const user = await User.create(newUser);    

    const loginUser = {
      email: "bendyk@gmail.com",
      password: "1234567"
    };

    const response = await request(app).post("/api/users/login").send(loginUser);
    expect(response.statusCode).toBe(201);
    const { body } = response;
    expect(body.token).toBeTruthy();
    const { token } = await User.findById(user._id);
    expect(body.token).toBe(token);
  })
});


