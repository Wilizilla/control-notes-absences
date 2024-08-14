document.getElementById('form-grades').addEventListener('submit', function(event){
   
    const validationN1 = document.getElementById('form-n1').value;
    const validationAp = document.getElementById('form-ap').value;
    const validationAi = document.getElementById('form-ai').value;
    const validationN3 = document.getElementById('form-n3').value;

    // validação N1
    if (validationN1 > 10){
        document.getElementById('n1-error').innerHTML = 'O valor da nota não pode ser maior que 10.'
    }
    else{
        document.getElementById('n1-error').innerHTML = ''
    }

    // validação AP
    if (validationAp > 10){
        document.getElementById('ap-error').innerHTML = 'O valor da nota não pode ser maior que 10.'
    }
    else{
        document.getElementById('ap-error').innerHTML = ''
    }

    // validação AI
    if (validationAi > 10){
        document.getElementById('ai-error').innerHTML = 'O valor da nota não pode ser maior que 10.'
    }
    else{
        document.getElementById('ai-error').innerHTML = ''
    }

    // validação N3
    if (validationN3 > 10){
        document.getElementById('n3-error').innerHTML = 'O valor da nota não pode ser maior que 10.'
    }
    else{
        document.getElementById('n3-error').innerHTML = ''
    }

});