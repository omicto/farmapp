import { addResponseMessage, toggleMsgLoader, toggleWidget, renderCustomComponent } from 'react-chat-widget';
import {closeLauncher} from '../script/rcw-container.script';
import LinkMessage from '../components/link-message/link-message.component';

const greetings = [
    'Hola!, Soy tu asistente mientras estes por aqui, ¿En que te puedo ayudar?',
    'Saludos!, Seré tu asistente mientras estes por aqui, ¿En que te puedo ayudar?'
];

const responses = [
    {
        message: "Te puedo recomendar un ibuprofeno",
        link: {
            desc: "Aqui puedes comprar tu medicina",
            url: "/shop/0"
        }
    },
    {
        message: "Un ibuprofeno te vendrá bien, es un medicamento que no requiere receta y puedes conseguir de diferentes laboratorios si no quieres gastar mucho!",
        link: {
            desc: "Aqui puedes comprar tu medicina",
            url: "/shop/0"
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
            const { url, desc } = link;
            toggleMsgLoader();
            setTimeout(() => {
                toggleMsgLoader();
                //addLinkSnippet(link)
                //addResponseMessage(`[${desc}](${url})`);
                renderCustomComponent(LinkMessage, {to: url, text: desc, onClick: () => {
                    toggleWidget();
                    closeLauncher();
                }});
            }, getRndInteger(300, 700))
        }
    }, getRndInteger(300, 700));

};