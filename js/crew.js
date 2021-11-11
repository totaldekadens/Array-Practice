// The list with info of my crew!
let persons = [
    {
        Namn: "Angelica",
        Ålder: 30,
        Längd: 163,
        Hobby: "Fotografering",
        image: "angelica.jpg",
        Story: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        Namn: "Patrik",
        Ålder: 37,
        Längd: 182,
        Hobby: "Meka med moppar",
        image: "patrik.jpg",
        Story: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },    
    {
        Namn: "Greger",
        Ålder: 2,
        Längd: 100,
        Hobby: "Leka med möss",
        image: "greger.jpg",
        Story: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },    
    {
        Namn: "Sigge",
        Ålder: 2,
        Längd: 80,
        Hobby: "Gosa",
        image: "sigge.jpg",
        images: ["sigge2.jpg", "sigge3.jpg", "sigge4.jpg", "sigge5.jpg"],
        Story: "Sigge är absolut den gosigaste av våra katter. Här skall jag försöka få i mer text bblablablablabnlajklnj."
    }
]
// Get the element "main" from html
let main = document.getElementsByTagName("main")[0]
// Create a container
let wrapper = document.createElement("div")
wrapper.classList.add("wrapper")
main.appendChild(wrapper)

// Create a loop to get the specific info from each person
for(i = 0 ; i < persons.length ; i++) {

    let person = persons[i]

    let main = document.getElementsByTagName("main")[0]

    let box = document.createElement("div")
    box.classList.add("box")
    wrapper.appendChild(box)

    let imageBox = document.createElement("div")
    imageBox.classList.add("imageBox")
    box.appendChild(imageBox)

    let image = document.createElement("img")
    image.classList.add("image")
    image.src = "/assets/" + person.image
    imageBox.appendChild(image)

    let fName = document.createElement("h2")
    fName.innerText = person.Namn
    box.appendChild(fName)

    let age = document.createElement("h3")
    age.innerText = "Ålder: " + person.Ålder
    box.appendChild(age)

    let length = document.createElement("h3")
    length.innerText = "Längd: " + person.Längd
    box.appendChild(length)

    let hobby = document.createElement("h3")
    hobby.innerText = "Hobby: " + person.Hobby
    box.appendChild(hobby)

    let knapp = document.createElement("div")
    knapp.classList.add("knapp")
    knapp.innerText = "Ta reda på mer"
    knapp.onclick = function(){profile(person)}     // Sends info of "person" to the function "profile"
    box.appendChild(knapp)
}

// Send the info to local storage an redirect to "profil.html"
function profile(person) {
    localStorage.setItem("person", JSON.stringify(person))
    location.href = "profil.html";
}

