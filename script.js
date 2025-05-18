const chatbox = document.getElementById('chatbox');
const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Função para adicionar mensagens ao chat
function addMessage(text, sender = 'bot') {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Respostas simples para simular conversa
function getBotReply(userText) {
  userText = userText.toLowerCase();
  if (userText.includes('adotar')) {
    return "Que ótimo! Para adotar, me diga se você prefere cachorro ou gato.";
  }
  if (userText.includes('gato')) {
    return "Temos vários gatos disponíveis! 😺 Entre em contato com a ONG parceira ou veja a lista no nosso Instagram.";
  }
  if (userText.includes('cachorro')) {
    return "Temos muitos cães esperando por um lar! 🐶 Quer saber como funciona a adoção responsável?";
  }
  if (userText.includes('oi') || userText.includes('olá')) {
    return "Olá! Como posso ajudar você a adotar um amigo hoje?";
  }
  return "Desculpe, ainda estou aprendendo... tente perguntar sobre adoção, gatos ou cachorros!";
}

// Lidar com o envio de mensagem
sendBtn.onclick = () => {
  const userText = input.value.trim();
  if (userText === "") return;
  addMessage(userText, 'user');
  const botReply = getBotReply(userText);
  setTimeout(() => addMessage(botReply, 'bot'), 500);
  input.value = "";
  input.focus();
};
// Permitir enviar com Enter
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendBtn.click();
  }
});

// Mensagem de boas-vindas
addMessage("Oi! Eu sou o AdotAÍ, seu assistente virtual para adoção de animais. Pergunte o que quiser!", 'bot');