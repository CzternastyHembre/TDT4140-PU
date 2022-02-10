export class SalesPost extends BuyPost {
    price;

    constructor(user, eventName, eventType, dateAndTime, price) {
        super(user, eventName, eventType, dateAndTime);
        this.price = price;
    }

    get price() {
        return this.price;
    }

    set price(price) {
        this.price = price;
    }
}