/* ========================================================
   ANVERA — interações do site
   Menu mobile, quiz de essência, resultado e customizador
   ======================================================== */

(function () {
  "use strict";

  /* ---------------- Mobile menu ---------------- */
  const hamburger = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => mobileMenu.classList.remove("open"))
  );

  /* ================================================================
     DADOS: perguntas, perfis, famílias e notas
     ================================================================ */

  const QUESTIONS = [
    {
      text: "Como você costuma ser percebido pelas pessoas?",
      options: [
        { label: "Determinado", profile: "lider" },
        { label: "Tranquilo", profile: "serena" },
        { label: "Criativo", profile: "criativo" },
        { label: "Extrovertido", profile: "marcante" },
      ],
    },
    {
      text: "Qual ambiente mais representa você?",
      options: [
        { label: "Natureza", profile: "serena" },
        { label: "Cidade", profile: "lider" },
        { label: "Casa", profile: "criativo" },
        { label: "Lugares sofisticados", profile: "marcante" },
      ],
    },
    {
      text: "Que sensação você gostaria que seu perfume transmitisse?",
      options: [
        { label: "Energia", profile: "criativo" },
        { label: "Calma", profile: "serena" },
        { label: "Elegância", profile: "lider" },
        { label: "Mistério", profile: "marcante" },
        { label: "Liberdade", profile: "criativo" },
        { label: "Confiança", profile: "lider" },
      ],
    },
    {
      text: "Como você prefere que sua fragrância seja percebida?",
      options: [
        { label: "Discreta", profile: "serena" },
        { label: "Equilibrada", profile: "lider" },
        { label: "Marcante", profile: "marcante" },
      ],
    },
    {
      text: "No trabalho ou nos estudos, você é mais...",
      options: [
        { label: "Estratégico", profile: "lider" },
        { label: "Colaborativo", profile: "serena" },
        { label: "Inovador", profile: "criativo" },
        { label: "Carismático", profile: "marcante" },
      ],
    },
    {
      text: "Seu ritmo de vida é...",
      options: [
        { label: "Estruturado", profile: "lider" },
        { label: "Fluido", profile: "serena" },
        { label: "Imprevisível", profile: "criativo" },
        { label: "Intenso", profile: "marcante" },
      ],
    },
    {
      text: "O que mais te atrai em uma nova experiência?",
      options: [
        { label: "Controle sobre o resultado", profile: "lider" },
        { label: "A paz do momento", profile: "serena" },
        { label: "A descoberta em si", profile: "criativo" },
        { label: "A adrenalina", profile: "marcante" },
      ],
    },
    {
      text: "Como você lida com decisões importantes?",
      options: [
        { label: "De forma racional", profile: "lider" },
        { label: "De forma intuitiva", profile: "serena" },
        { label: "De forma espontânea", profile: "criativo" },
        { label: "Confiando no instinto", profile: "marcante" },
      ],
    },
    {
      text: "Qual cor mais combina com você hoje?",
      options: [
        { label: "Azul profundo", profile: "lider" },
        { label: "Verde suave", profile: "serena" },
        { label: "Dourado quente", profile: "criativo" },
        { label: "Preto intenso", profile: "marcante" },
      ],
    },
    {
      text: "Se seu perfume fosse uma cena, ela seria...",
      options: [
        { label: "Uma sala de reuniões ao pôr do sol", profile: "lider" },
        { label: "Uma manhã tranquila no jardim", profile: "serena" },
        { label: "Um ateliê cheio de ideias", profile: "criativo" },
        { label: "Uma noite de festa inesquecível", profile: "marcante" },
      ],
    },
  ];

  const PROFILES = {
    lider: {
      name: "O Líder Contemporâneo",
      traits: ["Objetivo", "Organizado", "Determinado", "Líder"],
      family: "Aromáticos frescos e amadeirados secos",
      justification:
        "O foco exige clareza mental. Notas herbais como alecrim podem reforçar a sensação de concentração, enquanto madeiras secas como cedro remetem à seriedade e elegância.",
      top: "Alecrim",
      heart: "Notas aromáticas",
      base: "Cedro",
      familyId: "amadeirada",
      notes: ["alecrim", "lavanda", "cedro"],
    },
    serena: {
      name: "A Alma Serena",
      traits: ["Tranquilo", "Intuitivo", "Equilibrado", "Reflexivo"],
      family: "Florais suaves e frescos",
      justification:
        "A serenidade pede leveza. Notas florais como jasmim trazem suavidade, enquanto a lavanda acalma e o sândalo dá profundidade sem pesar.",
      top: "Lavanda",
      heart: "Jasmim",
      base: "Sândalo",
      familyId: "floral",
      notes: ["lavanda", "jasmim", "sandalo"],
    },
    criativo: {
      name: "O Criativo Livre",
      traits: ["Criativo", "Espontâneo", "Curioso", "Autêntico"],
      family: "Cítricos vibrantes e amadeirados quentes",
      justification:
        "A criatividade pede movimento. A bergamota abre com vivacidade, notas especiadas trazem originalidade, e o âmbar fecha com um fundo quente e envolvente.",
      top: "Bergamota",
      heart: "Notas especiadas",
      base: "Âmbar",
      familyId: "citrica",
      notes: ["bergamota", "limao", "ambar"],
    },
    marcante: {
      name: "A Presença Marcante",
      traits: ["Confiante", "Intenso", "Envolvente", "Magnético"],
      family: "Orientais intensos e amadeirados profundos",
      justification:
        "A presença pede densidade. Notas cítricas picantes anunciam a chegada, especiarias e rosa constroem o corpo, e o musk fecha com sensualidade e permanência.",
      top: "Cítrico picante",
      heart: "Rosa e especiarias",
      base: "Musk",
      familyId: "oriental",
      notes: ["rosa", "vetiver", "musk"],
    },
  };

  const FAMILIES = [
    { id: "citrica", label: "Cítrica", grad: ["#e3c98f", "#a9884f"] },
    { id: "floral", label: "Floral", grad: ["#d7b7bd", "#8f6a72"] },
    { id: "aromatica", label: "Aromática", grad: ["#a7bcae", "#54685c"] },
    { id: "amadeirada", label: "Amadeirada", grad: ["#b79a72", "#5c4a34"] },
    { id: "oriental", label: "Oriental", grad: ["#7d6f95", "#3c3050"] },
    { id: "fresca", label: "Fresca", grad: ["#9fc0cf", "#3f6b7a"] },
  ];

  const NOTES = [
    { id: "bergamota", label: "Bergamota", family: "citrica" },
    { id: "limao", label: "Limão", family: "citrica" },
    { id: "lavanda", label: "Lavanda", family: "aromatica" },
    { id: "alecrim", label: "Alecrim", family: "aromatica" },
    { id: "jasmim", label: "Jasmim", family: "floral" },
    { id: "rosa", label: "Rosa", family: "floral" },
    { id: "cedro", label: "Cedro", family: "amadeirada" },
    { id: "sandalo", label: "Sândalo", family: "amadeirada" },
    { id: "vetiver", label: "Vetiver", family: "amadeirada" },
    { id: "baunilha", label: "Baunilha", family: "oriental" },
    { id: "ambar", label: "Âmbar", family: "oriental" },
    { id: "musk", label: "Musk", family: "oriental" },
  ];

  /* ================================================================
     QUIZ
     ================================================================ */

  const consentRequired = document.getElementById("consentRequired");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const quizIntro = document.getElementById("quizIntro");
  const quizQuestions = document.getElementById("quizQuestions");
  const qLabel = document.getElementById("qLabel");
  const qProgressFill = document.getElementById("qProgressFill");
  const qText = document.getElementById("qText");
  const qOptions = document.getElementById("qOptions");
  const qBackBtn = document.getElementById("qBackBtn");
  const resultPanel = document.getElementById("resultPanel");
  const retakeBtn = document.getElementById("retakeBtn");

  let currentQ = 0;
  let answers = new Array(QUESTIONS.length).fill(null);
  let lastProfileId = null;

  consentRequired.addEventListener("change", () => {
    startQuizBtn.disabled = !consentRequired.checked;
  });

  startQuizBtn.addEventListener("click", () => {
    if (!consentRequired.checked) return;
    quizIntro.style.display = "none";
    quizQuestions.style.display = "block";
    currentQ = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    renderQuestion();
  });

  retakeBtn.addEventListener("click", () => {
    resultPanel.classList.remove("show");
    quizIntro.style.display = "block";
    quizQuestions.style.display = "none";
    document.getElementById("descubra").scrollIntoView({ behavior: "smooth" });
  });

  function renderQuestion() {
    const q = QUESTIONS[currentQ];
    qLabel.textContent = "Pergunta " + (currentQ + 1) + " de " + QUESTIONS.length;
    qProgressFill.style.width = ((currentQ) / QUESTIONS.length) * 100 + "%";
    qText.textContent = q.text;
    qOptions.innerHTML = "";
    qOptions.className = "quiz-options";
    qOptions.classList.toggle("cols-1", q.options.length <= 3);

    q.options.forEach((opt, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "q-card";
      card.textContent = opt.label;
      if (answers[currentQ] === idx) card.classList.add("selected");
      card.addEventListener("click", () => {
        answers[currentQ] = idx;
        selectAndAdvance();
      });
      qOptions.appendChild(card);
    });

    qBackBtn.style.visibility = currentQ === 0 ? "hidden" : "visible";
  }

  function selectAndAdvance() {
    renderQuestion();
    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        currentQ++;
        renderQuestion();
      } else {
        qProgressFill.style.width = "100%";
        finishQuiz();
      }
    }, 260);
  }

  qBackBtn.addEventListener("click", () => {
    if (currentQ > 0) {
      currentQ--;
      renderQuestion();
    }
  });

  function finishQuiz() {
    const scores = { lider: 0, serena: 0, criativo: 0, marcante: 0 };
    answers.forEach((ansIdx, qi) => {
      if (ansIdx === null) return;
      const profile = QUESTIONS[qi].options[ansIdx].profile;
      scores[profile]++;
    });
    let best = "lider";
    Object.keys(scores).forEach((k) => {
      if (scores[k] > scores[best]) best = k;
    });
    lastProfileId = best;
    showResult(best);
  }

  function showResult(profileId) {
    const p = PROFILES[profileId];
    document.getElementById("resultProfileName").textContent = p.name;
    const traitsWrap = document.getElementById("resultTraits");
    traitsWrap.innerHTML = "";
    p.traits.forEach((t) => {
      const pill = document.createElement("span");
      pill.className = "trait-pill";
      pill.textContent = t;
      traitsWrap.appendChild(pill);
    });
    document.getElementById("resultFamily").textContent = p.family;
    document.getElementById("resultJustification").textContent = p.justification;
    document.getElementById("resultTop").textContent = p.top;
    document.getElementById("resultHeart").textContent = p.heart;
    document.getElementById("resultBase").textContent = p.base;

    resultPanel.classList.add("show");
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.getElementById("goCustomizeBtn").addEventListener("click", () => {
    if (lastProfileId) applyProfileToCustomizer(lastProfileId);
  });

  /* ================================================================
     CUSTOMIZADOR
     ================================================================ */

  const familyChipsWrap = document.getElementById("familyChips");
  const notesChipsWrap = document.getElementById("notesChips");
  const sliderIntensity = document.getElementById("sliderIntensity");
  const sliderFreshness = document.getElementById("sliderFreshness");
  const sliderSweetness = document.getElementById("sliderSweetness");
  const sliderProjection = document.getElementById("sliderProjection");
  const fragranceName = document.getElementById("fragranceName");
  const previewName = document.getElementById("previewName");
  const previewMeta = document.getElementById("previewMeta");
  const labelName = document.getElementById("labelName");
  const liquidStop1 = document.getElementById("liquidStop1");
  const liquidStop2 = document.getElementById("liquidStop2");
  const bottleBody = document.getElementById("bottleBody");
  const capBody = document.getElementById("capBody");
  const particleGroup = document.getElementById("particleGroup");

  let state = {
    family: "amadeirada",
    notes: [],
    recommended: [],
    bottle: "A",
    cap: "minimalista",
  };

  function buildFamilyChips() {
    familyChipsWrap.innerHTML = "";
    FAMILIES.forEach((f) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.dataset.family = f.id;
      chip.textContent = f.label;
      chip.addEventListener("click", () => {
        state.family = f.id;
        buildFamilyChips();
        buildNotesChips();
        updatePreview();
      });
      if (state.family === f.id) chip.classList.add("active");
      familyChipsWrap.appendChild(chip);
    });
  }

  function buildNotesChips() {
    notesChipsWrap.innerHTML = "";
    NOTES.forEach((n) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = n.label;
      if (state.notes.includes(n.id)) chip.classList.add("active");
      if (state.recommended.includes(n.id)) chip.classList.add("recommended");
      chip.addEventListener("click", () => {
        if (state.notes.includes(n.id)) {
          state.notes = state.notes.filter((x) => x !== n.id);
        } else {
          if (state.notes.length >= 5) return;
          state.notes.push(n.id);
        }
        buildNotesChips();
        updatePreview();
      });
      notesChipsWrap.appendChild(chip);
    });
  }

  document.querySelectorAll("#bottleChips .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#bottleChips .chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.bottle = chip.dataset.bottle;
      updateBottleShape();
    });
  });

  document.querySelectorAll("#capChips .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#capChips .chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.cap = chip.dataset.cap;
      updateCapStyle();
    });
  });

  [sliderIntensity, sliderFreshness, sliderSweetness, sliderProjection].forEach((s) =>
    s.addEventListener("input", updatePreview)
  );

  fragranceName.addEventListener("input", () => {
    const val = fragranceName.value.trim() || "Essence 01";
    previewName.textContent = val;
    labelName.textContent = val.length > 16 ? val.slice(0, 16) + "…" : val;
  });

  function updateBottleShape() {
    const shapes = {
      A: "M110 96 L210 96 Q222 96 222 112 L222 400 Q222 424 198 424 L122 424 Q98 424 98 400 L98 112 Q98 96 110 96 Z",
      B: "M118 96 L202 96 Q212 100 212 116 L212 392 Q212 424 180 424 L140 424 Q108 424 108 392 L108 116 Q108 100 118 96 Z",
      C: "M104 96 L216 96 Q230 96 230 118 L230 380 Q230 424 190 424 L130 424 Q90 424 90 380 L90 118 Q90 96 104 96 Z",
    };
    bottleBody.setAttribute("d", shapes[state.bottle] || shapes.A);
  }

  function updateCapStyle() {
    const styles = {
      minimalista: { fill: "#2b4571", h: 26 },
      metalica: { fill: "url(#capMetal)", h: 26 },
      premium: { fill: "#1c2f4d", h: 34 },
    };
    ensureMetalGradient();
    const s = styles[state.cap] || styles.minimalista;
    capBody.setAttribute("fill", s.fill);
    capBody.setAttribute("y", 72 - s.h);
    capBody.setAttribute("height", s.h);
  }

  function ensureMetalGradient() {
    if (document.getElementById("capMetal")) return;
    const svg = document.getElementById("bottleSvg");
    const defs = svg.querySelector("defs");
    const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    grad.setAttribute("id", "capMetal");
    grad.setAttribute("x1", "0");
    grad.setAttribute("x2", "1");
    grad.innerHTML =
      '<stop offset="0%" stop-color="#c9c2b2"/><stop offset="50%" stop-color="#8a8574"/><stop offset="100%" stop-color="#c9c2b2"/>';
    defs.appendChild(grad);
  }

  function hexLerp(hexA, hexB, t) {
    const a = hexA.match(/\w\w/g).map((x) => parseInt(x, 16));
    const b = hexB.match(/\w\w/g).map((x) => parseInt(x, 16));
    const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
    return "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");
  }

  function updatePreview() {
    const fam = FAMILIES.find((f) => f.id === state.family) || FAMILIES[0];
    const intensity = +sliderIntensity.value;
    const freshness = +sliderFreshness.value;
    const sweetness = +sliderSweetness.value;
    const projection = +sliderProjection.value;

    // liquid color: base family gradient, lightened by freshness, warmed by sweetness
    let c1 = fam.grad[0];
    let c2 = fam.grad[1];
    if (freshness > 60) {
      c1 = hexLerp(c1, "#dfe9ee", (freshness - 60) / 100);
    }
    if (sweetness > 60) {
      c2 = hexLerp(c2, "#caa66b", (sweetness - 60) / 120);
    }
    liquidStop1.setAttribute("stop-color", c1);
    liquidStop2.setAttribute("stop-color", c2);

    bottleBody.style.opacity = 0.55 + (intensity / 100) * 0.45;

    // particles reflect projection
    particleGroup.innerHTML = "";
    const count = Math.round(3 + (projection / 100) * 9);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 90 + (projection / 100) * 60;
      const cx = 160 + Math.cos(angle) * radius;
      const cy = 250 + Math.sin(angle) * radius * 0.55;
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", cy);
      dot.setAttribute("r", 1.6);
      dot.setAttribute("fill", "#a79f8f");
      dot.setAttribute("opacity", "0.55");
      dot.classList.add("molecule");
      dot.style.animationDelay = i * 0.25 + "s";
      particleGroup.appendChild(dot);
    }

    const famLabel = fam.label;
    previewMeta.textContent =
      famLabel + " · Intensidade " + intensity + "% · Projeção " + projection + "%";
  }

  function applyProfileToCustomizer(profileId) {
    const p = PROFILES[profileId];
    state.family = p.familyId;
    state.notes = p.notes.slice(0, 3);
    state.recommended = p.notes.slice();
    fragranceName.value = "";
    previewName.textContent = "Essence 01";
    labelName.textContent = "Essence 01";
    buildFamilyChips();
    buildNotesChips();
    updatePreview();
  }

  /* ---------------- Finalizar criação ---------------- */
  document.getElementById("finalizeBtn").addEventListener("click", () => {
    const finalPanel = document.querySelector(".final-panel");
    finalPanel.classList.add("show");

    const name = fragranceName.value.trim() || "Essence 01";
    document.getElementById("finalName").textContent = "“" + name + "” — sua essência ganhou forma.";
    document.getElementById("fsProfile").textContent = lastProfileId
      ? PROFILES[lastProfileId].name
      : "Personalizado";
    const fam = FAMILIES.find((f) => f.id === state.family);
    document.getElementById("fsFamily").textContent = fam ? fam.label : "—";
    const noteLabels = state.notes
      .map((id) => (NOTES.find((n) => n.id === id) || {}).label)
      .filter(Boolean);
    document.getElementById("fsNotes").textContent = noteLabels.length
      ? noteLabels.join(", ")
      : "A definir";
    document.getElementById("fsIntensity").textContent = sliderIntensity.value + "%";
    document.getElementById("fsProjection").textContent = sliderProjection.value + "%";
    document.getElementById("fsBottle").textContent =
      "Modelo " + state.bottle + " · Tampa " + state.cap;
  });

  /* ---------------- init ---------------- */
  buildFamilyChips();
  buildNotesChips();
  updateBottleShape();
  updateCapStyle();
  updatePreview();
})();
