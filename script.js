/* ==================================================
   RIGHTS - SCRIPT.JS
   ================================================== */


/* ==================================================
   DATA
================================================== */

const rights = [
    {
        icon: "🛡️",
        title: "الحق في الأمان",
        heading: "أن يعيش الطفل في بيئة آمنة",
        text: "من حق كل طفل أن يعيش بعيدًا عن الأذى والعنف والاستغلال، وأن يجد من يحميه ويساعده عند الحاجة.",
        example: "طلب المساعدة عند الشعور بالخطر ليس ضعفًا، بل وسيلة لحماية حقك في الأمان."
    },

    {
        icon: "📚",
        title: "الحق في التعليم",
        heading: "أن يتعلم كل طفل",
        text: "من حق الطفل الحصول على التعليم واكتساب المعرفة والمهارات التي تساعده على بناء مستقبله.",
        example: "الذهاب إلى المدرسة والتعلم والمشاركة في الأنشطة التعليمية جزء من هذا الحق."
    },

    {
        icon: "🤝",
        title: "الحق في الاحترام",
        heading: "أن يُعامل الطفل باحترام",
        text: "من حق كل طفل أن يُعامل بكرامة واحترام، وألا يتعرض للتنمر أو الإهانة بسبب اختلافه.",
        example: "احترام الآخرين وعدم السخرية منهم يساعد في بناء بيئة مدرسية أكثر أمانًا."
    },

    {
        icon: "💬",
        title: "الحق في التعبير",
        heading: "أن يُسمع صوت الطفل",
        text: "من حق الطفل التعبير عن رأيه ومشاعره وأفكاره بطريقة آمنة ومحترمة.",
        example: "يمكنك التعبير عن رأيك في المدرسة أو المنزل مع احترام آراء الآخرين."
    },

    {
        icon: "🎈",
        title: "الحق في اللعب",
        heading: "أن يكون للطفل وقت للعب",
        text: "اللعب جزء مهم من حياة الطفل، ويساعده على التعلم والتواصل والإبداع والاستمتاع بوقته.",
        example: "تخصيص وقت للراحة واللعب بعد الدراسة يساعد على تحقيق توازن صحي."
    },

    {
        icon: "💛",
        title: "الحق في الرعاية",
        heading: "أن يحصل الطفل على الرعاية",
        text: "من حق الطفل الحصول على الرعاية والاهتمام والدعم الذي يحتاج إليه لينمو بطريقة سليمة.",
        example: "وجود أشخاص يهتمون بالطفل ويساعدونه عند الحاجة جزء أساسي من الرعاية."
    }
];


const questions = [

    {
        text: "إذا تعرّض طفل للتنمر في المدرسة، فما التصرف الصحيح؟",

        answers: [
            "إخفاء الأمر وعدم إخبار أحد",
            "إخبار شخص بالغ موثوق وطلب المساعدة",
            "الرد على المتنمر بالتنمر",
            "تجاهل المشكلة دائمًا"
        ],

        correct: 1
    },

    {
        text: "أي مما يلي يمثل الحق في التعليم؟",

        answers: [
            "منع الطفل من الذهاب للمدرسة",
            "إتاحة فرصة التعلم للطفل",
            "حرمان الطفل من المشاركة",
            "منع الطفل من طرح الأسئلة"
        ],

        correct: 1
    },

    {
        text: "ماذا يعني الحق في التعبير؟",

        answers: [
            "أن أفرض رأيي على الجميع",
            "أن أعبّر عن رأيي بطريقة محترمة وآمنة",
            "أن أرفض الاستماع للآخرين",
            "أن أستخدم الإساءة للتعبير"
        ],

        correct: 1
    },

    {
        text: "لماذا يحتاج الطفل إلى وقت للعب؟",

        answers: [
            "لأنه لا يحتاج إلى الدراسة",
            "لأن اللعب يساعد على النمو والتعلم والتواصل",
            "لإلغاء جميع المسؤوليات",
            "لعدم القيام بأي نشاط آخر"
        ],

        correct: 1
    },

    {
        text: "أي تصرف يعكس احترام حقوق الآخرين؟",

        answers: [
            "السخرية من اختلافاتهم",
            "نشر أسرارهم",
            "احترامهم والاستماع إليهم",
            "استبعادهم من الأنشطة"
        ],

        correct: 2
    }

];


/* ==================================================
   VARIABLES
================================================== */

let currentQuestion = 0;
let score = 0;

let studentName = "";
let studentClass = "";

let quizStarted = false;


/* ==================================================
   PAGE NAVIGATION
================================================== */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(pageId);

    if (!target) {
        return;
    }

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateJourney(pageId);
}


