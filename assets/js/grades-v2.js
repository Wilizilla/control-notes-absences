//captura as informações do formulário
const formulario = document.getElementById('form-grades'); 
// Adicionando um ouvinte de evento para a submissão do formulário
formulario.addEventListener('submit', function(event) {

    event.preventDefault(); // evita que o formulário recarregue

    var n1String = document.getElementById('form-n1').value;
    var apString = document.getElementById('form-ap').value;
    var aiString = document.getElementById('form-ai').value;

    var n1 = Number(n1String);
    var ap = Number(apString);
    var ai = Number(aiString);

    if (n1 == '') {
        console.log('Nenhuma nota lançada');
        document.getElementById("p-n1").innerHTML = `<p>Não há notas disponíveis</p>`;

    } else {
        console.log('nota em N1:', n1);
        console.log('nota em AP:', ap);
        console.log('nota em AI:', ai);

        let n2= (ap+ai)/2

        document.getElementById("p-n1").innerHTML = `<p>${n1}</p>`;
        document.getElementById("p-n2").innerHTML = `<p>${n2}</p>`;
        document.getElementById("p-n3").innerHTML = `<p>${nome}</p>`;

    }

});
