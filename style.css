@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {

  --blue: #5B9BD5;
  --blue-dark: #19324D;
  --blue-light: #EAF6FF;

  --yellow: #FFD86B;
  --yellow-light: #FFF8DF;

  --mint: #A8DCC8;
  --mint-light: #F0FBF7;

  --white: #FFFFFF;

  --text: #334155;
  --gray: #718096;

  --border: #DCEAF5;

  --shadow:
    0 20px 60px rgba(25, 50, 77, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {

  font-family: "Cairo", sans-serif;

  color: var(--blue-dark);

  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(91, 155, 213, 0.10),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(168, 220, 200, 0.13),
      transparent 30%
    ),
    #ffffff;

  min-height: 100vh;
}

button,
textarea {
  font-family: inherit;
}

button {
  border: 0;
  cursor: pointer;
}


/* =========================
   NAVBAR
========================= */

.navbar {

  position: sticky;

  top: 0;

  z-index: 1000;

  height: 74px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0 7%;

  background: rgba(255,255,255,0.88);

  backdrop-filter: blur(18px);

  border-bottom: 1px solid rgba(220,234,245,0.7);
}

.logo {

  display: flex;

  align-items: center;

  gap: 10px;

  cursor: pointer;

  font-weight: 800;

  color: var(--blue-dark);

  font-size: 18px;
}

.logo-shape {

  width: 38px;

  height: 38px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 12px;

  background: var(--yellow);

  font-size: 21px;
}

.navbar nav {

  display: flex;

  gap: 5px;
}

.navbar nav button {

  background: transparent;

  color: var(--gray);

  padding: 9px 13px;

  border-radius: 10px;

  font-size: 12px;

  transition: .2s;
}

.navbar nav button:hover {

  color: var(--blue-dark);

  background: var(--blue-light);
}


/* =========================
   PAGE
========================= */

.page {

  display: none;

  min-height: calc(100vh - 74px);

  padding: 55px 7% 80px;

}

.page.active {

  display: block;

  animation: pageIn .45s ease;
}

@keyframes pageIn {

  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* =========================
   BUTTONS
========================= */

.primary-btn {

  background: var(--blue);

  color: white;

  padding: 13px 24px;

  border-radius: 13px;

  font-size: 13px;

  font-weight: 800;

  box-shadow:
    0 12px 25px rgba(91,155,213,.22);

  transition: .25s;
}

.primary-btn:hover {

  transform: translateY(-3px);

  box-shadow:
    0 17px 30px rgba(91,155,213,.28);
}

.secondary-btn {

  background: white;

  color: var(--blue-dark);

  padding: 13px 24px;

  border-radius: 13px;

  border: 1px solid var(--border);

  font-size: 13px;

  font-weight: 800;

  transition: .25s;
}

.secondary-btn:hover {

  transform: translateY(-3px);

  border-color: var(--blue);
}

.text-btn {

  display: block;

  margin: 20px auto 0;

  background: transparent;

  color: var(--gray);

  font-size: 12px;
}


/* =========================
   HOME
========================= */

.hero {

  width: min(1200px, 100%);

  min-height: 570px;

  margin: auto;

  display: grid;

  grid-template-columns: 1.05fr .95fr;

  align-items: center;

  gap: 40px;
}

.hero-content {

  max-width: 620px;
}

.date-pill {

  display: inline-block;

  background: var(--blue-light);

  color: var(--blue);

  padding: 8px 15px;

  border-radius: 50px;

  font-size: 11px;

  font-weight: 800;

  margin-bottom: 22px;
}

.hero h1 {

  font-size: clamp(55px, 9vw, 95px);

  line-height: .95;

  font-weight: 800;

  letter-spacing: -3px;

  color: var(--blue-dark);
}

.hero h1 span {

  display: block;

  margin-top: 17px;

  font-size: clamp(16px, 2vw, 22px);

  letter-spacing: 0;

  color: var(--blue);

  font-weight: 700;
}

.hero-content > p {

  color: var(--gray);

  max-width: 540px;

  line-height: 2;

  margin: 25px 0;

  font-size: 14px;
}

.hero-buttons {

  display: flex;

  gap: 12px;

  flex-wrap: wrap;
}


/* HERO ART */

.hero-art {

  position: relative;

  min-height: 450px;

  display: flex;

  align-items: center;

  justify-content: center;
}

.big-circle {

  width: 300px;

  height: 300px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at 30% 25%,
      #FFFFFF,
      #EAF6FF 60%,
      #D8EDFC
    );

  border: 1px solid #D3E8F5;

  box-shadow:
    0 30px 80px rgba(91,155,213,.15);

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  position: relative;
}

.big-circle::before {

  content: "";

  position: absolute;

  width: 355px;

  height: 355px;

  border: 1px dashed #C7DFEF;

  border-radius: 50%;
}

.big-circle span {

  width: 75px;

  height: 75px;

  background: var(--yellow);

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 36px;

  margin-bottom: 15px;
}

.big-circle small {

  font-size: 18px;

  line-height: 1.7;

  font-weight: 800;

  color: var(--blue-dark);
}

.floating-card {

  position: absolute;

  z-index: 3;

  background: white;

  border: 1px solid var(--border);

  border-radius: 18px;

  padding: 14px 17px;

  display: flex;

  align-items: center;

  gap: 9px;

  box-shadow: 0 15px 40px rgba(25,50,77,.10);

  font-size: 12px;

  animation: float 4s ease-in-out infinite;
}

.floating-card span {

  font-size: 22px;
}

.card-one {

  top: 65px;

  right: 5%;

}

.card-two {

  bottom: 75px;

  left: 2%;

  animation-delay: 1s;
}

.card-three {

  top: 180px;

  left: -5%;

  animation-delay: 2s;
}

@keyframes float {

  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}


/* QUICK SECTION */

.quick-section {

  width: min(1200px, 100%);

  margin: 20px auto 0;
}

.section-title {

  margin-bottom: 25px;
}

.section-title span {

  color: var(--blue);

  font-size: 11px;

  font-weight: 800;
}

.section-title h2 {

  font-size: 28px;

  margin-top: 4px;
}

.feature-grid {

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 17px;
}

.feature-card {

  position: relative;

  min-height: 235px;

  text-align: right;

  border-radius: 24px;

  padding: 25px;

  transition: .3s;

  overflow: hidden;
}

.feature-card:hover {

  transform: translateY(-7px);
}

.feature-card::after {

  content: "";

  position: absolute;

  width: 110px;

  height: 110px;

  border-radius: 50%;

  left: -45px;

  bottom: -45px;

  opacity: .45;
}

.blue-card {

  background: var(--blue-light);
}

.blue-card::after {

  background: #C9E5F7;
}

.yellow-card {

  background: var(--yellow-light);
}

.yellow-card::after {

  background: #FFEBA8;
}

.mint-card {

  background: var(--mint-light);
}

.mint-card::after {

  background: #D3EFE3;
}

.feature-icon {

  font-size: 31px;

  margin-bottom: 18px;
}

.feature-card h3 {

  font-size: 18px;

  margin-bottom: 8px;
}

.feature-card p {

  color: var(--gray);

  font-size: 12px;

  line-height: 1.9;

  max-width: 280px;
}

.arrow {

  position: absolute;

  left: 23px;

  bottom: 20px;

  font-size: 20px;

  color: var(--blue);
}


/* STATS */

.stats-section {

  width: min(900px, 100%);

  margin: 40px auto 0;

  display: grid;

  grid-template-columns: repeat(3,1fr);

  background: white;

  border: 1px solid var(--border);

  border-radius: 20px;

  box-shadow: var(--shadow);

  overflow: hidden;
}

.stats-section div {

  padding: 20px;

  text-align: center;

  border-left: 1px solid var(--border);
}

.stats-section div:last-child {

  border-left: 0;
}

.stats-section strong {

  display: block;

  color: var(--blue);

  font-size: 27px;
}

.stats-section span {

  color: var(--gray);

  font-size: 10px;
}


/* =========================
   PAGE HEADINGS
========================= */

.page-heading {

  max-width: 900px;

  margin: 10px auto 35px;

  text-align: center;
}

.eyebrow {

  display: inline-block;

  color: var(--blue);

  font-size: 11px;

  font-weight: 800;

  letter-spacing: .2px;
}

.page-heading h2 {

  font-size: clamp(30px, 5vw, 47px);

  line-height: 1.25;

  margin-top: 8px;
}

.page-heading p {

  color: var(--gray);

  max-width: 650px;

  margin: 12px auto;

  line-height: 2;

  font-size: 13px;
}


/* =========================
   RIGHTS
========================= */

.rights-container {

  width: min(1000px,100%);

  margin: auto;

  display: grid;

  grid-template-columns: repeat(2,1fr);

  gap: 16px;
}

.right-item {

  min-height: 180px;

  background: white;

  border: 1px solid var(--border);

  border-radius: 23px;

  padding: 24px;

  display: grid;

  grid-template-columns: 50px 65px 1fr;

  align-items: center;

  gap: 14px;

  position: relative;

  overflow: hidden;

  transition: .25s;
}

.right-item:hover {

  transform: translateY(-4px);

  box-shadow: var(--shadow);

  border-color: #BCD9EB;
}

.right-number {

  font-size: 13px;

  color: #A3B6C7;

  font-weight: 800;
}

.right-icon {

  width: 58px;

  height: 58px;

  border-radius: 17px;

  background: var(--blue-light);

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 26px;
}

.right-item:nth-child(2n) .right-icon {

  background: var(--yellow-light);
}

.right-item:nth-child(3n) .right-icon {

  background: var(--mint-light);
}

.right-item h3 {

  font-size: 17px;

  margin-bottom: 7px;
}

.right-item p {

  color: var(--gray);

  font-size: 11px;

  line-height: 1.9;
}


/* =========================
   CHALLENGE
========================= */

.challenge-wrapper {

  width: min(850px,100%);

  margin: 20px auto;
}

.challenge-top {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;
}

.challenge-top h2 {

  font-size: 30px;

  margin-top: 5px;
}

.score-box {

  background: var(--yellow-light);

  border: 1px solid #F8E8A9;

  border-radius: 17px;

  padding: 10px 20px;

  text-align: center;
}

.score-box span {

  display: block;

  color: var(--gray);

  font-size: 9px;
}

.score-box strong {

  color: var(--blue-dark);

  font-size: 25px;
}

.progress-area {

  margin-bottom: 20px;
}

.progress-info {

  display: flex;

  justify-content: space-between;

  color: var(--gray);

  font-size: 10px;

  margin-bottom: 7px;
}

.progress {

  height: 7px;

  background: #EAF1F5;

  border-radius: 20px;

  overflow: hidden;
}

#progressBar {

  width: 20%;

  height: 100%;

  background: var(--blue);

  transition: .4s;
}

