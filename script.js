const questions = [
  {
    title: "Quand vous êtes vraiment absorbé, vous êtes plutôt en train de...",
    answers: [
      answer("Créer une forme", "Écrire, dessiner, cuisiner, filmer, composer.", { love: 5, skill: 1 }, ["creative"], ["creator", "maker"]),
      answer("Comprendre un sujet", "Lire, chercher, comparer, relier des idées.", { skill: 5, love: 1 }, ["education", "techData"], ["researcher", "analyst"]),
      answer("Aider quelqu'un", "Écouter, accompagner, débloquer une situation.", { need: 5, love: 1 }, ["wellbeing", "community"], ["coach", "facilitator"]),
      answer("Structurer un projet", "Organiser les étapes pour que ça avance.", { value: 5, skill: 1 }, ["business"], ["organizer", "operations"]),
    ],
  },
  {
    title: "Le compliment qui vous touche le plus serait...",
    answers: [
      answer("Tu inspires", "Votre énergie donne envie d'oser.", { love: 5 }, ["creative"], ["creator"]),
      answer("Tu expliques bien", "Vous rendez les choses plus claires.", { skill: 5 }, ["education"], ["educator"]),
      answer("Tu vois les gens", "Vous captez les besoins derrière les mots.", { need: 5 }, ["wellbeing", "community"], ["coach"]),
      answer("Tu es fiable", "On sait que vous irez au bout.", { value: 5 }, ["business"], ["operations"]),
    ],
  },
  {
    title: "Quel problème vous donne envie d'agir ?",
    answers: [
      answer("Le manque de beauté", "Des lieux, contenus ou objets sans âme.", { love: 4, need: 2 }, ["creative", "craft"], ["creator", "maker"]),
      answer("La confusion", "Des informations utiles trop difficiles à comprendre.", { skill: 4, need: 2 }, ["education", "techData"], ["educator", "analyst"]),
      answer("L'isolement", "Des personnes qui manquent de lien ou de soutien.", { need: 5 }, ["community", "wellbeing"], ["facilitator", "coach"]),
      answer("Le gaspillage", "Temps, énergie, argent ou ressources mal utilisés.", { value: 4, need: 2 }, ["sustainability", "business"], ["strategist", "operations"]),
    ],
  },
  {
    title: "Dans une semaine idéale, vous voulez surtout...",
    answers: [
      answer("De la liberté créative", "Changer de format et suivre votre intuition.", { love: 5 }, ["creative"], ["creator"]),
      answer("Un bloc de maîtrise", "Approfondir un savoir-faire sans dispersion.", { skill: 5 }, ["techData", "craft"], ["researcher", "maker"]),
      answer("Des échanges utiles", "Voir directement l'effet de votre présence.", { need: 5 }, ["wellbeing", "community"], ["coach", "facilitator"]),
      answer("Des résultats visibles", "Finir, mesurer, améliorer.", { value: 5 }, ["business"], ["operations", "product"]),
    ],
  },
  {
    title: "Ce que les autres vous demandent naturellement...",
    answers: [
      answer("Une idée forte", "Nom, concept, angle, histoire, ambiance.", { love: 4, skill: 2 }, ["creative"], ["creator", "strategist"]),
      answer("Un avis précis", "Diagnostic, méthode, comparaison, décision.", { skill: 5 }, ["techData", "business"], ["analyst", "strategist"]),
      answer("Une écoute honnête", "Recul, confiance, soutien, médiation.", { need: 5 }, ["wellbeing"], ["coach", "facilitator"]),
      answer("Un plan solide", "Priorités, budget, calendrier, organisation.", { value: 5 }, ["business"], ["organizer", "operations"]),
    ],
  },
  {
    title: "Quel public vous attire le plus ?",
    answers: [
      answer("Les créatifs et indépendants", "Des personnes qui veulent exprimer une voix.", { love: 4, value: 1 }, ["creative", "business"], ["creator", "coach"]),
      answer("Les apprenants", "Enfants, étudiants, adultes en reconversion.", { skill: 4, need: 2 }, ["education"], ["educator"]),
      answer("Les personnes en transition", "Celles qui traversent un changement de vie.", { need: 5 }, ["wellbeing", "community"], ["coach"]),
      answer("Les petites organisations", "Associations, PME, collectifs, projets locaux.", { value: 4, need: 2 }, ["business", "socialImpact"], ["strategist", "operations"]),
    ],
  },
  {
    title: "Vous préférez apprendre en...",
    answers: [
      answer("Essayant vite", "Prototype, brouillon, version 1.", { love: 3, skill: 2 }, ["creative", "craft"], ["maker", "creator"]),
      answer("Étudiant en profondeur", "Sources, exemples, modèles, preuves.", { skill: 5 }, ["education", "techData"], ["researcher", "analyst"]),
      answer("Échangeant avec les gens", "Entretiens, retours, observations terrain.", { need: 4, skill: 1 }, ["community", "wellbeing"], ["facilitator", "coach"]),
      answer("Mesurant les effets", "Indicateurs, coûts, impact, rentabilité.", { value: 4, skill: 2 }, ["business", "sustainability"], ["analyst", "operations"]),
    ],
  },
  {
    title: "L'environnement de travail qui vous convient le mieux...",
    answers: [
      answer("Un studio vivant", "Matériaux, images, sons, essais.", { love: 5 }, ["creative", "craft"], ["creator", "maker"]),
      answer("Un espace calme", "Concentration, recherche, expertise.", { skill: 5 }, ["techData", "education"], ["researcher", "analyst"]),
      answer("Un lieu humain", "Rencontres, soin, groupe, proximité.", { need: 5 }, ["wellbeing", "community"], ["facilitator", "coach"]),
      answer("Une base opérationnelle", "Outils, process, décisions, suivi.", { value: 5 }, ["business"], ["organizer", "operations"]),
    ],
  },
  {
    title: "Si vous deviez vendre quelque chose demain...",
    answers: [
      answer("Une expérience", "Atelier, contenu, objet, moment mémorable.", { love: 4, value: 2 }, ["creative", "craft"], ["creator", "maker"]),
      answer("Une expertise", "Conseil, audit, formation, méthode.", { skill: 4, value: 2 }, ["education", "techData"], ["educator", "analyst"]),
      answer("Un accompagnement", "Coaching, mentorat, médiation, soin.", { need: 4, value: 2 }, ["wellbeing"], ["coach", "facilitator"]),
      answer("Un système", "Process, offre, outil, abonnement.", { value: 5, skill: 1 }, ["business", "techData"], ["product", "operations"]),
    ],
  },
  {
    title: "Votre cause spontanée ressemble le plus à...",
    answers: [
      answer("Expression", "Aider les gens à créer ou raconter.", { love: 4, need: 2 }, ["creative", "education"], ["creator", "educator"]),
      answer("Transmission", "Rendre les savoirs plus accessibles.", { skill: 4, need: 2 }, ["education"], ["educator"]),
      answer("Soin du lien", "Prévenir l'épuisement, l'isolement, les tensions.", { need: 5 }, ["wellbeing", "community"], ["coach", "facilitator"]),
      answer("Transition utile", "Construire plus sobre, durable, viable.", { value: 3, need: 3 }, ["sustainability", "socialImpact"], ["strategist", "operations"]),
    ],
  },
  {
    title: "Face à une idée neuve, votre premier réflexe...",
    answers: [
      answer("Sentir le potentiel", "Chercher le ton, l'émotion, la promesse.", { love: 5 }, ["creative"], ["creator", "strategist"]),
      answer("Tester la logique", "Identifier ce qui tient ou non.", { skill: 5 }, ["techData"], ["analyst", "researcher"]),
      answer("Penser aux personnes", "Qui cela aide, blesse, implique ou réunit.", { need: 5 }, ["socialImpact", "community"], ["facilitator"]),
      answer("Voir le modèle", "Temps, prix, distribution, risques.", { value: 5 }, ["business"], ["entrepreneur", "strategist"]),
    ],
  },
  {
    title: "Vous aimeriez être reconnu pour...",
    answers: [
      answer("Votre univers", "Une signature sensible et reconnaissable.", { love: 5 }, ["creative", "craft"], ["creator"]),
      answer("Votre précision", "Une compétence rare et fiable.", { skill: 5 }, ["techData", "education"], ["analyst", "researcher"]),
      answer("Votre impact humain", "Les personnes ressortent plus fortes.", { need: 5 }, ["wellbeing", "socialImpact"], ["coach"]),
      answer("Votre capacité à bâtir", "Des projets qui durent et tiennent debout.", { value: 5 }, ["business"], ["entrepreneur", "operations"]),
    ],
  },
  {
    title: "Quel type de tâche vous épuise le moins ?",
    answers: [
      answer("Produire des variations", "Chercher plusieurs idées ou formes.", { love: 4, skill: 1 }, ["creative"], ["creator"]),
      answer("Résoudre un problème complexe", "Démêler causes, données, contraintes.", { skill: 5 }, ["techData", "business"], ["analyst"]),
      answer("Tenir un espace d'écoute", "Rester présent même quand c'est délicat.", { need: 5 }, ["wellbeing"], ["coach", "facilitator"]),
      answer("Suivre un plan jusqu'au bout", "Coordonner, relancer, finaliser.", { value: 5 }, ["business"], ["operations", "organizer"]),
    ],
  },
  {
    title: "Quelle phrase vous ressemble le plus ?",
    answers: [
      answer("Je veux donner forme à ce qui est invisible.", "Idées, émotions, récits, beauté.", { love: 5 }, ["creative"], ["creator"]),
      answer("Je veux rendre le complexe utilisable.", "Méthodes, outils, savoirs, systèmes.", { skill: 5 }, ["education", "techData"], ["educator", "product"]),
      answer("Je veux aider les gens à passer un cap.", "Confiance, lien, santé, orientation.", { need: 5 }, ["wellbeing"], ["coach"]),
      answer("Je veux créer quelque chose qui fonctionne.", "Offre, équipe, modèle, organisation.", { value: 5 }, ["business"], ["entrepreneur", "operations"]),
    ],
  },
  {
    title: "Dans quel secteur vous vous projetez le plus facilement ?",
    answers: [
      answer("Culture et contenus", "Médias, design, artisanat, événementiel.", { love: 4, value: 1 }, ["creative", "craft"], ["creator", "maker"]),
      answer("Éducation et connaissance", "Formation, édition, recherche, vulgarisation.", { skill: 4, need: 1 }, ["education"], ["educator", "researcher"]),
      answer("Santé mentale et lien social", "Prévention, coaching, inclusion, médiation.", { need: 5 }, ["wellbeing", "community"], ["coach", "facilitator"]),
      answer("Business responsable", "Produit, impact, opérations, entrepreneuriat.", { value: 4, need: 1 }, ["business", "sustainability"], ["entrepreneur", "product"]),
    ],
  },
  {
    title: "Votre rapport à l'argent est plutôt...",
    answers: [
      answer("Un moyen de créer plus librement", "Financer du temps, de la qualité, de l'audace.", { love: 3, value: 3 }, ["creative", "business"], ["creator", "entrepreneur"]),
      answer("Une preuve d'expertise utile", "Être payé pour une vraie compétence.", { skill: 3, value: 3 }, ["education", "techData"], ["educator", "analyst"]),
      answer("Une condition pour aider durablement", "Ne pas se sacrifier pour contribuer.", { need: 3, value: 3 }, ["wellbeing", "socialImpact"], ["coach", "strategist"]),
      answer("Un outil de stabilité", "Prévoir, investir, construire à long terme.", { value: 5 }, ["business"], ["operations", "entrepreneur"]),
    ],
  },
  {
    title: "Quel format vous attire pour commencer ?",
    answers: [
      answer("Un contenu public", "Newsletter, vidéo, exposition, podcast.", { love: 4, skill: 1 }, ["creative", "education"], ["creator", "educator"]),
      answer("Un diagnostic", "Audit, bilan, analyse, recommandation.", { skill: 4, value: 1 }, ["techData", "business"], ["analyst", "strategist"]),
      answer("Un accompagnement court", "3 séances, atelier de groupe, permanence.", { need: 4, value: 1 }, ["wellbeing", "community"], ["coach", "facilitator"]),
      answer("Une offre packagée", "Service clair avec prix et livrable.", { value: 5 }, ["business"], ["entrepreneur", "product"]),
    ],
  },
  {
    title: "La compétence que vous voulez développer maintenant...",
    answers: [
      answer("Expression", "Écriture, image, oral, direction artistique.", { love: 4, skill: 2 }, ["creative"], ["creator"]),
      answer("Analyse", "Recherche, data, stratégie, pédagogie.", { skill: 5 }, ["techData", "education"], ["analyst", "researcher"]),
      answer("Relation", "Coaching, facilitation, écoute, médiation.", { need: 4, skill: 2 }, ["wellbeing", "community"], ["coach", "facilitator"]),
      answer("Pilotage", "Vente, gestion, produit, opérations.", { value: 5 }, ["business"], ["operations", "product"]),
    ],
  },
  {
    title: "Dans deux ans, vous seriez fier d'avoir...",
    answers: [
      answer("Créé une oeuvre ou une marque", "Quelque chose qui porte votre regard.", { love: 5, value: 1 }, ["creative", "business"], ["creator", "entrepreneur"]),
      answer("Développé une expertise reconnue", "Une méthode que l'on vient chercher.", { skill: 5, value: 1 }, ["education", "techData"], ["educator", "analyst"]),
      answer("Accompagné une vraie transformation", "Des personnes ou groupes ont avancé grâce à vous.", { need: 5 }, ["wellbeing", "socialImpact"], ["coach", "facilitator"]),
      answer("Construit un modèle viable", "Revenus, rythme et impact peuvent coexister.", { value: 5, need: 1 }, ["business", "sustainability"], ["entrepreneur", "strategist"]),
    ],
  },
  {
    title: "Votre ikigai doit surtout vous donner...",
    answers: [
      answer("Joie", "L'élan de commencer sans vous forcer.", { love: 5 }, ["creative"], ["creator"]),
      answer("Fierté", "Le sentiment de devenir vraiment bon.", { skill: 5 }, ["education", "techData"], ["researcher", "analyst"]),
      answer("Sens", "La preuve que votre présence compte.", { need: 5 }, ["wellbeing", "socialImpact"], ["coach"]),
      answer("Liberté", "Une base matérielle qui vous laisse respirer.", { value: 5 }, ["business"], ["entrepreneur", "operations"]),
    ],
  },
];

