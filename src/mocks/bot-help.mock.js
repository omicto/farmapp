import { addResponseMessage, toggleMsgLoader, addLinkSnippet } from 'react-chat-widget';

const greetings = [
    'Hola!, Soy tu asistente mientras estes por aqui, ¿En que te puedo ayudar?',
    'Saludos!, Seré tu asistente mientras estes por aqui, ¿En que te puedo ayudar?'
];

const responses = [
    {
        message: "Te puedo recomendar un ibuprofeno",
        link: {
            title: "Ibuprofeno",
            link: "http://ec2-3-90-30-33.compute-1.amazonaws.com/shop/2",
            target: '_blank'
        }
    },
    {
        message: "Un ibuprofeno te vendrá bien, es un medicamento que no requiere receta y puedes conseguir de diferentes laboratorios si no quieres gastar mucho!",
        link: {
            title: "Ibuprofeno",
            link: "http://ec2-3-90-30-33.compute-1.amazonaws.com/shop/2",
            target: '_blank'
        }
    }
]

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const greet = () => addResponseMessage(greetings[getRndInteger(0, greetings.length - 1)]);

export const getResponse = () => {
    const { message, link } = responses[getRndInteger(0, greetings.length - 1)];
    toggleMsgLoader();
    setTimeout(() => {
        toggleMsgLoader();
        addResponseMessage(message);
        if (link) {
            toggleMsgLoader();
            setTimeout(() => {
                toggleMsgLoader();
                addLinkSnippet(link)
            }, getRndInteger(300, 700))
        }
    }, getRndInteger(300, 700));

};