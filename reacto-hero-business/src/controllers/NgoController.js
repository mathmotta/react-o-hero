const generateUniqueId = require('../util/generateUniqueId');


const connection = require('../db/connection')

module.exports = {
    async index (request, response){
        const ongs = await connection('ngo').select('*');
        return response.json(ongs);
    },


    async create(request, response){
        const { name, email, whatsapp, city, country} = request.body;

        const id = generateUniqueId();
    
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