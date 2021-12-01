export class Product {
   readonly price: number;
   readonly category: string;
   readonly title: string;
   readonly id: number;

    static getRandomId(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    constructor(price: number, category: string, title: string) {
        this.id = Product.getRandomId(1, 1000000)
        this.price = price;
        this.category = category;
        this.title = title;
    }



}

