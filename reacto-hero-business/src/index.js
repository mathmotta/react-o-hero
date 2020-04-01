const express = require('express') 
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (request, response) =>{
    return response.send('Hello!')
}); 
app.listen(3333)