.question-card {

  background: white;

  border: 1px solid var(--border);

  border-radius: 28px;

  padding: 40px;

  box-shadow: var(--shadow);

  text-align: center;
}

.question-icon {

  width: 58px;

  height: 58px;

  background: var(--blue-light);

  border-radius: 17px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 27px;

  margin: auto;
}

.question-label {

  display: block;

  margin-top: 15px;

  color: var(--blue);

  font-size: 10px;

  font-weight: 800;
}

.question-card h3 {

  max-width: 650px;

  margin: 13px auto 25px;

  font-size: 21px;

  line-height: 1.8;
}

.answers {

  display: grid;

  gap: 11px;

  max-width: 620px;

  margin: auto;
}

.answer {

  background: #FAFDFF;

  border: 1px solid var(--border);

  padding: 15px 18px;

  border-radius: 14px;

  text-align: right;

  font-size: 12px;

  color: var(--blue-dark);

  transition: .2s;
}

.answer:hover {

  border-color: var(--blue);

  background: var(--blue-light);

  transform: translateX(-3px);
}

.answer.correct {

  background: var(--mint-light);

  border-color: #8FD0B5;

}

.answer.wrong {

  background: #FFF1F1;

  border-color: #E8A7A7;
}


/* =========================
   RESULT
========================= */

