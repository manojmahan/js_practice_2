// Que01

// Create a person object that contains three keys: name, age, and county.
let person ={name:'Manoj',age:23,country:'india'}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
function logData(){
    let s = person["name"]+" is "+person["age"]+" years old and lives in "+person["country"]
    console.log(s)
}
// string in the following format: 
// "Per is 35 years old and lives in Norway"
// Call the logData() function to verify that it works
logData()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Que02
let age = 70

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
if (age<6){
    console.log('free')
} 
else if (6<=age && age<=17){
    console.log('child discount')
}
else if (18<=age && age<=26){
    console.log("student discount")
}
else if (27<=age && age<=66){
    console.log('full price')
}
else{
    console.log('senior citizen discount')
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Que03
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log('The 5 largest countries in the world:')
for (let i=0;i<largeCountries.length;i++){
    console.log("- "+largeCountries[i])
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Que04

let largeCountries_new = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
largeCountries_new.pop()
largeCountries_new.shift()
largeCountries_new.push('Pakistan')
largeCountries_new.unshift('China')

console.log(largeCountries_new)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Que05
let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
if (weekday==="Friday" && dayOfMonth===13){
    console.log('😱')
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Que06

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function random_item(hands){
    num = Math.floor(Math.random()*3)
    return hands[num]
}
console.log(random_item(hands))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Que07
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    num1 = Math.floor(Math.random()*fighters.length)
    num2 = Math.floor(Math.random()*fighters.length)

    stageEl.textContent = fighters[num1]+" vs "+fighters[num2]

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


