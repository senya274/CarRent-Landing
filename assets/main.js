/*------------- smooth scroll * --------------*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


/*------------- car-rent data * --------------*/
const sedanBtn = document.getElementById("sedanBtn");
const coupeBtn = document.getElementById("coupeBtn");
const hatchbackBtn = document.getElementById("hatchbackBtn");
const carsItems = document.getElementById("carsItems");

const carsData = {
    sedan: [
      {
        name: "BMW 328i",
        image: "../assets/sedan1.png",
        description: "Luxurious sedan with high level of comfort.",
        price: "$50/day",
      },
      {
        name: "Mercedes-Benz",
        image: "../assets/sedan2.png",
        description: "Elegant sedan with outstanding design.",
        price: "$50/day",
      },
      {
        name: "Honda Accord",
        image: "../assets/sedan3.png",
        description: "Reliable sedan with spacious interior and fuel efficiency.",
        price: "$50/day",
      },
    ],
    coupe: [
      {
        name: "Mercedes E Coupe",
        image: "../assets/coupe1.png",
        description: "Sporty coupe with dynamic design and powerful engine.",
        price: "$50/day",
      },
      {
        name: "Chevrolet Camaro",
        image: "../assets/coupe2.png",
        description: "Powerful American Musclecar with V8 engine",
        price: "$50/day",
      },
      {
        name: "Mercedes-Benz Coupe",
        image: "../assets/coupe3.png",
        description: "Exclusive coupe with luxurious finishing and technology.",
        price: "$50/day",
      },
    ],
    hatchback: [
      {
        name: "Mercedes Hatchback",
        image: "../assets/hatchback1.png",
        description: "Compact hatchback with excellent maneuverability and fuel efficiency.",
        price: "$50/day",
      },
      {
        name: "Renault Clio",
        image: "../assets/hatchback2.png",
        description: "Sleek hatchback with modern design and advanced features.",
        price: "$50/day",
      },
      {
        name: "Volkswagen Golf",
        image: "../assets/hatchback3.png",
        description: "Popular hatchback with comfortable interior and dynamic character..",
        price: "$50/day",
      },
    ],
  };
  
displayCars("sedan");

function displayCars(type) {
  carsItems.innerHTML = "";
  const cars = carsData[type];
  cars.forEach((car) => {
    const carElement = document.createElement("div");
    carElement.classList.add("cars-chosen__item");
    carElement.innerHTML = `
                
                <img src="${car.image}" alt="${car.name}">
                <div class="car-price">
                <h3>${car.name}</h3>
                <p>${car.price}</p>
                </div>
              <div class='car-description'>
              <p>${car.description}</p></div>
              <div class="cars-buy">
              <a href="#contact">
              <button>Book now</button>
              </a>
             
            </div>
               
            `;
    carsItems.appendChild(carElement);
  });
}

sedanBtn.addEventListener("click", () => displayCars("sedan"));
coupeBtn.addEventListener("click", () => displayCars("coupe"));
hatchbackBtn.addEventListener("click", () => displayCars("hatchback"));


/*------------- active button * --------------*/


document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".rent-cars__chose button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

/*------------- paralax * --------------*/

document.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const parallax = scrolled * 0.6; 
  document.querySelector(".rent").style.backgroundPositionY =
    "-" + parallax + "px";
});


/*------------- calculator * --------------*/
const daysRange = document.getElementById("daysRange");
const daysOutput = document.getElementById("daysOutput");
const priceOutput = document.getElementById("priceOutput");

const pricePerDay = 50;

function updatePrice() {
  const days = parseInt(daysRange.value);
  const totalPrice = days * pricePerDay;
  daysOutput.textContent = days;
  priceOutput.textContent = "$" + totalPrice;
}

daysRange.addEventListener("input", updatePrice);

// Вызываем функцию для начального расчета цены
updatePrice();

document.querySelectorAll(".accordion-item").forEach((item) => {
  item.querySelector(".accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
