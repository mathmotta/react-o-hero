const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/db/connection');

describe('session', () => {
    beforeEach(async () => {
        await conn.migrate.latest();
    });

    afterAll(async () => {
        await conn.destroy()
        await conn.migrate.rollback();
    })

    it('should be able to login', async () => {
        const responseNgo = await request(app).post('/ngos').send({
                name:"IMVF",
                email:"info@test.pt",
                whatsapp:"351213256300",
                city:"Lisboa",
                country:"Portugal"
            });

        const response = await request(app).post('/sessions').send({
                id:responseNgo.body.id,
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
    });

});