type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

type Products = Product[];

interface Basket {
  basket: Products;
  init(): void;
  addToBasket(product: Product | Products): void;
  calculateTotalPrice(): number;
  getMostExpensiveProduct(): Product;
  getMostInexpensiveProduct(): Product;
  removeProduct(prodId: number): void;
  getProductByCategory(category: string): Products;
  buy(): void;
}

export class User implements Basket{
  basket: Products;

  constructor() {
    this.basket = [];
    this.init();
  }

  init(): void {
    console.log("Hi, I wanna buy something, let's add the following stuff to my basket");
  }

  addToBasket(product: Product | Products): void {
    this.basket = checkDuplicates(product, this.basket);
  }

  calculateTotalPrice(): number {
    return this.basket.reduce((acc, prod) => acc + prod.price, 0)
  }

  getMostExpensiveProduct(): Product {
    return this.basket.reduce((acc, prod)=> acc.price > prod.price ? acc : prod)
  }

  getMostInexpensiveProduct():Product {
    return this.basket.reduce((acc, prod)=> acc.price < prod.price ? acc : prod)
  }

  removeProduct(prodId: number): void {
    this.basket = this.basket.filter(({id}) => id !== prodId)
  }

  getProductByCategory(category: string): Products {
    return this.basket.filter( prod => prod.category === category )
  }

  buy(): void {
    this.basket.length = 0
    console.log('Thanks for buying. Enjoy your shopping')
  }
}

function checkDuplicates(order: Products | Product, globalBasket: Products): Products {
  const myBasket: Products = [];

  if (order instanceof Array) {
    myBasket.push(...globalBasket, ...order);
  } else {
    myBasket.push(...globalBasket, order);
  }

  return myBasket.reduce((acc, prod)=>{
   return acc.includes(prod) ? noticeDuplicate(acc, prod) : [...acc, prod]
  }, [])

}

function noticeDuplicate (acc: Products, prod: Product) {
  console.log(`You already have ${prod.title} in you basket`)
  return acc
}