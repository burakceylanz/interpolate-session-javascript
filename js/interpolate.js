document.body.style.background = 'gainsboro';
const chatBot = document.getElementById('chatbot');
const chatBotBtn = document.getElementById('chatbot-btn');
const messageList = document.getElementById('messageList');
const message = document.getElementById('newMessage');
const sendBtn = document.getElementById('sendBtn');
const botQuestion = setTimeout(botQuestionContent, 1000);

function openChatBot() {
    chatBotBtn.style.display = 'none';
    document.getElementById('message-area').style.display = 'block';
}

function closeChatBot() {
    document.getElementById('message-area').style.display = 'none';
    chatBotBtn.style.display = 'block';
}

// create first bot message
const firstBotMessage = document.createElement('div');
firstBotMessage.innerHTML = `<div style="text-align:left; margin-left:8px;"><div style ="padding:8px; text-align:left; border-radius:4px; max-width:70%; display:inline-block; background-color:#2560e8; font-size:14px; color:white;" >Yazıyor...</div></div>`
messageList.appendChild(firstBotMessage);

function botQuestionContent() {
    firstBotMessage.innerHTML = `<div style="text-align:left; margin-left:8px;"><div style ="padding:8px; text-align:left; border-radius:4px; max-width:70%; display:inline-block; background-color:#2560e8; font-size:14px; color:white;" >Merhaba, sana hitap edebilmek için adını öğrenebilir miyim ?</div></div>`
}

const handlekeyDown = (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
        return true;
    }
};

window.addEventListener('keydown', handlekeyDown);

function sendMessage() {
    if (message.value === '') {
        return false;
    } else {
        // username message
        const userMessage = document.createElement('div');
        userMessage.style.textAlign = 'right';
        userMessage.style.marginRight = '8px';
        userMessage.innerHTML = `<div style="padding:8px; margin: 8px 0; text-align:left; border-radius:4px; max-width:70%; display:inline-block; background-color:gainsboro; font-size:14px; color:black;">${message.value}</div>`;
        messageList.appendChild(userMessage);

        //Interpolate Session Variables in Text Messages
        const value = "Merhaba! Ben Choo Choo ama senin adın çok daha havalı, değil mi";
        const session = {
            firstname: `${message.value}`
        }
        const options = {
            leftDelimiter: '{', 
            rightDelimiter: '}'
        }
        const interpolate = (value, session = {}, options = {}) => {
            return `${value} ${session.firstname}?`;
        }

        // or other  options create a object 
        // const interpolate = {
        // value : `Merhaba! Ben Choo Choo ama senin adın çok daha havalı, değil mi`,
        // session : {
        // firstName: `${message.value}`,
        //  },
        //  options : {
        //  leftDelimiter: '{', 
        //  rightDelimiter: '}'
        //  },
        //  get user(){
        //  return `${this.value} ${options} ${this.session.firstName}?`;
        //  }

        // bot message
        const botMessage = document.createElement('div');
        botMessage.style.textAlign = 'left';
        botMessage.style.marginLeft = '8px';
        //string interpolation
        botMessage.innerHTML = `<div style="padding:8px; margin: 8px 0; text-align:left; border-radius:4px; max-width:70%; display:inline-block; background-color:#2560e8; font-size:14px; color:white;">${interpolate(value, session)}</div>`;
        //string interpolation
        messageList.appendChild(botMessage);
        message.value = '';
    }
}


