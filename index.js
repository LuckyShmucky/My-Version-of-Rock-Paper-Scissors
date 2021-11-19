//code to change image
//userimage.setAttribute('src' , 'images/paper.png')

//how to get js to randomly pick something for us
//let compChoice = (Math.round(Math.random() * 2))
//console.log(options[compChoice])
let rock = document.getElementById('rockBtn')
let paper = document.getElementById('paperBtn')
let scissors = document.getElementById('scissorsBtn')
let userImg = document.getElementById('userImg')
let npcImg = document.getElementById('npcImg')
let results = document.getElementById('outcome')


let options = [
    //strings for the options array
    'rock',
    'paper',
    'scissors'
]

let pics = [
    'images/rock.jpg' ,
    'images/paperResized.jpg' ,
    'images/scissors2.jpg'
]

rock.addEventListener('click' , function(){
    userImg.setAttribute('src' , 'images/rock.jpg')    
    
    let compChoice = (Math.round(Math.random() *2))
    let compChoiceText = options[compChoice]
    console.log(compChoice)
    console.log(compChoiceText)
    if (compChoiceText == 'paper'){
        npcImg.setAttribute('src' , 'images/paperResized.jpg')
        results.textContent = 'Robots Rule'
    } else if (compChoiceText == 'scissors'){
        npcImg.setAttribute('src' , 'images/scissors2.jpg')
        results.textContent = 'User Wins!'
    } else {
        npcImg.setAttribute('src' , 'images/rock.jpg')
        results.textContent = 'Tie'
    }
})

paper.addEventListener('click' , function(){
    userImg.setAttribute('src' , 'images/paperResized.jpg')    
    
    let compChoice = (Math.round(Math.random() *2))
    let compChoiceText = options[compChoice]
    console.log(compChoice)
    console.log(compChoiceText)
    if (compChoiceText == 'scissors'){
        npcImg.setAttribute('src' , 'images/scissors2.jpg')
        results.textContent = 'Robots Rule'
    } else if (compChoiceText == 'rock'){
        npcImg.setAttribute('src' , 'images/rock.jpg')
        results.textContent = 'User Wins!'
    } else {
        npcImg.setAttribute('src' , 'images/paperResized.jpg')
        results.textContent = 'Tie'
    }
})

scissors.addEventListener('click' , function(){
    userImg.setAttribute('src' , 'images/scissors2.jpg')    
    
    let compChoice = (Math.round(Math.random() *2))
    let compChoiceText = options[compChoice]
    console.log(compChoice)
    console.log(compChoiceText)
    if (compChoiceText == 'rock'){
        npcImg.setAttribute('src' , 'images/rock.jpg')
        results.textContent = 'Robots Rule'
    } else if (compChoiceText == 'paper'){
        npcImg.setAttribute('src' , 'images/paperResized.jpg')
        results.textContent = 'User Wins!'
    } else {
        npcImg.setAttribute('src' , 'images/scissors2.jpg')
        results.textContent = 'Tie'
    }
})