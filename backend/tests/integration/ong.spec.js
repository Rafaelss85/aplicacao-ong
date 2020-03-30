const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/conncection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name:  "Teste",
                email: "teste@teste.pt",
                whatsapp: "+351000000000",
                city: "São Paulo",
                uf: "SP"
            })
        console.log(response.body);
        expect(response.body).toHaveProperty('id')
        /* Verificar quantidade de recebida id */
    })
})