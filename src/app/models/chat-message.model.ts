export class ChatMessage {
    
    type?: string; // Assurez-vous que ce type correspond aux valeurs attendues par votre backend, par exemple, 'CHAT', 'JOIN', etc.
    content: string;
    sender: string;
    date?: Date; // La date pourrait être définie automatiquement par le backend, donc elle est optionnelle ici
    idSender?: number;
    idReceiver?: number;
    // Supposons que 'chat' n'est pas nécessaire ou géré différemment dans le frontend, donc omis ici

    constructor(
        content: string,
        sender: string,
        type?: string,
        messageId?: number,
        date?: Date,
        idSender?: number,
        idReceiver?: number
    ) {
        
        this.type = type;
        this.content = content;
        this.sender = sender;
        this.date = date;
        this.idSender = idSender;
        this.idReceiver = idReceiver;
    }
}
