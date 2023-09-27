## BexUp Project Manager


 ![](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D) ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E`) ![](https://img.shields.io/badge/Bulma-00D1B2?style=for-the-badge&logo=Bulma&logoColor=white) ![](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black) 

Teste técnico de front-end desenvolvido com Vue 3.

 
|||
|--|--|
|Pínia| ^2.1.6 |
|Vite| ^4.4.9 |
|Vue| 3.3.4  |

## Decisões tomadas para este projeto

 1.  Gerenciamento de estado : **Pinia**
 1.1.**Suporte Oficial do Vue 3**
	 Embora o Vuex seja uma biblioteca popular, o Pinia é oficialmente recomendado pelo Vue.js para uso com o 			   Vue 3.
 1.2.**Gerenciamento de Estado mais Flexível**
 Pinia oferece uma variedade de recursos, como getters, setters, ações e efeitos, que permitem um gerenciamento de estado mais flexível e organizado e ao mesmo tempo elimina a necessidade de definir mutações e actions separadas, simplificando a estrutura da loja.
1.3.**Performance Melhorada:**
Pinia é altamente otimizado para o Vue 3, aproveitando suas APIs reativas internas. Isso pode levar a um desempenho melhor do que o Vuex, especialmente em aplicativos de larga escala.
1.4.**Menos Acoplamento:**
A estrutura do Pinia promove um acoplamento mais baixo entre os componentes e o estado, tornando seu código mais fácil dar manuntenção e integrar com arquitetura modular.

2. Framework CSS: **Bulma**
Optei pelo BulmaCSS por ele fornecer um conjunto de classes CSS predefinidas que facilita a criação rápida de layout e responsividade, e  economizando tempo de desenvolvimento.

3. Autenticação de usuários e API: **Firebase e  Firestore**
Desenvolvi a autenticação de usuários utilizando o Firebase, e construi um banco de dados noSQL utilizando Firestore para alimentar a aplicação. Tomei a decisão de utilizar o Firestore pelo seguintes motivos abaixo:
-  **Autenticação Integrada:** O Firestore é integrado com o sistema de autenticação Firebase, facilitando o controle de acesso aos dados com base nos perfis de usuário.
- **Atualizações em tempo real:** O Firestore fornece sincronização em tempo real de dados, o que significa que as atualizações no banco de dados são refletidas automaticamente em todos os dispositivos conectados. 
- **Escalabilidade:** O Firestore é altamente escalável, tanto horizontal quanto verticalmente. 

**Estrutura do Firestore**
o Firestore trabalha com documentos, um documento contém coleções e subcoleções, a estrutura do documento deste projeto foi construído da seguinte forma.

1- Criei um documento chamado **users** utilizando o userID  do usuário logado como ID do documento
2- Dentro do documento de users criei um documento chamado **projects** que armazena uma coleção de documentos
3- Cada projeto contéum id unico e é a key para acessarmos o valores da coleção.

exemplo visual:

![](https://github.com/isaacwrk/bexup-challenge/blob/master/src/assets/demo/diagram.png?raw=true)
  

  
##  Como rodar o projeto localmente
  
1 - instale as dependências
```sh

npm  install

```

  

###  Compile and Hot-Reload for Development

  2 - utilize o comando abaixo para rodar o projeto localmente

```sh

npm  run  dev

```

 

	