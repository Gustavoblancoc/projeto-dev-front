# projeto-dev-front

## Instruções
-Projeto feito em Visual Studio Code, utilizando as linguagens HTML, CSS e JavaScript.

### Especicificações
- Foram feitas algumas consultas no (https://www.w3schools.com/) e no (https://www.youtube.com/)

  Tive algumas dificuldades para executar esse nível do projeto, então fui pesquisar e entender alguns pontos para poder entregar o melhor

- a API utilizada foi a (youtube-search-scraper)
  `const Scraper = require('youtube-search-scraper').default;`

- Foi utilizado também o **LocalStorange** para que possa salvar a informação e jogar para a próxima página;

`<script>
        function favoritarVideo(videoUrl) {
            let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            if (!favoritos.includes(videoUrl)) {
                favoritos.push(videoUrl);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                alert('Vídeo favoritado!');
            } else {
                alert('Vídeo já está favoritado!');
            }
        }`

- Utilizado a ferramenta **NGROK** (https://ngrok.com/)

  **O Que é?**
  *NGROK é uma ferramenta incrivelmente útil para desenvolvedores e engenheiros de devops. Ele permite acessar aplicações rodando localmente a partir da internet, sem a necessidade de configurar VPNs ou abrir portas de firewall.*

### Exemplos da estrutura 
```CSS
// Este é um bloco de código CSS
.divBusca{
            background-color:#ffffff;
            border:solid 1px;
            border-radius:15px;
            width:200px;
            flex-wrap: wrap;
          }

```html
// Este é um bloco de código HTML
<div id="menu">
    <nav>
        <ul class="menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="favorito.html">Favorito</a>
              
      </ul>
      </nav>
</div>

```javascript
// Este é um bloco de código JavaScript
app.get('/api/videos', async (req, res) => {
    const searchQuery = req.query.searchQuery;
    
    console.log(searchQuery);

    youtube.search(searchQuery).then(results => {
        console.log(results.videos);
        res.json(results.videos);
    });
