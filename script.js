document.addEventListener('DOMContentLoaded', function() {
    // Aqui você deve usar uma chamada para o backend que acessa a API do Notion
    // Para isso, substitua esta parte pelo código real que faz a requisição.

    // Exemplo de valores fictícios:
    const totalTasks = 10;
    const completedTasks = 7;

    const progress = (completedTasks / totalTasks) * 100;

    // Atualizar a barra de progresso e o texto
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';

    // Função fictícia para obter dados do Notion
    // async function fetchData() {
    //     const response = await fetch('YOUR_BACKEND_ENDPOINT');
    //     const data = await response.json();
    //     const totalTasks = data.totalTasks;
    //     const completedTasks = data.completedTasks;
    //     const progress = (completedTasks / totalTasks) * 100;
    //     progressBar.style.width = progress + '%';
    //     progressText.textContent = Math.round(progress) + '%';
    // }
    // fetchData();
});
