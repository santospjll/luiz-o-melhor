function showPopup(popupId) {
    const popupText = {
        jshistoria: `
            <h2>História do JavaScript</h2>
            <p>JavaScript foi criado em 1995 por Brendan Eich enquanto trabalhava na Netscape. 
            Inicialmente, foi projetado para ser uma linguagem de script simples para adicionar interatividade às páginas web. 
            Com o tempo, evoluiu para se tornar uma das linguagens mais populares do mundo.</p>
        `,
        jsRelação: `
            <h2>Relação com HTML e CSS</h2>
            <p>JavaScript é frequentemente utilizado em conjunto com HTML e CSS. 
            HTML fornece a estrutura da página, CSS cuida da apresentação e JavaScript adiciona a interatividade, 
            permitindo que os desenvolvedores criem experiências ricas e dinâmicas.</p>
        `,
        jsRelaçãophp: `
            <h2>Relação com PHP</h2>
            <p>PHP é uma linguagem de script do lado do servidor, enquanto JavaScript é geralmente executado no lado do cliente. 
            Embora ambos possam manipular dados, PHP é usado para gerar conteúdo dinâmico em páginas web, 
            enquanto JavaScript pode ser usado para interagir com esse conteúdo após a página ser carregada.</p>
        `
    };
    
    document.getElementById('popup-text').innerHTML = popupText[popupId];
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
