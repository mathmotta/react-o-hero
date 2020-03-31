const express = require('express') //Equivalente a import

const app = express(); // variavel para instanciar app

app.get('/', (request, response) =>{
    return response.send('Hello!');
}); // rota raiz
app.listen(3333); // ouve porta 3333