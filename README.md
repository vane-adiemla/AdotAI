# 🐾 Agente de Adoção Responsável de Animais (IA Gemini)

Este projeto é um agente de IA criado para ajudar ONGs, protetores independentes e pessoas interessadas em adotar animais de forma responsável. O agente faz a triagem de adotantes, responde dúvidas frequentes e incentiva a adoção consciente.

## 🚀 Funcionalidades

- Triagem automatizada: faz perguntas-chave e só mostra o formulário de adoção para candidatos aptos.
- Responde dúvidas sobre vacinação, castração, guarda responsável etc.
- Consulta planilha de animais disponíveis.
- Mensagens claras, acolhedoras e educativas.
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
git clone https://github.com/SEU-USUARIO/agente-adocao-animais-ia.git
cd agente-adocao-animais-ia
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

Ou edite o arquivo `.py` e coloque sua chave diretamente (não recomendado para uso público).

### 4. Execute o agente

```bash
python agente_adocao_animais.py
```
Ou, se for um notebook, execute célula por célula.

## 📋 Requisitos

- Python 3.8+
- Conta no Google AI Studio + chave Gemini

## 📦 Arquivos

- `agente_adocao_animais.py` — Código principal do agente
- `requirements.txt` — Dependências

## 💡 Possíveis melhorias

- Interface web (usando Streamlit, Gradio etc)
- Integração com WhatsApp ou Telegram
- Consultar planilha de animais em tempo real via API
- Histórico de conversas

## 📄 Licença

MIT

---

Projeto desenvolvido durante a [Imersão IA](https://imersaoia.alura.com.br/) (Alura + Google Gemini).
