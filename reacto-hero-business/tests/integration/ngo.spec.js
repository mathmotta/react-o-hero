const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/db/connection');

describe('NGO', () => {
    beforeEach(async () => {
        await conn.migrate.rollback();
        await conn.migrate.latest();
    });

    afterAll(async () => {
        await conn.destroy()
    })

    it('should be able to create a new NGO', async () => {
        const response = await request(app).post('/ngos').send({
                name:"IMVF",
                email:"info@test.pt",
                whatsapp:"351213256300",
                city:"Lisboa",
                country:"Portugal"
            });
        
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});