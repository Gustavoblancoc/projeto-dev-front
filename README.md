# projeto-dev-front

## Instruções
-Projeto feito em Visual Studio Code, utilizando as linguagens HTML, CSS e JavaScript.

### Especicificações
Tive algumas dificuldades para executar esse nível do projeto, então fui pesquisar e entender alguns pontos para poder entregar o melhor;
- Foram feitas algumas consultas no (https://www.w3schools.com/) e no (https://www.youtube.com/) 

- a API utilizada foi a (youtube-search-scraper) ;
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



  
<h4 align="center"> 
Desenvolvedor Front-end 
</h4>

## 📄 Descrição do entregável

- index.html (Arquivo principal do código desenvolvido)

---

## 💻 Sobre o Peojeto

Dev Front-End é um projeto para testar o uso de uma API do YouTube como parte da empresa iCasei. Esse projeto visa criar um campo de pesquisa onde o usuário pode visualizar vídeos do YouTube e favoritar eles em um único site e salvar nele, com isso, simplificando a busca pelo site, oferecendo aos usuários uma experiência envolvente e eficiente. 


---

## ⚙️ Funcionalidades

- [x] Pesquisar um nome de um video;
- [X] Visualizar os videos;
- [X] Favoritar o videos;
- [X] Listar os videos como favorito.
---

<!-- 
## 🎨 Layout


![Mobile 1](https://github.com/MatheusAlvarez/API-Clima/blob/main/assets/mobile.png)

![Web 1](https://github.com/MatheusAlvarez/API-Clima/blob/main/assets/web.png)

-->
---

## 🚀 Como executar o projeto

1 - Baixar o Projeto <br>
2 - Rodar o arquivo

### Pré-requisitos

Ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/docs)

---

## 🛠 Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- HTML
- CSS
- JS

---

## 💪 Como contribuir para o projeto\

- Utilizado a ferramenta [NGROK] LP(https://ngrok.com/) ;

  **O Que é?**
  *NGROK é uma ferramenta incrivelmente útil para desenvolvedores e engenheiros de devops. Ele permite acessar aplicações rodando localmente a partir da internet, sem a necessidade de configurar VPNs ou abrir portas de firewall.*
---


## 📝 Licença

README feito por Gustavo Blanco👋🏽 [Entre em contato!](http://linkedin.com/in/gustavo-blancoc)

## Conclusões Finais
  - Pode lembras algumas técnicas utilizadas no curso da faculdade (Sistema de Informação) onde que eu fiz projeto de construção de website, utilizando as mesmas linguagens, espero ter entregado o melhor e que eu possa aprender mais e me aperfeiçoar na empresa e me evoluir cada vez mais na área e também melhorar cada vez mais e fazer cursos pela empresa. 


