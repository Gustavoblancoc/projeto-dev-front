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

- Utilizado a ferramenta **NGROK** (https://ngrok.com/) ;

  **O Que é?**
  *NGROK é uma ferramenta incrivelmente útil para desenvolvedores e engenheiros de devops. Ele permite acessar aplicações rodando localmente a partir da internet, sem a necessidade de configurar VPNs ou abrir portas de firewall.*

  ### Conclusões Finais
  - Pode lembras algumas técnicas utilizadas no curso da faculdade (Sistema de Informação) onde que eu fiz projeto de construção de website, utilizando as mesmas linguagens, espero ter entregado o melhor e que eu possa aprender mais e me aperfeiçoar na empresa e me evoluir cada vez mais na área e também melhorar cada vez mais e fazer cursos pela empresa. 

<h4 align="center"> 
	🚧  ADIMO ♻️ Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 📄 Descrição do entregável

- index.html (Arquivo principal do código desenvolvido)

---

## 💻 Sobre o projeto

https://matheusalvarez.github.io/ADIMO/

A ADIMO Imobiliária é um projeto inovador desenvolvido como parte do curso de Programação Web (PW) na faculdade SENAC de Análise e Desenvolvimento de Sistemas. Este projeto visa criar uma plataforma virtual que simplifica a busca e aquisição de propriedades, oferecendo aos usuários uma experiência envolvente e eficiente.

---

## ⚙️ Funcionalidades

- [x] Realizar Login
- [X] Visualizar imóveis compativeis com sua renda
- [X] Listar imóveis como favorito
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

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/docs)

---

## 🛠 Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- HTML
- CSS
- JS

---

## 💪 Como contribuir para o projeto\

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---


## 📝 Licença

README feito por Gustavo Blanco👋🏽 [Entre em contato!](http://linkedin.com/in/gustavo-blancoc)