const axisMeta = {
  love: {
    label: "Élan",
    color: "#d96b6b",
    title: "Créer et faire ressentir",
    summary:
      "Votre point d'entrée est l'énergie créative: formes, récits, expériences, beauté ou idées qui donnent envie d'agir.",
  },
  skill: {
    label: "Talent",
    color: "#5f9c72",
    title: "Comprendre et transmettre",
    summary:
      "Votre piste se construit autour d'une compétence à approfondir: analyser, expliquer, clarifier ou rendre un sujet utilisable.",
  },
  need: {
    label: "Utilité",
    color: "#4f8ca8",
    title: "Accompagner et relier",
    summary:
      "Votre boussole est humaine: vous remarquez les besoins, les transitions et les situations où une présence juste change beaucoup.",
  },
  value: {
    label: "Équilibre",
    color: "#f1b84a",
    title: "Bâtir et rendre viable",
    summary:
      "Votre piste demande un cadre solide: offre claire, modèle durable, organisation saine et liberté matérielle.",
  },
};

const domainMeta = {
  creative: { icon: "🎨", text: "Culture, contenu, design, communication, image" },
  education: { icon: "📚", text: "Éducation, formation, vulgarisation, édition" },
  wellbeing: { icon: "🌿", text: "Coaching, santé mentale, prévention, accompagnement" },
  socialImpact: { icon: "🤝", text: "Impact social, inclusion, associations, ESS" },
  sustainability: { icon: "♻️", text: "Transition écologique, sobriété, économie circulaire" },
  techData: { icon: "🧠", text: "Produit numérique, data, recherche utilisateur, outils" },
  business: { icon: "🚀", text: "Entrepreneuriat, conseil, stratégie, opérations" },
  community: { icon: "🫶", text: "Animation de communauté, médiation, lieux collectifs" },
  craft: { icon: "🛠️", text: "Artisanat, cuisine, objets, expériences physiques" },
};

