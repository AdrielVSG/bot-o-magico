// Função para mudar a cor de fundo com if-else
document.getElementById('colorButton1').addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'lightblue') {
        document.body.style.backgroundColor = 'lightgreen'; // Muda para verde claro se já estiver azul claro
    } else {
        document.body.style.backgroundColor = 'lightblue'; // Muda para azul claro
    }
});

// Função para resetar a cor de fundo com if-else
document.getElementById('colorButton2').addEventListener('click', function() {
    if (document.body.style.backgroundColor === '') {
        document.body.style.backgroundColor = 'white'; // Define para branco se já estiver sem cor definida
    } else {
        document.body.style.backgroundColor = ''; // Reseta para o valor padrão (sem cor definida)
    }
});
