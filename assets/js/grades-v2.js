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

     // Ajusta as casas decimais
    n1 = parseFloat(n1.toFixed(2));
    ai = parseFloat(ai.toFixed(2));
    ap = parseFloat(ap.toFixed(2));
    n3 = parseFloat(n3.toFixed(2));

    let n2 = (ap+ai)/2;
    let media = (n1+n2)/2; // inicializada como n1+n2
    let logStatus; // log status 
    let resetMsg; // chama a função clear Msg
    let setMsg; // chama a função finalGrade
    let prevGrade; // Guarda a informação de nota que precisa ser atingida em N2 ou N3
    let resolve; // chama a função para limpar as variaveis
    let print; //Chama a função printStatus

    //ajusta os calculos para 2 casas decimais
    media = media.toFixed(2); 
    n2 = parseFloat(n2.toFixed(2)); 
    
    // Função que define o status - Vai ser usada para gerar log.
    function printStatus(a) {
        
        if ( media >= 6) { 
            logStatus = ('Aprovado(a)')

        } else if ( n3 == '' && ap =='' && ai =='') {
            logStatus = ('Aguardando AP')

        } else if ( n3 == '' && ai =='') {
            logStatus = ('Aguardando AI')
        
        } else if ( n3 == '') {
            logStatus = ('Aguardando N3')
        
        } else {
            logStatus = ('Reprovado')
        }

        console.log('Status: ' + logStatus);
        console.log('N1: '+ n1);
        console.log('N2: '+ n2);
        console.log('ap: '+ ap);
        console.log('ai: '+ ai);
        console.log('N3: '+ n3);
        console.log('Média: '+ media);
    };
    
    // Função que define a mensagem deve ser enviada quando houver N3
    // Os parâmetros são  os seguintes: media = b, N1 =c, N2 = d, N3 = e
    function finalGrade (b, c, d, e) {

        // identifica qual a maior nota e guarda a nota necessária para atingir a média.
        if (c >= d) {
            prevGrade = 12-c
            console.log('calculei substituindo n2')
        } else {
            prevGrade = 12-d
            console.log('calculei substituindo n1')
        }

        console.log('Média: ' + b)

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

            console.log("Média: " + media );

        } else {
            document.getElementById("message-alert").style.display = "flex";
            document.getElementById("text-alert").innerHTML = "<b>Algo deu errado!!!</b>";
            document.getElementById("emoji-alert").innerHTML = "😱";

            console.log("Média: " + media );
        }

    }

    // Função para resetar a mensagem
    function clearMsg(){
        document.getElementById("message-alert").style.display = "none";
        document.getElementById("message-default").style.display = "none";
        document.getElementById("message-success").style.display = "none";
    };
    
    // Função para resetar as variaveis
    function clearGrades(){

    document.getElementById("p-n1").innerHTML = '--';
    document.getElementById("p-n2").innerHTML = '--';
    document.getElementById("p-n3").innerHTML = '--';
    document.getElementById("p-media").innerHTML = '--';

    };

    //Calculo principal ############################

    if (n1 > 10 || ap > 10 || ai > 10 || n3 > 10 ) {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("final-result").style.display = "flex"; 
        document.getElementById("message-alert").style.display = "flex";
        document.getElementById("text-alert").innerHTML = "Hmmm… Parece que há algum erro nas suas notas. </br> <i> Sua nota não pode ser maior que 10.</i>";
        document.getElementById("emoji-alert").innerHTML = "🫠";

        print = printStatus(media);
        console.log('Não há notas');


    } else if (n1 == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis
        
        document.getElementById("final-result").style.display = "flex"; 
        document.getElementById("message-alert").style.display = "flex";
        document.getElementById("text-alert").innerHTML = "Hmmm… Não há informações suficientes para calcular sua nota…";
        document.getElementById("emoji-alert").innerHTML = "🧐";

        print = printStatus(media);
        console.log('N1 vazio');

    } else if (ap == '' && n3 == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis
        prevGrade = 12-n1; // configura
        prevGrade = Math.round(prevGrade * 100) / 100;

        document.getElementById("p-n1").innerHTML = n1;
 
        document.getElementById("final-result").style.display = "flex";
        document.getElementById("message-default").style.display = "flex";
        document.getElementById("text-default").innerHTML = "Você precisa tirar <b>" + prevGrade + " ou mais em N2</b> para manter a média. <i>(N2 é igual a média entre AP e AI)</>";
        document.getElementById("emoji-default").innerHTML = "📚";

        print = printStatus(media);
        console.log('AP vazio');


    } else if (ai == '' && n3 == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("p-n1").innerHTML = n1;
        prevGrade = 24 - ap - (2 * n1); // Em alguns casos está gerando números negativos
        prevGrade = Math.round(prevGrade * 100) / 100;

        document.getElementById("final-result").style.display = "flex";
        document.getElementById("message-default").style.display = "flex";
        document.getElementById("text-default").innerHTML = "Você precisa tirar <b>" + prevGrade + " ou mais em AI </b>para manter a média.";
        document.getElementById("emoji-default").innerHTML = "📚";

        print = printStatus(media);
        console.log('AI vazio');

    } else if (media >= 6) {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-media").innerHTML = media;

        document.getElementById("final-result").style.display = "flex";
        document.getElementById("message-success").style.display = "flex";
        document.getElementById("text-success").innerHTML = "Parabéns, <b>você foi aprovado!!!</b>";
        document.getElementById("emoji-success").innerHTML = "🎉";

        print = printStatus(media);
        console.log('média maior que 6');

    } else if (n3 == '') {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis

        document.getElementById("final-result").style.display = "flex";
        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);

        print = printStatus(media);
        console.log('Média menor que 6 e N3 vazio');

    } else if (n3 <= n1 && n3 <= n2) {
        resetMsg = clearMsg(); // reseta mensagens
        resolve = clearGrades(); // reseta variaveis
        // assumi que se a nota em n3 for igual a n1 e n2 ela não substitui nada

        document.getElementById("final-result").style.display = "flex";
        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-n3").innerHTML = n3;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);
        print = printStatus(media);
        console.log('Média menor que 6 e N3 menor que N1 e N2');

    } else if (n1 >= n2) {
        resolve = clearGrades(); // reseta variaveis
        resetMsg = clearMsg(); // reseta mensagens
        
        media = (n1+n3)/2;// recalcula média
        media = media.toFixed(2); //não é necessário

        document.getElementById("final-result").style.display = "flex";
        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-n3").innerHTML = n3;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);

        print = printStatus(media);
        console.log('Média menor que 6 e N1 maior que N2');

    } else if (n1 <= n2) {
        resolve = clearGrades(); // reseta variaveis
        resetMsg = clearMsg(); // reseta mensagens
        media = (n3 + n2)/2;// recalcula média
        media = media.toFixed(2); //não é necessário

        document.getElementById("final-result").style.display = "flex";
        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-n3").innerHTML = n3;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);

        print = printStatus(media);
        console.log('Média menor que 6 e N1 menor que N2');

    } else {
        resolve = clearGrades(); // reseta variaveis
        resetMsg = clearMsg(); // reseta mensagens
        media = (n2+n3)/2; // recalcula média
        media = media.toFixed(2); // não é necessário

        document.getElementById("final-result").style.display = "flex";
        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-n2").innerHTML = n2;
        document.getElementById("p-n3").innerHTML = n3;
        document.getElementById("p-media").innerHTML = media;

        setMsg = finalGrade(media, n1, n2, n3);

        print = printStatus(media);
        console.log('Média menor que 6 e N1 menor que N2');

    }    

       /*  document.getElementById("p-n1").innerHTML = `<p>${n1}</p>`;
        document.getElementById("p-n2").innerHTML = `<p>${n2}</p>`;
        document.getElementById("p-n3").innerHTML = `<p>${n3}</p>`;
        document.getElementById("p-media").innerHTML = `<p>${media}</p>`;
        document.getElementById("p-media").innerHTML = `<p>${media}</p>`;
 */

});
