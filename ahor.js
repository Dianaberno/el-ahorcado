var hombre =  [        "________",
                       "   |\n",
                       "   |\n",
                       "   |\n",
                       "   O\n",
                        "  /|\\\n",
                       "  / \\\n",
                       "         ",
                       "         ",
                       "________"];
var palabra;
function ObtienePalabra() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e"]
var partes = 0
var colNueva = 0
var jugando

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
     palabra = cadena.split(" ")

}


function DibujaHombre(visor, partes) {

   var dibujo = "";
   if (partes < 10)
      for(var x = 0; x < partes; x++) {
         dibujo += hombre[x]
      }
   visor.displayHombre.value = dibujo
}


function DibujaLetra(visor, letra) {

   var bandera = false;
   var cadena = new String(visor.displayPalabra.value)
   var letrasCadena = cadena.split(" ");
   cadena = "";
   for (var x = 0; x < palabra.length; x++) {
      if (palabra[x] == letra) {
         cadena += letra + " ";
         bandera = true;
      } else
         cadena += letrasCadena[x] + " ";
   }
   visor.displayPalabra.value = cadena
   return bandera;
}


function NuevaLetra(visor, letra) {

   visor.displayLetras.value += letra + " "
   if(colNueva == 3) {
      visor.displayLetras.value += "\n"
      colNueva = 0
   } else
      colNueva++
}


function Juega(visor, letra) {

   if (jugando) {
           NuevaLetra(visor, letra)
      var acierto = DibujaLetra(visor, letra)
      if (!acierto)
         DibujaHombre(visor, ++partes)
      if (partes == 9)
         FinJuego(false)
      else if (CompruebaPalabra(visor))
         FinJuego(true)
      } else {
         alert('Pulsa Juego nuevo para comenzar\n una partida nueva.')
   }
}

function IniciaJuego(visor) {

   jugando = true
   partes = 0
   colNueva = 0
   ObtienePalabra()
   DibujaHombre(visor, partes)
   visor.displayPalabra.value = ""
   for (var x = 0; x < palabra.length; x++)
      visor.displayPalabra.value += "_ "
   visor.displayLetras.value = ""
}

function CompruebaPalabra(visor) {
   var fin = true;
   var cadena = new String(visor.displayPalabra.value);
   var letrasCadena = cadena.split(" ");
   for(var x = 0; x < letrasCadena.length; x++)
      if (letrasCadena[x] == "_")
         fin = false;
   return fin;
}


function FinJuego(resultado) {
   var solucion = "";
   jugando = false;
   if (resultado) {
      document.visor.ganadas.value++
      alert("logrado !")
   } else {
     document.visor.perdidas.value++
     for (var x = 0; x < palabra.length; x++)
        solucion += palabra[x];
     alert("Moriste en el intento!\n La palabra era: " + solucion)
   }
}
