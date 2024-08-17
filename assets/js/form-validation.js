document.getElementById('form-grades').addEventListener('input', function(event){
   
    const styleN1 = document.querySelector('#form-n1');
    const styleAp = document.querySelector('#form-ap');
    const styleAi = document.querySelector('#form-ai');
    const styleN3 = document.querySelector('#form-n3');
    
    let validationN1 = styleN1.value;
    let validationAp = styleAp.value;
    let validationAi = styleAi.value;
    let validationN3 = styleN3.value;

    // event.preventDefault(); // Impede o envio do formulário se houver campos inválidos

    // validação N1 ###################################
    if (validationN1 > 10){
        document.getElementById('n1-error').innerHTML = 'O valor da nota não pode ser maior que 10.';
        styleN1.classList.add('simple-input-invalid');
    }
    else{
        document.getElementById('n1-error').innerHTML = '';
        styleN1.classList.remove('simple-input-invalid');
    }

    // validação AP
    if (validationAp > 10){
        document.getElementById('ap-error').innerHTML = 'O valor da nota não pode ser maior que 10.';
        styleAp.classList.remove('simple-input');
        styleAp.classList.add('simple-input-invalid');
    }
    else{
        document.getElementById('ap-error').innerHTML = '';
        styleAp.classList.remove('simple-input-invalid');
    }

    // validação AI
    if (validationAi > 10){
        document.getElementById('ai-error').innerHTML = 'O valor da nota não pode ser maior que 10.';
        styleAi.classList.remove('simple-input');
        styleAi.classList.add('simple-input-invalid');
    }
    else{
        document.getElementById('ai-error').innerHTML = '';
        styleAi.classList.remove('simple-input-invalid');
    }

    // validação N3
    if (validationN3 > 10){
        document.getElementById('n3-error').innerHTML = 'O valor da nota não pode ser maior que 10.';
        styleN3.classList.remove('simple-input');
        styleN3.classList.add('simple-input-invalid');
    }
    else{
        document.getElementById('n3-error').innerHTML = '';
        styleN3.classList.remove('simple-input-invalid');
    }

});

