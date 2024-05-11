var carVariants = {
    toyota: {
        yaris: {
            type: {
                image: "Images/Yaris.jpg",
                model: 2024,
                price: "PKR 5,850,000",
                colors: ["white", "black", "blue"],
                name: "Toyota Yaris",
            }
        },
        corolla: {
            type: {
                image: "Images/Corolla.jpg",
                name: "Toyota Corolla",
                model: 2024,
                price:"PKR 7,550,000",
                colors: ["gold", "black", "grey"],
            }
        }
    },
    suzuki: {
        alto: {
            type: {
                image: "Images/Alto.png",
                name: "Suzuki Alto",
                model: 2024,
                price: "PKR 3,050,000",
                colors: ["Grey", "Black", "Blue"],
            }
        },
        wagonR: {
            type: {
                image: "Images/Wagon-R.jpg",
                name: "Suzuki Wagon R",
                model: 2024,
                price: "PKR 3,740,000" ,
                colors: ["grey", "black", "red"],
            }
        }
    },
}

var company = document.getElementById("company")
var brand = document.getElementById("brand")
var allCars = document.getElementById("allCars")

company.innerHTML = `<option value = "">Select Comapany</option>`
brand.innerHTML = `<option value = "">Select Brand</option>`

for (var key in carVariants) {
    company.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</option>
    `
    for (var key1 in carVariants[key]) {
        for (var key2 in carVariants[key][key1]) {
            allCars.innerHTML += `
        <div class="col">
        <div class="card">
        <img src="${carVariants[key][key1][key2].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${carVariants[key][key1][key2].name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${carVariants[key][key1][key2].model}</h6>
                <h2>${carVariants[key][key1][key2].price}</h2>
            </div>
        </div>
    </div>`
            // console.log(carVariants[key][key1][key2])
        }
    }
}

function onCompanyChange() {
    brand.innerHTML = "";
    brand.innerHTML = `<option value = "">Select Brand</option>`
    for (var key in carVariants[company.value]) {
        brand.innerHTML += `
        <option value="${key}">${key.toUpperCase()}</option>
        `
        // console.log(key)
    }
}

function filterCars() {
    var carData = carVariants[company.value][brand.value].type
    allCars.innerHTML = `
        <div class="col mb-2">
            <div class="card">
        <img src="${carData.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${carData.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
                    <h2>${carData.price}</h2>
             </div>
            </div>
        </div>
        `
}