let firstOparand = ""
let secondOparand = ""
let currentOparation= null
let isResetcurrentScreen = false;





//  UI ******************************************************
//buttons===============
const numberButtons = document.querySelectorAll(".number")
const oparatorBtn = document.querySelectorAll(".oparator")
const equalTo = document.querySelector(".equalto")
const pointer = document.querySelector(".point")
const deleteBtn = document.querySelector(".delete")
const clearBtn = document.querySelector(".clear")


// display result --------------------------------
const currentCal = document.querySelector(".current-cal")
const previousCal = document.querySelector(".prev-cal")
//************************************************************

// equalTo.addEventListener('click', evaluate)

// numberButtons.forEach((button)=>{
//     button.addEventListener("click",()=> appendNumber(button.textContent))
// })
 
// function appendNumber(number){
   
//     if(currentCal.textContent =="0" || isResetcurrentScreen)
//         resetScreen()
//         console.log(number)
//         currentCal.textContent += number
// }

// function resetScreen(){
//     isResetcurrentScreen = false;
//     currentCal.textContent = ""
// }

// //**********************************************************

// oparatorBtn.forEach((btn)=>{
//     btn.addEventListener("click",()=> setOparatation(btn.textContent))
// })

// function setOparatation(oparator){
//     if(currentOparation !==null) evaluate()
//     firstOparand = currentCal.textContent
//     console.log(`first: ${firstOparand}`)
//     currentOparation = oparator
//     console.log(`op: ${oparator}`)
//     previousCal.textContent = `${firstOparand}${currentOparation}`
//     isResetcurrentScreen = true;
// }


// function evaluate(){
//     if(currentOparation === null || isResetcurrentScreen) return
//     if(currentOparation === "%" && currentCal.textContent === "0"){
//         alert("you can't devide by zero")
//         return
//     }
//     secondOparand = currentCal.textContent
//     console.log(`sec: ${secondOparand}`)
//     currentCal.textContent = oparate(currentOparation, firstOparand, secondOparand)
//     previousCal.textContent = `${firstOparand}${currentOparation}${secondOparand}=`
//     currentOparation = null
// }

//*************************************************

window.addEventListener('keydown', handleKeyboardKey)
// ------equal to and pointer----------------
equalTo.addEventListener('click', evaluate)
pointer.addEventListener('click', appendPoint)
//clear button and delete button---------------
clearBtn.addEventListener('click', clearScreen)
deleteBtn.addEventListener('click', deleteNum)
//---------------------------------------------------
// Number buttons && Oparator buttons

numberButtons.forEach((btn)=> {
    btn.addEventListener('click', ()=> appendNumber(btn.textContent))
})
oparatorBtn.forEach((btn)=> {
    btn.addEventListener('click', ()=> setOparation(btn.textContent))
})

//-------------------------------------------------------------------

function appendNumber(button){
    if(currentCal.textContent ==='0'|| isResetcurrentScreen) resetScreen()
    currentCal.textContent += button
}


// reset screen --------------------------
function resetScreen(){
    isResetcurrentScreen = false
    currentCal.textContent = ''
}

// clear screeen -----------------------

function clearScreen(){
    currentCal.textContent = '0'
    previousCal.textContent = ''
    firstOparand = ''
    secondOparand = ''
    currentOparation = null
}

// Delete number ---------------------

function deleteNum(){
    currentCal.textContent = currentCal.textContent
    .toString()
    .slice(0, -1)  
}

//append the point.

function appendPoint(){
    if(currentCal.textContent.includes('.')) return
    currentCal.textContent += '.'
}


function setOparation(oparator){
    if(currentOparation !== null) evaluate()
    firstOparand = currentCal.textContent
    console.log(`first : ${firstOparand}`)
    currentOparation = oparator
    previousCal.textContent = `${firstOparand}${currentOparation}`
    console.log(currentOparation)
    isResetcurrentScreen = true
}

function evaluate(){
    secondOparand = currentCal.textContent
    if(secondOparand ==="0" && currentOparation==="%"){
        alert("You can't divide by zero")
    }
    console.log(`sec: ${secondOparand}`)
    previousCal.textContent = 
    currentCal.textContent = Math.round(oparate(currentOparation, firstOparand, secondOparand)*1000)/1000

    currentOparation = null

}


function handleKeyboardKey(e){
    console.log(e)
    if(e.key>= '0' && e.key<=9) appendNumber(e.key)
    if(e.key ==='.') appendPoint()
    if(e.key ==='Escape') clearScreen()
    if(e.key === 'Backspace') deleteNum()
    if(e.key === 'Enter') evaluate()
    if(e.key ==='/' || e.key === '*'|| e.key ==='+' || e.key ==='-')setOparation(convertKeyboardOparator(e.key))
        
    }

function convertKeyboardOparator(oparator){
    if(oparator ==='/') return '%'
    if(oparator ==='*') return 'x'
    if(oparator ==='-') return '-'
    if(oparator ==='+') return '+'
}


 function add(num1, num2){
    let sum = num1 + num2
    console.log(sum)
    return sum
}

function subtract(num1, num2){
    let sum = num1 - num2
    return sum
}

function multiply(num1, num2){
    let sum = num1 * num2
    return sum
}

function divide(num1, num2){
    let sum = num1 / num2
    return sum
}


function oparate(oparator,num1,num2){
    num1 = Number(num1)
    num2 = Number(num2)
    if(oparator === "+"){
       return add(num1,num2)
    }
    else if(oparator === "-"){
        return subtract(num1,num2)
    }
    else if(oparator === "x"){
        return multiply(num1, num2)
    }
    else if(oparator === "%"){
       return divide(num1,num2)
    }
}
