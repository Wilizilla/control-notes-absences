//captura as informações do formulário
const formulario = document.getElementById('form-grades'); 
// Adicionando um ouvinte de evento para a submissão do formulário
formulario.addEventListener('submit', function(event) {

    event.preventDefault(); // evita que o formulário recarregue

    const n1 = document.getElementById('form-n1').value;
    const ap = document.getElementById('form-ap').value;
    const ai = document.getElementById('form-ai').value;

    console.log('nota em N1:', n1);
    console.log('nota em AP:', ap);
    console.log('nota em AI:', ai);

});
