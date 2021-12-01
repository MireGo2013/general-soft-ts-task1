import { Product } from "./src/Product/Product";
import { Category } from "./src/Category/Category";
import { User } from "./src/User/User";

const iPhone = new Product(1500, Category.phone, "iPhone");
const galaxyNote = new Product(500, Category.phone, "Galaxy Note");
const macBookPro = new Product(2500, Category.laptops, "MacBook Pro");
const lenovo = new Product(800, Category.laptops, "lenovo");
const appleWatch = new Product(500, Category.watches, "Apple Watch");
const galaxyWatch = new Product(300, Category.watches, "Galaxy Watch");

const user = new User();

user.addToBasket(iPhone);
user.addToBasket([galaxyNote, macBookPro, galaxyWatch]);
user.addToBasket([lenovo, galaxyWatch, appleWatch]);

