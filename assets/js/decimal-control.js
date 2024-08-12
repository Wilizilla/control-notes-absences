document.getElementById('form-n1').addEventListener('input', function (e) {
    let value = e.target.value;

    // Remove qualquer caractere que não seja número
    value = value.replace(/\D/g, '');

    // Se o valor tiver mais de 4 dígitos, corta para os primeiros 4
    if (value.length > 4) {
        value = value.substring(0, 4);
    }

    // Adiciona a vírgula para formatar como decimal
    if (value.length >= 3) {
        value = value.slice(0, value.length - 2) + '.' + value.slice(value.length - 2);
    }

    // Atualiza o valor do campo de texto com a máscara aplicada
    e.target.value = value;
    
});

document.getElementById('form-ap').addEventListener('input', function (e) {
    let value = e.target.value;

    // Remove qualquer caractere que não seja número
    value = value.replace(/\D/g, '');

    // Se o valor tiver mais de 4 dígitos, corta para os primeiros 4
    if (value.length > 4) {
        value = value.substring(0, 4);
    }

    // Adiciona a vírgula para formatar como decimal
    if (value.length >= 3) {
        value = value.slice(0, value.length - 2) + '.' + value.slice(value.length - 2);
    }

    // Atualiza o valor do campo de texto com a máscara aplicada
    e.target.value = value;
});

document.getElementById('form-ai').addEventListener('input', function (e) {
    let value = e.target.value;

    // Remove qualquer caractere que não seja número
    value = value.replace(/\D/g, '');

    // Se o valor tiver mais de 4 dígitos, corta para os primeiros 4
    if (value.length > 4) {
        value = value.substring(0, 4);
    }

    // Adiciona a vírgula para formatar como decimal
    if (value.length >= 3) {
        value = value.slice(0, value.length - 2) + '.' + value.slice(value.length - 2);
    }

    // Atualiza o valor do campo de texto com a máscara aplicada
    e.target.value = value;
});

document.getElementById('form-n3').addEventListener('input', function (e) {
    let value = e.target.value;

    // Remove qualquer caractere que não seja número
    value = value.replace(/\D/g, '');

    // Se o valor tiver mais de 4 dígitos, corta para os primeiros 4
    if (value.length > 4) {
        value = value.substring(0, 4);
    }

    // Adiciona a vírgula para formatar como decimal
    if (value.length >= 3) {
        value = value.slice(0, value.length - 2) + '.' + value.slice(value.length - 2);
    }

    // Atualiza o valor do campo de texto com a máscara aplicada
    e.target.value = value;
});

