// =============================================================================
// ARCHIVO DE DATOS: CLAUSTRO DE PROFESORES Y EQUIPO DE OKAN
// - Aquí se definen los datos de cada persona que aparece en el carrusel del Home
//   y en las secciones de la página 'Nosotros'.
// - Para cada persona puedes editar:
//   * name: Nombre completo
//   * file: Ruta de la foto (guardada en public/images/profesores/)
//   * role: Cargo en español (ej: "Rectora fundadora", "Decano de Actuación", "Docente", "Psicóloga")
//   * roleEn: Cargo en inglés
//   * bio: Biografía en español (se muestra en el carrusel y en Nosotros)
//   * bioEn: Biografía en inglés
// =============================================================================

export interface FacultyMember {
    name: string;
    file: string;
    role: string;
    roleEn: string;
    bio: string | string[];
    bioEn: string | string[];
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
        role: "Vicerrector",
        roleEn: "Vice-Rector",
        bio: "Actor, director escénico, diseñador de iluminación y pedagogo teatral. Es Licenciado en Artes Escénicas con perfil en Actuación por la Universidad de las Artes de Cuba, con formación previa como Instructor Profesional de Teatro por la Escuela Nacional de Teatro de Cuba. Es maestrante en Neuroeducación, con una línea centrada en la relación entre procesos cognitivos, aprendizaje artístico y pedagogías contemporáneas del entrenamiento escénico. Su formación incluye procesos de estudio y entrenamiento con Eugenio Barba, Peter Goldfarb, Bertha Martínez y Philippe Genty. Es fundador de OKAN y Decano de la carrera de Actuación, donde diseñó la malla curricular y el marco filosófico de la institución.",
        bioEn: "Actor, stage director, lighting designer and theatre educator. An OKAN founder who shaped the school's acting curriculum and educational philosophy.",
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
        name: "Sandra Fernández Hassey",
        file: "/images/profesores/Sandra Fernández Hassey.jpeg",
        role: "Coordinadora de Admisiones y Vinculación Institucional",
        roleEn: "Admissions and Institutional Relations Coordinator",
        bio: ["Licenciada en Ciencias de la Comunicación, publirrelacionista y productora audiovisual, con formación en desarrollo humano y educación emocional. Es fundadora de IntegraSion, proyecto enfocado en el autoconocimiento y la transformación emocional. Su trayectoria integra comunicación, relaciones humanas y acompañamiento de jóvenes y adultos.",
            "En OKAN coordina los procesos de admisión y vinculación institucional, acompañando la incorporación de nuevos estudiantes y fortaleciendo las relaciones de la escuela con instituciones, organizaciones y su comunidad. Su trabajo articula comunicación y desarrollo humano para construir vínculos cercanos y coherentes con el proyecto educativo de OKAN."
        ],
        bioEn: ["Bachelor of Communication Sciences, public relations specialist and audiovisual producer, with training in human development and emotional education. She is the founder of IntegraSion, a project focused on self-knowledge and emotional transformation. Her work combines communication, human relations and support for young people and adults.", "At OKAN, she coordinates admissions and institutional relations, supporting new students and strengthening the school's connections with institutions, organizations and its community. Her work connects communication and human development to build close relationships aligned with OKAN's educational project."],
    },
    {
        name: "Daniel Moya",
        file: "/images/profesores/Daniel Moya.jpeg",
        role: "Comunicación Digital, Producción y Logística.",
        roleEn: "Digital Communication, Production and Logistics",
        bio: ["Profesional de la producción escénica y la comunicación digital, con formación en asistencia de producción en el Centro de Estudios de Radio y Televisión de Cuba. Su experiencia integra coordinación logística de espectáculos y eventos culturales, gestión de elencos y recursos técnicos, creación de contenidos y manejo estratégico de redes sociales. Ha participado en proyectos como Cuba Espectacular, el estreno teatral Cuarentena y la producción del evento de cierre de la telenovela El Derecho de Soñar, además de colaborar en proyectos culturales y sociales en Cuba y México.",
            "En OKAN Escuela Superior de Arte forma parte del equipo de producción y comunicación, participando en la logística institucional, la organización operativa y la gestión de la comunicación digital. Su perfil conecta las necesidades creativas, técnicas y comunicativas de los proyectos, contribuyendo a su desarrollo tanto en el espacio escénico como en su relación con las audiencias."
        ],
        bioEn: ["Stage production and digital communication professional, trained in production assistance at Cuba's Radio and Television Studies Center. His experience includes logistics for performances and cultural events, cast and technical resource management, content creation and strategic social media management. He has participated in projects including Cuba Espectacular, the theatre premiere Cuarentena and the closing event for the television series El Derecho de Soñar, as well as cultural and social projects in Cuba and Mexico.", "At OKAN School of the Arts, he is part of the production and communications team, contributing to institutional logistics, operational organization and digital communication. His profile connects the creative, technical and communication needs of each project, supporting its development on stage and in its relationship with audiences."],
    },
    {
        name: "Odalis Suárez Almeida",
        file: "/images/profesores/Odalys Dolores.png",
        role: "Departamento de Admisiones.",
        roleEn: "Admissions Department",
        bio: ["Ingeniera Industrial graduada del Instituto Superior Politécnico José Antonio Echeverría (CUJAE), de La Habana, Cuba. Inició su trayectoria profesional en la Empresa de Ómnibus Urbanos de La Habana, donde realizó su periodo de adiestramiento y servicio social.",
            "Posteriormente desarrolló funciones de gestión comercial en la Empresa de Talleres de Ómnibus José María Pérez, conocida como El Naranjito, donde llegó a desempeñarse como gerente comercial. Continuó su carrera en el Instituto Nacional de Recursos Hidráulicos de Cuba como especialista superior en Organización del Trabajo y los Salarios, consolidando experiencia en gestión, organización y procesos administrativos.",
            "Actualmente forma parte del Departamento de Admisiones de OKAN Escuela Superior de Arte, donde aplica su experiencia organizativa y administrativa al acompañamiento y seguimiento de los procesos de ingreso de nuevos estudiantes."
        ],
        bioEn: ["Industrial Engineer graduated from the José Antonio Echeverría Higher Polytechnic Institute (CUJAE) in Havana, Cuba. She began her professional career at the Havana Urban Bus Company, completing her training period and social service there.", "She later worked in commercial management at the José María Pérez Bus Workshop Company, known as El Naranjito, where she became commercial manager. She continued her career at Cuba's National Institute of Hydraulic Resources as a senior specialist in Work Organization and Salaries, consolidating experience in management, organization and administrative processes.", "She is currently part of OKAN School of the Arts' Admissions Department, applying her organizational and administrative experience to supporting and following up on new student admissions."],
    },
    {
        name: "Luz Mas",
        file: "/images/profesores/Luz-Mas.jpg",
        role: "Docente",
        roleEn: "Dance Instructor",
        bio: "Bailarina, coreógrafa, docente y gestora cultural especializada en ballet, danza contemporánea y jazz. Realizó su formación profesional en el Real Conservatorio Profesional de Danza de Madrid y estudios avanzados en danza contemporánea y jazz mediante beca en la compañía 10 & 10 Danza. Cuenta con más de veinticinco años de trayectoria como intérprete, coreógrafa, directora artística y formadora, con trabajo en España, Reino Unido y México. Es coautora de la Guía metodológica para la danza jazz. Actualmente es fundadora de OKAN, Decana de Danza y diseñadora de la malla curricular de la Licenciatura en Danza.",
        bioEn: "Dancer, choreographer, educator and cultural leader with more than 25 years of experience in ballet, contemporary dance and jazz.",
    },
    {
        name: "Yailín Coppola",
        file: "/images/profesores/Yailin-1.jpeg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Actriz, directora escénica y pedagoga teatral. Es egresada de la Escuela Nacional de Arte de Cuba y del Instituto Superior de Arte de La Habana, donde obtuvo también la Maestría en Dirección Escénica. Ha desarrollado una destacada trayectoria dentro del teatro cubano contemporáneo como integrante de Argos Teatro, compañía dirigida por Carlos Celdrán, con la que ha participado en montajes y festivales teatrales de alto nivel. Como actriz ha formado parte de obras como Roberto Zucco, Chamaco, Fango, El tío Vania y El principio de Arquímedes, varias de ellas reconocidas con Premios Caricato y Premios Villanueva. Como directora ha llevado a escena textos de Shakespeare, Lope de Vega, Gracia Morales, Cesc Gay y Abel González Melo. Su trabajo abarca además cine, televisión y docencia especializada en instituciones como la Escuela Nacional de Teatro de Cuba, la Escuela Internacional de Cine y Televisión (EICTV) y la Escuela de Ballet de Cuba, donde se ha desempeñado como profesora de Interpretación. En OKAN es profesora de Actuación y una de las directoras del Laboratorio Escénico, actualmente con el montaje de La mirada de los invisibles, de Saúl Enríquez.",
        bioEn: "Actor, stage director and theatre educator. At OKAN, she teaches Acting, Dramaturgy for the Actor and Stage Laboratory.",
    },
    {
        name: "Abigail Soqui Michelena",
        file: "/images/profesores/Abigail-Soqui-Michelena.jpeg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Actriz, bailarina, directora, coreógrafa y docente. Es Licenciada en Actuación por la Escuela Nacional de Arte Teatral del Instituto Nacional de Bellas Artes y Literatura, con formación previa en danza clásica, danza mexicana y danza contemporánea en la Academia de la Danza Mexicana. Ha desarrollado formación complementaria en entrenamiento corporal, voz escénica, máscara, improvisación y técnicas contemporáneas de movimiento, así como actualización en nuevas teatralidades latinoamericanas, teatro comunitario y creación de personaje. Su trayectoria escénica comprende trabajo como actriz, directora y performer con presentaciones en el Centro Cultural Helénico, CENART y UNAM, además de participación en circuitos de festivales nacionales e internacionales, incluyendo la Muestra Nacional de Teatro y el Festival Internacional de Teatro Clásico de Almagro, España. Ha sido beneficiaria de las becas Intérpretes FONCA y Creadores Escénicos. Actualmente dirige Nunca Merlot Teatro A.C. en Cancún y es la actriz de Masa Madre, de Daniela Arroio, dirigida por Angélica Rogel, una de las producciones teatrales más reconocidas de Quintana Roo, seleccionada para la Muestra Nacional de Teatro y el Festival de Monólogos «Teatro a una sola voz», donde realizó un circuito nacional por distintos estados del país.",
        bioEn: "Actor, dancer, director, choreographer and educator working across physical training, stage voice and new theatrical practices.",
    },
    {
        name: "Patricia Rivera",
        file: "/images/profesores/Patricia-Rivera.png",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Creadora escénica, coreógrafa y docente especializada en danza contemporánea. Es Licenciada en Educación Dancística con orientación en Danza Contemporánea por la Escuela Nacional de Danza “Nellie y Gloria Campobello” del Instituto Nacional de Bellas Artes y Literatura (INBAL). Su formación artística inició en la Escuela de Iniciación Artística No. 4 del INBAL y posteriormente cursó también la Licenciatura en Educación Física en la Escuela Superior de Educación Física de la SEP. Ha desarrollado una trayectoria activa como intérprete, coreógrafa y colaboradora en compañías relevantes como CEPRODAC, Triciclo Rojo, ContraDanza, Danza Capital, Ts’ook Danza Plataforma Escénica y el Colectivo Espiral en Ecuador. Su trabajo ha sido presentado en el Palacio de Bellas Artes, Teatro de la Danza del CCB, Lunario del Auditorio Nacional y Centro Cultural Los Pinos, además de festivales y circuitos en México, Cuba, Argentina, Colombia, Japón y Estados Unidos. Ha sido beneficiaria de Creadores Escénicos FONCA, ENARTES y Contigo en la Distancia. Es además una de las fundadoras del Festival Bacalar / Premio Internacional de Coreografía 3D/60º, plataforma dedicada a la creación, profesionalización y difusión de la danza contemporánea en Quintana Roo.",
        bioEn: "Performing arts creator, choreographer and educator specializing in contemporary dance, with work in Mexico and international stages.",
    },
    {
        name: "Zurisadai González Fuente",
        file: "/images/profesores/Zurisadai-Gonzalez-Fuente.jpg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Bailarín, coreógrafo, docente y gestor cultural especializado en danza contemporánea. Es Licenciado en Educación Dancística con orientación en Danza Contemporánea por la Escuela Nacional de Danza “Nellie y Gloria Campobello” del Instituto Nacional de Bellas Artes (INBAL), con formación complementaria en la Escuela Nacional de Danza de La Habana, Cuba, y en el Centro de Formación Profesional eFel Danse. Ha desarrollado una trayectoria como intérprete en compañías relevantes de la escena contemporánea mexicana, entre ellas CEPRODAC, Créssida Danza, ContraDanza dirigida por Cecilia Appleton y VSS Danza dirigida por Vicente Silva Sanjinés. Es fundador y director artístico de Ts’ook Danza Plataforma Escénica A.C. Su trabajo como coreógrafo ha sido finalista del Premio Nacional de Danza Guillermo Arriaga INBAL-UAM y ha obtenido reconocimientos en concursos como 4×4 TJ Night y Con los pies en el aire. Actualmente combina creación, producción y formación profesional en danza contemporánea. Es además fundador y director artístico del Festival Bacalar / Premio Internacional de Coreografía 3D/60º, plataforma dedicada a la creación, profesionalización y difusión de la danza contemporánea, con sede principal en Bacalar, Quintana Roo.",
        bioEn: "Dancer, choreographer and cultural leader specializing in contemporary dance, creation and stage production.",
    },
    {
        name: "Kirenia Arbelo Plasencia",
        file: "/images/profesores/kirenia.jpeg",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Teatróloga, investigadora y docente universitaria. Es Licenciada en Arte Teatral con perfil en Teatrología por la Universidad de las Artes (ISA) de Cuba, cuenta con Maestría en Educación por el Instituto Universitario Internacional de Toluca y es Doctora en Ciencias Políticas. Es miembro del Sistema Nacional de Investigadoras e Investigadores (SNII). Su trayectoria académica se sitúa en el campo del arte y las humanidades, articulando teatrología, crítica de arte, pedagogía e investigación cultural. Ha desarrollado trabajo docente universitario en la Facultad de Filosofía y Letras de la Universidad Autónoma de Guerrero, donde se desempeña como profesora de tiempo completo, adscrita a la Academia de Literatura e integrante del Cuerpo Académico “Estudios Literarios, Lingüísticos e Interculturalidad” y de la Cátedra para la Paz. Sus líneas de investigación abordan literatura, arte y sociedad, así como interculturalidad y procesos de transformación social desde perspectivas interdisciplinarias. Desarrolla el proyecto de investigación Laboratorio de Teatro y cuenta con artículos científicos y de divulgación sobre teatro y sociedad, con énfasis en el teatro político de Bertolt Brecht.",
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
        bio: "Antropóloga, investigadora y realizadora vinculada al cine documental y a la antropología visual. Es Licenciada en Etnohistoria por la Escuela Nacional de Antropología e Historia (ENAH), con estudios de posgrado en Antropología en la misma institución. Su trabajo académico y profesional articula investigación antropológica, producción audiovisual y reflexión crítica sobre cultura, memoria e identidad. Ha desarrollado investigación y trabajo de campo en proyectos vinculados con el Instituto Nacional de Antropología e Historia (INAH), así como estudios sobre culturas indígenas, memoria histórica y cultura del agua en colaboración con organismos como UNESCO y el Instituto Mexicano del Agua. En el ámbito cinematográfico ha trabajado en investigación, guionismo y desarrollo de contenidos para proyectos documentales y audiovisuales, además de coordinar iniciativas de formación en cine comunitario y documental. Ha impartido docencia a nivel superior en instituciones como la Escuela Nacional de Antropología e Historia, la Universidad Autónoma de la Ciudad de México y la Universidad de la Comunicación en programas vinculados con documental y medios audiovisuales. Es autora y coordinadora de publicaciones sobre cine documental mexicano y estudios antropológicos. En OKAN es tallerista de Antropología Visual y profesora de Pensamiento Filosófico y de Pensamiento Crítico y Apreciación de las Artes, donde integra herramientas de investigación cultural, análisis crítico de la imagen y reflexión humanística aplicada a las artes escénicas.",
        bioEn: "Anthropologist, researcher and filmmaker working across documentary cinema, visual anthropology, memory and identity.",
    },
    {
        name: "Jorge Pedro Hernández Medero",
        file: "/images/profesores/Jorge-Pedro-Hernández-Medero.png",
        role: "Docente",
        roleEn: "Faculty",
        bio: "Licenciado en Arte Danzario, especialidad Folklore, y Máster en Cultura Audiovisual por la Universidad de las Artes (ISA), con formación en Teatro y categoría de Director Artístico de Espectáculos Musicales de Primer Nivel. Cuenta con más de veinte años de experiencia como director artístico, coreógrafo, actor y creador escénico, y ha desarrollado su trayectoria en espectáculos musicales, danza, teatro, televisión y proyectos de difusión cultural.  En OKAN es profesor de Expresión Corporal y forma parte de la Dirección Artística de los espectáculos orientados a la industria del entretenimiento turístico, integrando su experiencia en movimiento, composición escénica y dirección artística a los procesos de formación y creación profesional de la escuela.",
        bioEn: "Bachelor of Dance Art in Folklore and Master in Audiovisual Culture from the University of the Arts (ISA), with theater training and First-Level Musical Show Artistic Director accreditation. With over twenty years of experience as an artistic director, choreographer, actor, and stage creator, he has worked across musical theater, dance, television, and cultural projects. At OKAN, he teaches Body Expression and contributes to the Artistic Direction of tourist entertainment productions, integrating movement, composition, and direction into professional training.",
    },
    {
        name: "Juan Alberto Reyes",
        file: "/images/profesores/Juan_Alberto.jpg",
        role: "Docente",
        roleEn: "Dance Instructor",
        bio: "Juan Alberto Reyes Pérez es bailarín, coreógrafo y docente cubano con 15 años de trayectoria artística. Licenciado en Arte Danzario, especialidad Folklore, por la Universidad de las Artes de Cuba (ISA), cuenta con formación en danza moderna, contemporánea y folklórica. Primer bailarín y coreógrafo de la Compañía Verdarte, ha participado en producciones teatrales, musicales, televisivas y festivales internacionales. Entre sus reconocimientos destacan el Premio Ramiro Guerra a la Mejor Interpretación Masculina en Danza Folklórica (2024) y el Premio Caricato a la Mejor Coreografía de Espectáculos Musicales (2025). Su experiencia pedagógica abarca ballet clásico, danza contemporánea, folklore cubano y danzas yoruba. En OKAN se integra como profesor de Danza.",
        bioEn: "Juan Alberto Reyes Pérez is a Cuban dancer, choreographer and educator with 15 years of artistic experience. He holds a degree in Dance Art, specializing in Folklore, from the University of the Arts of Cuba (ISA), and has trained in modern, contemporary and folkloric dance. He is principal dancer and choreographer with Compañía Verdarte and has participated in theatre, musical, television and international festival productions. His awards include the Ramiro Guerra Award for Best Male Performance in Folkloric Dance (2024) and the Caricato Award for Best Musical Show Choreography (2025). His teaching experience includes classical ballet, contemporary dance, Cuban folklore and Yoruba dances. At OKAN, he joins the faculty as a Dance instructor.",

    },
    {
        name: "Doriam Díaz Goenaga",
        file: "/images/profesores/Doriam.jpeg",
        role: "Psicóloga",
        roleEn: "Psychologist",
        bio: "Psicóloga y especialista en acompañamiento psicopedagógico en procesos artísticos. Es Licenciada en Psicología por la Universidad de La Habana. En OKAN desarrolla procesos de acompañamiento integral orientados al bienestar emocional y al desarrollo humano dentro de la formación artística. Su trabajo integra psicología clínica, dinámicas grupales y herramientas expresivas aplicadas a la formación escénica y la conciencia emocional. En la escuela es profesora de Psicodrama y Psicodanza.",
        bioEn: "Psychologist specializing in psychopedagogical support. At OKAN, she supports emotional wellbeing through Psychodrama and Psychodance.",

    },
    {
        name: "Flora Borrego",
        file: "/images/profesores/Flora_Borrego.jpg",
        role: "Directora de Producción",
        roleEn: "Production Director",
        bio: "Flora Borrego es actriz y productora cubana, graduada de Actuación en la Escuela Nacional de Arte de Cuba (ENA) en 2011. Ha desarrollado su trayectoria en teatro, cine y televisión, integrando compañías como Aire Frío, bajo la dirección de Eduardo Eimil, y La Franja Teatral, dirigida por Agnieska Hernández. En televisión ha participado en Promesas, Valientes, En tiempos de amar y Asuntos pendientes, donde alcanzó especial reconocimiento por su interpretación de Adriana Estrada. En 2026 asumió el personaje protagónico de Lía en la telenovela Entre aguas. Su experiencia artística comprende también la interpretación musical y la participación en proyectos de producción. En OKAN Escuela Superior de Arte se incorpora como Directora de Producción de OKAN Espectáculos, al frente de la coordinación operativa de sus propuestas escénicas y de entretenimiento.",
        bioEn: "Flora Borrego is a Cuban actress and producer who graduated in Acting from Cuba's National School of Art (ENA) in 2011. Her career spans theatre, film and television, including work with Aire Frío under Eduardo Eimil and La Franja Teatral under Agnieska Hernández. Her television credits include Promesas, Valientes, En tiempos de amar and Asuntos pendientes, where her portrayal of Adriana Estrada received particular recognition. In 2026, she took the leading role of Lía in the telenovela Entre aguas. Her artistic experience also includes musical performance and production. At OKAN School of the Arts, she is Production Director for OKAN Espectáculos, leading the operational coordination of its stage and entertainment productions.",

    },
    {
        name: "Omar Vázquez",
        file: "/images/profesores/Omar_Vazquez.jpg",
        role: "Productor Ejecutivo",
        roleEn: "Executive Producer",
        bio: "Omar Vázquez Sánchez, conocido como Señor Sargazo, es empresario mexicano, emprendedor e impulsor de proyectos de innovación ambiental y responsabilidad social. Fundador de Blue Green México y creador del Sargablock, ha desarrollado un modelo de aprovechamiento del sargazo para la fabricación de materiales de construcción sostenibles, iniciativa que ha alcanzado proyección internacional y ha contribuido a la construcción de viviendas para familias en situación de vulnerabilidad. Su trayectoria se distingue por la capacidad de transformar iniciativas emprendedoras en proyectos de impacto social, articulando innovación, gestión de recursos y desarrollo empresarial. En OKAN Escuela Superior de Arte se integra como Productor Ejecutivo de OKAN Espectáculos y OKAN Laboratorio Escénico, contribuyendo a la gestión y viabilidad de sus proyectos de creación y producción artística.",
        bioEn: "Omar Vázquez Sánchez, known as Señor Sargazo, is a Mexican entrepreneur and advocate for environmental innovation and social responsibility. He founded Blue Green México and created Sargablock, a project that repurposes sargassum seaweed to produce sustainable building materials. The initiative has gained international visibility and helped build homes for families facing vulnerability. His work turns entrepreneurial ideas into social-impact projects by bringing together innovation, resource management and business development. At OKAN School of the Arts, he is Executive Producer for OKAN Espectáculos and OKAN Laboratorio Escénico, contributing to the management and sustainability of their artistic creation and production projects.",
    },
    {
        name: "Nassiely Hérnandez",
        file: "/images/profesores/Nassiely.jpg",
        role: "Asistente de Dirección",
        roleEn: "Assistant Director",
        bio: "Nassiely Hernández Rodríguez es productora, gestora cultural y asistente de dirección cubana, licenciada en Estudios Socioculturales con Título de Oro y máster en Historia Contemporánea, con mención en Relaciones Internacionales, por la Universidad de La Habana. Cuenta con formación especializada en producción, comunicación, gestión cultural y asistencia de dirección audiovisual por el Instituto Cubano del Arte e Industria Cinematográficos (ICAIC). Su trayectoria comprende la organización y producción de espectáculos, festivales, conciertos y proyectos televisivos, vinculada a instituciones y agrupaciones como la Empresa Adolfo Guzmán, la Compañía Verdarte y Artestudio El Hombrecito Verde. Ha participado en producciones como Travesura Musical, En busca del Hombrecito Verde y giras artísticas junto a la Orquesta Miguel Failde. En OKAN Escuela Superior de Arte se incorpora como Coordinadora de Gestión y Asistencia de Dirección, articulando los procesos organizativos y de producción con la asistencia artística en las creaciones de OKAN Laboratorio Escénico y OKAN Espectáculos.",
        bioEn: "Nassiely Hernández Rodríguez is a Cuban producer, cultural manager and assistant director. She holds a gold-medal degree in Sociocultural Studies and a master's degree in Contemporary History, with a focus on International Relations, from the University of Havana. She has specialized training in production, communications, cultural management and assistant directing for audiovisual work from the Cuban Institute of Cinematographic Art and Industry (ICAIC). Her experience includes organizing and producing performances, festivals, concerts and television projects with organizations such as Empresa Adolfo Guzmán, Compañía Verdarte and Artestudio El Hombrecito Verde. Her credits include Travesura Musical, En busca del Hombrecito Verde and artistic tours with the Miguel Failde Orchestra. At OKAN School of the Arts, she coordinates management and assistant-directing processes, connecting production organization with the artistic work of OKAN Laboratorio Escénico and OKAN Espectáculos.",
    },
    {
        name: "Elvys Ariel",
        file: "/images/profesores/Elvys.jpg",
        role: "Audiovisuales",
        roleEn: "Audiovisual Director",
        bio: "Elvys Ariel Urra Moreno es realizador audiovisual, director de fotografía y creador visual cubano, con más de 15 años de experiencia en cine, televisión, publicidad y producción escénica. Licenciado por la Facultad de Arte de los Medios de Comunicación Audiovisual (FAMCA) de la Universidad de las Artes de Cuba (ISA), en la especialidad de Dirección de Fotografía, cuenta también con formación en artes visuales, videodanza y tecnologías digitales de visualización. Su trayectoria incluye trabajos en producciones cinematográficas como Últimos días en La Habana, Los buenos demonios y Buscando a Casal, así como la dirección fotográfica de documentales dedicados a Los Van Van y la Orquesta Aragón. Ha participado en programas televisivos como Travesura Musical, Sesiones Vagabundas y Fútbol por Dentro, además de desarrollar propuestas visuales y escenográficas para espectáculos de la Compañía Verdarte. En OKAN Escuela Superior de Arte se integra como Director de Audiovisuales y Tecnología Escénica, responsable del registro fotográfico y audiovisual, el desarrollo de contenidos y soluciones visuales para espectáculos, proyectos de videomapping, experiencias inmersivas de 360 grados y propuestas escénicas con drones, así como de la formación audiovisual en los programas de educación continua.",
        bioEn: "Elvys Ariel Urra Moreno is a Cuban audiovisual filmmaker, cinematographer and visual artist with more than 15 years of experience in film, television, advertising and stage production. He graduated in Cinematography from the Faculty of Audiovisual Media Arts (FAMCA) at the University of the Arts of Cuba (ISA), and has additional training in visual arts, videodance and digital visualization technologies. His film credits include Últimos días en La Habana, Los buenos demonios and Buscando a Casal. He has also directed photography for documentaries about Los Van Van and Orquesta Aragón, contributed to television programs such as Travesura Musical, Sesiones Vagabundas and Fútbol por Dentro, and developed visual and scenic concepts for Compañía Verdarte. At OKAN School of the Arts, he leads Audiovisuals and Stage Technology, overseeing photo and video documentation, content development, visual solutions for performances, videomapping, 360-degree immersive experiences and drone-based stage concepts, as well as audiovisual training in continuing education.",
    },
    {
        name: "Gerardo Javier",
        file: "/images/profesores/Gerardo.jpg",
        role: "Desarrollador Web",
        roleEn: "Web Developer",
        bio: "Gerardo Javier Pujol Suárez es desarrollador de software y estudiante de la Licenciatura en Ciencia de la Computación de la Facultad de Matemática y Computación (MATCOM) de la Universidad de La Habana. Su formación comprende programación, arquitectura de computadoras, diseño de algoritmos y desarrollo de aplicaciones, con experiencia práctica en C#, Python, programación orientada a objetos y herramientas de control de versiones como Git y GitHub. Ha desarrollado proyectos de videojuegos, sistemas de gestión y arquitectura computacional, además de participar en iniciativas universitarias de divulgación tecnológica. En OKAN Escuela Superior de Arte es Responsable de Desarrollo Web y Automatización de Procesos, a cargo del desarrollo de la página web institucional, la implementación de herramientas digitales y la creación de soluciones tecnológicas orientadas a optimizar la gestión académica, administrativa y operativa de la institución. Paralelamente, cuenta con doce años de formación en artes marciales chinas (wushu) y experiencia como instructor, trayectoria que incorpora a Estudios Continuos de OKAN mediante talleres de artes marciales aplicadas a la escena.",
        bioEn: "Gerardo Javier Pujol Suárez is a software developer and Computer Science student at the Faculty of Mathematics and Computing (MATCOM), University of Havana. His studies include programming, computer architecture, algorithm design and application development; he has practical experience with C#, Python, object-oriented programming and version-control tools such as Git and GitHub. He has developed video games, management systems and computer architecture projects, and has taken part in university technology outreach. At OKAN School of the Arts, he leads web development and process automation, maintaining the institutional website, implementing digital tools and creating technology solutions to improve academic, administrative and operational work. He also has twelve years of Chinese martial arts (wushu) training and experience as an instructor, which he brings to OKAN Continuing Studies through workshops in martial arts for the stage.",
    },
];