/* ==================================================
   JOURNEY
================================================== */

function updateJourney(pageId) {

    const steps = document.querySelectorAll(".journey-step");

    steps.forEach(step => {
        step.classList.remove("active");
        step.classList.remove("done");
    });

    let activeIndex = 0;

    if (pageId === "home") {
        activeIndex = 0;
    }

    else if (pageId === "rights") {
        activeIndex = 1;
    }

    else if (pageId === "challenge") {
        activeIndex = 2;
    }

    else if (pageId === "result") {
        activeIndex = 3;
    }

    else if (pageId === "certificatePage") {
        activeIndex = 4;
    }

    else if (pageId === "about") {
        activeIndex = 0;
    }

    steps.forEach((step, index) => {

        if (index < activeIndex) {
            step.classList.add("done");
        }

        if (index === activeIndex) {
            step.classList.add("active");
        }

    });
}


/* ==================================================
   RIGHTS
================================================== */

function openRight(index) {

    const right = rights[index];

    if (!right) {
        return;
    }

    const icon = document.getElementById("modalIcon");
    const title = document.getElementById("modalTitle");
    const heading = document.getElementById("modalHeading");
    const text = document.getElementById("modalText");
    const example = document.getElementById("modalExample");

    icon.textContent = right.icon;

    title.textContent = right.title;

    heading.textContent = right.heading;

    text.textContent = right.text;

    example.innerHTML = `
        <strong>في حياتنا</strong>
        <br>
        ${right.example}
    `;

    document.getElementById("rightModal").classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeRight() {

    document.getElementById("rightModal").classList.remove("show");

    document.body.style.overflow = "";
}


/* إغلاق النافذة عند الضغط خارجها */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("rightModal");

    if (
        modal &&
        event.target === modal
    ) {
        closeRight();
    }

});


/* ==================================================
   START QUIZ
================================================== */

function startQuiz() {

    const name = prompt("اكتبي اسمك الكامل:");

    if (!name || name.trim() === "") {
        showToast("يجب كتابة الاسم لبدء التحدي.");
        return;
    }

    const className = prompt("اكتبي شعبتك، مثل: 1/1");

    if (!className || className.trim() === "") {
        showToast("يجب كتابة الشعبة لبدء التحدي.");
        return;
    }

    studentName = name.trim();
    studentClass = className.trim();

    currentQuestion = 0;
    score = 0;

    quizStarted = true;

    document.getElementById("score").textContent = "0";

    showPage("challenge");

    loadQuestion();
}


/* ==================================================
   LOAD QUESTION
================================================== */

function loadQuestion() {

    if (currentQuestion >= questions.length) {
        finishQuiz();
        return;
    }

    const question = questions[currentQuestion];

    document.getElementById("questionLabel").textContent =
        `المرحلة ${numberArabic(currentQuestion + 1)}`;

    document.getElementById("questionProgress").textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("questionText").textContent =
        question.text;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    const feedback =
        document.getElementById("feedback");

    feedback.className = "feedback";
    feedback.textContent = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.onclick = function () {
            selectAnswer(index, button);
        };

        answersContainer.appendChild(button);

    });

    updateLevels();
}


/* ==================================================
   SELECT ANSWER
================================================== */

function selectAnswer(index, selectedButton) {

    const question = questions[currentQuestion];

    const answerButtons =
        document.querySelectorAll(".answer");

    answerButtons.forEach(button => {
        button.classList.add("disabled");
    });

    const feedback =
        document.getElementById("feedback");

    if (index === question.correct) {

        selectedButton.classList.add("correct");

        score++;

        document.getElementById("score").textContent =
            score;

        feedback.textContent =
            "✓ إجابة صحيحة! ممتاز، نكمل الرحلة.";

        feedback.classList.add("show", "correct");

    }

    else {

        selectedButton.classList.add("wrong");

        answerButtons[question.correct]
            .classList.add("correct");

        feedback.textContent =
            "✦ ليست الإجابة الصحيحة، لكن المعرفة رحلة. نكمل.";

        feedback.classList.add("show", "wrong");
    }

    setTimeout(() => {

        currentQuestion++;

        loadQuestion();

    }, 1200);
}


/* ==================================================
   UPDATE LEVELS
================================================== */

function updateLevels() {

    const levels =
        document.querySelectorAll(".level");

    levels.forEach((level, index) => {

        level.classList.remove("active");
        level.classList.remove("done");

        if (index < currentQuestion) {
            level.classList.add("done");
        }

        if (index === currentQuestion) {
            level.classList.add("active");
        }

    });
}


/* ==================================================
   FINISH QUIZ
================================================== */