.result-card {

  width: min(500px,100%);

  margin: 80px auto;

  background: white;

  border: 1px solid var(--border);

  border-radius: 27px;

  box-shadow: var(--shadow);

  padding: 38px;

  text-align: center;
}

.result-icon {

  width: 80px;

  height: 80px;

  border-radius: 50%;

  background: var(--yellow);

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 35px;

  margin: auto auto 18px;
}

.result-card h2 {

  font-size: 27px;

  margin: 7px 0;
}

.result-card > p {

  color: var(--gray);

  line-height: 1.9;

  font-size: 12px;
}

.final-score {

  margin: 25px auto;

  background: var(--blue-light);

  border-radius: 20px;

  padding: 15px;
}

.final-score span {

  color: var(--gray);

  font-size: 11px;
}

.final-score strong {

  display: block;

  color: var(--blue);

  font-size: 42px;
}

.result-actions {

  display: flex;

  justify-content: center;

  gap: 10px;

  flex-wrap: wrap;
}


/* =========================
   STORIES
========================= */

.story-layout {

  width: min(1100px,100%);

  margin: auto;

  display: grid;

  grid-template-columns: .85fr 1.15fr;

  gap: 20px;

  align-items: start;
}

.story-form {

  background: white;

  border: 1px solid var(--border);

  border-radius: 25px;

  padding: 27px;

  box-shadow: var(--shadow);
}

