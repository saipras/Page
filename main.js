let myImage = document.querySelector('img')
myImage.onclick = function () {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/iare-logo.png')
  } else {
    myImage.setAttribute('src', 'images/iare-logo.png')
  }
}

// Personalized welcome message code

const myButton = document.querySelector('button')
const myHeading = document.querySelector('h1')

function setUserName () {
  const myName = prompt ('Please enter your name.')
  if (!myName || myName === null) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.innerHTML = 'Hello this is , ' + myName
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  myHeading.innerHTML = 'Hello this is , ' + storedName
}

myButton.onclick = function () {
  setUserName()
}
