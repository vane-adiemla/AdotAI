# 🐾 Agente de Adoção Responsável de Animais (IA Gemini)

Este projeto é um agente de IA criado para ajudar ONGs, protetores independentes e pessoas interessadas em adotar animais de forma responsável. O agente faz a triagem de adotantes, responde dúvidas sobre adoção, vacinação, castração, guarda responsável e outros temas.

## 🚀 Funcionalidades

- Triagem automatizada: faz perguntas-chave e só mostra o formulário de adoção para candidatos aptos.
- Responde dúvidas sobre vacinação, castração, guarda responsável etc.
- Consulta uma planilha de animais disponíveis (explique aqui como conectar ou formatar sua planilha, se aplicável).
- Mensagens claras, acolhedoras e educativas para orientar o adotante.
- Utiliza API do Google Gemini para respostas abertas.

## ✨ Demonstração

```
🤖 Agente de Adoção Animal 🤖
Olá! Sou seu assistente virtual para adoção de animais. Vamos conversar?

❓ Como posso ajudar? (Digite 'sair' para encerrar): adotar
Olá! Que bom que você se interessa pela adoção responsável de animais. Vou te fazer algumas perguntas...

Sua casa/apto possui telas nas janelas/ quintal? (sim/não) não

❗️ Para adotar um animal, é fundamental que ele esteja protegido do acesso à rua...
```

## 🛠️ Como rodar

### 1. Clone o repositório ou baixe os arquivos

```bash
git clone https://github.com/vane-adiemla/agentAI_adocao_animais.git
cd agentAI_adocao_animais
```

### 2. Instale as dependências

```bash
pip install -r requirements.txt
```

### 3. Pegue sua API KEY do Gemini

- Acesse [Google AI Studio](https://aistudio.google.com/app/apikey)
- Crie/pegue sua chave e salve em uma variável de ambiente chamada `GOOGLE_API_KEY`:

```bash
export GOOGLE_API_KEY="sua-chave-aqui"
```

Ou edite o arquivo `agente_adocao_animais.py` e coloque sua chave diretamente (não recomendado para uso público).

### 4. Execute o agente

```bash
python agente_adocao_animais.py
```
Ou, se for um notebook, execute célula por célula.

## 📋 Requisitos

- Python 3.8+
- Conta no Google AI Studio e chave Gemini

## 📦 Arquivos

- `agente_adocao_animais.py` — Código principal do agente
- `requirements.txt` — Dependências
<!-- Inclua o notebook se houver, por exemplo: 
- `agente_adocao_animais.ipynb` — Notebook para execução interativa
-->
- Planilha de animais (explique formato e local se necessário)

## 💡 Possíveis melhorias

- Interface web (usando Streamlit, Gradio etc)
- Integração com WhatsApp ou Telegram
- Consulta à planilha de animais em tempo real via API
- Histórico de conversas
- Sugestões e contribuições são bem-vindas! Veja as [issues](https://github.com/vane-adiemla/agentAI_adocao_animais/issues).

## 📄 Licença

[MIT](LICENSE)

---

Projeto desenvolvido durante a [Imersão IA](https://imersaoia.alura.com.br/) (Alura + Google Gemini).
