var precio = 200000;
var cantidad = 3;
var totalVenta = precio * cantidad;
var descuento = totalVenta * 0.2;
var valorFinalVenta = totalVenta - descuento;
if (totalVenta > 877803) {
    console.log("Total antes de decuento: " + totalVenta);
    console.log("Valor del descuento: " + descuento);
    console.log("Total a pagar: " + valorFinalVenta);}
    else {console.log("Total a pagar: " + totalVenta)}