.form-icon {

  width: 53px;

  height: 53px;

  border-radius: 16px;

  background: var(--mint-light);

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 25px;

  margin-bottom: 15px;
}

.story-form h3 {

  font-size: 21px;
}

.form-note {

  color: #9A6B6B;

  font-size: 10px;

  margin: 7px 0 15px;
}

textarea {

  width: 100%;

  min-height: 180px;

  resize: vertical;

  border: 1px solid var(--border);

  border-radius: 15px;

  padding: 15px;

  outline: none;

  font-size: 12px;

  color: var(--blue-dark);

  line-height: 2;

  background: #FCFEFF;
}

textarea:focus {

  border-color: var(--blue);

  box-shadow: 0 0 0 4px rgba(91,155,213,.08);
}

.character-count {

  text-align: left;

  color: var(--gray);

  font-size: 9px;

  margin: 6px 2px 12px;
}

.story-form .primary-btn {

  width: 100%;
}

.story-wall {

  min-height: 400px;

  background: white;

  border: 1px solid var(--border);

  border-radius: 25px;

  padding: 25px;
}

.wall-title {

  display: flex;

  justify-content: space-between;

  align-items: center;

  border-bottom: 1px solid var(--border);

  padding-bottom: 15px;

  margin-bottom: 15px;
}

.wall-title h3 {

  margin-top: 3px;

  font-size: 21px;
}

.wall-title > span {

  width: 36px;

  height: 36px;

  border-radius: 50%;

  background: var(--blue-light);

  color: var(--blue);

  display: flex;

  align-items: center;

  justify-content: center;

  font-weight: 800;

  font-size: 11px;
}

.stories-list {

  display: grid;

  gap: 12px;
}

.empty-story {

  min-height: 300px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  color: var(--gray);
}

.empty-story span {

  font-size: 40px;

  color: var(--yellow);
}

.empty-story p {

  font-size: 11px;
}

.story-card {

  background: var(--blue-light);

  border-radius: 17px;

  padding: 18px;

  border-right: 4px solid var(--blue);

  animation: storyIn .4s ease;
}

