export class BuyPost {
    user;
    eventName;
    eventType;
    dateAndTime;

    /**
     *
     * @param {User} user
     * @param {str} eventName
     * @param {str} eventType
     * @param {str} dateAndTime
     */
    constructor(user, eventName, eventType, dateAndTime) {
        if (!(user || eventName || eventName || dateAndTime)) {
            console.error("Not all fields were instanciated");
            return;
        }
        this.user = user;
        this.eventName = eventName;
        this.eventType = eventType;
        this.dateAndTime = dateAndTime;
    }

    get user() {
        return this.user;
    }

    /**
     * @param {any} user
     */
    set user(user) {
        //if (!user instanceof User) return;
        this.user = user;
    }

    get eventName() {
        return this.eventName;
    }

    /**
     * @param {any} eventName
     */
    set eventName(eventName) {
        this.eventName = eventName;
    }

    get dateAndTime() {
        return this.ateAndTime;
    }

    /**
     * @param {any} dateAndTime
     */
    set dateAndTime(dateAndTime) {
        this.dateAndTime = dateAndTime;
    }
}