const roleMeta = {
  creator: { icon: "✍️", text: "Créateur de contenu, designer éditorial, storyteller, directeur créatif" },
  educator: { icon: "🎓", text: "Formateur, vulgarisateur, concepteur pédagogique, mentor" },
  coach: { icon: "💬", text: "Coach, accompagnant, conseiller d'orientation, praticien bien-être" },
  strategist: { icon: "🧭", text: "Consultant, stratège d'impact, designer de service, chargé de mission" },
  analyst: { icon: "🔎", text: "Analyste, researcher, data/story analyst, expert métier" },
  maker: { icon: "🧰", text: "Artisan, chef de projet créatif, producteur, créateur d'expériences" },
  organizer: { icon: "📅", text: "Coordinateur, chef de projet, responsable de programme" },
  entrepreneur: { icon: "🌱", text: "Indépendant, fondateur, solopreneur, responsable d'offre" },
  researcher: { icon: "📖", text: "Chercheur appliqué, veilleur, rédacteur expert, UX researcher" },
  facilitator: { icon: "🗣️", text: "Facilitateur, médiateur, animateur de communauté, chargé d'ateliers" },
  product: { icon: "🧩", text: "Product manager, responsable d'outil, service designer" },
  operations: { icon: "⚙️", text: "Responsable opérations, office manager, pilotage de projets" },
};

