//console.log("Hello typescript")

// let firstName: string = "Brad"
// let age: number = 30
// let good: boolean = true

// // firstName = 4 (Not Valid)

// let fruits: string[] = [
//     "banana",
//     "apple"
// ]

// console.log(`
//     First Name: ${firstName}
//     Your Age: ${age}
//     You Have Many: ${fruits}
// `)


// enum taxForm {
//     standard = "1040",
//     childCredit = "1065",
//     SCorp = "1121",
//     CCorp = "1120s",
// }

//  console.log(`
//     You Need Form ${taxForm.childCredit} 
// `)


// function getFruit( index: number): string {

//     return fruits[index]
// }

// function debug(message: string): void {
//     console.log(message)
// }

// debug("OMG NO RETURN")

// console.log(` You choose an ${getFruit(0)}`)

// let chosenFruit: string = getFruit(0)

// debug(` You choose an ${getFruit(0)})

interface teacher {
    name: string,
    years: number,
    subject: string[],
    age: Number
}

let brad: teacher = {
    name: "brad",
    years: 10,
    subject:["javascript", "typescript"],
    age: 30,
}

console.log(brad)