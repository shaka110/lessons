var precio = 300000;
var cantidad = 3;
var totalVenta = precio * cantidad;
var descuento = totalVenta * 0.2;
var descuento2 = totalVenta * 0.1;
var valorFinalVenta = totalVenta - descuento;
var valorFinalVenta2 = totalVenta - descuento2;
if (totalVenta > 877803) {
console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + valorFinalVenta);}
else {
    console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del descuento: " + descuento2);
console.log("Total a pagar: " + valorFinalVenta2);}