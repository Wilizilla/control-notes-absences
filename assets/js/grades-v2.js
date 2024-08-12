//captura as informações do formulário
const formulario = document.getElementById('form-grades'); 
// Adicionando um ouvinte de evento para a submissão do formulário
formulario.addEventListener('submit', function(event) {

    event.preventDefault(); // evita que o formulário recarregue

    var n1String = document.getElementById('form-n1').value;
    var apString = document.getElementById('form-ap').value;
    var aiString = document.getElementById('form-ai').value;
    var n3String = document.getElementById('form-n3').value;

    let n1 = Number(n1String);
    let ap = Number(apString);
    let ai = Number(aiString);
    let n3 = Number(n3String);
    let n2 = (ap+ai)/2;
    let media = (n1+n2)/2 ;
    let logStatus; // log status 
    let resetMsg; // chama a função clear Msg
    let setMsg; // chama a função finalGrade
    let prevGrade; // Guarda a informação de nota que precisa ser atingida em N2 ou N3
    let resolve;

    // Função que define o status
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
    
    // Função que define a mensagem em N3
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

        // configura a mensagem
        if (media < 6 && n3 == '') {
            document.getElementById("message-alert").style.display = "flex";
            document.getElementById("text-alert").innerHTML = "Atenção! Você precisa tirar " + prevGrade + " para ser aprovado";
            document.getElementById("emoji-alert").innerHTML = "😱";
            
            console.log("Média: " + media );

        } else if (media >= 6 && n3 >= 0){
            document.getElementById("message-success").style.display = "flex";
            document.getElementById("text-success").innerHTML = "Parabéns!!! Você foi aprovado";
            document.getElementById("emoji-alesuccessrt").innerHTML = "🎉";

            console.log("Média: " + media );

        } else if (media < 6 && n3 >= 0) {
            document.getElementById("message-default").style.display = "flex";
            document.getElementById("text-default").innerHTML = "Você não atingiu a média necessária. Entre em contato com a secretária para saber como refazer a matéria";
            document.getElementById("emoji-default").innerHTML = "😳";

            console.log("status: " + statusNow );
            console.log("Média: " + media );

        } else {
            document.getElementById("message-alert").style.display = "flex";
            document.getElementById("text-alert").innerHTML = "Algo deu errado";
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
    
    if (n1 == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis
        
        document.getElementById("message-alert").style.display = "flex";
        document.getElementById("text-alert").innerHTML = "Hmmm… Não há informações suficientes para calcular sua nota…";
        document.getElementById("emoji-alert").innerHTML = "🧐";

    } else if (ap == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis
        prevGrade = 12-n1

        document.getElementById("p-n1").innerHTML = n1;
 
        document.getElementById("message-default").style.display = "flex";
        document.getElementById("text-default").innerHTML = "Você precisa tirar " + prevGrade + " ou mais em AP e AI para manter a média.";
        document.getElementById("emoji-alert").innerHTML = "📚";


    } else if (ai == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("p-n1").innerHTML = n1;
        prevGrade = 24 - ap - (2 * n1);

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
        media = (n1+n3)/2;

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
