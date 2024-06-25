//Variables
let jugarDeNuevo = true;

while (jugarDeNuevo) {
let númeroMáximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*númeroMáximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "Vez";
let máximosIntentos = 6;
console.log("numeroSecreto");
while ("numeroUsuario != numeroSecreto") {
   numeroUsuario = parseInt (prompt(`Me indicas un número entre 1 y ${númeroMáximoPosible} por favor:`));
   numeroUsuario = parseInt(prompt(`Intento ${intentos} de ${máximosIntentos}. Ingresa un número entre 1 y ${númeroMáximoPosible}:`));

 console.log (numeroUsuario);
   /* Este código realiza la comparación   */
   if (numeroUsuario == numeroSecreto) {
      //Acertamos,fue verdadera la condición
      alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`);
   } else {
      if (numeroUsuario > numeroSecreto) {
         alert("el número secreto es menor");
      } else {
       alert("el número secreto es mayor");
      }
      //intentos = intentos + 1;
      intentos++;
      palabraVeces = "Veces";
      if (intentos > máximosIntentos) {
         alert(`Llegaste al número máximo de ${máximosIntentos} intentos`);
         break;
      }

      //la condición no se cumplió
      //alert("los siento, no acertaste el número");
   }
}
jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
}