const button = document.querySelector('.epidemic-z');
const content = document.getElementById('epidemic-z-info');
button.addEventListener('click', function(ativo) {
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão
    const buttonRedeDragon = document.querySelector('.RedeDragon');
    // Seleciona o conteúdo a ser mostrado/ocultado
    const contentRedeDragon = document.getElementById('RedeDragon-info');

    // Adiciona um listener para o evento de clique no botão
    buttonRedeDragon.addEventListener('click', function() {
        // Verifica se o conteúdo está visível
        if (contentRedeDragon.style.display === 'none' || contentRedeDragon.style.display === '') {
            // Se estiver oculto, torna-o visível
            contentRedeDragon.style.display = 'block';
        } else {
            // Se estiver visível, torna-o oculto
            contentRedeDragon.style.display = 'none';
        }
    });
});

