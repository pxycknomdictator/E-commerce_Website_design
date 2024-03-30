// Fetching Data from data.json File

fetch("./assets/data/data.json")
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        result.forEach((element) => {

            // Creating Cards
            const productCards =
                `<div class="card">
            <img class="image hover" src="${element.src}" alt="product">
    <div class="card-description">
                <p class="product-heading flex hover">${element.title}<span class="price">${element.price}</span></p>
                <p class="description">${element.description}</p>
         <div class="ratings flex items-center">
                <span class="stars">&starf;&starf;&starf;&starf;&starf;</span>
                <span class="review">${element.reviews}</span>
        </div>
    </div>
</div>`


            const cards = document.querySelector(".products-cards-container");
            cards.innerHTML += productCards;
        });
    });


// Menu-bar script
let count = 0;
const navbar = document.querySelector(".list");
const menuBar = document.querySelector(".burger").addEventListener("click", () => {
    if (count === 0) {
        navbar.style.top = "48px";
        count++
    } else {
        navbar.style.top = "-300px"
        count--
    }
})



// Employee-cards



fetch("./assets/data/employe.json")
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        result.forEach((elements) => {
            const employeeCard = `<div class="members-card center">
<div id="hover-block">
    <img class="image hover-image" src="${elements.src}" alt="Employe-Cards">
    <div class="employe-hover-container">
        <div id="centerme" class="pagination-container">
            <ul class="flex items-center">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-behance"></i></a>
            </ul>
        </div>
    </div>
</div>
<div class="employe-description">
    <h2 class="blue emp-heading">${elements.name}</h2>
    <h3 class="color emp-h3">${elements.field}</h3>
    <p class="emp-para">${elements.text}</p>
</div>
</div>`

const EmployeeContainer = document.querySelector(".memebers-section-container");
EmployeeContainer.innerHTML += employeeCard;
        })
    })