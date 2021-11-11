
// Get the list from local storage
let person = JSON.parse(localStorage.getItem("person"))

// Get the element "main" from html
let main = document.getElementsByTagName("main")[0]

// Create container  
let boxProf = document.createElement("div")
boxProf.classList.add("boxProf")
main.appendChild(boxProf)

// Create container to profile image
let imageBox = document.createElement("div")
imageBox.classList.add("imageBox")
boxProf.appendChild(imageBox)

// Create element img and connect to src
let image = document.createElement("img")
image.classList.add("image")
image.src = "./assets/" + person.image
imageBox.appendChild(image)

// Create element "h2" and connect it to src
let fName = document.createElement("h2")
fName.innerText = person.Namn
boxProf.appendChild(fName)

// Create element "p" and connect it to src
let story = document.createElement("p")
story.innerText = person.Story
boxProf.appendChild(story)
