<br />
<div align="center" >
    <img src="./src/assets/logo.png" width="90" height="120" />
    <p>
      <img src="./src/assets/ZapRecall.png" width="136" height="30" />
    </p>
</div>

## Tecnologias
Aqui estão as tecnologias utilizadas nesse projeto:<br>

<div>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

## Requisitos do projeto principais
- Componentização e dados
    - [x]  Os elementos da página devem ser componentizados em arquivos separados.
    - [x]  Os dados dinâmicos da página (como o *deck*, *flashcards*, etc) devem ser representados como *arrays* ou objetos no JavaScript e renderizados na tela.
- Início
    - [x]  Ao iniciar, uma “tela de início” deverá ser exibida.
    - [x]  Ao clicar no botão “Iniciar Recall!”, o *deck* de *flashcards* é exibido na tela.
- *Flashcards*
    - [x]  Toda vez o que o usuário for jogar, os *flashcards* devem ser embaralhados.
    - [x]  Todos os *flashcards* devem aparecer na tela virados e indexados por números (ex: Flashcard 1, Flashcard 2), de modo a “esconder” o termo ou pergunta que ele contém.
    - [x]  Ao clicar em um *flashcard*, a pergunta ou termo correspondente ao *flashcard* deve aparecer (não é necessária nenhuma animação).
    - [x]  Para ver a resposta do *flashcard*, o usuário deve clicar no ícone de “virar”.
        - Ao virar um *flashcard*...
            - [x]  Ao clicar em qualquer um dos botões (Não lembrei, Quase não lembrei ou Zap), o *flashcard* deverá ser dado como respondido e terá seu status alterado para refletir a escolha do usuário:
                - *Flashcard* incorreto (Não lembrei)
                - *Flashcard* correto com esforço (Quase esqueci)
                - *Flashcard* correto imediatamente (Zap!)
            - [x]  Depois de respondida, a pergunta deverá ficar fechada e seu texto tachado com a cor correta correspondente ao seu status e um ícone.
- Resultado final
    - [x]  O resultado deve estar fixado na parte debaixo da página.
    - [x]  Sempre que uma carta for virada...
        - [x]  O número de flashcards respondidos deve ser atualizado
        - [x]  A sequência de respostas deve ser registrada e aparecer no formato de ícones (importante: os ícones devem aparecer de acordo com a ordem de respostas do usuário e não da ordem dos flashcards!).
    - [x]  Quando todos os flashcards forem respondidos...
        - [x]  A mensagem de parabéns deve ser exibida se somente as respostas dos *flashcards* forem “ZAP!” ou “Lembrei com esforço”.
            - [x]  Ao responder todos os *flashcards* e houver pelo menos um *status* "Incorreto", a mensagem de “Putz” deverá ser exibida.

## Features complementares

- [ ] Incluir mais de um deck de questões
- [ ] Adicionar roteamento entre as telas
- [ ] Incluir integração com API Zap Recall
- [ ] Ranqueamento entre usuários 
- [ ] Criar meta de zaps por dia (sendo no minimo 1 zap por dia)
- [ ] Inclusão de um tour ou onboarding para explicar a aplicação
- [ ] Perfil para o usuário
  - [ ] Meu progresso x minha meta
  
