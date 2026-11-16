/* Detalle de cada apoyo académico en cualquier página.
   Cualquier elemento con data-sw="<id>" abre el mismo pop-up que el catálogo,
   con los botones para ver el catálogo o solicitar el apoyo. */
(function () {
  "use strict";

  var FORM_URL = "https://forms.gle/RLfbg7KAtprvs5PY9";
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

  var SW = {
    "moodle": {
      "name": "Moodle",
      "area": "Docencia y herramientas digitales",
      "logo": "assets/logos/moodle.svg",
      "desc": "Sistema de gestión de aprendizaje (LMS) líder en educación virtual, usado por la universidad para administrar cursos, tareas, foros y evaluaciones.",
      "rows": [
        [
          "Temas",
          "Capacitación profesor · Capacitación estudiantes",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Familiarizarse con la página donde está todo el material académico de las distintas materias y cursos.",
          0
        ]
      ]
    },
    "zoom": {
      "name": "Zoom",
      "area": "Docencia y herramientas digitales",
      "logo": "assets/logos/zoom.svg",
      "desc": "Plataforma líder en videoconferencias, con funciones para clases virtuales, reuniones colaborativas y webinars académicos.",
      "rows": [
        [
          "Temas",
          "Funcionalidades de Zoom",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Ante cualquier situación, poder virtualizar una clase o cualquier tipo de reunión.",
          0
        ]
      ]
    },
    "teams": {
      "name": "Microsoft Teams",
      "area": "Docencia y herramientas digitales",
      "logo": "assets/logos/teams.svg",
      "desc": "Plataforma integral que facilita el trabajo colaborativo, las reuniones virtuales, la comunicación y la organización de actividades, integrando Excel, OneNote y Planner.",
      "rows": [
        [
          "Temas",
          "Introducción a Microsoft Teams · Organización de equipos y canales · Comunicación efectiva (chat, reuniones y llamadas) · Colaboración en documentos (integración con Office 365)",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Facilita la comunicación y el trabajo colaborativo en clase y en equipos de trabajo.",
          0
        ]
      ]
    },
    "gworkspace": {
      "name": "Google Workspace",
      "area": "Docencia y herramientas digitales",
      "logo": "assets/logos/gworkspace.svg",
      "desc": "Herramienta intuitiva para crear sitios web colaborativos, ideal para portafolios académicos, proyectos grupales o recursos de clase.",
      "rows": [
        [
          "Temas",
          "Gmail · Calendar · Keep · Meet · Formularios · Hojas de cálculo · Documentos · Tasks",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Facilitar la vida universitaria familiarizándose con todo lo que Google tiene para ofrecer.",
          0
        ]
      ]
    },
    "h5p": {
      "name": "H5P",
      "area": "Docencia y herramientas digitales",
      "logo": "assets/logos/h5p.svg",
      "desc": "Plataforma para desarrollar contenido interactivo en Moodle (videos con preguntas, flashcards, líneas de tiempo) sin necesidad de programación.",
      "rows": [
        [
          "Temas",
          "Creación de juegos con el marco conceptual de la clase",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Enfatizar el uso de juegos y material didáctico como método de aprendizaje en la materia.",
          0
        ]
      ]
    },
    "articulate": {
      "name": "Articulate",
      "area": "Docencia y herramientas digitales",
      "logo": "assets/logos/articulate.svg",
      "desc": "Suite para crear cursos interactivos y SCORM-compatibles, con plantillas estandarizadas, quizzes y seguimiento de progreso.",
      "rows": [
        [
          "Temas",
          "Introducción a Articulate · Introducción a Storyline · Interfaz · Creación de capas · Creación de escenas · Creación de botones",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Crear nuevos métodos de aprendizaje y virtualizar el conocimiento con material interactivo.",
          0
        ]
      ]
    },
    "mind-manager": {
      "name": "MindManager",
      "area": "Docencia y herramientas digitales",
      "logo": "assets/logos/mind-manager.svg",
      "desc": "Software profesional para crear mapas conceptuales, diagramas de flujo y organizadores gráficos interactivos, ideal para planificación y lluvia de ideas.",
      "rows": [
        [
          "Temas",
          "Introducción a MindManager · Interfaz y creación de mapas conceptuales",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Facilitar el trabajo académico con el uso de herramientas digitales que lo requieran.",
          0
        ]
      ]
    },
    "ia": {
      "name": "Inteligencia Artificial (IA)",
      "area": "Docencia y herramientas digitales",
      "logo": "assets/logos/ia.svg",
      "desc": "Capacitar al usuario en el buen uso de las distintas inteligencias artificiales y su integración correcta con la educación.",
      "rows": [
        [
          "Temas",
          "Introducción a la ingeniería de prompt · Ética en el uso de agentes de IA",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Facilitar tareas del día a día que pueden resolverse con IA, promoviendo un uso responsable de estas.",
          0
        ]
      ]
    },
    "excel": {
      "name": "Excel",
      "area": "Análisis de datos y BI",
      "logo": "assets/logos/excel.svg",
      "desc": "Herramienta versátil para dominar desde funciones básicas (tablas dinámicas, fórmulas, gráficos dinámicos) hasta automatización avanzada (Macros, Power Query) en el análisis de datos.",
      "rows": [
        [
          "Temas",
          "Introducción a Excel · Análisis de datos · Fórmulas · Gráficos y tablas dinámicas · Power Query y Power Pivot · Macros",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "El uso de una herramienta práctica para aplicar los conceptos de las clases en cualquier contexto.",
          0
        ]
      ]
    },
    "google-sheets": {
      "name": "Google Sheets",
      "area": "Análisis de datos y BI",
      "logo": "assets/logos/google-sheets.svg",
      "desc": "Herramienta potente y colaborativa para el análisis de datos. Permite desarrollar desde funciones y gráficos básicos hasta procesos avanzados con automatización mediante complementos, Apps Script e integración con Google Workspace.",
      "rows": [
        [
          "Temas",
          "Introducción a Google Sheets · Análisis de datos con funciones y fórmulas · Gráficos · Automatización con Google Apps Script · Integración con Google Workspace",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "El uso de una herramienta práctica para aplicar los conceptos de las clases en cualquier contexto.",
          0
        ]
      ]
    },
    "access": {
      "name": "Access",
      "area": "Análisis de datos y BI",
      "logo": "assets/logos/access.svg",
      "desc": "Sistema de bases de datos relacionales (SQL) enfocado en el manejo, extracción y transformación de datos (ETL) para análisis empresarial.",
      "rows": [
        [
          "Temas",
          "Introducción a Access · Consultas · Informes · Macros",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades de los estudiantes en el manejo de bases de datos, para un manejo más óptimo de la información.",
          0
        ]
      ]
    },
    "mysql": {
      "name": "MySQL",
      "area": "Análisis de datos y BI",
      "logo": "assets/logos/mysql.svg",
      "desc": "Sistema de gestión de bases de datos relacionales (RDBMS) de código abierto, ideal para aplicaciones web y transaccionales con sintaxis SQL estándar.",
      "rows": [
        [
          "Temas",
          "Introducción a MySQL · Bases de datos relacionales · Consultas · Sintaxis del lenguaje SQL",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades de los estudiantes en el manejo de bases de datos, para un manejo más óptimo de la información y creación de conocimiento.",
          0
        ]
      ]
    },
    "postgresql": {
      "name": "PostgreSQL",
      "area": "Análisis de datos y BI",
      "logo": "assets/logos/postgresql.svg",
      "desc": "RDBMS avanzado con capacidades escalables para grandes volúmenes de datos. Soporta JSON, consultas complejas y es extensible.",
      "rows": [
        [
          "Temas",
          "Introducción a PostgreSQL · Bases de datos relacionales · Consultas complejas · Sintaxis de SQL · Derivados de SQL",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades de los estudiantes en el manejo de bases de datos, para un manejo más óptimo de la información y creación de conocimiento.",
          0
        ]
      ]
    },
    "powerbi": {
      "name": "Power BI",
      "area": "Análisis de datos y BI",
      "logo": "assets/logos/powerbi.svg",
      "desc": "Plataforma de Microsoft para visualización de datos interactiva, con capacidades de transformación de datos y lenguaje DAX para análisis avanzado.",
      "rows": [
        [
          "Temas",
          "Introducción a Power BI · Diseño de dashboards · Manejo de DAX",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades de los estudiantes en el manejo de datos y enseñar uno de los programas más utilizados en el mundo laboral.",
          0
        ]
      ]
    },
    "tableau": {
      "name": "Tableau",
      "area": "Análisis de datos y BI",
      "logo": "assets/logos/tableau.svg",
      "desc": "Herramienta líder en BI para crear dashboards intuitivos, enfocada en análisis empresarial con arrastrar y soltar. Ideal para storytelling con datos.",
      "rows": [
        [
          "Temas",
          "Introducción a Tableau · Diseño de dashboards · Análisis visual y diseño · Tableau con SQL y bases de datos relacionales",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades en el manejo de datos, para la toma de decisiones rápidas y certeras con business intelligence.",
          0
        ]
      ]
    },
    "looker": {
      "name": "Looker Studio",
      "area": "Análisis de datos y BI",
      "logo": "assets/logos/looker.svg",
      "desc": "Solución de Business Intelligence en la nube para exploración colaborativa de datos, con modelado centralizado y énfasis en escalabilidad empresarial.",
      "rows": [
        [
          "Temas",
          "Introducción a Looker Studio · Diseño de dashboards · Trabajo colaborativo",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades en el manejo de datos y el trabajo colaborativo, para la toma de decisiones rápidas y certeras con business intelligence.",
          0
        ]
      ]
    },
    "odoo": {
      "name": "Odoo",
      "area": "Gestión y sistemas empresariales",
      "logo": "assets/logos/odoo.svg",
      "desc": "ERP de código abierto que permite aprender conceptos clave de gestión empresarial mediante ejercicios prácticos, integrando módulos como ventas, inventario y contabilidad en un solo sistema.",
      "rows": [
        [
          "Temas",
          "Introducción a ERP · Creación de cuenta · Manejo de la interfaz · Creación de transacción · Procesos de negocios",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Complementar los conceptos de ERP, preparando al usuario en el manejo de software de gestión de procesos empresariales.",
          0
        ]
      ]
    },
    "sap": {
      "name": "SAP",
      "area": "Gestión y sistemas empresariales",
      "logo": "assets/logos/sap.svg",
      "desc": "Solución ERP líder para entender la gestión integral de negocios, explorando módulos especializados (finanzas, logística, RH) debido a su estructura compleja y profesional.",
      "rows": [
        [
          "Temas",
          "Introducción a SAP · Contabilidad financiera · Ventas y Distribución · Gestión de materiales · Planificación de la producción · Costos · Gestión de activos empresariales · Gestión del Capital Humano · Gestión de proyectos · Gestión de Calidad · Gestión de almacenes · Gestión Ambiental",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2) por módulo",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Complementar los conceptos de ERP, preparando al usuario en el manejo de software de gestión de procesos empresariales.",
          0
        ]
      ]
    },
    "siigo": {
      "name": "Siigo",
      "area": "Gestión y sistemas empresariales",
      "logo": "assets/logos/siigo.svg",
      "desc": "Software contable y ERP amigable, ideal para aprender fundamentos de facturación, reporting financiero y flujos de trabajo con una interfaz intuitiva.",
      "rows": [
        [
          "Temas",
          "Introducción a Siigo",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Complementar los conceptos de ERP, preparando al usuario en la gestión de procesos empresariales y generación de certificados contables.",
          0
        ]
      ]
    },
    "world-office": {
      "name": "World Office",
      "area": "Gestión y sistemas empresariales",
      "logo": "assets/logos/world-office.svg",
      "desc": "Herramienta contable y ERP para gestionar procesos financieros básicos y avanzados, destacando por su interfaz visual y usos prácticos en pymes.",
      "rows": [
        [
          "Temas",
          "Introducción a World Office · Operaciones contables y comerciales · Contabilidad y reportes financieros",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Complementar los conceptos de ERP, preparando al usuario en la gestión de procesos empresariales y generación de certificados contables.",
          0
        ]
      ]
    },
    "bizagi": {
      "name": "Bizagi",
      "area": "Gestión y sistemas empresariales",
      "logo": "assets/logos/bizagi.svg",
      "desc": "Herramienta profesional para diseñar, modelar y automatizar procesos de negocio mediante diagramas interactivos, facilitando la optimización y gestión eficiente de flujos de trabajo complejos.",
      "rows": [
        [
          "Temas",
          "Introducción a Bizagi · Diseño de proyectos · Ejecución y automatización de proyectos",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Complementar los conceptos de la gestión empresarial mediante un software que permite explorar distintos conceptos de los negocios.",
          0
        ]
      ]
    },
    "trello": {
      "name": "Trello",
      "area": "Gestión y sistemas empresariales",
      "logo": "assets/logos/trello.svg",
      "desc": "Plataforma intuitiva de gestión de proyectos basada en tableros visuales, que permite organizar tareas, colaborar en equipo y mejorar la productividad con un enfoque ágil y flexible.",
      "rows": [
        [
          "Temas",
          "Introducción a Trello · Diseño de tableros interactivos",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Complementar la gestión y organización de proyectos mediante un software didáctico que permita al estudiante interiorizar más su aprendizaje.",
          0
        ]
      ]
    },
    "word": {
      "name": "Word",
      "area": "Investigación y escritura académica",
      "logo": "assets/logos/word.svg",
      "desc": "Herramienta esencial para redacción y formato de documentos académicos, con funciones avanzadas de estilos, referencias y colaboración en tiempo real.",
      "rows": [
        [
          "Temas",
          "Introducción a Word · Ajustes de formato (APA) · Combinar correspondencia · Referencias · Complementos",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Tener una herramienta de redacción de textos con carácter más académico y científico, para proyectos de estudio.",
          0
        ]
      ]
    },
    "latex": {
      "name": "LaTeX",
      "area": "Investigación y escritura académica",
      "logo": "assets/logos/latex.svg",
      "desc": "Sistema de composición tipográfica profesional para documentos científicos, con precisión en fórmulas matemáticas y gestión automatizada de referencias.",
      "rows": [
        [
          "Temas",
          "Introducción a LaTeX · Sintaxis y Overleaf · Gráficos e imágenes en LaTeX · Ecuaciones en LaTeX · Bibliografía y citaciones · Diseño de documentos específicos · Creación de presentaciones",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Tener una herramienta de redacción de textos con carácter más académico y científico, para proyectos de estudio.",
          0
        ]
      ]
    },
    "zotero": {
      "name": "Zotero",
      "area": "Investigación y escritura académica",
      "logo": "assets/logos/zotero.svg",
      "desc": "Herramienta gratuita y de código abierto para recolectar, organizar y citar fuentes bibliográficas en trabajos científicos, con integración en navegadores y procesadores de texto.",
      "rows": [
        [
          "Temas",
          "Referenciación (APA) · Otros estilos de referenciación",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Facilitar el trabajo de organizar las referencias bibliográficas en los textos universitarios y académicos.",
          0
        ]
      ]
    },
    "mendeley": {
      "name": "Mendeley",
      "area": "Investigación y escritura académica",
      "logo": "assets/logos/mendeley.svg",
      "desc": "Gestor de referencias y red social académica que facilita la organización de bibliografía, citación automática y colaboración en investigación.",
      "rows": [
        [
          "Temas",
          "Referenciación (APA) · Otros estilos de referenciación · Integración con NVivo",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1)",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Facilitar el trabajo de organizar las referencias bibliográficas en los textos universitarios y académicos.",
          0
        ]
      ]
    },
    "nvivo": {
      "name": "NVivo",
      "area": "Investigación y escritura académica",
      "logo": "assets/logos/nvivo.svg",
      "desc": "Plataforma especializada para análisis de datos cualitativos (entrevistas, encuestas), que permite codificación, categorización y modelado de información no estructurada.",
      "rows": [
        [
          "Temas",
          "Introducción a NVivo · Codificación y consultas · Análisis de audios y videos · Análisis de entrevistas · Visualización de datos",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Poner en práctica la herramienta con la técnica de investigación, donde la información cualitativa también revela información valiosa.",
          0
        ]
      ]
    },
    "qgis": {
      "name": "QGIS",
      "area": "Investigación y escritura académica",
      "logo": "assets/logos/qgis.svg",
      "desc": "Plataforma líder en análisis espacial y mapeo digital, aplicable a estudios económicos, urbanísticos y de gestión de recursos.",
      "rows": [
        [
          "Temas",
          "Introducción a QGIS · Interfaz · Mapas · Exploración de territorios · Croquis",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2) por sesión",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Aprovechar el programa como herramienta en proyectos de gestión urbana o territorial.",
          0
        ]
      ]
    },
    "python": {
      "name": "Python",
      "area": "Econometría y programación",
      "logo": "assets/logos/python.svg",
      "desc": "Lenguaje multipropósito dominante en ciencia de datos. Usado para análisis económicos, automatización, inteligencia artificial y procesamiento de datos.",
      "rows": [
        [
          "Temas",
          "Introducción a Python · Sintaxis · Librerías · Numpy · Pandas · Matplotlib",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades en programación y su relación con distintas metodologías del desarrollo profesional de la carrera.",
          0
        ]
      ]
    },
    "rstudio": {
      "name": "RStudio (R)",
      "area": "Econometría y programación",
      "logo": "assets/logos/rstudio.svg",
      "desc": "Entorno para programación en R, especializado en estadística avanzada, modelado predictivo y visualización científica. Código abierto y colaborativo.",
      "rows": [
        [
          "Temas",
          "Introducción a RStudio · Interfaz y sintaxis · Estadística descriptiva · Probabilidad · Inferencia estadística · Regresiones",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades en software estadístico y repasar conceptos como probabilidad y estadística fundamental.",
          0
        ]
      ]
    },
    "stata": {
      "name": "STATA",
      "area": "Econometría y programación",
      "logo": "assets/logos/stata.svg",
      "desc": "Entorno estadístico intuitivo especializado en ciencias sociales, con sintaxis simplificada para econometría, series temporales y análisis de encuestas.",
      "rows": [
        [
          "Temas",
          "Introducción a STATA · Interfaz y sintaxis · Regresiones · Evaluación de impacto · Creación y edición de gráficos",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Fortalecer las habilidades en software estadístico y repasar los conceptos vistos en clase.",
          0
        ]
      ]
    },
    "matlab": {
      "name": "MATLAB",
      "area": "Econometría y programación",
      "logo": "assets/logos/matlab.png",
      "desc": "Entorno de programación avanzado para modelado matemático, análisis de datos y desarrollo de algoritmos aplicados a teorías económicas y financieras.",
      "rows": [
        [
          "Temas",
          "Introducción a MATLAB · Dynare · Ecuaciones diferenciales · Álgebra lineal · Optimización estática y dinámica",
          0
        ],
        [
          "Sesiones sugeridas",
          "Una (1) o dos (2) por tema",
          1
        ],
        [
          "Aporte a las asignaturas",
          "Mostrar el desarrollo de los conceptos vistos en los componentes cuantitativos y su aplicación a las diversas teorías económicas.",
          0
        ]
      ]
    }
  };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var cache = {};

  function build(id) {
    var sw = SW[id];
    var dlg = document.createElement("dialog");
    dlg.className = "sw-dialog";
    dlg.setAttribute("data-area", sw.area);
    dlg.setAttribute("aria-labelledby", "swd-" + id);
    var rows = sw.rows.map(function (r) {
      return "<div><dt>" + esc(r[0]) + "</dt><dd" + (r[2] ? ' class="mono"' : "") + ">" + esc(r[1]) + "</dd></div>";
    }).join("");
    dlg.innerHTML =
      '<div class="dlg-head">' +
        '<span class="dlg-logo"><img src="' + esc(sw.logo) + '" alt=""></span>' +
        '<div class="dlg-title">' +
          '<p class="card-eyebrow"><span class="area-tag">' + esc(sw.area) + "</span></p>" +
          '<h2 class="card-title" id="swd-' + id + '">' + esc(sw.name) + "</h2>" +
        "</div>" +
        '<button type="button" class="dlg-close" aria-label="Cerrar">×</button>' +
      "</div>" +
      '<div class="dlg-body">' +
        '<p class="card-desc">' + esc(sw.desc) + "</p>" +
        '<dl class="card-meta">' + rows + "</dl>" +
        '<div class="dlg-actions">' +
          '<a class="btn" href="' + FORM_URL + '" target="_blank" rel="noopener">Solicitar este apoyo ' + ARROW + "</a>" +
          '<a class="btn ghost" href="catalogo.html#' + encodeURIComponent(sw.area) + '">Ver catálogo de software</a>' +
          '<span class="dlg-note">Solicítalo con dos semanas de anticipación.</span>' +
        "</div>" +
      "</div>";
    dlg.querySelector(".dlg-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    document.body.appendChild(dlg);
    return dlg;
  }

  function open(id) {
    if (!SW[id] || typeof HTMLDialogElement === "undefined") return false;
    var dlg = cache[id] || (cache[id] = build(id));
    if (typeof dlg.showModal !== "function") return false;
    dlg.showModal();
    return true;
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-sw]") : null;
    if (!el) return;
    if (open(el.getAttribute("data-sw"))) e.preventDefault();
  });
})();
