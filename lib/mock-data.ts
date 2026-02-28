// ========================================
// MOCK DATA — Replace with real data later
// ========================================

export type Position = "Arquero" | "Defensa" | "Mediocampista" | "Delantero"

export interface Player {
  id: number
  name: string
  nickname?: string
  position: Position
  number: number
  goals: number
  assists: number
  image: string
  bio: string
  strengths: string[]
  highlight: string
}

export interface FixtureMatch {
  id: number
  date: string
  time: string
  rival: string
  condition: "Local" | "Visitante"
  venue: string
  status: "Proximo" | "Finalizado"
  scoreHome?: number
  scoreAway?: number
  scorers?: string[]
  mvp?: string
  month: string
}

export interface NewsItem {
  id: number
  title: string
  date: string
  excerpt: string
  image: string
  content: string
}

export interface Sponsor {
  id: number
  name: string
  logo: string
  tier: "Principal" | "Sponsor" | "Partner"
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

// ---------- PLAYERS ----------
export const players: Player[] = [
  {
  id: 1,
  name: "Juan Busquets",
  nickname: "Juancito",
  position: "Arquero",
  number: 1,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/15.jpeg",
  bio: "Arquero historico de Mala Junta. Seguridad bajo los tres palos, liderazgo desde el fondo y reflejos determinantes en momentos clave.",
  strengths: ["Reflejos", "Juego aéreo", "Mano a mano", "Orden defensivo"],
  highlight: "Asistencia perfecta en todos los partidos disputados con Mala Junta 2025",
},
  {
  id: 2,
  name: "Diego Bulacios",
  nickname: "Presi",
  position: "Defensa",
  number: 5,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/8.jpeg",
  bio: "Defensor central y referente institucional del equipo. Liderazgo, firmeza en la marca y compromiso absoluto con la camiseta de Mala Junta.",
  strengths: ["Marca fuerte", "Anticipación", "Juego aéreo", "Liderazgo"],
  highlight: "Presencia en el 100% de los partidos oficiales 2025",
},
  {
  id: 3,
  name: "Rodrigo Camacho",
  nickname: "Mariscal",
  position: "Defensa",
  number: 6,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/11.jpeg",
  bio: "Defensor central de máxima intensidad. Seguridad en la marca, firme en los duelos y con buen pie para iniciar juego desde el fondo.",
  strengths: ["Marca fuerte", "Garra", "Salida limpia", "Remate de media distancia"],
  highlight: "Salvadas de goles claves en partidos definitorios 2025",
},
  {
  id: 4,
  name: "Gonzalo Gutiérrez",
  nickname: "Bicho",
  position: "Defensa",
  number: 12,
  goals: 0,
  assists: 1,
  image: "/images/jugadores/10.jpeg",
  bio: "Defensor versátil y firme en los cruces. Seguridad en el fondo, fuerte en el uno contra uno y con buen pie para salir jugando. Revelación defensiva de la temporada 2025.",
  strengths: ["Cruces defensivos", "Marca firme", "Salida limpia", "Seguridad"],
  highlight: "Salvadas decisivas en cruces defensivos y revelación en su nueva posición durante 2025",
},
  {
  id: 5,
  name: "Gustavo Lagarde",
  nickname: "Gustav",
  position: "Defensa",
  number: 13,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/2.jpeg",
  bio: "Incorporación 2026. Defensor zurdo, rápido y fuerte en la marca. Destaca por su técnica y buen pie para salir jugando desde el fondo, aportando claridad y profundidad por el sector izquierdo.",
  strengths: ["Velocidad", "Perfil zurdo", "Salida limpia", "Remate potente"],
  highlight: "Incorporación 2026 con sólida actuación defensiva y proyección ofensiva",
},
  {
  id: 6,
  name: "Pablo Tolaba",
  nickname: "Toleib",
  position: "Defensa",
  number: 17,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/12.jpeg",
  bio: "Incorporación 2026. Defensor de mucha garra, orden y salida limpia desde el fondo. Comunicativo dentro del campo, organiza la línea defensiva y transmite seguridad en cada jugada.",
  strengths: ["Garra", "Salida limpia", "Orden táctico", "Liderazgo defensivo"],
  highlight: "Refuerzo clave para la temporada 2026",
},
{
  id: 7,
  name: "Marcos Rigo",
  nickname: "Rayo",
  position: "Mediocampista",
  number: 4,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/16.jpeg",
  bio: "Lateral-volante con proyección ofensiva constante. Velocidad y capacidad para aportar tanto en ataque como en defensa. Combina centros precisos con llegada al gol.",
  strengths: ["Velocidad", "Centros precisos", "Ida y vuelta", "Llegada al gol"],
  highlight: "Participación clave en ataque y defensa durante múltiples temporadas con Mala Junta",
},
  {
  id: 8,
  name: "Emilio Jimenez",
  nickname: "Cucho",
  position: "Mediocampista",
  number: 7,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/17.jpeg",
  bio: "Histórico mediocampista de Mala Junta y pilar del equipo. Persistente, ordenado y con buena técnica, aporta equilibrio y presencia en el mediocampo. Referente dentro y fuera de la cancha y ejerce liderazgo con carácter y compromiso.",
  strengths: ["Orden táctico", "Persistencia", "Técnica", "Liderazgo"],
  highlight: "Referente histórico del equipo y pieza clave en la estructura del mediocampo",
},
{
  id: 9,
  name: "Fabricio Pistolesi",
  nickname: "Pistola",
  position: "Mediocampista",
  number: 8,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/1.jpeg",
  bio: "Incorporación 2026. Mediocampista de carácter firme y gran confianza en su juego. Destaca por su visión, intensidad en la recuperación y presencia física en el mediocampo.",
  strengths: ["Visión de juego", "Marca intensa", "Confianza", "Recuperación"],
  highlight: "Refuerzo estratégico para fortalecer el mediocampo en la temporada 2026",
},
{
  id: 10,
  name: "Jorge Salles",
  nickname: "Jorjinho",
  position: "Mediocampista",
  number: 10,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/13.jpeg",
  bio: "Mediocampista de gran técnica y visión. Rápido, fuerte en el uno contra uno y con llegada al gol. Ordena el juego ofensivo del equipo y aporta claridad en los momentos clave.",
  strengths: ["Perfil zurdo", "Técnica", "Visión de juego", "Llegada al gol"],
  highlight: "Encargado de conducir el juego y aportar desequilibrio en la temporada 2026",
},{
  id: 11,
  name: "Javier Ceballos",
  nickname: "Xavi",
  position: "Mediocampista",
  number: 11,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/7.jpeg",
  bio: "Mediocampista completo, con gran técnica y visión para filtrar pases entre líneas. Ordena el juego, aporta llegada al gol y se sacrifica en la recuperación en la mitad de cancha.",
  strengths: ["Pases filtrados", "Liderazgo", "Técnica", "Sacrificio defensivo"],
  highlight: "Conductor del equipo en la temporada 2026",
},
{
  id: 12,
  name: "Juan Narváez",
  nickname: "Pato",
  position: "Mediocampista",
  number: 14,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/5.jpeg",
  bio: "Incorporación 2026. Mediocampista con buen juego y llegada al gol. Comprometido y sacrificado en cada partido, aporta dinámica y equilibrio en la mitad de cancha.",
  strengths: ["Llegada al gol", "Compromiso", "Dinámica", "Recuperación"],
  highlight: "Refuerzo clave para fortalecer el mediocampo en la temporada 2026",
},
{
  id: 13,
  name: "Gabriel Vega",
  nickname: "Gabi",
  position: "Arquero",
  number: 15,
  goals: 0,
  assists: 0,
  image:"/images/jugadores/3.jpeg",
  bio: "Incorporación 2026. Arquero confiable y seguro bajo los tres palos, transmite tranquilidad a la defensa y compromiso en cada entrenamiento.",
  strengths: ["Reflejos", "Seguridad", "Juego aéreo", "Compañerismo"],
  highlight: "Refuerzo 2026 que aporta solidez en el arco y anima los terceros tiempos con guitarra y canto",
},
{
  id: 14,
  name: "Ramiro Sáez",
  nickname: "Pollo",
  position: "Delantero",
  number: 16,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/9.jpeg",
  bio: "Mediocampista dinámico y creativo. Destaca por su velocidad, capacidad de llegada al gol y recursos técnicos que aportan fantasía al juego. Siempre dispuesto a intentar jugadas diferentes que rompan líneas.",
  strengths: ["Velocidad", "Creatividad", "Definición", "Técnica individual"],
  highlight: "Jugador desequilibrante con recursos técnicos y jugadas de fantasía",
},
{
  id: 15,
  name: "Alejandro Roibon",
  nickname: "Roi",
  position: "Delantero",
  number: 9,
  goals: 0,
  assists: 0,
  image:"/images/jugadores/14.jpeg",
  bio: "Delantero centro con instinto goleador. Fuerte en el pivoteo, generoso en el sacrificio y siempre dispuesto a presionar y correr por el equipo. Referencia ofensiva dentro del área.",
  strengths: ["Definición", "Pivoteo", "Presión alta", "Sacrificio"],
  highlight: "Referencia ofensiva y principal carta de gol del equipo",
},
{
  id: 16,
  name: "Nahuel Palacios",
  nickname: "Tanque",
  position: "Delantero",
  number: 32,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/6.jpeg",
  bio: "Delantero técnico y asociativo. Destaca por su capacidad de pivoteo, buen control de balón y lectura de juego para asistir y generar espacios. Más que potencia, aporta inteligencia ofensiva y conexión con el mediocampo.",
  strengths: ["Pivoteo", "Técnica", "Juego asociado", "Lectura ofensiva"],
  highlight: "Referencia ofensiva capaz de generar juego y asistir desde el área",
},
{
  id: 17,
  name: "Nicolás Chain",
  nickname: "Chain",
  position: "Delantero",
  number: 33,
  goals: 0,
  assists: 0,
  image: "/images/jugadores/4.jpeg",
  bio: "Incorporación 2026. Combina fuerza y técnica para imponerse en el área y participar activamente en el juego ofensivo.",
  strengths: ["Potencia física", "Velocidad", "Juego aéreo"],
  highlight: "Refuerzo 2026 con proyección ofensiva en el frente de ataque",
}
]

// ---------- FIXTURE ----------
export const fixture: FixtureMatch[] = [
  // partido pendiente de febrero que se juega mañana
  {
    id: 9,
    date: "2026-02-28",
    time: "13:15",
    rival: "Chernobyl",
    condition: "Local",
    venue: "2 - Jockey",
    status: "Proximo",
    month: "Febrero",
  },
  // marzo según orden proporcionado por el usuario
  {
    id: 1,
    date: "2026-03-07",
    time: "En veremos",
    rival: "Pelusa FC",
    condition: "Local",
    venue: "En veremos",
    status: "Proximo",
    month: "Marzo",
  },
  {
    id: 2,
    date: "2026-03-14",
    time: "En veremos",
    rival: "Los Gallos",
    condition: "Local",
    venue: "En veremos",
    status: "Proximo",
    month: "Marzo",
  },
  {
    id: 3,
    date: "2026-03-21",
    time: "En veremos",
    rival: "Gorderos FC",
    condition: "Local",
    venue: "En veremos",
    status: "Proximo",
    month: "Marzo",
  },
  {
    id: 105,
    date: "2026-03-28",
    time: "En veremos",
    rival: "La Lesión",
    condition: "Local",
    venue: "En veremos",
    status: "Proximo",
    month: "Marzo",
  },
  // placeholder fixtures for upcoming months; replace or extend with real dates once
  // the schedule is known.  You can send me the order of matches, dates, times and
  // venues and I'll update them accordingly.
  {
    id: 100,
    date: "2026-04-04",
    time: "En veremos",
    rival: "El Zeta",
    condition: "Local",
    venue: "En veremos",
    status: "Proximo",
    month: "Abril",
  },
  {
    id: 101,
    date: "2026-04-11",
    time: "En veremos",
    rival: "Machitulio",
    condition: "Local",
    venue: "En veremos",
    status: "Proximo",
    month: "Abril",
  },
  {
    id: 102,
    date: "2026-06-01",
    time: "16:00",
    rival: "Pendiente Junio",
    condition: "Local",
    venue: "Por definirse",
    status: "Proximo",
    month: "Junio",
  },
  {
    id: 103,
    date: "2026-07-06",
    time: "16:00",
    rival: "Pendiente Julio",
    condition: "Local",
    venue: "Por definirse",
    status: "Proximo",
    month: "Julio",
  },
  {
    id: 4,
    date: "2026-02-16",
    time: "17:00",
    rival: "Atletico Sur",
    condition: "Local",
    venue: "Cancha El Bajo",
    status: "Finalizado",
    scoreHome: 3,
    scoreAway: 1,
    scorers: ["Cucho x2", "Dieguito"],
    mvp: "Emilio Jimenez",
    month: "Febrero",
  },
  {
    id: 5,
    date: "2026-02-09",
    time: "16:00",
    rival: "Deportivo Central",
    condition: "Visitante",
    venue: "Estadio Central",
    status: "Finalizado",
    scoreHome: 2,
    scoreAway: 2,
    scorers: ["Santi", "Lucho"],
    mvp: "Santiago Lopez",
    month: "Febrero",
  },
  {
    id: 6,
    date: "2026-02-02",
    time: "18:00",
    rival: "Real Tucuman",
    condition: "Local",
    venue: "Cancha El Bajo",
    status: "Finalizado",
    scoreHome: 4,
    scoreAway: 0,
    scorers: ["Cucho x2", "Dieguito", "Nico"],
    mvp: "Emilio Jimenez",
    month: "Febrero",
  },
  {
    id: 7,
    date: "2026-01-26",
    time: "16:00",
    rival: "San Martin FC",
    condition: "Visitante",
    venue: "Cancha San Martin",
    status: "Finalizado",
    scoreHome: 1,
    scoreAway: 2,
    scorers: ["Cucho"],
    mvp: "Martin Rojas",
    month: "Enero",
  },
  {
    id: 8,
    date: "2026-01-19",
    time: "17:00",
    rival: "Juventud Unida",
    condition: "Local",
    venue: "Cancha El Bajo",
    status: "Finalizado",
    scoreHome: 2,
    scoreAway: 0,
    scorers: ["Cucho", "Lucho"],
    mvp: "Lucas Martinez",
    month: "Enero",
  },
]

// ---------- NEWS ----------
export const news: NewsItem[] = [
  {
    id: 1,
    title: "Renovacion Cucho: Emilio Jimenez sigue en Mala Junta",
    date: "2026-02-09",
    excerpt:
      "El goleador del equipo confirmo su continuidad para la temporada 2026. Cucho es pieza clave del proyecto.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-09%20at%2023.30.08-x3xdtrHvdbBf9EihVXIaK1HYJqPGjQ.jpeg",
    content:
      "Emilio 'Cucho' Jimenez, goleador historico de Mala Junta, renueva su compromiso con el equipo para la temporada 2026. Con 12 goles en la temporada pasada, Cucho es la referencia ofensiva del equipo y una pieza fundamental en la busqueda de nuevos titulos. 'Mala Junta es mi casa, aca encontre mucho mas que futbol', declaro el delantero.",
  },
  {
    id: 2,
    title: "Victoria contundente: Mala Junta 4-0 Real Tucuman",
    date: "2026-02-02",
    excerpt:
      "Goleada historica en la Cancha El Bajo. El equipo demostro un nivel superlativo ante un rival directo.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
    content:
      "Con una actuacion demoledora, Mala Junta goleo 4-0 a Real Tucuman en un partido que sera recordado por mucho tiempo. Cucho abrio el marcador a los 15 minutos, y Dieguito amplio antes del descanso. En el segundo tiempo, el equipo no bajo la intensidad y sello la goleada con goles de Cucho y Nico.",
  },
  {
    id: 3,
    title: "Pretemporada 2026: mas preparados que nunca",
    date: "2026-01-15",
    excerpt:
      "El plantel completo trabajo durante 3 semanas de pretemporada intensiva con nuevo preparador fisico.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop",
    content:
      "Con la incorporacion de un preparador fisico dedicado, Mala Junta encaro una pretemporada de tres semanas con doble turno. El objetivo: llegar en optima forma al inicio de la liga y competir hasta el final. Los jugadores mostraron compromiso total y el cuerpo tecnico quedo conforme con el rendimiento general.",
  },
  {
    id: 4,
    title: "Nuevos sponsors se suman al proyecto Mala Junta",
    date: "2026-01-10",
    excerpt:
      "Tres nuevas marcas locales se incorporan como sponsors del equipo para la temporada 2026.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=400&fit=crop",
    content:
      "El crecimiento de Mala Junta no se detiene. Tres nuevas empresas locales se sumaron como sponsors para la temporada 2026, fortaleciendo el proyecto deportivo y la presencia del equipo en la comunidad tucumana. Los acuerdos incluyen visibilidad en indumentaria, redes sociales y activaciones en los dias de partido.",
  },
  {
    id: 5,
    title: "Mala Junta suma 3 refuerzos para la temporada",
    date: "2026-01-05",
    excerpt:
      "Tres jugadores con experiencia en ligas regionales refuerzan el plantel para competir en todos los frentes.",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&h=400&fit=crop",
    content:
      "Con la mira puesta en ser protagonista, Mala Junta incorporo tres jugadores con experiencia en ligas regionales. Las nuevas incorporaciones llegan para aportar profundidad al plantel y elevar la competencia interna. El DT se mostro entusiasmado con las opciones que tendra disponibles desde la primera fecha.",
  },
]

// ---------- SPONSORS ----------
export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Educación 24",
    logo: "/images/sponsors/e24.png",
    tier: "Principal",
  },
  {
    id: 2,
    name: "FV Group SRL",
    logo: "/images/sponsors/fv-blanco-01.png",
    tier: "Principal",
  },
  {
    id: 3,
    name: "Kavak Deportes",
    logo: "/images/sponsors/KAVAK-PNG-01.png",
    tier: "Sponsor",
  },
  {
    id: 4,
    name: "Envanor",
    logo: "/images/sponsors/ENVANOR-PNG-01.png",
    tier: "Sponsor",
  },
  {
    id: 5,
    name: "Inguz Centro de Entrenamiento",
    logo: "/images/sponsors/1.png",
    tier: "Sponsor",
  },
  {
    id: 6,
    name: "Farmacia del Cerro",
    logo: "/images/sponsors/ddelcerro.png",
    tier: "Partner",
  },
  {
    id: 7,
    name: "Locos x el Fútbol",
    logo: "/images/sponsors/locos-x-el-f-01.png",
    tier: "Partner",
  },
  {
    id: 8,
    name: "Máximo Café de Encuentro",
    logo: "/images/sponsors/Logo-MAxiMO---Blanco.png",
    tier: "Partner",
  },
  {
    id: 9,
    name: "Carlitos Repuestos",
    logo: "/images/sponsors/Logo-negro-con-borde-blanco.png",
    tier: "Partner",
  },
  {
    id: 10,
    name: "LLASAC",
    logo: "/images/sponsors/LLASAC-PNG-01.png",
    tier: "Partner",
  },
  {
    id: 11,
    name: "Palpitos",
    logo: "/images/sponsors/LOGO-PALPITOS-1.png",
    tier: "Partner",
  },
  {
    id: 12,
    name: "OPS Cars",
    logo: "/images/sponsors/ops.png",
    tier: "Partner",
  },
  {
    id: 13,
    name: "Quick Market",
    logo: "/images/sponsors/quick.png",
    tier: "Partner",
  },
  {
    id: 14,
    name: "Segenem",
    logo: "/images/sponsors/SEGENEM-01.png",
    tier: "Partner",
  },
  {
    id: 15,
    name: "Fríos del Norte",
    logo: "/images/sponsors/fdnorte.png",
    tier: "Partner",
  },
  {
    id: 16,
    name: "Balverde",
    logo: "/images/sponsors/BALVERDE-01.png",
    tier: "Partner",
  },
  {
    id: 17,
    name: "Tucumán Aventura",
    logo: "/images/sponsors/tucumana.png",
    tier: "Principal",
  },
  {
    id: 18,
    name: "Pistón Club Tucumán",
    logo: "/images/sponsors/piston.png",
    tier: "Principal",
  },
]

