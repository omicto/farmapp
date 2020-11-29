import { addResponseMessage, toggleMsgLoader, addLinkSnippet } from 'react-chat-widget';

const greetings = [
    'Hola!, Soy tu asistente mientras estes por aqui, ¿En que te puedo ayudar?',
    'Saludos!, Seré tu asistente mientras estes por aqui, ¿En que te puedo ayudar?'
];

const responses = {
    'Me duele un poco la garganta, en que me recomiendas tomar': {
        response: '😟 lamento escuchar eso, puedo recomentadte un jarabe para la tos y que acudas a ru medico si no hay mejora!',
        link: {
            title: 'Jarabe para la tos',
            link: 'https://google.com',
            target: '_blank'
        }
    }
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getGreeting = () => addResponseMessage(greetings[getRndInteger(0,greetings.length-1)]);

export const getResponse = ({ message, isGreeting }) => {
    if (isGreeting) getGreeting();
    else if (!Object.keys(responses).includes(message)){
        toggleMsgLoader();
        setTimeout(() => {
            toggleMsgLoader();
            addResponseMessage('No tengo respuesta para eso 😥');
        }, getRndInteger(300, 700));
    }
    else {
        const { response, link } = responses[message];
        toggleMsgLoader();
        setTimeout(() => {
            toggleMsgLoader();
            addResponseMessage(response)
        }, getRndInteger(300, 700));
        if (link) {
            toggleMsgLoader();
            setTimeout(() => {
                toggleMsgLoader();
                addLinkSnippet(link)
            }, getRndInteger(300, 700))
        }
    }
}