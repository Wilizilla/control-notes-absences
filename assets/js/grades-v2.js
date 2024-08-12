//captura as informações do formulário
const formulario = document.getElementById('form-grades'); 
// Adicionando um ouvinte de evento para a submissão do formulário
formulario.addEventListener('submit', function(event) {

    event.preventDefault(); // evita que o formulário recarregue

    var n1String = document.getElementById('form-n1').value;
    var apString = document.getElementById('form-ap').value;
    var aiString = document.getElementById('form-ai').value;
    var n3String = document.getElementById('form-n3').value;

    const n1 = Number(n1String);
    const ap = Number(apString);
    const ai = Number(aiString);
    const n3 = Number(n3String);
    let n2 = (ap+ai)/2;
    let media = (n1+n2)/2 ;
    let statusNow;

   /* console.log('n1=', n1 );
    console.log('ap=', ap );
    console.log('ai=', ai );
    console.log('n2=', n2 );
    console.log('n3=', n3 );
    console.log('média=', media );*/

    function printStatus(media) {
        if( media > 6) { 
            statusNow = ('Aprovado(a)')

        } else if ( n3 == '') {
            statusNow = ('Em recuperação')
        
        } else {
            statusNow = ('Reprovado(a)')
        }
        console.log(statusNow, 'gerado pela func. printStatus')
    
    }

    window.onload = function hideMessages() {
        document.getElementById("message-alert").style.display = "none";
        document.getElementById("message-success").style.display = "none";
        document.getElementById("message-default").style.display = "none";

    }



    if (n1 == '') {r
        console.log('Nenhuma nota lançada');
       // document.getElementById("p-n1").innerHTML = `<p>Não há notas disponíveis</p>`;

    } else if (ap == '') {
        console.log('N1 = ', n1);
        console.log('AP não lançada');


    } else if (ai == '') {
        console.log('N1 = ', n1);
        console.log('AP = ', ap);
        console.log('AI não lançada');

    } else if (media >= 6) {
        //Transformar em função XYZ
        console.log('N1 = ', n1);
        console.log('N2 calculada', n2);
        console.log('Média = ', media)
        printStatus(media);
        //Calculo para var n3Prev;

    } else if (n3 == '') {
        console.log('N3 não enviada');
        printStatus(media);
        //Usar função XYZ

    } else if (n3 < n1 && n3 < n2) {
        //Usar função reprovado
        console.log('N3 menor que N2 e N1');
        printStatus(media);
        console.log('Média', media);

    } else if (n1 > n2) {
        //Usar função Aprovado 
        console.log('n1 e n3');
        media = (n1+n3)/2;
        console.log('Média', media);
        printStatus(media);

    } else {
        //Usar função Aprovado
        console.log('n2 e n3');
        media = (n2+n3)/2;
        console.log('Média', media);
        printStatus(media);
    }    

        document.getElementById("p-n1").innerHTML = `<p>${n1}</p>`;
        document.getElementById("p-n2").innerHTML = `<p>${n2}</p>`;
        document.getElementById("p-n3").innerHTML = `<p>${n3}</p>`;
        document.getElementById("p-media").innerHTML = `<p>${media}</p>`;
        document.getElementById("p-media").innerHTML = `<p>${media}</p>`;

});
