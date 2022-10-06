// you can write js here
console.log('hello from file');

// var kelvins = 294;
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
var celsius = kelvins - 273; // je crée une varaible celsius qui a la valeur de kelvins (294) - 273 = 21
var Fahrenheits = celsius * (9/5) + 32 // je crée une variable qui se nomme Fahrenheits qui vaut celius * (9/5) + 32

console.log(kelvins);
console.log(celsius);
console.log(Math.floor(Fahrenheits));