/* =========================================
   بيانات الموقع
========================================= */

let studentName = "";
let studentClass = "";

let currentQuestion = 0;
let score = 0;

let participationCount =
  Number(localStorage.getItem("rightsParticipation") || 0);

let stories =
  JSON.parse(localStorage.getItem("rightsStories") || "[]");


/* =========================================
   الأسئلة
========================================= */

const questions = [

  {
    question:
      "طفل يتعرض للتنمر بشكل متكرر في المدرسة. ما التصرف الأفضل؟",

    answers: [
      "أتجاهل الأمر تمامًا",
      "أخبر شخصًا بالغًا موثوقًا وأطلب المساعدة",
      "أشارك في التنمر حتى لا أكون وحدي"
    ],

    correct: 1,

    explanation:
      "طلب المساعدة من شخص بالغ موثوق يساعد على حماية الطفل والتعامل مع المشكلة."
  },


  {
    question:
      "طفلة لديها رأي مختلف وتريد التعبير عنه بطريقة محترمة. أي حق يرتبط بذلك؟",

    answers: [
      "الحق في التعبير",
      "الحق في اللعب",
      "الحق في الرعاية"
    ],

    correct: 0,

    explanation:
      "للطفل الحق في التعبير عن آرائه ومشاعره بطريقة مناسبة وآمنة."
  },


  {
    question:
      "طفل في عمر الدراسة يحتاج إلى فرصة للتعلم. ما الحق المرتبط بذلك؟",

    answers: [
      "الحق في اللعب",
      "الحق في التعليم",
      "الحق في الأمان"
    ],

    correct: 1,

    explanation:
      "التعليم من الحقوق الأساسية التي تساعد الطفل على النمو واكتساب المعرفة."
  },


  {
    question:
      "أي موقف يعكس احترام الطفل؟",

    answers: [
      "السخرية من مشاعره",
      "مقاطعته دائمًا",
      "الاستماع إليه والتعامل معه بكرامة"
    ],

    correct: 2,

    explanation:
      "الاحترام يعني الاستماع للطفل ومعاملته بكرامة دون إهانة أو سخرية."
  },


  {
    question:
      "لماذا يحتاج الطفل إلى وقت للعب والراحة؟",

    answers: [
      "لأن اللعب والنشاط جزء مهم من نمو الطفل وراحته",
      "لأنه لا يحتاج إلى التعلم",
      "لأن المدرسة غير مهمة"
    ],

    correct: 0,

    explanation:
      "اللعب والراحة والنشاط المناسب للعمر جزء مهم من حياة الطفل ونموه."
  }

];


/* =========================================
   التنقل
========================================= */

function showPage(id) {

  document
    .querySelectorAll(".page")
    .forEach(page => page.classList.remove("active"));

  const page = document.getElementById(id);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   بدء التحدي
========================================= */

function startQuiz() {

  const name =
    prompt("اكتبي اسمك لإصدار الشهادة:");

  if (!name || name.trim() === "") {

    alert("نحتاج اسمك حتى نضعه في الشهادة.");

    return;
  }


  const studentSection =
    prompt("اكتبي شعبتك، مثال: 1/1");

  if (!studentSection || studentSection.trim() === "") {

    alert("اكتبي الشعبة أولًا.");

    return;
  }


  studentName = name.trim();

  studentClass = studentSection.trim();


  currentQuestion = 0;

  score = 0;

  showPage("challenge");

  loadQuestion();
}


/* =========================================
   تشغيل التحدي عند فتح الصفحة
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  updateHomeCount();

  loadStories();

  setupStoryCounter();

  /*
   عند الضغط على "ابدئي التحدي"
   يتم طلب الاسم والشعبة.
  */

  const challengeButton =
    document.querySelector(".primary-btn");

});


/* =========================================
   تحميل السؤال
========================================= */

function loadQuestion() {

  const q = questions[currentQuestion];

  document.getElementById("questionText").textContent =
    q.question;


  document.getElementById("questionNumber").textContent =
    `السؤال ${currentQuestion + 1} من ${questions.length}`;


  const percent =
    Math.round(
      ((currentQuestion + 1) / questions.length) * 100
    );


  document.getElementById("progressPercent").textContent =
    `${percent}%`;


  document.getElementById("progressBar").style.width =
    `${percent}%`;


  const answers =
    document.getElementById("answers");

  answers.innerHTML = "";


  q.answers.forEach((answer, index) => {

    const button =
      document.createElement("button");

    button.className = "answer";

    button.textContent = answer;

    button.onclick =
      () => selectAnswer(index, button);

    answers.appendChild(button);

  });

}


/* =========================================
   اختيار الإجابة
========================================= */

function selectAnswer(index, button) {

  const q = questions[currentQuestion];

  const allButtons =
    document.querySelectorAll(".answer");


  allButtons.forEach(btn => {
    btn.disabled = true;
  });


  if (index === q.correct) {

    score++;

    button.classList.add("correct");

    showTemporaryMessage(
      "إجابة صحيحة! 💙",
      q.explanation
    );

  } else {

    button.classList.add("wrong");

    allButtons[q.correct].classList.add("correct");

    showTemporaryMessage(
      "قريبة! 🌱",
      q.explanation
    );

  }


  setTimeout(() => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

      loadQuestion();

    } else {

      finishQuiz();

    }

  }, 1800);

}


/* =========================================
   رسالة مؤقتة
========================================= */

