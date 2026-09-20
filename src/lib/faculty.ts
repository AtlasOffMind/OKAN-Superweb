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
        file: "/images/profesores/Daniel Moya.jpeg",
        role: "Departamento de Admisiones.",
        roleEn: "Admissions Department",
        bio: ["Ingeniera Industrial graduada del Instituto Superior Politécnico José Antonio Echeverría (CUJAE), de La Habana, Cuba. Inició su trayectoria profesional en la Empresa de Ómnibus Urbanos de La Habana, donde realizó su periodo de adiestramiento y servicio social.",
            "Posteriormente desarrolló funciones de gestión comercial en la Empresa de Talleres de Ómnibus José María Pérez, conocida como El Naranjito, donde llegó a desempeñarse como gerente comercial. Continuó su carrera en el Instituto Nacional de Recursos Hidráulicos de Cuba como especialista superior en Organización del Trabajo y los Salarios, consolidando experiencia en gestión, organización y procesos administrativos.",
            "Actualmente forma parte del Departamento de Admisiones de OKAN Escuela Superior de Arte, donde aplica su experiencia organizativa y administrativa al acompañamiento y seguimiento de los procesos de ingreso de nuevos estudiantes."
        ],
        bioEn: ["Industrial Engineer graduated from the José Antonio Echeverría Higher Polytechnic Institute (CUJAE) in Havana, Cuba. She began her professional career at the Havana Urban Bus Company, completing her training period and social service there.", "She later worked in commercial management at the José María Pérez Bus Workshop Company, known as El Naranjito, where she became commercial manager. She continued her career at Cuba's National Institute of Hydraulic Resources as a senior specialist in Work Organization and Salaries, consolidating experience in management, organization and administrative processes.", "She is currently part of OKAN School of the Arts' Admissions Department, applying her organizational and administrative experience to supporting and following up on new student admissions."],
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
        name: "Doriam Díaz Goenaga",
        file: "/images/profesores/Doriam.jpeg",
        role: "Psicóloga",
        roleEn: "Psychologist",
        bio: "Psicóloga y especialista en acompañamiento psicopedagógico en procesos artísticos. Es Licenciada en Psicología por la Universidad de La Habana. En OKAN desarrolla procesos de acompañamiento integral orientados al bienestar emocional y al desarrollo humano dentro de la formación artística. Su trabajo integra psicología clínica, dinámicas grupales y herramientas expresivas aplicadas a la formación escénica y la conciencia emocional. En la escuela es profesora de Psicodrama y Psicodanza.",
        bioEn: "Psychologist specializing in psychopedagogical support. At OKAN, she supports emotional wellbeing through Psychodrama and Psychodance.",

    },
];
