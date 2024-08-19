const express = require('express');
const path = require('path');
app = express();

// configura o express  para servir arquivos estáticos da pasta public

app.use(express.static(path.join(__dirname, 'public')))

// servir o arquivo html na rota raiz '/'

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'grades.html'));
}); 

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
});