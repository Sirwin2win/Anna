const car = {
    type:"Toyota",
    model:"Corolla",
    year:2025,
    details: function(){
        return `The name of this car is ${this.type}, it was produced in the year ${this.year}`
    }
}
console.log(car.details())
console.log(car.type)
// Object Constructor function
function Car(type,model,year){
    this.type = type
    this.model = model
    this.year = year
    this.info = function(){
        return this.type
    }
}
// first object that is making use of the Car constructor
const toyota = new Car("Toyota","Corolla",2023)
console.log(toyota)
console.log(toyota.type)
console.log(toyota.model)
console.log(toyota.year)
console.log(toyota.info())
// Second object that is making use of the Car constructor
const ford = new Car("Ford","Mustang",2025)
console.log(ford.type)

// Creating Animal object constructor function 
function Animal(name,age,legs){
    this.name = name
    this.age = age
    this.legs = legs
    this.sound = function(n){
        return `A ${this.name} ${n}`
    }
}

// Declaring objects that uses the Animal function
const dog = new Animal("Dog",7,4)
console.log(dog.name)
console.log(dog.age)
console.log(dog.legs)
console.log(dog.sound("Barks"))
// Transactional Example
function Account(name,bal=0){
    this.name = name
    this.bal = bal
    this.balanceEnquiry = function(){
        return `₦${this.bal}`
    }
    this.deposit = function(n){
        this.bal += n
    }
    this.withdraw = function(n){
        if(this.bal < n){
            return "Insufficient balance"
        }else{
            this.bal -= n // this.bal = this.bal-n
            return `${n} withdrawn successfully`
        }
    }
}
// Creating objects that makes use of the constructor function
const john = new Account("John")
console.log(john.balanceEnquiry())
john.deposit(10000)
console.log(john.balanceEnquiry())
console.log(john.withdraw(5000))
console.log(john.balanceEnquiry())
// Creating ade object that makes use of the Account constructor function
const ade = new Account("Ademola", 15000)
console.log(ade.balanceEnquiry())

// Product constructor function
function Product(name,price,qty){
    this.name = name
    this.price = price
    this.qty = qty
    this.stockChecking = function(){
        return `We have ${this.qty} ${this.name} left`
    }
    this.selling = function(q){
        if(this.qty < q){
            return `Sorry, we don't have up to ${q} ${this.name} in stock`
        }else{
            this.qty -= q
            return `${q} ${this.name} sold successfully`
        }
    }

    this.reStock = function(q){
        this.qty += q
        return `${q} ${this.name} added to the stock`
    }
}
// Creating objects that uses the constructor
const bread = new Product("Agege Bread", 200, 10)
const biscuit = new Product("Digestive Biscuit",100, 24)
console.log(bread.selling(10))
console.log(bread.stockChecking())
console.log(bread.reStock(20))
console.log(bread.stockChecking())