function finishQuiz() {

    document.getElementById("finalScore").textContent =
        score;

    const resultMessage =
        document.getElementById("resultMessage");

    if (score === 5) {

        resultMessage.textContent =
            "نتيجة كاملة! لديكِ معرفة ممتازة بحقوق الطفل.";

    }

    else if (score >= 3) {

        resultMessage.textContent =
            "نتيجة جميلة. لديكِ أساس جيد في معرفة حقوق الطفل.";

    }

    else {

        resultMessage.textContent =
            "بداية جيدة. اكتشفي الحقوق مرة أخرى ثم أعيدي التحدي.";

    }

    showPage("result");
}


/* ==================================================
   RESTART QUIZ
================================================== */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("score").textContent =
        "0";

    showPage("challenge");

    loadQuestion();
}


/* ==================================================
   CERTIFICATE
================================================== */

function openCertificate() {

    if (!studentName) {
        showToast("ابدئي التحدي أولًا للحصول على الشهادة.");
        return;
    }

    document.getElementById("certName").textContent =
        studentName;

    document.getElementById("certClass").textContent =
        studentClass;

    document.getElementById("certScore").textContent =
        `${score} / ${questions.length}`;

    document.getElementById("certNumber").textContent =
        generateCertificateNumber();

    showPage("certificatePage");
}


/* ==================================================
   CERTIFICATE NUMBER
================================================== */

function generateCertificateNumber() {

    const number =
        String(
            Math.floor(Math.random() * 900) + 100
        );

    return number;
}


/* ==================================================
   SAVE CERTIFICATE PDF
================================================== */

async function saveCertificatePDF() {

    const certificate =
        document.getElementById("certificate");

    if (!certificate) {
        return;
    }

    showToast("جاري تجهيز الشهادة...");

    try {

        const canvas =
            await html2canvas(certificate, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff"
            });

        const imageData =
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

        const pageWidth =
            pdf.internal.pageSize.getWidth();

        const pageHeight =
            pdf.internal.pageSize.getHeight();

        const imageRatio =
            canvas.width / canvas.height;

        let width = pageWidth;
        let height = width / imageRatio;

        if (height > pageHeight) {

            height = pageHeight;

            width = height * imageRatio;

        }

        const x =
            (pageWidth - width) / 2;

        const y =
            (pageHeight - height) / 2;

        pdf.addImage(
            imageData,
            "PNG",
            x,
            y,
            width,
            height
        );

        const safeName =
            studentName
                .replace(/[\\/:*?"<>|]/g, "")
                .trim();

        pdf.save(
            `شهادة_حقوقنا_${safeName}.pdf`
        );

        showToast("تم حفظ الشهادة بنجاح ✓");

    }

    catch (error) {

        console.error(error);

        showToast(
            "تعذر حفظ PDF، يمكنك استخدام زر الطباعة."
        );

    }
}


/* ==================================================
   TOAST
================================================== */

function showToast(message) {

    const oldToast =
        document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 2500);
}


/* ==================================================
   ARABIC NUMBERS
================================================== */

function numberArabic(number) {

    const arabicNumbers = [
        "٠",
        "١",
        "٢",
        "٣",
        "٤",
        "٥",
        "٦",
        "٧",
        "٨",
        "٩"
    ];

    return String(number)
        .split("")
        .map(char => {

            if (!isNaN(char)) {
                return arabicNumbers[Number(char)];
            }

            return char;

        })
        .join("");
}


/* ==================================================
   DAILY RIGHT
================================================== */

function setDailyRight() {

    const index =
        new Date().getDate() % rights.length;

    const right =
        rights[index];

    const title =
        document.getElementById("dailyRightTitle");

    const text =
        document.getElementById("dailyRightText");

    if (title) {
        title.textContent =
            right.title;
    }

    if (text) {
        text.textContent =
            right.text;
    }
}


/* ==================================================
   PARTICIPATION COUNTER
================================================== */

function updateParticipantCount() {

    let count =
        localStorage.getItem("rightsParticipants");

    if (!count) {

        count = 0;

    }

    document.getElementById("participantCount")
        .textContent = count;
}


/* تسجيل مشاركة محلية عند إنهاء التحدي */

function registerParticipation() {

    let count =
        Number(
            localStorage.getItem("rightsParticipants") || 0
        );

    count++;

    localStorage.setItem(
        "rightsParticipants",
        count
    );

    updateParticipantCount();
}


/* ==================================================
   INITIALIZATION
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    setDailyRight();

    updateParticipantCount();

    updateJourney("home");

});


/* ==================================================
   REGISTER PARTICIPATION ON RESULT
================================================== */

const originalFinishQuiz =
    finishQuiz;

finishQuiz = function () {

    registerParticipation();

    originalFinishQuiz();

};
