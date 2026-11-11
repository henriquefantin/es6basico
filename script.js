// Arrow functions
const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => { a + b }

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!'
    } else {
        return 'Olá!'
    }
}

const user = {
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700);
    }
}

// Filter
const arr = [1, 2, 3, 4, 5]

const highNum = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

const users = [
    { name: 'Matheus', available: true },
    { name: 'João', available: false },
    { name: 'Henrique', available: true }
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => user.available)

// Map
const products = [
    { name: 'Notebook', price: 3500, category: 'Eletrônicos' },
    { name: 'Cadeira', price: 450, category: 'Móveis' },
    { name: 'Camiseta', price: 79.9, category: 'Roupas' },
    { name: 'Calça jeans', price: 50.99, category: 'Roupas' },
    { name: 'Livro', price: 49.9, category: 'Livros' },
    { name: 'Cafeteira', price: 299.9, category: 'Eletrodomésticos' }
]

products.map((prod) => {
    if (prod.category === 'Roupas') {
        prod.onSale = true
    }
})

// Template literals
const userName = 'Matheus'
const age = 30
// console.log(`O nome do usuário ${userName} e ele tem ${age} anos`)

// Destructuring
const fruits = ["Maçã", "Laranja", "Mamão"];
const [f1, f2, f3] = fruits;

const productsDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}
const { name: productName, price, category: productCategory, color } = productsDetails;

// Spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]
const a4 = [0, ...a1, 4]

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const otherInfos = { km: 100000, price: 49000 }
const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 }

// Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)
// console.log(shirt.name)
// console.log(shirt.productWithDiscount(10))

// Herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"]);
// console.log(hat.name)
// console.log(hat.productWithDiscount(30))
// hat.showColors()