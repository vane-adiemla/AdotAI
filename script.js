const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const quickBtns = document.querySelectorAll('.quick-btn');

// Function to add messages to chat
function addMessage(text, sender = 'bot') {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll
}

// Bot's reply logic (expanded slightly for quick questions)
function getBotReply(userText) {
  userText = userText.toLowerCase().trim();

  // Exact matches for quick questions first
  if (userText === "quero adotar um cachorro") {
    return "Que legal que você quer adotar um cãozinho! 🐶 Para começar, você pode visitar o site da ONG Patinhas Carentes ou nos seguir no Instagram @AdotaAiOficial para ver os animais disponíveis. Você tem alguma preferência de porte ou idade?";
  }
  if (userText === "como funciona a adoção?") {
    return "O processo de adoção geralmente envolve uma entrevista, preenchimento de formulário, visita à casa do adotante (em alguns casos) e assinatura de um termo de responsabilidade. Nosso objetivo é garantir um lar seguro e amoroso para o animal. Quer saber mais sobre algum passo específico?";
  }
  if (userText === "onde encontro gatos disponíveis?") {
    return "Temos muitos gatinhos esperando por um lar! 😻 Você pode conferir os perfis no nosso Instagram @AdotaAiOficial ou entrar em contato com ONGs parceiras como a Gatinhos Felizes. Eles têm fotos e informações sobre cada um.";
  }

  // More general keyword matching
  if (userText.includes('oi') || userText.includes('olá') || userText.includes('ola')) {
    return "Olá! Como posso te ajudar a encontrar seu novo amigo de quatro patas hoje?";
  }
  if (userText.includes('gato') || userText.includes('gatinho')) {
    return "Adotar um gato é maravilhoso! Eles são ótimos companheiros. Você pode ver os gatinhos disponíveis em nosso Instagram ou com ONGs parceiras. Tem alguma dúvida específica sobre gatos?";
  }
  if (userText.includes('cachorro') || userText.includes('cão') || userText.includes('cao')) {
    return "Cachorros são amigos leais! 🐕‍🦺 Temos vários esperando uma família. Dê uma olhada no nosso Instagram ou fale com as ONGs parceiras. Quer saber sobre o processo de adoção de cães?";
  }
  if (userText.includes('adotar') || userText.includes('adocao') || userText.includes('adoção')) {
    return "Que ótimo que você pensa em adotar! É um ato de muito amor. Me diga, você tem interesse em um cão ou um gato? Ou talvez queira saber como funciona o processo?";
  }
  if (userText.includes('obrigado') || userText.includes('obrigada')) {
    return "De nada! Se precisar de mais alguma coisa, é só perguntar. 😊";
  }
  if (userText.includes('tchau') || userText.includes('até mais')) {
    return "Até mais! Volte sempre que precisar. 👋";
  }

  return "Desculpe, não entendi muito bem. Poderia perguntar de outra forma? Você pode perguntar sobre como adotar, sobre cães, gatos ou onde encontrá-los. 😉";
}

// Handle message sending
function sendMessage() {
  const userText = userInput.value.trim();
  if (userText === "") return;

  addMessage(userText, 'user');
  userInput.value = ""; // Clear input after sending

  // Simulate bot thinking time and then reply
  setTimeout(() => {
    const botReply = getBotReply(userText);
    addMessage(botReply, 'bot');
  }, 500 + Math.random() * 400); // Slight random delay

  userInput.focus();
}

sendBtn.onclick = sendMessage;

userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default form submission if it were in a form
    sendMessage();
  }
});

// Handle quick question button clicks
quickBtns.forEach(button => {
  button.addEventListener('click', () => {
    const question = button.dataset.question || button.textContent;
    // Option 1: Populate input and let user send
    // userInput.value = question;
    // userInput.focus();

    // Option 2: Directly send the question as if user typed it
    addMessage(question, 'user'); // Show the question as user message
    setTimeout(() => { // Simulate bot reply after a brief pause
        const botReply = getBotReply(question);
        addMessage(botReply, 'bot');
    }, 500 + Math.random() * 400);
    userInput.focus(); // Keep focus on input field
  });
});

// REMOVED: The initial welcome message from script.js
// addMessage("Oi! Eu sou o AdotAÍ, seu assistente virtual para adoção de animais. Pergunte o que quiser!", 'bot');