const comboTitles = {
  love_skill: "Créateur expert",
  love_need: "Créateur engagé",
  love_value: "Créateur entrepreneur",
  skill_love: "Pédagogue créatif",
  skill_need: "Expert utile",
  skill_value: "Conseil spécialisé",
  need_love: "Accompagnant inspirant",
  need_skill: "Mentor structurant",
  need_value: "Acteur d'impact durable",
  value_love: "Bâtisseur de marque",
  value_skill: "Architecte de systèmes",
  value_need: "Entrepreneur d'utilité",
};

const answers = Array(questions.length).fill(null);
let currentIndex = 0;
let autoAdvanceTimer = null;

const quizForm = document.querySelector("#quizForm");
const answerGrid = document.querySelector("#answerGrid");
const stepLabel = document.querySelector("#stepLabel");
const questionTitle = document.querySelector("#questionTitle");
const progressBar = document.querySelector("#progressBar");
const backButton = document.querySelector("#backButton");
const resetButton = document.querySelector("#resetButton");
const resultView = document.querySelector("#resultView");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const sectorList = document.querySelector("#sectorList");
const roleList = document.querySelector("#roleList");
const scoreList = document.querySelector("#scoreList");
const nextSteps = document.querySelector("#nextSteps");
const againButton = document.querySelector("#againButton");

