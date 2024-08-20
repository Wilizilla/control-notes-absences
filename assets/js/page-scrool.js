document.getElementById('submit-button').addEventListener('click', function() {
// Adiciona um delay de 0,3 segundos (300 milissegundos)
setTimeout(function() {
    document.getElementById('result-div').scrollIntoView({ behavior: 'smooth' });
}, 300); // 300 milissegundos = 0,3 segundo
});