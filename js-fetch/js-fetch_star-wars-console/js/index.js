console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();

    console.log("data : ", typeof data);
    
    // the entire data object
    console.log(data);
    // the array containing the personal data
    console.log(data.results);
    // log the name of all persons
   const results = data.results;   
    const names = results.map((person) => person.name);
    console.log("Names of the persons: ", names);
    
        // the eye-color of R2-D2
        const R2D2 = results.find((person) => person.name === "R2-D2")
        console.log("Eye-color R2-D2: ", R2D2["eye_color"]);
        // array of person objects who have gold as skin-color
        const goldenSkin = results.filter((person) => person.skin_color === "gold");
        console.log("Person with a golden Skin: ", goldenSkin);
        // array of person objects who have light as skin-color
        const lightSkin = results.filter((person) => person.skin_color === "light");
        console.log("Person with a light Skin: ", lightSkin);
}


fetchData();
