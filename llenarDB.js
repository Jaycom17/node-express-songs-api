const canciones = [
  {
    songName: "Nuestro Juramento",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Odiame",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Fatalidad",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Lágrimas de Amor",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Rondando Tu Esquina",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Guayaquileña",
    artistName: "Julio Jaramillo",
    songGenre: "Pasillo",
  },
  {
    songName: "El Alma en los Labios",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Mi Último Fracaso",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "De Cigarro en Cigarro",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Reminiscencias",
    artistName: "Julio Jaramillo",
    songGenre: "Pasillo",
  },
  {
    songName: "Nube Gris",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Amor Eterno",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Sombras",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Caminito",
    artistName: "Julio Jaramillo",
    songGenre: "Vals",
  },
  {
    songName: "Te Odio y Te Quiero",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Cenizas",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Rival",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Maruja",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Cinco Centavitos",
    artistName: "Julio Jaramillo",
    songGenre: "Pasillo",
  },
  {
    songName: "Cobarde",
    artistName: "Julio Jaramillo",
    songGenre: "Bolero",
  },
  {
    songName: "Volver, Volver",
    artistName: "Vicente Fernández",
    songGenre: "Ranchera",
  },
  {
    songName: "El Rey",
    artistName: "Vicente Fernández",
    songGenre: "Ranchera",
  },
  {
    songName: "Por Tu Maldito Amor",
    artistName: "Vicente Fernández",
    songGenre: "Ranchera",
  },
  {
    songName: "Copa Tras Copa",
    artistName: "Vicente Fernández",
    songGenre: "Ranchera",
  },
  {
    songName: "Mujeres Divinas",
    artistName: "Vicente Fernández",
    songGenre: "Ranchera",
  },
  {
    songName: "Esta to feo",
    artistName: "SFDK",
    songGenre: "Rap",
  },
  {
    songName: "Mitad y Mitad",
    artistName: "Kase.O",
    songGenre: "Rap",
  },
  {
    songName: "Cantando",
    artistName: "Kase.O",
    songGenre: "Rap",
  },
  {
    songName: "Tristura",
    artistName: "Kase.O",
    songGenre: "Rap",
  },
  {
    songName: "Repartiendo Arte",
    artistName: "Kase.O",
    songGenre: "Rap",
  },
  {
    songName: "El Preso",
    artistName: "Fruko y sus Tesos",
    songGenre: "Salsa",
  },
  {
    songName: "Cachondea",
    artistName: "Fruko y sus Tesos",
    songGenre: "Salsa",
  },
  {
    songName: "El Ausente",
    artistName: "Fruko y sus Tesos",
    songGenre: "Salsa",
  },
  {
    songName: "Manyoma",
    artistName: "Fruko y sus Tesos",
    songGenre: "Salsa",
  },
  {
    songName: "Improvisando",
    artistName: "Fruko y sus Tesos",
    songGenre: "Salsa",
  },
  {
    songName: "Mala Mujer",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "Bien Duro",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "Demasiadas Mujeres",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "No Te Pegas",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "Para Repartir",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "Comerte Entera",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "Nada",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "Persiguiéndonos",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "Tú Me Dejaste De Querer",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
  {
    songName: "Yate",
    artistName: "C. Tangana",
    songGenre: "Rap",
  },
];

async function enviarCanciones() {

  for (const song of canciones) {
    try {
      const response = await fetch("http://localhost:3000/api/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tipo de contenido del cuerpo de la solicitud
        },
        body: JSON.stringify(song), // Convierte los datos a formato JSON
      });

      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }

      const data = await response.json();
      console.log("Respuesta de la API:", data);

      // Realiza acciones adicionales con la respuesta si es necesario
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }
}

// Llamar a la función para enviar las canciones
enviarCanciones();
