const connection = require('../db/connection')

module.exports = {
    async index(request, response){
        const ngo_id = request.headers.authorization

        const occurences = await connection('occurrence').where('ngo_id', ngo_id).select('*');
        return response.json(occurences)
    }
}