function answer(label, detail, axes, domains, roles) {
  return { label, detail, axes, domains, roles };
}

function addScore(target, key, points = 1) {
  target[key] = (target[key] || 0) + points;
}

function renderQuestion() {
  window.clearTimeout(autoAdvanceTimer);
  const question = questions[currentIndex];
  stepLabel.textContent = `Question ${currentIndex + 1} sur ${questions.length}`;
  questionTitle.textContent = question.title;
  progressBar.style.width = `${(currentIndex / questions.length) * 100}%`;
  backButton.disabled = currentIndex === 0;

  answerGrid.innerHTML = "";
  question.answers.forEach((item, answerIndex) => {
    const option = document.createElement("label");
    option.className = "answer-card";
    option.innerHTML = `
      <input type="radio" name="answer" value="${answerIndex}">
      <span class="answer-dot" aria-hidden="true"></span>
      <span class="answer-text">
        <strong>${item.label}</strong>
        <span>${item.detail}</span>
      </span>
    `;
    const input = option.querySelector("input");
    input.checked = answers[currentIndex] === answerIndex;
    answerGrid.appendChild(option);
  });
}

function calculateScores() {
  const axisScores = { love: 0, skill: 0, need: 0, value: 0 };
  const domainScores = {};
  const roleScores = {};

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const selected = questions[questionIndex].answers[answerIndex];
    Object.entries(selected.axes).forEach(([axis, points]) => {
      addScore(axisScores, axis, points);
    });
    selected.domains.forEach((domain, domainIndex) => {
      addScore(domainScores, domain, domainIndex === 0 ? 3 : 2);
    });
    selected.roles.forEach((role, roleIndex) => {
      addScore(roleScores, role, roleIndex === 0 ? 3 : 2);
    });
  });

  return { axisScores, domainScores, roleScores };
}

