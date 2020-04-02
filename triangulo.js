var x = 2
var y = 1
var z = 2
if (x === y && x === z && z === y) {console.log("equilátero " +x+" "+y+" "+z)}
else if (x !== y && z === y){console.log("escaleno " +x+" "+y+" "+z)}
else if (x === y && x !== z ){console.log("escaleno " +x+" "+y+" "+z)}
else if (x === z && z !== y ){console.log("escaleno " +x+" "+y+" "+z)}
else {console.log("isósceles " +x+" "+y+" "+z)}