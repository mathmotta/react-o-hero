
const connection = require('../db/connection')

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('occurrence').count();

        const occurrences = await connection('occurrence')
            .join('ngo', 'ngo.id', '=', 'occurrence.ngo_id')
            .limit(5)
            .offset((page-1)*5)
            .select(['occurrence.*', 'ngo.name', 'ngo.email', 'ngo.whatsapp', 'ngo.city', 'ngo.country']);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(occurrences);
    },

    async create(request, response){
        const { title, description, value} = request.body;
        const ngo_id = request.headers.authorization;
        const [id] = await connection('occurrence').insert({
            title,
            description,
            value,
            ngo_id,
        });

        
        return response.json({id});
    },

    async delete(request, response){
        const {id} = request.params;
        const ngo_id = request.headers.authorization;

        const occurrence = await connection('occurrence')
            .where('id', id).select('ngo_id').first();


        if(occurrence.ngo_id != ngo_id){
            return response.status(401).json({error:'Operation not permited.'});
        }

        await connection('occurrence').where('id', id).delete();

        return response.status(204).send();
    }
}