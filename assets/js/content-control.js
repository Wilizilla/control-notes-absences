function carregarConteudo(pagina) {
    fetch(pagina)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar a página: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            // Cria um elemento temporário para extrair a div específica
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            
            // Extrai o conteúdo da div específica
            const specificDiv = tempDiv.querySelector('#main-div');
            
            // Adiciona o conteúdo à div principal
            document.getElementById('div-receiver').innerHTML = specificDiv.innerHTML;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

// Carregar o conteúdo quando a página for carregada
window.onload = function() {
    carregarConteudo('../../grades.html');
};