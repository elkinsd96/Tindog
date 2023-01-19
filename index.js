import dogs from './data.js'
import Dog from './Dog.js'

let dogsArrayIndex = 0;
let isWaiting = false;

function getHeaderHtml() {
    return `<div class="header">
            <img class="profile-icon" src="/images/icon-profile.png">
            <img class="logo" src="/images/logo.png">
            <img class="chat-icon" src="/images/icon-chat.png">
        </div>
    `
}

function getNewDog() {
    let nextDogData = dogs[dogsArrayIndex]
    return nextDogData ? new Dog(nextDogData) : {}
}

function like() {
    if(!isWaiting) {
        dog.setLike()
        renderBadgeHtml()
        isWaiting = true
        dogsArrayIndex += 1
        if(dogsArrayIndex < dogs.length) {
            setTimeout(()=> {
                dog = getNewDog()
                render()
                isWaiting = false
            },1500)
        } else {
            endScreen()
        }
    }
}

function swipe() {
    if(!isWaiting) {
        dog.setSwipe()
        renderBadgeHtml()
        isWaiting = true
        dogsArrayIndex += 1
        if(dogsArrayIndex < dogs.length) {
            setTimeout(()=> {
                dog = getNewDog()
                render()
                isWaiting = false
            },1500)
        } else {
            endScreen()
        }
    } 
}

function renderBadgeHtml() {
    if(dog.hasBeenLiked) {
        return document.getElementById("badge-like").classList.remove("hidden")
    } else if(dog.hasBeenSwiped) {
        return document.getElementById("badge-swipe").classList.remove("hidden")
    }
}

function getButtonsHtml() {
    return `
        <div class="buttons">
            <button class="swipe-btn" id="swipe-btn">
                <img class="btn-img" src="/images/icon-cross.png">
            </button>
            <button class="like-btn" id ="like-btn">
                <img class="btn-img" src="/images/icon-heart.png">
            </button>
        </div>
    `
}

function endScreen() {
    isWaiting = true
    setTimeout(() => {
        document.getElementById("profile-container").innerHTML = `
            <div class="end-screen">
                <img class="end-img" src="/images/sadpup.jpg">
                <p class="end-header">Check Back Later</p>
                <p class="end-p">There are no dogs around you.</p>
            </div> 
        `        
    }, 1500);
}

function addBtns() {
    document.getElementById("like-btn").addEventListener('click', like)
    document.getElementById("swipe-btn").addEventListener('click', swipe)
}

function render() {
    document.getElementById("header-container").innerHTML = getHeaderHtml()
    document.getElementById("profile-container").innerHTML = dog.getDogHtml()
    document.getElementById("buttons-container").innerHTML = getButtonsHtml()
    addBtns()
}

let dog = getNewDog()
render()