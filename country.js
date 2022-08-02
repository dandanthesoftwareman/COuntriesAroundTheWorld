class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "marhaban bialealam!", ["blue", "yellow", "red"])

// let countryNameNode = document.getElementById("CountryName");
// let OfficialLanguageNode = document.getElementById("OfficialLanguage");
// let HelloWorld = document.getElementById("HelloWorld");


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let countryNameNode = document.getElementById("CountryName");
    let OfficialLanguageNode = document.getElementById("OfficialLanguage");
    let HelloWorld = document.getElementById("HelloWorld");
    let colorNode1 = document.getElementById("Color1");
    let colorNode2 = document.getElementById("Color2");
    let colorNode3 = document.getElementById("Color3");
    let country = usa;
    // console.log(input);

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    countryNameNode.innerText = country.name;
    OfficialLanguageNode.innerText = country.lang;
    HelloWorld.innerText = country.greeting;
    colorNode1.style.backgroundColor = country.colors[0];
    colorNode2.style.backgroundColor = country.colors[1];
    colorNode3.style.backgroundColor = country.colors[2];

}
