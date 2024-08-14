//captura as informações do formulário
const formulario = document.getElementById('form-grades'); 
// Adicionando um ouvinte de evento para a submissão do formulário
formulario.addEventListener('submit', function(event) {

    // evita que o formulário recarregue depois de enviar as informações
    event.preventDefault(); 

    // variaveis que pegam as informações do form como string
    var n1String = document.getElementById('form-n1').value;
    var apString = document.getElementById('form-ap').value;
    var aiString = document.getElementById('form-ai').value;
    var n3String = document.getElementById('form-n3').value;

    // string >> number
    let n1 = Number(n1String);
    let ap = Number(apString);
    let ai = Number(aiString);
    let n3 = Number(n3String);

    let n2 = (ap+ai)/2;
    let media = (n1+n2)/2; // inicializada como n1+n2
    let logStatus; // log status 
    let resetMsg; // chama a função clear Msg
    let setMsg; // chama a função finalGrade
    let prevGrade; // Guarda a informação de nota que precisa ser atingida em N2 ou N3
    let resolve; // chama a função para limpar as variaveis

    // Função que define o status - Vai ser usada para gerar log.
    function printStatus(media) {
        if( media > 6) { 
            logStatus = ('Aprovado(a)')

        } else if ( n3 == '') {
            logStatus = ('Em recuperação')
        
        } else {
            logStatus = ('Reprovado(a)')
        }
        console.log(logStatus, 'gerado pela func. printStatus')
    };
    
    // Função que define a mensagem deve ser enviada quando houver N3
    function finalGrade (media, n1, n2, n3) {

        // identifica qual a maior nota e guarda a nota necessária para atingir a média.
        if (n1 >= n2) {
            prevGrade = 12-n1
            console.log('calculei substituindo n2')
        } else {
            prevGrade = 12-n2
            console.log('calculei substituindo n1')
        }

        console.log('Média: ' + media)

        // Configura a mensagem
        if (media < 6 && n3 == '') {
            document.getElementById("message-alert").style.display = "flex";
            document.getElementById("text-alert").innerHTML = "<b>Atenção!</b> Você precisa tirar <b>" + prevGrade + " em N3</b> para ser aprovado";
            document.getElementById("emoji-alert").innerHTML = "🤓";
            
            console.log("Média: " + media );

        } else if (media >= 6 && n3 >= 0){
            document.getElementById("message-success").style.display = "flex";
            document.getElementById("text-success").innerHTML = "Parabéns!!! <b>Você foi aprovado</b>";
            document.getElementById("emoji-alesuccessrt").innerHTML = "🎉";

            console.log("Média: " + media );

        } else if (media < 6 && n3 != '') {
            document.getElementById("message-alert").style.display = "flex";
            document.getElementById("text-alert").innerHTML = "<b>Você não atingiu a média.</b> </br> <i>Entre em contato com a secretária para saber como refazer a matéria.</i>";
            document.getElementById("emoji-alert").innerHTML = "😭";

            console.log("status: " + statusNow );
            console.log("Média: " + media );

        } else {
            document.getElementById("message-alert").style.display = "flex";
            document.getElementById("text-alert").innerHTML = "<b>Algo deu errado!!!</b>";
            document.getElementById("emoji-alert").innerHTML = "😱";

            console.log("status: " + statusNow );
            console.log("Média: " + media );
        }

        console.log(prevGrade);
        console.log(statusNow);
    }

    // Função para resetar a caixa de mensagem
    function clearMsg(){
        document.getElementById("message-alert").style.display = "none";
        document.getElementById("message-default").style.display = "none";
        document.getElementById("message-success").style.display = "none";
    };
    
    // Função para resetar as variaveis
    function clearGrades(){

    let n2 = (ap+ai)/2;
    let media = (n1+n2)/2 ;
    let statusNow; // Indica se atingiu ou não a média 
    let logStatus; // log status 
    let resetMsg; // chama a função clear Msg
    let setMsg; // chama a função finalGrade
    let prevGrade; // Guarda a informação de nota que precisa ser atingida em N2 ou N3

    document.getElementById("p-n1").innerHTML = '--';
    document.getElementById("p-n2").innerHTML = '--';
    document.getElementById("p-n3").innerHTML = '--';
    document.getElementById("p-media").innerHTML = '--';

    };

    if (n1 > 10 || ap > 10 || ai > 10 || n3 > 10 ) {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("message-alert").style.display = "flex";
        document.getElementById("text-alert").innerHTML = "Hmmm… Parece que há algum erro nas suas notas. </br> <i> Sua nota não pode ser maior que 10.</i>";
        document.getElementById("emoji-alert").innerHTML = "🫠";


    } else if (n1 == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis
        
        document.getElementById("message-alert").style.display = "flex";
        document.getElementById("text-alert").innerHTML = "Hmmm… Não há informações suficientes para calcular sua nota…";
        document.getElementById("emoji-alert").innerHTML = "🧐";

    } else if (ap == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis
        prevGrade = 12-n1; // configura

        document.getElementById("p-n1").innerHTML = n1;
 
        document.getElementById("message-default").style.display = "flex";
        document.getElementById("text-default").innerHTML = "Você precisa tirar <b>" + prevGrade + " ou mais</b> em N3 para manter a média. <i>(N3 é igual a média entre AP e AI)</>";
        document.getElementById("emoji-default").innerHTML = "📚";


    } else if (ai == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("p-n1").innerHTML = n1;
        prevGrade = 24 - ap - (2 * n1); // Em alguns casos está gerando números negativos

        document.getElementById("message-default").style.display = "flex";
        document.getElementById("text-default").innerHTML = "Você precisa tirar " + prevGrade + " ou mais em AI para manter a média.";
        document.getElementById("emoji-default").innerHTML = "📚";

    } else if (media >= 6) {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-media").innerHTML = media;

        document.getElementById("message-success").style.display = "flex";
        document.getElementById("text-success").innerHTML = "Parabéns, você foi aprovado!!!";
        document.getElementById("emoji-success").innerHTML = "🎉";

    } else if (n3 == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);

    } else if (n3 <= n1 && n3 <= n2) {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis
        media = (n1+n2)/2; // assumi que se a nota em n3 for igual a n1 e n2 ela não substitui nada

        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-n3").innerHTML = n3;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);

    } else if (n1 >= n2) {
        resolve = clearGrades(); // reseta variaveis
        resetMsg = clearMsg(); // reseta mensagens
        media = (n1+n3)/2;// recalcula média

        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-n3").innerHTML = n3;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);

    } else {
        resolve = clearGrades(); // reseta variaveis
        resetMsg = clearMsg(); // reseta mensagens
        media = (n2+n3)/2; // recalcula média

        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-n3").innerHTML = n3;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);

    }    

       /*  document.getElementById("p-n1").innerHTML = `<p>${n1}</p>`;
        document.getElementById("p-n2").innerHTML = `<p>${n2}</p>`;
        document.getElementById("p-n3").innerHTML = `<p>${n3}</p>`;
        document.getElementById("p-media").innerHTML = `<p>${media}</p>`;
        document.getElementById("p-media").innerHTML = `<p>${media}</p>`;
 */

});
