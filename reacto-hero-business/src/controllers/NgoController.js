const crypto = require('crypto');


const connection = require('../db/connection')

module.exports = {
    async index (request, response){
        const ongs = await connection('ngo').select('*');
        return response.json(ongs);
    },


    async create(request, response){
        const { name, email, whatsapp, city, country} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ngo').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            country,
        });
        return response.json({id});
    }
}