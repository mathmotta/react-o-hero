const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/db/connection');

describe('occurrence', () => {
    beforeEach(async () => {
        await conn.migrate.latest();
    });

    afterAll(async () => {
        await conn.destroy()
        await conn.migrate.rollback();
    })

    it('should be able to create a new occurrence', async () => {
        const responseNgo = await request(app).post('/ngos').send({
                name:"IMVF",
                email:"info@test.pt",
                whatsapp:"351213256300",
                city:"Lisboa",
                country:"Portugal"
            });
        
        expect(responseNgo.body.id).toHaveLength(8);

        const responseOc = await request(app).post('/occurrences').send({
            title:"SomeOcc",
            description:"desc",
            value:120,
        }).set('authorization',responseNgo.body.id);

        expect(responseOc.body).toHaveProperty('id');
    });

    it('should be able to delete a occurrence', async () => {
        const responseNgo = await request(app).post('/ngos').send({
                name:"IMVF",
                email:"info@test.pt",
                whatsapp:"351213256300",
                city:"Lisboa",
                country:"Portugal"
            });
        
        const responseOcCreate = await request(app).post('/occurrences').send({
            title:"SomeOcc",
            description:"desc",
            value:120,
        }).set('authorization',responseNgo.body.id);

        const response = await request(app).delete(`/occurrences/${responseOcCreate.body.id}`).send().set('authorization',responseNgo.body.id);
        expect(response.status).toBe(204);
    });

    it('should be able to list occurrences', async () => {
        const response = await request(app).get('/occurrences').send();
        
        expect(response.body.length).toBeGreaterThan(0);
    });
});