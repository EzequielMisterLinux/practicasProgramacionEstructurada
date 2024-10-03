let app = document.querySelector("#app")

app.innerHTML=`
<h1>Encabezado 1</h1>
<h2>Encabezado 2</h2>
<h3>Encabezado 3</h3>
<h4>Encabezado 4</h4>
<h5>Encabezado 5</h5>
<h6>Encabezado 6</h6>


`

let headers = document.querySelectorAll("h1,h2,h3,h4,h5,h6")

for(let i = 0; i < headers.length; i++){
    headers[i].innerText = `Nuevo encabezado de nivel ${i + 1}`
}