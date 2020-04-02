var horas = 45
var sph = 2000
var salario = horas*sph
var OT = horas-40
var OTC = sph*1.5
var salariotot = salario + OT*(sph*0.5) 
if (horas<=40){console.log("total Horas "+horas)
console.log("valor Hora "+sph)
console.log("total devengado"+ salario)}
else {
    console.log("total Horas "+horas)
console.log("valor Hora "+sph)
console.log("total Ordinario "+ 40*sph)
console.log("horas Extra "+OT)
console.log("recargo por horas extra "+OTC)
console.log("Total recargo por horas extra "+ (OT*OTC))
console.log("total devengado "+ salariotot)
}