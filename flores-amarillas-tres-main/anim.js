// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Soñé un verano que se hiciera eterno", time: 4 },
  { text: "Desde el momento que vi tu mirada", time: 5 },
  { text: "Me derretiste con esa mirada", time: 9 },
  { text: "Pero el verano se volvió un invierno", time: 13 },
  { text: "Cuando vi que otros brazos te esperaban", time: 16 },
  { text: "Me congele mientras yo te esperaba", time: 18 },
  { text: "Y ahora entiendo cuál es mi papel", time: 21 },
  { text: "Nos queremos cuando nadie ve", time: 26 },
  { text: "Las balas perdidas de este amor", time: 31 },
  { text: "Prefiero no verlas en mi piel", time: 36 },
  { text: "Si me preguntan por ti", time: 40 },
  { text: "Dire que es mentira que toda una vida he soñado contigo", time: 44 },
  { text: "Yo sueño contigo", time: 49 },
  { text: "Si me preguntan por ti", time: 51 },
  { text: "Diré que no es cierto que duele por dentro que no estés conmigo", time: 55 },
  { text: "Te quiero conmigo", time: 59 },
  { text: "Te miro", time: 63 },
  { text: "Me miras", time: 64 },
  { text: "Y el mundo no gira", time: 65 },
  { text: "Todo parece mentira", time: 69 },
  { text: "Tu sigues", time: 73 },
  { text: "Yo sigo", time: 74 },
  { text: "Es nuestro castigo", time: 76 },
  { text: "Fingir que somos amigos", time: 78 },
  { text: "Y cuando no haya testigos", time: 81 },
  { text: "Mi vida entera te daré", time: 84 },
  { text: "Cuando nadie ve <3.", time: 86 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);