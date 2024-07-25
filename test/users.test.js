const request = require('supertest');
const app = require('../app');

describe('POST /users/add', () => {
    it('Should create user and return 200 or 400', async () => {
        const response = await request(app).post('/users/add').send({
            name: "John Doe",
            email: "jhon@gmail.com",
            password: "12345678"
        });
        expect(response.status === 200 || response.status === 400).toBe(true);
    });
});

describe('GET /users/list', () => {
    it('Should return an user list', async () => {
        const response = await request(app).get('/users/list');
        expect(response.status === 200).toBe(true);
    });
});

describe('POST /users/update/1', () => {
    it('Should update user and return 200 or 400', async () => {
        const response = await request(app).put('/users/update/1').send({
            name: "John Doe"
        });
        console.log(response.status)
        expect(response.status === 200 || response.status === 400).toBe(true);
    });
});

describe('POST /users/delete/1', () => {
    it('Should delete user by id and return 200 or 400', async () => {
        const response = await request(app).delete('/users/delete/1').send({
            name: "John Doe"
        });
        expect(response.status === 200 || response.status === 400).toBe(true);
    });
});