function sortedEntries(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

function renderList(list, items) {
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = typeof item === "string" ? item : item.text;
    list.appendChild(li);
  });
}

function renderResult() {
  const { axisScores, domainScores, roleScores } = calculateScores();
  const axisRank = sortedEntries(axisScores);
  const domainRank = sortedEntries(domainScores);
  const roleRank = sortedEntries(roleScores);
  const [topAxis] = axisRank[0];
  const secondAxis = axisRank[1][0];
  const lowestAxis = axisRank[axisRank.length - 1][0];
  const topMeta = axisMeta[topAxis];
  const secondMeta = axisMeta[secondAxis];
  const lowMeta = axisMeta[lowestAxis];
  const comboKey = `${topAxis}_${secondAxis}`;
  const titlePrefix = comboTitles[comboKey] || topMeta.title;
  const topDomains = domainRank.slice(0, 3).map(([domain]) => domainMeta[domain]);
  const topRoles = roleRank.slice(0, 5).map(([role]) => roleMeta[role]);

  resultTitle.textContent = `${titlePrefix}: ${topMeta.title.toLowerCase()}`;
  resultSummary.textContent =
    `${topMeta.summary} Votre deuxième moteur est "${secondMeta.label.toLowerCase()}", ce qui rend la piste plus concrète. ` +
    `Pour l'équilibrer, nourrissez aussi votre axe "${lowMeta.label.toLowerCase()}".`;

  renderList(sectorList, topDomains);
  renderList(roleList, topRoles);

  scoreList.innerHTML = "";
  const maxScore = Math.max(...Object.values(axisScores), 1);
  Object.entries(axisMeta).forEach(([axis, item]) => {
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <span>${item.label}</span>
      <span class="score-meter"><span style="width: ${(axisScores[axis] / maxScore) * 100}%; background: ${item.color}"></span></span>
      <span>${axisScores[axis]}</span>
    `;
    scoreList.appendChild(row);
  });

  const firstSector = topDomains[0].text.toLowerCase();
  const firstRole = topRoles[0].text.split(",")[0].toLowerCase();
  renderList(nextSteps, [
    `Choisissez une piste simple dans "${firstSector}" et formulez-la en une phrase: j'aide qui, à faire quoi, grâce à quoi.`,
    `Testez une mini-version du rôle "${firstRole}" en 7 jours: un atelier, un audit, un contenu, une séance ou un prototype.`,
    `Interrogez trois personnes concernées et demandez-leur ce qu'elles paieraient, recommanderaient ou referaient.`,
  ]);

  quizForm.hidden = true;
  resultView.hidden = false;
  stepLabel.textContent = "Résultat";
  questionTitle.textContent = "Votre carte Oh my ikigai!";
  progressBar.style.width = "100%";
}

function goNext() {
  if (currentIndex === questions.length - 1) {
    renderResult();
    return;
  }
  currentIndex += 1;
  renderQuestion();
}

function chooseAnswer(answerIndex) {
  answers[currentIndex] = Number(answerIndex);
  answerGrid.querySelectorAll(".answer-card").forEach((card) => card.classList.remove("is-advancing"));
  const selectedCard = answerGrid.querySelector(`input[value="${answerIndex}"]`)?.closest(".answer-card");
  selectedCard?.classList.add("is-advancing");
  window.clearTimeout(autoAdvanceTimer);
  autoAdvanceTimer = window.setTimeout(goNext, 220);
}

function resetQuiz() {
  answers.fill(null);
  currentIndex = 0;
  quizForm.hidden = false;
  resultView.hidden = true;
  renderQuestion();
}

answerGrid.addEventListener("change", (event) => {
  if (event.target.name !== "answer") return;
  chooseAnswer(event.target.value);
});

answerGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".answer-card");
  const input = card?.querySelector("input");
  if (!input) return;
  chooseAnswer(input.value);
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = answerGrid.querySelector("input:checked");
  if (!selected) {
    answerGrid.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 220 }
    );
    return;
  }
  chooseAnswer(selected.value);
});

backButton.addEventListener("click", () => {
  window.clearTimeout(autoAdvanceTimer);
  if (currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
});

resetButton.addEventListener("click", resetQuiz);
againButton.addEventListener("click", resetQuiz);

renderQuestion();
