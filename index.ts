// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "A esto lo sacamos o lo sacamos!!!!";
// 4. Append the p element to the div element
app?.appendChild(p);

fetch("http://localhost:5000/socies/")
    .then(resp => {
        resp.json()
        .then (data => {
            console.log(data.mensaje);
        })
    });