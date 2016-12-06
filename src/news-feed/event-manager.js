export default class EventManager {

    constructor() {
        this.handlers = [];
    }

    static getInstance() {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager();
        }
        return EventManager.instance;
    }

    subscribe(event, handler, context) {
        if (typeof context === 'undefined') {
            context = handler;
        }
        this.handlers.push({
            event,
            handler: handler.bind(context)
        });
    }

    publish(event, args) {
        this.handlers.forEach(handlerItem => {
            if (handlerItem.event === event) {
                handlerItem.handler(args);
            }
        })
    }
}