@keyframes storyIn {

  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.story-card p {

  color: var(--blue-dark);

  font-size: 12px;

  line-height: 2;
}

.story-card small {

  display: block;

  margin-top: 9px;

  color: var(--gray);

  font-size: 9px;
}


/* =========================
   CERTIFICATE
========================= */

.certificate-section {

  width: min(900px,100%);

  margin: auto;

  text-align: center;
}

.certificate {

  position: relative;

  width: 100%;

  aspect-ratio: 1.414 / 1;

  background: white;

  border: 12px solid #F6FAFD;

  outline: 2px solid var(--blue);

  box-shadow: 0 30px 80px rgba(25,50,77,.13);

  overflow: hidden;

  color: var(--blue-dark);
}

.certificate::before {

  content: "";

  position: absolute;

  inset: 15px;

  border: 1px solid #CFE2F0;

  pointer-events: none;
}

.certificate-corner {

  position: absolute;

  width: 180px;

  height: 180px;

  border-radius: 50%;

  opacity: .8;
}

.corner-one {

  left: -120px;

  top: -110px;

  background: var(--yellow);
}

.corner-two {

  right: -120px;

  bottom: -110px;

  background: var(--mint);
}

.certificate-inner {

  position: relative;

  z-index: 2;

  height: 100%;

  padding: 28px 40px;

  display: flex;

  flex-direction: column;
}

.certificate-header {

  display: flex;

  justify-content: space-between;

  align-items: center;
}

.certificate-header span {

  color: var(--blue);

  font-weight: 800;

  font-size: 15px;
}

.certificate-header small {

  color: var(--gray);

  font-size: 8px;
}

.certificate-main {

  flex: 1;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;
}

.certificate-icon {

  width: 43px;

  height: 43px;

  border-radius: 50%;

  background: var(--yellow);

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 21px;

  margin-bottom: 5px;
}

.certificate-main h1 {

  font-size: 28px;

  margin: 2px 0;

}

.certificate-subtitle {

  color: var(--gray);

  font-size: 9px;

  margin: 2px 0;
}

.certificate-main h2 {

  font-size: clamp(24px,5vw,43px);

  color: var(--blue-dark);

  margin: 5px 0;

  font-weight: 800;
}

.class-pill {

  background: var(--blue-light);

  padding: 5px 18px;

  border-radius: 50px;

  font-size: 9px;

}

.class-pill span {

  color: var(--blue);

  font-weight: 800;
}

.certificate-text {

  max-width: 520px;

  color: var(--gray);

  font-size: 9px;

  line-height: 1.9;

  margin: 10px 0;
}

.certificate-text strong {

  color: var(--blue-dark);
}

.certificate-quote {

  color: var(--blue);

  font-size: 10px;

  font-weight: 700;

  max-width: 500px;
}

.certificate-score {

  display: flex;

  gap: 10px;

  align-items: center;

  background: var(--yellow-light);

  border: 1px solid #F6E7AC;

  padding: 5px 15px;

  border-radius: 50px;

  margin-top: 10px;

  font-size: 8px;
}

.certificate-score strong {

  font-size: 11px;
}

.certificate-footer {

  display: flex;

  justify-content: space-between;

  color: #8496A8;

  font-size: 7px;
}

.certificate-buttons {

  display: flex;

  justify-content: center;

  gap: 10px;

  margin-top: 20px;
}


/* =========================
   ABOUT
========================= */

.about-wrapper {

  width: min(1000px,100%);

  margin: auto;
}

.about-hero {

  max-width: 780px;

  margin: 15px auto 40px;

  text-align: center;
}

.about-hero h2 {

  font-size: clamp(30px,5vw,48px);

  line-height: 1.3;

  margin: 8px 0 15px;
}

.about-hero h2 span {

  display: block;

  color: var(--blue);
}

.about-hero p {

  color: var(--gray);

  line-height: 2.1;

  font-size: 13px;
}

.about-cards {

  display: grid;

  grid-template-columns: repeat(3,1fr);

  gap: 15px;
}

.about-cards div {

  background: white;

  border: 1px solid var(--border);

  border-radius: 20px;

  padding: 25px;
}

.about-cards span {

  color: var(--blue);

  font-weight: 800;

  font-size: 11px;
}

.about-cards h3 {

  margin: 15px 0 6px;

  font-size: 17px;
}

.about-cards p {

  color: var(--gray);

  font-size: 11px;

  line-height: 1.9;
}

.creator-section {

  margin-top: 35px;

  padding: 35px;

  text-align: center;

  background: var(--blue-light);

  border-radius: 25px;
}

.creator-section > span {

  color: var(--gray);

  font-size: 10px;
}

.creator-section h3 {

  margin-top: 5px;

  font-size: 25px;
}

.creator-section p {

  color: var(--blue);

  font-size: 12px;

  font-weight: 700;

  margin-top: 4px;
}

.creator-line {

  width: 50px;

  height: 3px;

  background: var(--yellow);

  border-radius: 5px;

  margin: 18px auto;
}

.creator-section small {

  color: var(--gray);

  font-size: 9px;
}


/* =========================
   FOOTER
========================= */

footer {

  padding: 25px 7%;

  border-top: 1px solid var(--border);

  display: flex;

  justify-content: space-between;

  color: var(--gray);

  font-size: 9px;

  background: white;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

  .navbar {

    padding: 0 20px;

  }

  .navbar nav {

    display: none;

  }

  .hero {

    grid-template-columns: 1fr;

    text-align: center;

    padding-top: 25px;

  }

  .hero-content {

    margin: auto;

  }

  .hero-buttons {

    justify-content: center;

  }

  .hero-art {

    min-height: 350px;

  }

  .big-circle {

    width: 230px;

    height: 230px;

  }

  .big-circle::before {

    width: 280px;

    height: 280px;

  }

  .card-three {

    left: 0;

  }

  .feature-grid {

    grid-template-columns: 1fr;

  }

  .stats-section {

    grid-template-columns: 1fr;

  }

  .stats-section div {

    border-left: 0;

    border-bottom: 1px solid var(--border);

  }

  .stats-section div:last-child {

    border-bottom: 0;

  }

  .rights-container {

    grid-template-columns: 1fr;

  }

  .story-layout {

    grid-template-columns: 1fr;

  }

  .about-cards {

    grid-template-columns: 1fr;

  }

  .certificate {

    aspect-ratio: auto;

    min-height: 520px;

  }

  .certificate-inner {

    padding: 25px;

  }

  .certificate-buttons {

    flex-direction: column;
  }

  .certificate-buttons button {

    width: 100%;
  }

  footer {

    flex-direction: column;

    gap: 7px;

    text-align: center;
  }
}

@media (max-width: 450px) {

  .page {

    padding: 35px 15px 60px;

  }

  .hero h1 {

    font-size: 58px;

  }

  .hero h1 span {

    font-size: 17px;

  }

  .right-item {

    grid-template-columns: 30px 55px 1fr;

    padding: 17px;

  }

  .question-card {

    padding: 25px 17px;

  }

  .challenge-top h2 {

    font-size: 23px;

  }

  .certificate {

    min-height: 600px;

  }

  .certificate-header {

    flex-direction: column;

    gap: 5px;

  }
}


/* =========================
   PRINT
========================= */

@media print {

  body * {

    visibility: hidden !important;
  }

  #certificate,
  #certificate * {

    visibility: visible !important;
  }

  #certificate {

    position: absolute;

    top: 0;

    left: 0;

    width: 100vw;

    height: 100vh;

    box-shadow: none;

    outline: 2px solid var(--blue);
  }

  .certificate-buttons,
  .text-btn {

    display: none !important;
  }

  @page {

    size: A4 landscape;

    margin: 0;
  }
}
