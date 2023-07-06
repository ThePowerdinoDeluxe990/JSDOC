
/**
 * @type {{id:number, firstName:string , lastName:string, age:number}}
 */

const person = {
    id: 1,
    firstName: "Pablo",
    lastName: 'hola',
    age: 30
}

console.log(person)

class user{

    /**
     * @param {string} user
     * @param {String} language
     */
    constructor(user, language){
        this.user = user
        this.language = language
    }
}

const user1 =new user("Hola", "Pablo")

console.log(user1)


//Objetos types, pero para clases param

/**
 * @type {Array<String>}
 */
const list = ["Pedro", "Pica", "Piedra"]

console.log(list)

/**
 * @type {number}
 */
let a = 22