function showTemporaryMessage(title, text) {

  const old =
    document.getElementById("feedback");

  if (old) old.remove();


  const box =
    document.createElement("div");

  box.id = "feedback";

  box.style.position = "fixed";
  box.style.bottom = "25px";
  box.style.left = "50%";
  box.style.transform = "translateX(-50%)";
  box.style.zIndex = "5000";

  box.style.width = "min(500px, 90%)";

  box.style.background = "#FFFFFF";

  box.style.border = "1px solid #DCEAF5";

  box.style.borderRadius = "18px";

  box.style.padding = "15px 20px";

  box.style.boxShadow =
    "0 20px 50px rgba(25,50,77,.15)";

  box.innerHTML = `
    <strong style="color:#19324D;display:block;margin-bottom:4px;">
      ${title}
    </strong>

    <span style="color:#718096;font-size:11px;line-height:1.8;">
      ${text}
    </span>
  `;


  document.body.appendChild(box);

}


/* =========================================
   إنهاء التحدي
========================================= */

function finishQuiz() {

  participationCount++;

  localStorage.setItem(
    "rightsParticipation",
    participationCount
  );

  updateHomeCount();


  document.getElementById("finalScore").textContent =
    score;


  let message = "";

  if (score === 5) {

    message =
      "رائع! إجاباتك تعكس وعيًا ممتازًا بحقوق الطفل. 💙";

  } else if (score >= 3) {

    message =
      "نتيجة جميلة! لديكِ أساس جيد، ومعرفة الحقوق تزداد بالممارسة.";

  } else {

    message =
      "بداية جيدة! اكتشفي قسم حقوقنا وتعرّفي أكثر على الحقوق الأساسية.";

  }


  document.getElementById("resultMessage").textContent =
    message;


  showPage("result");

}


/* =========================================
   إعادة التحدي
========================================= */

function restartQuiz() {

  currentQuestion = 0;

  score = 0;

  loadQuestion();

  showPage("challenge");

}


/* =========================================
   فتح الشهادة
========================================= */

function openCertificate() {

  document.getElementById("certName").textContent =
    studentName || "الطالبة";

  document.getElementById("certClass").textContent =
    studentClass || "1/1";

  document.getElementById("certScore").textContent =
    `${score} / ${questions.length}`;


  document.getElementById("certNumber").textContent =
    String(participationCount).padStart(3, "0");


  showPage("certificatePage");

}


/* =========================================
   حفظ PDF
========================================= */

async function saveCertificatePDF() {

  const certificate =
    document.getElementById("certificate");

  const button =
    event.currentTarget;

  const oldText =
    button.innerHTML;

  button.innerHTML =
    "جاري تجهيز الشهادة...";

  button.disabled = true;


  try {

    const canvas =
      await html2canvas(certificate, {

        scale: 2,

        useCORS: true,

        backgroundColor: "#FFFFFF"

      });


    const image =
      canvas.toDataURL("image/png");


    const {
      jsPDF
    } = window.jspdf;


    const pdf =
      new jsPDF({

        orientation: "landscape",

        unit: "mm",

        format: "a4"

      });


    pdf.addImage(
      image,
      "PNG",
      0,
      0,
      297,
      210
    );


    let safeName =
      studentName
        .replace(/[\\/:*?"<>|]/g, "")
        .trim();


    if (!safeName) {

      safeName = "طالبة";

    }


    pdf.save(
      `شهادة-حقوقنا-${safeName}.pdf`
    );


  } catch (error) {

    console.error(error);

    alert(
      "تعذر إنشاء PDF. استخدمي زر الطباعة ثم اختاري حفظ كـ PDF."
    );

  }


  button.innerHTML = oldText;

  button.disabled = false;

}


/* =========================================
   عداد الصفحة الرئيسية
========================================= */

function updateHomeCount() {

  const count =
    Number(
      localStorage.getItem("rightsParticipation") || 0
    );

  const element =
    document.getElementById("homeParticipation");

  if (element) {

    element.textContent = count;

  }

}


/* =========================================
   القصص
========================================= */

function setupStoryCounter() {

  const input =
    document.getElementById("storyInput");

  const counter =
    document.getElementById("charCount");

  if (!input || !counter) return;


  input.addEventListener("input", function () {

    counter.textContent =
      this.value.length;

  });

}


/* =========================================
   نشر قصة
========================================= */

function publishStory() {

  const input =
    document.getElementById("storyInput");

  const text =
    input.value.trim();


  if (text.length < 15) {

    alert(
      "اكتبي موقفًا أو تجربة قصيرة لا تقل عن 15 حرفًا."
    );

    return;

  }


  const story = {

    text: text,

    date: new Date().toLocaleDateString("ar-SA")

  };


  stories.unshift(story);


  localStorage.setItem(
    "rightsStories",
    JSON.stringify(stories)
  );


  input.value = "";

  document.getElementById("charCount").textContent = "0";


  loadStories();


  alert(
    "تمت إضافة قصتك إلى جدار الكلمات 💙"
  );

}


/* =========================================
   عرض القصص
========================================= */

function loadStories() {

  const list =
    document.getElementById("storiesList");

  const count =
    document.getElementById("storyCount");


  if (!list || !count) return;


  count.textContent =
    stories.length;


  if (stories.length === 0) {

    list.innerHTML = `

      <div class="empty-story">

        <span>♡</span>

        <p>
          كوني أول من يترك كلمة جميلة هنا.
        </p>

      </div>

    `;

    return;

  }


  list.innerHTML = "";


  stories.forEach((story, index) => {

    const card =
      document.createElement("div");

    card.className =
      "story-card";


    card.innerHTML = `

      <p>
        ${escapeHTML(story.text)}
      </p>

      <small>
        مشاركة رقم ${stories.length - index}
        · ${story.date}
      </small>

    `;


    list.appendChild(card);

  });

}


/* =========================================
   حماية النصوص
========================================= */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}
