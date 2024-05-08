var carData = {
    toyota: {
        yaris: {
            Image: "Images/Yaris.jpg",
            Name: "Toyota Yaris",
            Model: 2024,
            Colors: ["White", "Black", "Blue"],
            price: "PKR 5,850,000",
        },
        corolla: {
            Image: "Images/Corolla.jpg",
            Name: "Toyota Corolla",
            Model: 2024,
            Colors: ["Gold", "Black", "Grey"],
            price: "PKR 7,550,000",
        },
        rush: {
            Image: "Images/Rush.jpg",
            Name: "Toyota Rush",
            Model: 2024,
            Colors: ["Red", "Black", "White"],
            price: "PKR 8,330,000",
        },
        corollaCross: {
            Image: "Images/Cross.jpg",
            Name: "Toyota Corolla Cross",
            Model: 2024,
            Colors: ["White", "Black", "Red"],
            price: "PKR 9,850,000",
        },
        hilux: {
            Image: "Images/Hilux.png",
            Name: "Toyota Hilux",
            Model: 2024,
            Colors: ["Grey", "Black", "Blue"],
            price: "PKR 15,400,000",
        },
        fortuner: {
            Image: "Images/Fortuner.png",
            Name: "Toyota Fortuner",
            Model: 2024,
            Colors: ["White", "Black", "Blue"],
            price: "PKR 19,900,000",
        },
        camry: {
            Image: "Images/Camry.jpg",
            Name: "Toyota Camry",
            Model: 2024,
            Colors: ["Red", "Black", "Blue"],
            price: "PKR 30,000,000",
        },
        landCruiser: {
            Image: "Images/Land Cruiser.png",
            Name: "Toyota Land Cruiser",
            Model: 2024,
            Colors: ["White", "Black", "Silver"],
            price: "PKR 120,000,000",
        },
        vitz: {
            Image: "Images/Vitz.jpg",
            Name: "Toyota Vitz",
            Model: 2024,
            Colors: ["Yellow", "Black", "Blue"],
            price: "PKR 4,470,000",
        },
        passo: {
            Image: "Images/Passo.jpg",
            Name: "Toyota Passo",
            Model: 2024,
            Colors: ["White", "Yellow", "Red"],
            price: "PKR 3,730,000",
        },
        aqua: {
            Image: "Images/Aqua.jpg",
            Name: "Toyota Aqua",
            Model: 2024,
            Colors: ["Grey", "Black", "Blue"],
            price: "PKR 7,170,000",
        }
    },
    suzuki: {
        alto: {
            Image: "Images/Alto.png",
            Name: "Suzuki Alto",
            Model: 2024,
            Colors: ["Grey", "Black", "Blue"],
            price: "PKR 3,050,000",
        },
        wagonR: {
            Image: "Images/Wagon-R.jpg",
            Name: "Suzuki Wagon R",
            Model: 2024,
            Colors: ["Grey", "Black", "Red"],
            price: "PKR 3,740,000",
        },
        cultus: {
            Image: "Images/Cultus.png",
            Name: "Suzuki Cultus",
            Model: 2024,
            Colors: ["Grey", "Silver", "Blue"],
            price: "PKR 4,550,000",
        },
        swift: {
            Image: "Images/Swift.jpg",
            Name: "Suzuki Swift",
            Model: 2024,
            Colors: ["Red", "Black", "Blue"],
            price: "PKR 5,800,000",
        }
    },
    honda: {
        city: {
            Image: "Images/City.jpg",
            Name: "Honda City",
            Model: 2024,
            Colors: ["Red", "Black", "Blue"],
            price: "PKR 5,850,000",
        },
        brv: {
            Image: "Images/BRV.jpg",
            Name: "Honda BR-V",
            Model: 2024,
            Colors: ["Silver", "Black", "Blue"],
            price: "PKR 6,300,000",
        },
        hrv: {
            Image: "Images/HRV.jpg",
            Name: "Honda HR-V",
            Model: 2024,
            Colors: ["Red", "Black", "Silver"],
            price: "PKR 7,900,000",
        },
        civic: {
            Image: "Images/Civic.jpg",
            Name: "Honda Civic",
            Model: 2024,
            Colors: ["White", "Black", "Red"],
            price: "PKR 9,900,000",
        }
    },
    kia: {
        picanto: {
            Image: "Images/Picanto.png",
            Name: "KIA Picanto",
            Model: 2024,
            Colors: ["White", "Silver", "Blue"],
            price: "PKR 3,850,000",
        },
        stonic: {
            Image: "Images/Stonic.jpg",
            Name: "KIA Stonic",
            Model: 2024,
            Colors: ["White", "Black", "Blue"],
            price: "PKR 5,350,000",
        },
        sportage: {
            Image: "Images/Sportage.jpg",
            Name: "KIA Sportage",
            Model: 2024,
            Colors: ["Grey", "Black", "Blue"],
            price: "PKR 9,000,000",
        },
        sorento: {
            Image: "Images/Sorento.jpg",
            Name: "KIA Sorento",
            Model: 2024,
            Colors: ["White", "Black", "Blue"],
            price: "PKR 9,500,000",
        },
        carnival: {
            Image: "Images/Carnival.jpg",
            Name: "KIA Grand Carnival",
            Model: 2024,
            Colors: ["Silver", "Black", "Blue"],
            price: "PKR 16,000,000",
        }
    },
    hyundai: {
        elantra: {
            Image: "Images/Elantra.jpg",
            Name: "Hyundai Elantra",
            Model: 2024,
            Colors: ["White", "Red", "Grey"],
            price: "PKR 6,930,000",
        },
        tucson: {
            Image: "Images/Tucson.png",
            Name: "Hyundai Tucson",
            Model: 2024,
            Colors: ["Silver", "Black", "Red"],
            price: "PKR 8,660,000",
        },
        sonata: {
            Image: "Images/Sonata.jpg",
            Name: "Hyundai Sonata",
            Model: 2024,
            Colors: ["Grey", "Black", "Red"],
            price: "PKR 10,900,000",
        }
    },
    changan: {
        karvaan: {
            Image: "Images/Karvaan.jpg",
            Name: "Changan Karvaan",
            Model: 2024,
            Colors: ["White", "Black", "Grey"],
            price: "PKR 3,000,000",
        },
        alsvin: {
            Image: "Images/Alsvin.png",
            Name: "Changan Alsvin",
            Model: 2024,
            Colors: ["Red", "Black", "Silver"],
            price: "PKR 4,550,000",
        },
        oshan: {
            Image: "Images/Oshan.jpg",
            Name: "Changan Oshan X7",
            Model: 2024,
            Colors: ["Red", "Black", "Silver"],
            price: "PKR 8,550,000",
        }
    },
    mg: {
        mgHs: {
            Image: "Images/hs.jpg",
            Name: "MG HS",
            Model: 2024,
            Colors: ["White", "Black"],
            price: "PKR 8,100,000",
        }
    },
    bmw: {
        x7: {
            Image: "Images/x7.jpg",
            Name: "BMW X7",
            Model: 2024,
            Colors: ["White", "Black", "Grey"],
            price: "PKR 29,000,000",
        },
        x1: {
            Image: "Images/X1.jpg",
            Name: "BMW X1",
            Model: 2024,
            Colors: ["White", "Black", "Blue"],
            price: "PKR 30,000,000",
        },
        i4: {
            Image: "Images/i4.jpg",
            Name: "BMW I4",
            Model: 2024,
            Colors: ["White", "Black", "Red"],
            price: "PKR 42,000,000",
        }
    },
    audi: {
        q2: {
            Image: "Images/Q2.png",
            Name: "Audi Q2",
            Model: 2024,
            Colors: ["White"],
            price: "PKR 7,250,000",
        },
        etron: {
            Image: "Images/E-Tron.png",
            Name: "Audi E-Tron",
            Model: 2024,
            Colors: ["Green", "Silver", "Blue", "Black"],
            price: "PKR 51,000,000",
        },
        gt: {
            Image: "Images/gt.jpg",
            Name: "Audi E-Tron GT",
            Model: 2024,
            Colors: ["Grey", "Black", "Red"],
            price: "PKR 81,000,000",
        },
        a4: {
            Image: "Images/A4.jpg",
            Name: "Audi A4",
            Model: 2024,
            Colors: ["White", "Black", "Blue"],
            price: "PKR 35,000,000",
        },
        a3: {
            Image: "Images/A3.jpg",
            Name: "Audi A3",
            Model: 2024,
            Colors: ["White", "Black", "Red"],
            price: "PKR 7,180,000",
        }
    }
}

var make = document.getElementById("make")
var model = document.getElementById("model")

make.innerHTML = `<option value="">Select Make</option>`
model.innerHTML = `<option value="">Select Model</option>`

for (var key in carData) {
    make.innerHTML += `
    <option value="${key}" >${key.toUpperCase()}</option>
    `
}

function onMakeChange() {
    model.innerHTML = "";
    model.innerHTML = `<option value="">Select Model</option>`
    for (var key in carData[make.value]) {
        console.log(key)
        model.innerHTML += `
        <option value="${key}" >${key.toUpperCase()}</option>
        `
    }
}