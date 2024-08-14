//Essa parte não foi idéia minha, peguei exemplos da internet e chat gpt

function inputAjust(inputElement) {
    inputElement.addEventListener('change', function (e) {
        let value = e.target.value;

        // Remove qualquer caractere que não seja número
        value = value.replace(/\D/g, '');

        // Converte para número e limita a 4 dígitos
        if (value.length > 4) {
            value = value.substring(0, 4);
        }

        // Se a string estiver vazia, defina o valor como vazio
        if (value === '') {
            e.target.value = '';
            return;
        }

        // Converte para número decimal
        let numericValue = parseFloat(value) / 100;

        // Limita o valor a 10.00 - aqui
      /*   if (numericValue > 10.00) {
            numericValue = 10.00;
        } */

        // Atualiza o valor do campo de texto com a máscara aplicada
        e.target.value = numericValue.toFixed(2);
    });
}

// exemplo usando get byid.

/* const inputField = document.getElementById('form-n1');
inputAjust(inputField);
 */

document.querySelectorAll('.simple-input').forEach(function(inputElement) {
    inputAjust(inputElement)

});
