// Nested objects
const parent = {
    child1:{
        name:'John DOe',
        email:'johndoe@gmail.com',
        age:21
    },
    child2:{
        name:'Mary Doe',
        email:'marydoe@gmail.com',
        age:23
    },
    child3:{
        name:"Peter Doe",
        email:"peterdoe@gmail.com",
        age:25,
        schoolInfo:{
            matNo:35467536
        }
    }
}
// console.log(parent)
// Reading the individual details of each child
parent['child3']['email'] = 'cephas@gmail.com'
console.log(parent['child3']['schoolInfo']['matNo'])
// Looping through a nested object
for(let i in parent){
    for(let j in parent[i]){
        console.log(`${j} : ${parent[i][j]}`)
        // for(let l in parent[i][j]){
        //     console.log(parent[i][j][l])
        // }
    }
}

// Classes in JavaScript : are much like function definition but they do not accept
//  parameters directly.In which objects can be initialized on
class School{
    constructor(name,address,year){
        this.name = name
        this.address = address
        this.year = year
    }
// The 'this' keyword is like a placeholder that takes the place of an object in a
//  class/ function definition
    age(){
        let y = new Date().getFullYear()
        let dob = y-this.year
        return `The school is ${dob} years old`
    }
    details(){
        return `${this.name} was established in the year ${this.year}. Situated at ${this.address}, FCT`
    }
}
const abjUni = new School("UniAbuja","Gwagwalada",2014)
console.log(abjUni)
console.log(abjUni.name)
console.log(abjUni.address)
console.log(abjUni.year)
console.log(abjUni.age())
console.log(abjUni.details())

// Class examples
class Account{
    constructor(name,bal=0){
        this.name = name
        this.bal = bal
    }
    balance(){
        return `$${this.bal}`
    }
    deposit(amount){
        this.bal  += amount // this.bal = this.bal+amount
    }
    withdraw(amount){
        if(this.bal < amount){
            return "Insufficient funds"
        }else{
            this.bal -= amount
            return `${amount} withdrawn successfully`
        }
    }
    transfer(amount){
        if(this.bal < amount){
            return "Insufficient funds"
        }else{
            this.bal -= amount
            return "Transfer successfull!"
        }
    }
}

const ade = new Account("Adetokumbo")
ade.deposit(20000)
console.log(ade.withdraw(5000))
console.log(ade.transfer(5000))
console.log(ade.balance())