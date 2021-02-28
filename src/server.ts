import express from 'express';

const app = express();

/**
*
*  GET => Busca
*  POST => Salvar
*  PUT => Alterar
*  DELETE => Deletar
*  PATCH => Alteração específica
* 
*/

app.get("/", (request, response) =>{
    return response.json({message: "Hello World - NLW4"});
});

app.post("/", (resquest, response) => {
    //recebeu dados para salvar

    return response.json({message: "Os dados foram salvos com sucesso!"});
});



app.listen(3333, () => console.log("Server is running!"));

