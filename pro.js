let profileDetails = {
    imgSrc: "https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png",
    name: "RAHUL ATTLURI",
    age: 25
};

let profileContainerEl = document.getElementById("profileContainer");
profileContainerEl.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");


let imgContainerEl = document.getElementById("imgContainer");
let imgEl =  document.createElement("img");
imgEl.setAttribute("src", profileDetails.imgSrc);
imgEl.classList.add("profile-img");
imgContainerEl.appendChild(imgEl);

let nameEl = document.createElement("h1");
nameEl.classList.add("profile-name");
nameEl.textContent  = profileDetails.name;
profileContainerEl.appendChild(nameEl);

let ageEl = document.createElement("p");
ageEl.classList.add("age");
ageEl.textContent = "Age:  "  +  profileDetails.age;
profileContainerEl.appendChild(ageEl);