// ---------- GALLERY ----------
export const gallery: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop", alt: "Partido en curso", category: "Partidos" },
  { id: 2, src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=600&fit=crop", alt: "Celebracion de gol", category: "Partidos" },
  { id: 3, src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop", alt: "Entrenamiento grupal", category: "Entrenamiento" },
  { id: 4, src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=600&fit=crop", alt: "Calentamiento", category: "Entrenamiento" },
  { id: 5, src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop", alt: "Festejo grupal", category: "Partidos" },
  { id: 6, src: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=500&fit=crop", alt: "Foto de equipo", category: "Equipo" },
  { id: 7, src: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=600&h=400&fit=crop", alt: "Cancha El Bajo", category: "Cancha" },
  { id: 8, src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=400&h=600&fit=crop", alt: "Antes del partido", category: "Equipo" },
]

// ---------- SOCIAL POSTS (mock) ----------
// ✏️ ACTUALIZAR: cambiar image y content cuando publiques algo nuevo (fecha y likes eliminados)
export const socialPosts = [
 {
    id: 1,
    platform: "Instagram",
    content: "Lista de Buena Fe confirmada! Plantel F7 +30 para el Apertura 26. Vamos Mala Junta!",
    date: "2026-02-09",
    likes: 248,
    image: "/images/post/post1.jpeg",
    url: "https://www.instagram.com/p/DVNNd88gJ9C/",
  },

]

// ---------- SPONSORSHIP PACKAGES ----------
export const sponsorPackages = [
  {
    id: 1,
    name: "Bronce",
    price: "Consultar",
    features: [
      "Logo en redes sociales",
      "Mencion en partidos",
      "Banner en cancha (1 ubicacion)",
      "1 posteo mensual dedicado",
    ],
  },
  {
    id: 2,
    name: "Plata",
    price: "Consultar",
    features: [
      "Todo lo de Bronce",
      "Logo en indumentaria (manga)",
      "Banner en cancha (2 ubicaciones)",
      "3 posteos mensuales dedicados",
      "Historia destacada en Instagram",
      "Mencion en entrevistas",
    ],
  },
  {
    id: 3,
    name: "Oro",
    price: "Consultar",
    features: [
      "Todo lo de Plata",
      "Logo en pecho de camiseta",
      "Banner principal en cancha",
      "Contenido audiovisual exclusivo",
      "Activaciones en dia de partido",
      "Posteos ilimitados",
      "Presencia en web oficial",
      "Naming en eventos del equipo",
    ],
  },
]

// ---------- NAV LINKS ----------
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Equipo", href: "#equipo" },
  { label: "Fixture", href: "#fixture" },
  // { label: "Resultados", href: "#resultados" },
  // { label: "Noticias", href: "#noticias" },
  { label: "Sponsors", href: "#sponsors" },
  // { label: "Galeria", href: "#galeria" },
  // { label: "Contacto", href: "#contacto" },
]
