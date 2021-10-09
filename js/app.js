
var presupuesto = parseInt(prompt("INGRESAR PRESUPUESTO"));
//porcentaje de 50 y 75%
var naranja = presupuesto * 50 / 100;
var rojo = presupuesto * 25 / 100;
//seleccion del div restante


var total = document.getElementById("total");
total.innerText = presupuesto;


var restante = document.getElementById("restante")
restante.innerText = presupuesto;
var restanteEntero = presupuesto;



var gastos = document.getElementById("gastos");

function agregar() {
    var cantidad = document.getElementById("cantidad").value;
    presupuesto -= cantidad;
    var gasto = document.getElementById("gasto").value;
    var li = document.createElement("li");

    var label1 = document.createElement("h3");
    var label2 = document.createElement("h3");
    label1.textContent=gasto;
    label2.textContent=cantidad;
    li.appendChild(label1);
    li.appendChild(label2); 
    gastos.appendChild(li);

    li.className = "form-control";
    
    gastos.style.listStyle = "none";   
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    //poniendo lo q queda
    restante.innerText = presupuesto;

    if (presupuesto <= naranja) {
        document.getElementById("cambiar").className="alert alert-warning";
   
        
    }
    if (presupuesto <= rojo) {
        document.getElementById("cambiar").className="alert alert-danger"
    }

}