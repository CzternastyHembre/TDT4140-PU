import { BuyPost } from "./BuyPost";
export class SalesPost extends BuyPost {
    price;

    /**
     * @constructs SalesPost
     * @param {User} user
     * @param {string} eventName
     * @param {string} eventType
     * @param {Date} dateAndTime
     * @param {number} price
     */
    constructor(user, eventName, eventType, dateAndTime, price) {
        super(user, eventName, eventType, dateAndTime);
        this.price = price;
    }

    get price() {
        return this.price;
    }

    /**
     * @param {number} price
     */
    set price(price) {
        if (price < 0) throw "Price must be larger than zero";

        this.price = price;
    }
}
