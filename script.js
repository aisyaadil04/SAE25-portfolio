// Mobile menu
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Project filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category;

      if (selectedFilter === "all" || categories.includes(selectedFilter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Cursor glow effect
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });

  window.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
}

// Smooth page transition
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

const internalLinks = document.querySelectorAll("a[href]");

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    const isInternalPage =
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !href.startsWith("mailto:") &&
      !link.hasAttribute("download");

    if (isInternalPage) {
      event.preventDefault();

      document.body.classList.remove("page-loaded");
      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});

// =============================
// LANGUAGE SWITCH
// =============================

const translations = {
  fr: {
    nav_home: "accueil",
    nav_about: "à propos",
    nav_projects: "projets",
    nav_skills: "compétences",
    nav_contact: "contact",
    download_cv: "<span>↓</span> télécharger mon CV",

    home_bubble: "Bonjour !",
    home_small_title: "Bienvenue sur mon portfolio",
    home_intro:
      "Originaire de Malaisie et actuellement en formation à l’IUT Nice Côte d’Azur, j’y rassemble les projets et expériences qui marquent mon parcours dans le domaine des réseaux et télécommunications.<br><br>Ce site présente mes réalisations, mes compétences et les apprentissages que je construis au fil de ma première année en France.",
    projects_label: "mes réalisations",
    projects_title: "mes projets <span>♡</span>",
    projects_intro:
      "Voici une sélection de projets réalisés pendant mon parcours. Chaque projet m’a permis d’apprendre, de collaborer et de créer des solutions concrètes autour des réseaux, du web, de l’IoT et de la communication.",
    filter_all: "tous",
    filter_infra: "réseaux & infra",
    filter_web: "développement web",
    filter_iot: "iot & embarqué",
    filter_com: "communication",
    project_sae24_tag: "développement web · infrastructure",
    project_sae24_text:
      "Projet intégré autour d’un système de suivi des modifications d’un banc avionique. L’objectif est de prendre des photos, stocker les informations en base de données et suivre l’évolution des modifications via une interface web.",
    project_sae14_tag: "communication · sensibilisation",
    project_sae14_text:
      "Projet consacré à l’e-réputation. Il comprend une étude de cas sur l’impact des actions en ligne, puis une activité de sensibilisation destinée à un public collégien pour expliquer comment protéger son image numérique.",
    project_smartcane_tag: "iot · systèmes embarqués",
    project_smartcane_text:
      "Maquette de canne intelligente conçue avec Arduino pour aider les personnes malvoyantes. Le système détecte les obstacles grâce à des capteurs, prévient l’utilisateur par vibration et active une lumière lorsqu’il fait sombre.",
    project_meta_database: "Base de données",
    project_meta_website: "Site web",
    project_meta_presentation: "Présentation",
    project_meta_prevention: "Prévention",
    project_meta_teamwork: "Travail d’équipe",
    project_meta_sensors: "Capteurs",
    project_meta_prototype: "Prototype",
    project_discover: "découvrir →",
    projects_note: "Chaque projet est une nouvelle aventure !",

    about_label: "à propos de moi",
    about_title: "ma passion : connecter, comprendre, créer du lien. <span>♡</span>",
    about_intro:
      "Étudiante malaisienne en 1re année de BUT Réseaux & Télécommunications à l’IUT Nice Côte d’Azur, j’ai quitté Kuala Lumpur pour poursuivre mes études en France et découvrir un environnement académique différent. Ce parcours m’apprend à m’adapter, à gagner en autonomie et à progresser dans un domaine technique tout en évoluant dans une nouvelle culture.",
    about_sticky_note: "Curieuse<br>Optimiste<br>Passionnée",
    about_linkedin_title: "Retrouvez-moi aussi sur LinkedIn <span>✦</span>",
    about_linkedin_text:
      "J’y partage mon parcours, mes projets, mes apprentissages et mes centres d’intérêt autour du numérique.",
    about_linkedin_button: "voir mon profil ↗",
    about_story_title: "Mon histoire <span>♥</span>",
    about_story_text:
    "Depuis longtemps, je suis attirée par la manière dont le numérique permet de connecter les personnes, de transmettre des informations et de faciliter le quotidien. C’est cette curiosité qui m’a menée vers les réseaux et les télécommunications, un domaine où je peux apprendre en testant, en observant et en construisant progressivement des solutions.</br>Dans ma façon de travailler, j’aime avancer étape par étape : comprendre le besoin, chercher des pistes, essayer, me tromper parfois, puis améliorer. Les projets réalisés en équipe m’aident aussi à développer ma communication, mon organisation et ma capacité à collaborer.",
    about_story_link: "voir mes projets →",
    about_hobbies_title: "Mes loisirs & intérêts <span>☺</span>",
    about_hobbies_intro:
      "Quelques activités qui m’inspirent, m’aident à apprendre autrement et nourrissent ma créativité.",
    hobby_reading_title: "Lecture",
    hobby_reading_text:
      "Lire me permet de ralentir, découvrir de nouvelles idées et mieux comprendre le monde.",
    hobby_music_title: "Musique",
    hobby_music_text:
      "La musique m’accompagne dans mes moments de travail, de concentration et de créativité.",
    hobby_surf_title: "Surf",
    hobby_surf_text:
      "Le surf me rappelle l’importance de l’équilibre, de la patience et de l’adaptation.",
    hobby_photo_title: "Photo",
    hobby_photo_text:
      "La photographie me permet de capturer des moments et de raconter une ambiance.",
    about_masaf_title: "En dehors de l’IUT : MASAF & engagement <span>♡</span>",
    about_masaf_text:
      "En dehors des cours, je participe à des projets associatifs avec MASAF. J’aime organiser des événements, contribuer à des actions solidaires, travailler en équipe et créer du lien avec d’autres étudiants. Ces expériences m’apprennent à communiquer, m’organiser et prendre des initiatives.",
    about_paper_note: "Ensemble,<br>on va plus loin.",
    about_final_cta_text:
      "Envie d’en savoir plus ou de collaborer ?<br>Je suis toujours ouverte aux échanges !",
    about_final_cta_button: "me contacter →",

    skills_label: "mes apprentissages",
    skills_title: "mes compétences <span>♡</span>",
    skills_intro:
      "Voici les compétences que je développe au fil de ma formation, de mes projets et de mes expériences. Elles regroupent à la fois des compétences techniques, des outils pratiques et des compétences humaines.",
    skills_network_title: "Réseaux & infrastructure",
    skills_web_title: "Développement web",
    skills_iot_title: "IoT & systèmes embarqués",
    skills_communication_title: "Communication & gestion",
    skills_tools_title: "Outils utilisés",
    skill_routing: "Routage",
    skill_ip_addressing: "Adressage IP",
    skill_database: "Base de données",
    skill_web_interfaces: "Interfaces web",
    skill_sensors: "Capteurs",
    skill_camera: "Caméra",
    skill_prototyping: "Prototypage",
    skill_tests: "Tests",
    skill_system_logic: "Logique système",
    skill_teamwork: "Travail en équipe",
    skill_oral_presentation: "Présentation orale",
    skill_awareness: "Sensibilisation",
    skill_pedagogy: "Pédagogie",
    skill_reports: "Rédaction de rapports",
    skill_organization: "Organisation",
    skills_note: "Apprendre, créer, connecter — toujours en progression.",

    contact_label: "contact",
    contact_title: "envie <span>d’échanger ?</span>",
    contact_intro:
      "Une question, une opportunité ou simplement l’envie d’échanger ? Je serais ravie d’avoir de vos nouvelles !",
    contact_linkedin_title: "Me contacter sur LinkedIn <span>♡</span>",
    contact_linkedin_text: "Le meilleur moyen d’échanger avec moi ! Réponse rapide garantie.",
    contact_linkedin_button: "voir mon profil",
    contact_email_title: "Envoyez-moi un email <span>↷</span>",
    contact_email_text: "N’hésitez pas à m’écrire, je vous répondrai dans les plus brefs délais.",
    contact_location_title: "Ma localisation <span>♡</span>",
    contact_location_text:
      "Basée à Antibes, disponible pour des opportunités en présentiel ou à distance.",
    contact_note_text:
      "Ouverte aux projets créatifs, stages, collaborations ou discussions inspirantes !",
    contact_form_title: "Envoyez-moi un message <span>♡</span>",
    contact_placeholder_name: "Votre nom",
    contact_placeholder_email: "Votre email",
    contact_placeholder_subject: "Sujet",
    contact_placeholder_message: "Votre message",
    contact_send_button: "Envoyer votre message",
    contact_bottom_text: "Merci d’avoir pris le temps de visiter mon portfolio.",
    contact_bottom_title: "Au plaisir d’échanger avec vous !",

    sae24_back: "← retour aux projets",
    sae24_label: "fiche projet",
    sae24_title: "SAÉ24 : Suivi de modifications d’un banc avionique <span>♡</span>",
    sae24_intro:
      "Un projet intégré combinant Raspberry Pi, caméra, base de données et interface web afin de suivre visuellement l’évolution des modifications d’un banc avionique.",
    sae24_tag_database: "Base de données",
    sae24_tag_web: "Site web",
    sae24_tag_team: "Travail en équipe",

    sae24_context_title: "Contexte",
    sae24_context_text:
      "Dans le cadre de la SAÉ24, nous avons travaillé sur un projet intégré lié au suivi de modifications d’un banc avionique. Ce projet s’inscrit dans un contexte proche du monde professionnel, avec une problématique inspirée du domaine aéronautique et en lien avec une collaboration autour de Thales. L’objectif était de concevoir un système permettant de prendre des photos d’un banc avionique afin de garder une trace visuelle de l’avancement des modifications réalisées.",

    sae24_objective_title: "Objectif",
    sae24_objective_text:
      "L’objectif principal était de mettre en place une solution capable de photographier un banc avionique, d’enregistrer les informations associées dans une base de données et de rendre ces données accessibles à travers une interface web. Le projet permet ainsi de suivre l’évolution des modifications et de faciliter la consultation des preuves visuelles.",

    sae24_actions_title: "Actions",
    sae24_actions_intro:
      "Pour répondre au cahier des charges, nous avons travaillé sur plusieurs parties du système.",

    sae24_action1_title: "Conception du système",
    sae24_action1_li1:
      "Définition du parcours : photo → stockage → consultation web.",

    sae24_action2_title: "Mise en place de la partie matérielle",
    sae24_action2_li1:
      "Utilisation d’un Raspberry Pi 3 relié à une caméra.",

    sae24_action3_title: "Base de données",
    sae24_action3_li1:
      "Stockage des informations liées aux photos : identifiant, date et heure.",

    sae24_action4_title: "Développement web",
    sae24_action4_li1:
      "Création d’une interface pour consulter les photos et leur suivi.",

    sae24_tech_title: "Technos / compétences",
    sae24_tech1: "Systèmes embarqués : Raspberry Pi 3, caméra",
    sae24_tech2:
      "Développement web : HTML, CSS, PHP / JavaScript selon la partie réalisée",
    sae24_tech3: "Base de données : stockage et consultation des données",
    sae24_tech4:
      "Gestion de projet : organisation, répartition des tâches, travail en équipe",
    sae24_tech5:
      "Documentation : suivi de l’avancement, explication du fonctionnement du système",

    sae24_proofs_title: "Preuves possibles",
    sae24_proof1: "Schéma du fonctionnement global du système.",
    sae24_proof2: "Capture d’écran de l’interface web.",
    sae24_proof3: "Photo du montage ou du Raspberry Pi.",
    sae24_proof4: "Extrait de la base de données.",
    sae24_proof5: "Rapport ou présentation du projet.",

    sae24_personal_title: "Mon point de vue",
    sae24_personal_text:
      "Ce projet m’a intéressée car il relie plusieurs aspects du BUT R&T : le matériel, le web, la base de données et l’organisation d’un système complet. Il m’a permis de mieux comprendre comment une solution technique peut répondre à un besoin concret. J’ai aussi appris à travailler sur un projet plus long, où chaque partie dépend des autres et où la communication dans l’équipe est essentielle.",

    sae24_back_button: "retour aux projets",
    sae24_contact_button: "me contacter",

    sae14_back: "← retour aux projets",
    sae14_label: "fiche projet",
    sae14_title: "SAÉ14 : Sensibilisation à l’e-réputation <span>♡</span>",
    sae14_intro:
      "Un projet de communication autour de l’e-réputation, combinant étude de cas, sensibilisation et pédagogie auprès d’un public collégien.",
    sae14_tag_communication: "Communication orale",
    sae14_tag_awareness: "Sensibilisation",
    sae14_tag_team: "Travail en équipe",
    sae14_tag_pedagogy: "Pédagogie",

    sae14_context_title: "Contexte",
    sae14_context_text:
      "Dans le cadre de la SAÉ14, nous avons travaillé sur le thème de l’e-réputation, c’est-à-dire l’image qu’une personne renvoie sur Internet à travers ses publications, ses comportements et ses traces numériques. Le projet était composé de deux parties : une étude de cas sur une personne dont l’image en ligne a été affectée par ses actions, puis une activité de sensibilisation destinée à un public collégien.",

    sae14_objective_title: "Objectif",
    sae14_objective_text:
      "L’objectif était de comprendre l’impact des actions en ligne sur la réputation d’une personne, puis de transmettre ce message de manière simple et adaptée à des collégiens. Il fallait expliquer pourquoi l’e-réputation est importante, comment elle peut être fragilisée et quelles bonnes pratiques adopter pour la protéger.",

    sae14_actions_title: "Actions",
    sae14_actions_intro:
      "Pour réaliser ce projet, nous avons travaillé à la fois sur l’analyse, la communication et la pédagogie.",

    sae14_action1_title: "Étude de cas",
    sae14_action1_li1:
      "Analyse d’un cas concret lié à l’image en ligne.",

    sae14_action2_title: "Préparation de la présentation",
    sae14_action2_li1:
      "Organisation des causes, conséquences et leçons à retenir.",

    sae14_action3_title: "Sensibilisation auprès d’un public collégien",
    sae14_action3_li1:
      "Création d’une activité simple pour expliquer les bons réflexes en ligne.",

    sae14_action4_title: "Travail en équipe",
    sae14_action4_li1:
      "Répartition des rôles pour la recherche, le support et l’oral.",

    sae14_tech_title: "Technos / compétences",
    sae14_tech1:
      "Communication orale : présentation, vulgarisation, adaptation au public",
    sae14_tech2:
      "Recherche d’informations : analyse d’un cas concret",
    sae14_tech3:
      "Sensibilisation : prévention, pédagogie, transmission d’un message",
    sae14_tech4:
      "Travail en équipe : organisation, répartition des rôles, coordination",
    sae14_tech5:
      "Création de support : diaporama, activité ou jeu interactif",

    sae14_proofs_title: "Preuves possibles",
    sae14_proof1: "Diaporama de l’étude de cas.",
    sae14_proof2: "Support de l’activité ou du jeu de sensibilisation.",
    sae14_proof3: "Photos ou captures du support utilisé.",
    sae14_proof4: "Plan de présentation orale.",
    sae14_proof5: "Fiche récapitulative des bonnes pratiques numériques.",

    sae14_personal_title: "Mon point de vue",
    sae14_personal_text:
      "Ce projet m’a permis de travailler une compétence différente des projets techniques : savoir expliquer un sujet important de façon claire et accessible. J’ai trouvé intéressant de réfléchir à la manière dont nos actions en ligne peuvent avoir des conséquences réelles. La partie sensibilisation m’a aussi appris à adapter mon discours à un public plus jeune et à rendre un message sérieux plus interactif.",

    sae14_back_button: "retour aux projets",
    sae14_contact_button: "me contacter",

    smartcane_back: "← retour aux projets",
    smartcane_label: "fiche projet",
    smartcane_title: "Smart Cane Project : Canne intelligente <span>♡</span>",
    smartcane_intro:
      "Un prototype de canne intelligente conçu avec Arduino afin d’aider les personnes malvoyantes à détecter les obstacles et à se déplacer avec plus de sécurité.",
    smartcane_tag_sensors: "Capteurs",
    smartcane_tag_iot: "IoT",
    smartcane_tag_prototype: "Prototype",

    smartcane_context_title: "Contexte",
    smartcane_context_text:
      "Ce projet avait pour objectif de concevoir une canne intelligente destinée aux personnes aveugles, malvoyantes ou aux personnes âgées ayant des difficultés de vision. L’idée était de proposer une aide technique simple et accessible, capable d’améliorer la sécurité lors des déplacements. Le projet s’inscrit dans une démarche d’innovation utile, en reliant l’électronique, les capteurs et la programmation à un besoin concret du quotidien.",

    smartcane_objective_title: "Objectif",
    smartcane_objective_text:
      "L’objectif principal était de créer un prototype capable de détecter les obstacles autour de l’utilisateur et de l’alerter grâce à des signaux simples comme une vibration, un buzzer ou une lumière. Le système devait aussi pouvoir s’adapter à l’environnement, par exemple en activant automatiquement une LED lorsqu’il fait sombre.",

    smartcane_actions_title: "Actions",
    smartcane_actions_intro:
      "Pour réaliser ce projet, nous avons travaillé sur la conception du prototype, le choix des composants, le câblage, la programmation et les tests.",

    smartcane_action1_title: "Analyse du besoin",
    smartcane_action1_li1:
      "Définition des fonctions principales : détecter, alerter, améliorer la visibilité.",

    smartcane_action2_title: "Choix des composants",
    smartcane_action2_li1:
      "Utilisation d’Arduino, de capteurs, d’un buzzer, d’une LED et d’un moteur de vibration.",

    smartcane_action3_title: "Programmation du système",
    smartcane_action3_li1:
      "Déclenchement des alertes selon les obstacles et la luminosité.",

    smartcane_action4_title: "Tests et amélioration",
    smartcane_action4_li1:
      "Vérification du prototype et identification des améliorations possibles.",

    smartcane_tech_title: "Technos / compétences",
    smartcane_tech1: "Systèmes embarqués : Arduino Uno",
    smartcane_tech2: "Capteurs : ultrason, capteur de lumière",
    smartcane_tech3: "Actionneurs : moteur de vibration, buzzer, LED",
    smartcane_tech4: "Programmation : logique de détection et conditions",
    smartcane_tech5: "Prototypage : câblage, tests, amélioration du montage",

    smartcane_proofs_title: "Preuves possibles",
    smartcane_proof1: "Photo du prototype ou du montage Arduino.",
    smartcane_proof2: "Schéma du câblage électronique.",
    smartcane_proof3: "Extrait du code Arduino.",
    smartcane_proof4: "Vidéo ou démonstration du fonctionnement.",
    smartcane_proof5: "Rapport ou présentation du projet.",

    smartcane_personal_title: "Mon point de vue",
    smartcane_personal_text:
      "Ce projet m’a particulièrement intéressée car il montre comment la technologie peut être utilisée pour aider les autres. J’ai aimé travailler sur un prototype concret, où chaque composant avait un rôle précis. Ce projet m’a permis de mieux comprendre le lien entre les capteurs, la programmation et les besoins réels des utilisateurs. Il m’a aussi appris que même une solution simple peut avoir un impact important lorsqu’elle répond à un problème du quotidien.",

    smartcane_back_button: "retour aux projets",
    smartcane_contact_button: "me contacter",

    parcours_title: "mon parcours",

parcours_iut_title: "IUT Nice Côte d’Azur",
parcours_iut_desc: "BUT Réseaux & Télécommunications",
parcours_iut_date: "2025 – présent",

parcours_unikl_title: "UniKL MFI",
parcours_unikl_desc: "Classe préparatoire",
parcours_unikl_date: "2024 – 2025",

parcours_tkc_title: "Tunku Kurshiah College",
parcours_tkc_desc: "Lycée",
parcours_tkc_date: "2019 – 2024",
  },

  en: {
    nav_home: "home",
    nav_about: "about",
    nav_projects: "projects",
    nav_skills: "skills",
    nav_contact: "contact",
    download_cv: "<span>↓</span> download my CV",

    home_bubble: "Hello!",
    home_small_title: "Welcome to my portfolio",
    home_intro:
      "Originally from Malaysia and currently studying at IUT Nice Côte d’Azur, I use this website to bring together the projects and experiences that shape my path in Networks and Telecommunications.<br><br>This portfolio presents my work, skills and the learning experiences I am building throughout my first year in France.",
    projects_label: "my work",
    projects_title: "my projects <span>♡</span>",
    projects_intro:
      "Here is a selection of projects completed during my studies. Each project helped me learn, collaborate and create practical solutions around networks, web development, IoT and communication.",
    filter_all: "all",
    filter_infra: "networks & infra",
    filter_web: "web development",
    filter_iot: "iot & embedded",
    filter_com: "communication",
    project_sae24_tag: "web development · infrastructure",
    project_sae24_text:
      "An integrated project based on a system for tracking modifications on an avionics test bench. The goal is to take photos, store information in a database and follow modification progress through a web interface.",
    project_sae14_tag: "communication · awareness",
    project_sae14_text:
      "A project focused on e-reputation. It includes a case study about the impact of online actions, followed by an awareness activity for middle school students to explain how to protect their digital image.",
    project_smartcane_tag: "iot · embedded systems",
    project_smartcane_text:
      "A smart cane mock-up designed with Arduino to help visually impaired people. The system detects obstacles using sensors, alerts the user through vibration and turns on a light when it is dark.",
    project_meta_database: "Database",
    project_meta_website: "Website",
    project_meta_presentation: "Presentation",
    project_meta_prevention: "Prevention",
    project_meta_teamwork: "Teamwork",
    project_meta_sensors: "Sensors",
    project_meta_prototype: "Prototype",
    project_discover: "discover →",
    projects_note: "Every project is a new adventure !",

    about_label: "about me",
    about_title: "my passion: connecting, understanding and creating links. <span>♡</span>",
    about_intro:
      "I am a Malaysian first-year student in BUT Networks & Telecommunications at IUT Nice Côte d’Azur. I left Kuala Lumpur to continue my studies in France and discover a different academic environment. This experience teaches me to adapt, become more independent and progress in a technical field while living in a new culture.",
    about_sticky_note: "Curious<br>Optimistic<br>Passionate",
    about_linkedin_title: "Find me on LinkedIn <span>✦</span>",
    about_linkedin_text:
      "I share my journey, projects, learning experiences and interests around digital technology.",
    about_linkedin_button: "view my profile ↗",
    about_story_title: "My story <span>♥</span>",
    about_story_text:
      "For a long time, I have been interested in the way digital technology connects people, shares information and makes everyday life easier. This curiosity led me to networks and telecommunications, a field where I can learn by testing, observing and gradually building solutions.<br><br>In the way I work, I like to move forward step by step: understanding the need, looking for possible approaches, trying, sometimes making mistakes, then improving. Team projects also help me develop my communication, organization and ability to collaborate.",
    about_story_link: "see my projects →",
    about_hobbies_title: "My hobbies & interests <span>☺</span>",
    about_hobbies_intro:
      "A few activities that inspire me, help me learn differently and support my creativity.",
    hobby_reading_title: "Reading",
    hobby_reading_text:
      "Reading helps me slow down, discover new ideas and better understand the world.",
    hobby_music_title: "Music",
    hobby_music_text:
      "Music accompanies me during moments of work, focus and creativity.",
    hobby_surf_title: "Surfing",
    hobby_surf_text:
      "Surfing reminds me of the importance of balance, patience and adaptation.",
    hobby_photo_title: "Photography",
    hobby_photo_text:
      "Photography allows me to capture moments and tell a certain atmosphere.",
    about_masaf_title: "Outside IUT: MASAF & involvement <span>♡</span>",
    about_masaf_text:
      "Outside classes, I take part in student association projects with MASAF. I enjoy organizing events, contributing to solidarity actions, working in a team and creating connections with other students. These experiences help me improve my communication, organization and initiative-taking skills.",
    about_paper_note: "Together,<br>we go further.",
    about_final_cta_text:
      "Want to know more or collaborate?<br>I am always open to exchanging ideas!",
    about_final_cta_button: "contact me →",

    skills_label: "my learning journey",
    skills_title: "my skills <span>♡</span>",
    skills_intro:
      "Here are the skills I am developing through my studies, projects and experiences. They include technical skills, practical tools and human skills.",
    skills_network_title: "Networks & infrastructure",
    skills_web_title: "Web development",
    skills_iot_title: "IoT & embedded systems",
    skills_communication_title: "Communication & management",
    skills_tools_title: "Tools used",
    skill_routing: "Routing",
    skill_ip_addressing: "IP addressing",
    skill_database: "Database",
    skill_web_interfaces: "Web interfaces",
    skill_sensors: "Sensors",
    skill_camera: "Camera",
    skill_prototyping: "Prototyping",
    skill_tests: "Testing",
    skill_system_logic: "System logic",
    skill_teamwork: "Teamwork",
    skill_oral_presentation: "Oral presentation",
    skill_awareness: "Awareness",
    skill_pedagogy: "Pedagogy",
    skill_reports: "Report writing",
    skill_organization: "Organization",
    skills_note: "Learning, creating, connecting — always improving.",

    contact_label: "contact",
    contact_title: "want to <span>connect ?</span>",
    contact_intro:
      "Have a question, an opportunity, or simply want to connect? I would be happy to hear from you!",
    contact_linkedin_title: "Contact me on LinkedIn <span>♡</span>",
    contact_linkedin_text: "The best way to connect with me! Quick reply guaranteed.",
    contact_linkedin_button: "view my profile",
    contact_email_title: "Send me an email <span>↷</span>",
    contact_email_text: "Feel free to write to me, I will reply as soon as possible.",
    contact_location_title: "My location <span>♡</span>",
    contact_location_text:
      "Based in Antibes, available for opportunities in person or remotely.",
    contact_note_text:
      "Open to creative projects, internships, collaborations or inspiring discussions!",
    contact_form_title: "Send me a message <span>♡</span>",
    contact_placeholder_name: "Your name",
    contact_placeholder_email: "Your email",
    contact_placeholder_subject: "Subject",
    contact_placeholder_message: "Your message",
    contact_send_button: "Send your message",
    contact_bottom_text: "Thank you for taking the time to visit my portfolio.",
    contact_bottom_title: "Looking forward to exchanging with you!",

    sae24_back: "← back to projects",
    sae24_label: "project sheet",
    sae24_title: "SAÉ24 : Tracking modifications on an avionics test bench <span>♡</span>",
    sae24_intro:
      "An integrated project combining Raspberry Pi, camera, database and a web interface to visually track the progress of modifications on an avionics test bench.",
    sae24_tag_database: "Database",
    sae24_tag_web: "Website",
    sae24_tag_team: "Teamwork",

    sae24_context_title: "Context",
    sae24_context_text:
      "As part of SAÉ24, we worked on an integrated project related to tracking modifications on an avionics test bench. This project was close to a professional context, with a problem inspired by the aeronautics field and linked to a collaboration around Thales. The goal was to design a system capable of taking photos of an avionics test bench in order to keep a visual record of the progress of the modifications made.",

    sae24_objective_title: "Objective",
    sae24_objective_text:
      "The main objective was to set up a solution capable of photographing an avionics test bench, recording the associated information in a database and making this data accessible through a web interface. The project therefore makes it possible to follow the evolution of the modifications and facilitate access to visual proof.",

    sae24_actions_title: "Actions",
    sae24_actions_intro:
      "To meet the project requirements, we worked on several parts of the system.",

    sae24_action1_title: "System design",
    sae24_action1_li1:
      "Definition of the global operation of the project: photo capture, data storage and consultation through a website.",
    sae24_action1_li2:
      "Reflection on the role of each element: Raspberry Pi, camera, database and user interface.",

    sae24_action2_title: "Hardware setup",
    sae24_action2_li1:
      "Use of a Raspberry Pi 3 as the central element of the system.",
    sae24_action2_li2:
      "Preparation of photo capture using a camera connected to the Raspberry Pi.",
    sae24_action2_li3:
      "Reflection on the integration of the system into a technical tracking environment.",

    sae24_action3_title: "Database",
    sae24_action3_li1:
      "Creation or use of a database to store information related to the photos.",
    sae24_action3_li2:
      "Recording useful data such as the identifier, date, time or information associated with the tracked modification.",

    sae24_action4_title: "Web development",
    sae24_action4_li1:
      "Creation of a web interface allowing users to consult the photos and recorded information.",
    sae24_action4_li2:
      "Integration with SAÉ23, which focuses more on the website part.",
    sae24_action4_li3:
      "Organization of the pages to make consultation simple and clear.",

    sae24_action5_title: "Teamwork and organization",
    sae24_action5_li1:
      "Distribution of tasks between group members.",
    sae24_action5_li2:
      "Regular communication to move forward on the different parts of the project.",
    sae24_action5_li3:
      "Adaptation to the technical difficulties encountered during development.",

    sae24_tech_title: "Technologies / skills",
    sae24_tech1: "Embedded systems: Raspberry Pi 3, camera",
    sae24_tech2:
      "Web development: HTML, CSS, PHP / JavaScript depending on the part completed",
    sae24_tech3: "Database: data storage and consultation",
    sae24_tech4:
      "Project management: organization, task distribution and teamwork",
    sae24_tech5:
      "Documentation: progress tracking and explanation of how the system works",

    sae24_proofs_title: "Possible proof",
    sae24_proof1: "Diagram of the overall system operation.",
    sae24_proof2: "Screenshot of the web interface.",
    sae24_proof3: "Photo of the setup or Raspberry Pi.",
    sae24_proof4: "Database extract.",
    sae24_proof5: "Project report or presentation.",

    sae24_personal_title: "My point of view",
    sae24_personal_text:
      "This project interested me because it connects several aspects of the BUT R&T program: hardware, web development, databases and the organization of a complete system. It helped me better understand how a technical solution can respond to a concrete need. I also learned to work on a longer project, where each part depends on the others and where communication within the team is essential.",

    sae24_back_button: "back to projects",
    sae24_contact_button: "contact me",

    sae14_back: "← back to projects",
    sae14_label: "project sheet",
    sae14_title: "SAÉ14 : Raising awareness about e-reputation <span>♡</span>",
    sae14_intro:
      "A communication project about e-reputation, combining a case study, awareness-raising and pedagogy for middle school students.",
    sae14_tag_communication: "Oral communication",
    sae14_tag_awareness: "Awareness",
    sae14_tag_team: "Teamwork",
    sae14_tag_pedagogy: "Pedagogy",

    sae14_context_title: "Context",
    sae14_context_text:
      "As part of SAÉ14, we worked on the topic of e-reputation, meaning the image a person gives online through their posts, behavior and digital traces. The project was made up of two parts: a case study about a person whose online image was affected by their actions, followed by an awareness activity for middle school students.",

    sae14_objective_title: "Objective",
    sae14_objective_text:
      "The objective was to understand the impact of online actions on a person’s reputation, then communicate this message in a simple way adapted to middle school students. We had to explain why e-reputation is important, how it can be weakened and what good practices can help protect it.",

    sae14_actions_title: "Actions",
    sae14_actions_intro:
      "To complete this project, we worked on analysis, communication and pedagogy.",

    sae14_action1_title: "Case study",
    sae14_action1_li1:
      "Choice of a concrete case related to poor management of online image.",
    sae14_action1_li2:
      "Analysis of the actions or publications that had a negative impact on the person’s e-reputation.",
    sae14_action1_li3:
      "Identification of possible consequences: loss of credibility, public reactions, personal or professional impact.",

    sae14_action2_title: "Presentation preparation",
    sae14_action2_li1:
      "Organization of the main ideas to explain the case clearly.",
    sae14_action2_li2:
      "Highlighting the causes, consequences and lessons to remember.",
    sae14_action2_li3:
      "Creation of a visual support to make the presentation easier to understand.",

    sae14_action3_title: "Awareness activity for middle school students",
    sae14_action3_li1:
      "Design of an activity or game adapted to a young audience.",
    sae14_action3_li2:
      "Explanation of good online habits: thinking before posting, protecting personal information and checking one’s online image.",
    sae14_action3_li3:
      "Use of a simple and accessible tone to keep the audience’s attention.",

    sae14_action4_title: "Teamwork",
    sae14_action4_li1:
      "Distribution of roles for research, support preparation and oral presentation.",
    sae14_action4_li2:
      "Adaptation of the content so that it would be understandable and interesting for middle school students.",
    sae14_action4_li3:
      "Oral practice to make the presentation smoother.",

    sae14_tech_title: "Technologies / skills",
    sae14_tech1:
      "Oral communication: presentation, simplification and adaptation to the audience",
    sae14_tech2:
      "Information research: analysis of a concrete case",
    sae14_tech3:
      "Awareness-raising: prevention, pedagogy and message transmission",
    sae14_tech4:
      "Teamwork: organization, role distribution and coordination",
    sae14_tech5:
      "Support creation: slideshow, activity or interactive game",

    sae14_proofs_title: "Possible proof",
    sae14_proof1: "Case study slideshow.",
    sae14_proof2: "Support for the awareness activity or game.",
    sae14_proof3: "Photos or screenshots of the support used.",
    sae14_proof4: "Oral presentation plan.",
    sae14_proof5: "Summary sheet of good digital practices.",

    sae14_personal_title: "My point of view",
    sae14_personal_text:
      "This project allowed me to work on a skill that is different from technical projects: explaining an important topic in a clear and accessible way. I found it interesting to think about how our online actions can have real consequences. The awareness part also taught me to adapt my speech to a younger audience and make a serious message more interactive.",

    sae14_back_button: "back to projects",
    sae14_contact_button: "contact me",
    smartcane_back: "← back to projects",
    smartcane_label: "project sheet",
    smartcane_title: "Smart Cane Project : Intelligent cane <span>♡</span>",
    smartcane_intro:
      "A smart cane prototype designed with Arduino to help visually impaired people detect obstacles and move around more safely.",
    smartcane_tag_sensors: "Sensors",
    smartcane_tag_iot: "IoT",
    smartcane_tag_prototype: "Prototype",

    smartcane_context_title: "Context",
    smartcane_context_text:
      "This project aimed to design a smart cane for blind people, visually impaired people or elderly people with vision difficulties. The idea was to create a simple and accessible technical aid capable of improving safety during movement. The project follows a useful innovation approach by linking electronics, sensors and programming to a concrete everyday need.",

    smartcane_objective_title: "Objective",
    smartcane_objective_text:
      "The main objective was to create a prototype capable of detecting obstacles around the user and alerting them through simple signals such as vibration, a buzzer or a light. The system also had to adapt to the environment, for example by automatically turning on an LED when it is dark.",

    smartcane_actions_title: "Actions",
    smartcane_actions_intro:
      "To complete this project, we worked on the prototype design, component selection, wiring, programming and testing.",

    smartcane_action1_title: "Needs analysis",
    smartcane_action1_li1:
      "Identification of the users concerned: blind, visually impaired or elderly people.",
    smartcane_action1_li2:
      "Reflection on the difficulties encountered during movement.",
    smartcane_action1_li3:
      "Definition of the main functions: detection, alert and visibility.",

    smartcane_action2_title: "Component selection",
    smartcane_action2_li1:
      "Use of an Arduino Uno board as the central element of the prototype.",
    smartcane_action2_li2:
      "Addition of an ultrasonic sensor to detect short-distance obstacles.",
    smartcane_action2_li3:
      "Use of a vibration motor, a buzzer, an LED and a light sensor.",

    smartcane_action3_title: "System programming",
    smartcane_action3_li1:
      "Writing the Arduino program to read sensor values.",
    smartcane_action3_li2:
      "Triggering the vibration or buzzer when an obstacle is detected.",
    smartcane_action3_li3:
      "Automatic activation of the LED when the brightness is low.",

    smartcane_action4_title: "Testing and improvement",
    smartcane_action4_li1:
      "Testing to check obstacle detection.",
    smartcane_action4_li2:
      "Observation of the system responses: vibration, buzzer and LED.",
    smartcane_action4_li3:
      "Identification of prototype limitations and proposal of possible improvements.",

    smartcane_tech_title: "Technologies / skills",
    smartcane_tech1: "Embedded systems: Arduino Uno",
    smartcane_tech2: "Sensors: ultrasonic sensor, light sensor",
    smartcane_tech3: "Actuators: vibration motor, buzzer, LED",
    smartcane_tech4: "Programming: detection logic and conditions",
    smartcane_tech5: "Prototyping: wiring, testing and circuit improvement",

    smartcane_proofs_title: "Possible proof",
    smartcane_proof1: "Photo of the prototype or Arduino setup.",
    smartcane_proof2: "Electronic wiring diagram.",
    smartcane_proof3: "Arduino code extract.",
    smartcane_proof4: "Video or demonstration of the system.",
    smartcane_proof5: "Project report or presentation.",

    smartcane_personal_title: "My point of view",
    smartcane_personal_text:
      "This project particularly interested me because it shows how technology can be used to help others. I enjoyed working on a concrete prototype where each component had a specific role. This project helped me better understand the link between sensors, programming and real user needs. It also taught me that even a simple solution can have an important impact when it responds to an everyday problem.",

    smartcane_back_button: "back to projects",
    smartcane_contact_button: "contact me",

    parcours_title: "my journey",

parcours_iut_title: "IUT Nice Côte d’Azur",
parcours_iut_desc: "BUT Networks & Telecommunications",
parcours_iut_date: "2025 – present",

parcours_unikl_title: "UniKL MFI",
parcours_unikl_desc: "Preparatory year",
parcours_unikl_date: "2024 – 2025",

parcours_tkc_title: "Tunku Kurshiah College",
parcours_tkc_desc: "High school",
parcours_tkc_date: "2019 – 2024",
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");

  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("placeholder", translations[lang][key]);
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("portfolioLanguage", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

const savedLanguage = localStorage.getItem("portfolioLanguage") || "fr";
setLanguage(savedLanguage);

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});
