//Essa parte não foi idéia minha, peguei exemplos da internet e chat gpt

function inputAjust(inputElement) {
    inputElement.addEventListener('input', function (e) {
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

        // Atualiza o valor do campo de texto com a máscara aplicada
        e.target.value = numericValue.toFixed(2);
    });
}

document.querySelectorAll('.simple-input').forEach(function(inputElement) {
    inputAjust(inputElement)

});
