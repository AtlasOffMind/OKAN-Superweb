export interface FacultyMember {
    name: string;
    file: string;
    role: string;
    roleEn: string;
    bio: string;
    bioEn: string;
}

export const faculty: FacultyMember[] = [
    {
        name: "Carolina del Carmen Zepeda García",
        file: "/images/profesores/Carolina.jpeg",
        role: "Rectora fundadora",
        roleEn: "Founding Rector",
        bio: "Artista escénica, docente y gestora académica especializada en formación profesional en artes escénicas. Es Rectora fundadora de la Escuela de Arte OKAN, institución cuyo proyecto educativo y modelo académico contribuyó a estructurar. Cuenta con Maestría en Teatro y Artes Escénicas por la Universidad Internacional de La Rioja y es Licenciada en Danza por la Universidad de las Américas Puebla. Su trayectoria comprende docencia, dirección académica, producción y montaje escénico, así como el diseño de procesos formativos en conciencia corporal, danza contemporánea, danza somática y entrenamiento físico para la escena. Es cofundadora y codirectora del Centro Integral de Artes Escénicas en Cancún. Actualmente combina gestión institucional, docencia y acompañamiento académico dentro de OKAN.",
        bioEn: "Performing artist, educator and academic leader. She is a founder of OKAN, specializing in professional training, body awareness and contemporary dance.",
    },
    {
        name: "Ernesto Tamayo Benítez",
        file: "/images/profesores/ErnestoTamayo.jpg",
        role: "Decano de Actuación",
        roleEn: "Dean of Acting",
        bio: "Actor, director escénico, diseñador de iluminación y pedagogo teatral. Es Licenciado en Artes Escénicas con perfil en Actuación por la Universidad de las Artes de Cuba, con formación previa como Instructor Profesional de Teatro por la Escuela Nacional de Teatro de Cuba. Es maestrante en Neuroeducación, con una línea centrada en la relación entre procesos cognitivos, aprendizaje artístico y pedagogías contemporáneas del entrenamiento escénico. Su formación incluye procesos de estudio y entrenamiento con Eugenio Barba, Peter Goldfarb, Bertha Martínez y Philippe Genty. Es fundador de OKAN y Decano de la carrera de Actuación, donde diseñó la malla curricular y el marco filosófico de la institución.",
        bioEn: "Actor, stage director, lighting designer and theatre educator. An OKAN founder who shaped the school's acting curriculum and educational philosophy.",
    },
    {
        name: "Luz Mas",
        file: "/images/profesores/Luz-Mas.jpg",
        role: "Decana de Danza",
        roleEn: "Dean of Dance",
        bio: "Bailarina, coreógrafa, docente y gestora cultural especializada en ballet, danza contemporánea y jazz. Realizó su formación profesional en el Real Conservatorio Profesional de Danza de Madrid y estudios avanzados en danza contemporánea y jazz mediante beca en la compañía 10 & 10 Danza. Cuenta con más de veinticinco años de trayectoria como intérprete, coreógrafa, directora artística y formadora, con trabajo en España, Reino Unido y México. Es coautora de la Guía metodológica para la danza jazz. Actualmente es fundadora de OKAN, Decana de Danza y diseñadora de la malla curricular de la Licenciatura en Danza.",
        bioEn: "Dancer, choreographer, educator and cultural leader with more than 25 years of experience in ballet, contemporary dance and jazz.",
    },
    {
        name: "Alia Gisela Sánchez Vázquez",
        file: "/images/profesores/Alia-Sanchez.jpeg",
        role: "Directora de Mercadotecnia",
        roleEn: "Director of Marketing",
        bio: "Economista, estratega digital y especialista en marketing para la industria creativa. Es Licenciada en Economía, cuenta con MBA en Administración de Empresas y Maestría en Marketing Digital y Comercio Electrónico, además de diplomados en transformación digital, e-business y habilidades directivas. Tiene más de dos décadas de experiencia en estrategia digital, comercio electrónico y desarrollo de marca para empresas en México y Centroamérica. Es especialista en posicionamiento web, redes sociales y estrategia SEO aplicada a artistas, eventos culturales y proyectos creativos. Es fundadora de OKAN y Directora del Área de Mercadotecnia.",
        bioEn: "Economist and digital strategist specializing in marketing, positioning and digital transformation for the creative industries.",
    },
    {
        name: "Yailín Coppola",
        file: "/images/profesores/Yailin-1.jpeg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Actriz, directora escénica y pedagoga teatral. Es egresada de la Escuela Nacional de Arte de Cuba y del Instituto Superior de Arte de La Habana, donde obtuvo también la Maestría en Dirección Escénica. Ha desarrollado una destacada trayectoria dentro del teatro cubano contemporáneo como integrante de Argos Teatro. Como actriz ha participado en montajes como Roberto Zucco, Chamaco, Fango, El tío Vania y El principio de Arquímedes. Su trabajo abarca además cine, televisión y docencia especializada en instituciones como la Escuela Nacional de Teatro de Cuba y la EICTV. En OKAN es profesora de Actuación, Dramaturgia para el Actor y Laboratorio Escénico.",
        bioEn: "Actor, stage director and theatre educator. At OKAN, she teaches Acting, Dramaturgy for the Actor and Stage Laboratory.",
    },
    {
        name: "Abigail Soqui Michelena",
        file: "/images/profesores/Abigail-Soqui-Michelena.jpeg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Actriz, bailarina, directora, coreógrafa y docente. Es Licenciada en Actuación por la Escuela Nacional de Arte Teatral del INBAL, con formación previa en danza clásica, danza mexicana y danza contemporánea. Ha desarrollado formación complementaria en entrenamiento corporal, voz escénica, máscara, improvisación y técnicas contemporáneas de movimiento. Su trayectoria comprende trabajo como actriz, directora y performer en el Centro Cultural Helénico, CENART y UNAM, además de festivales nacionales e internacionales. Actualmente dirige Nunca Merlot Teatro A.C. y forma parte del elenco de la obra Humedal.",
        bioEn: "Actor, dancer, director, choreographer and educator working across physical training, stage voice and new theatrical practices.",
    },
    {
        name: "Patricia Rivera",
        file: "/images/profesores/Patricia-Rivera.png",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Creadora escénica, coreógrafa y docente especializada en danza contemporánea. Es Licenciada en Educación Dancística con orientación en Danza Contemporánea por el INBAL. Ha desarrollado una trayectoria activa como intérprete, coreógrafa y colaboradora en compañías como CEPRODAC, Triciclo Rojo, ContraDanza y Danza Capital. Su trabajo se ha presentado en el Palacio de Bellas Artes, el Teatro de la Danza, el Lunario del Auditorio Nacional y el Centro Cultural Los Pinos, además de festivales en México, Cuba, Argentina, Colombia, Japón y Estados Unidos.",
        bioEn: "Performing arts creator, choreographer and educator specializing in contemporary dance, with work in Mexico and international stages.",
    },
    {
        name: "Zurisadai González Fuente",
        file: "/images/profesores/Zurisadai-Gonzalez-Fuente.jpg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Bailarín, coreógrafo, docente y gestor cultural especializado en danza contemporánea. Es Licenciado en Educación Dancística con orientación en Danza Contemporánea por el INBAL, con formación complementaria en la Escuela Nacional de Danza de La Habana y el Centro de Formación Profesional eFel Danse. Es fundador y director artístico de Ts'ok Danza Plataforma Escénica A.C. Su trabajo coreográfico ha sido finalista del Premio Nacional de Danza Guillermo Arriaga y ha obtenido reconocimientos en concursos como 4×4 TJ Night y Con los pies en el aire.",
        bioEn: "Dancer, choreographer and cultural leader specializing in contemporary dance, creation and stage production.",
    },
    {
        name: "Kirenia Arbelo Plasencia",
        file: "/images/profesores/kirenia.jpeg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Teatróloga, investigadora y docente universitaria. Es Licenciada en Arte Teatral con perfil en Teatrología por la Universidad de las Artes de Cuba y cuenta con Maestría en Educación. Su trayectoria académica articula teatrología, crítica de arte, pedagogía e investigación cultural. Se desempeña como profesora de tiempo completo en la Facultad de Filosofía y Letras de la Universidad Autónoma de Guerrero, donde integra la Academia de Literatura y el Cuerpo Académico Estudios Literarios. Sus líneas de investigación abordan arte, literatura, interculturalidad y transformación social.",
        bioEn: "Theatre scholar, researcher and university educator whose work connects theatre studies, art criticism, pedagogy and cultural research.",
    },
    {
        name: "Anyel Judith Goenaga",
        file: "/images/profesores/Anyel-Judith-Goenaga.png",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Artista visual, historiadora del arte y máster en Humanidades. Su trayectoria integra investigación, curaduría, docencia y gestión cultural, con énfasis en arte contemporáneo, fotografía y proyectos socioculturales. Egresada de la Universidad de La Habana, ha sido reconocida por investigaciones sobre performance e identidad cubana, como su trabajo sobre Ana Mendieta. Su obra ha sido expuesta en múltiples muestras colectivas y personales en Cuba. Su perfil combina mirada crítica, sensibilidad estética y compromiso con el arte como motor de transformación social.",
        bioEn: "Visual artist, art historian and curator researching contemporary art, photography and performance as tools for social transformation.",
    },
    {
        name: "Pita Ochoa",
        file: "/images/profesores/Pita-Ochoa.jpg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Antropóloga, investigadora y realizadora vinculada al cine documental y a la antropología visual. Es Licenciada en Etnohistoria por la Escuela Nacional de Antropología e Historia, con estudios de posgrado en Antropología. Su trabajo articula investigación antropológica, producción audiovisual y reflexión crítica sobre cultura, memoria e identidad. Ha desarrollado proyectos con el INAH, UNESCO y el Instituto Mexicano del Agua. En OKAN es tallerista de Antropología Visual y profesora de Pensamiento Filosófico.",
        bioEn: "Anthropologist, researcher and filmmaker working across documentary cinema, visual anthropology, memory and identity.",
    },
    {
        name: "Lázaro Alejandro Batista Burunate",
        file: "/images/profesores/Lazaro-Alejandro-Batista-Burunate.png",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Bailarín, coreógrafo, docente y director de Prisma Dance Theater, compañía que fundó en 2021 como espacio de creación e investigación en danza contemporánea. Es licenciado en Danza Contemporánea por el Instituto Superior de Arte de Cuba y cuenta con una Maestría en Procesos Formativos de la Enseñanza en las Artes. Tiene más de dieciséis años de trayectoria escénica en Cuba, Bélgica, Alemania, Ecuador, España, Italia, Portugal y México. Su práctica combina investigación del movimiento, creación, formación profesional e intercambio cultural internacional.",
        bioEn: "Dancer, choreographer and director of Prisma Dance Theater. His practice combines movement research, creation and professional training.",
    },
    {
        name: "Greys Rosales",
        file: "/images/profesores/Greys-Rosales.png",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Actriz, bailarina, coreógrafa e investigadora escénica, egresada de la Escuela Nacional de Arte de Cuba y licenciada en Teatrología y Dramaturgia por el Instituto Superior de Arte. Su formación integra interpretación, creación, investigación y pedagogía. Ha desarrollado una trayectoria artística en Cuba, México y Europa, participando en festivales y proyectos internacionales. Como directora de Prisma Dance Theater impulsa propuestas contemporáneas que exploran el diálogo entre danza y teatro. En OKAN aporta una visión integral de la formación artística.",
        bioEn: "Actor, dancer, choreographer and performance researcher whose work brings together acting, dance, contemporary creation and pedagogy.",
    },
    {
        name: "Doriam Díaz Goenaga",
        file: "/images/profesores/Doriam.jpeg",
        role: "Psicóloga",
        roleEn: "Psychologist",
        bio: "Psicóloga y especialista en acompañamiento psicopedagógico en procesos artísticos. Es Licenciada en Psicología por la Universidad de La Habana. En OKAN desarrolla procesos de acompañamiento integral orientados al bienestar emocional y al desarrollo humano dentro de la formación artística. Su trabajo integra psicología clínica, dinámicas grupales y herramientas expresivas aplicadas a la formación escénica y la conciencia emocional. En la escuela es profesora de Psicodrama y Psicodanza.",
        bioEn: "Psychologist specializing in psychopedagogical support. At OKAN, she supports emotional wellbeing through Psychodrama and Psychodance.",
    },
];
