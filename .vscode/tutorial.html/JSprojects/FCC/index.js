//document.getElementById("count-el").innerText= 5;
//let count = 5
//count= count + 1
//console.log(count)
/*function increment() {
    console.log("clicked")
}
*/

/*let myAge=35
let humanDogRatio=7
let myDogAge=myAge*humanDogRatio
console.log(myDogAge)
*/
//initialize the count as zero
//setting up the race
/*function countdown(){
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)

}
countdown()

countdown()

let lap1 = 34
let lap2 = 33
let lap3 = 36
function loglaptime(){
    let totalTime = lap1 +lap2 + lap3
    console.log(totalTime)
}
console.log(totalTime)
*/
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
function increment(){
    count = count+1
    countEl.innerText = count
}
    
function save(){
    let countstr = count + " - "
    console.log(count)
    
}
