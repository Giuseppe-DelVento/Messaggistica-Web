class Chat{
    constructor(containerElement, chat) {
        // 2. SOSTITUIRE undefined
        this.id = chat._id

       const messaggio = document.createElement('span');
       messaggio.textContent = chat.messaggio;
       containerElement.append(messaggio);
       
    }
 

}

const loggedUser = {"id": "6463c5f93ed244aa34b7836f"}

containerElement = document.getElementById('chat-container');

// 1. REALIZZARE UNA FETCH ALLA API PER OTTENERE TUTTI I POST (SOSTITUIRE undefined)
fetch('chat/all')
    .then(res => {
        if (res.ok) return res.json();
        else throw new Error('Si è verificato un errore nella comunicazione con il server');
    })
    .then(obj => {
        containerElement.innerHTML = '';
        obj.forEach(e => { new Chat(containerElement, e) })
    })
    .catch(error => containerElement.innerHTML = error)

