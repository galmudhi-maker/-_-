let studentName = "";
let studentClass = "";
let selectedRight = "";


// إظهار صفحة
function showPage(pageId) {

  const pages = document.querySelectorAll(".screen");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// بدء المشاركة
function startParticipation() {

  const nameInput = document.getElementById("studentName");
  const classInput = document.getElementById("studentClass");

  studentName = nameInput.value.trim();
  studentClass = classInput.value.trim();

  if (studentName === "") {
    alert("اكتبي اسم الطالبة أولًا.");
    return;
  }

  if (studentClass === "") {
    alert("اكتبي الشعبة أولًا.");
    return;
  }

  showPage("rightsPage");
}


// اختيار الحق
function chooseRight(right) {

  selectedRight = right;

  let count = Number(localStorage.getItem("rightsCount") || 0);

  count++;

  localStorage.setItem("rightsCount", count);

  localStorage.setItem("lastRight", right);

  document.getElementById("selectedRight").textContent = right;

  document.getElementById("successText").innerHTML =
    `شكرًا <strong>${studentName}</strong>، تمت إضافة مشاركتك إلى جدار حقوقنا.`;

  updateCounters();

  showPage("successPage");
}


// عرض الشهادة
function showCertificate() {

  const count = Number(localStorage.getItem("rightsCount") || 1);

  document.getElementById("certificateName").textContent =
    studentName;

  document.getElementById("certificateClass").textContent =
    studentClass;

  document.getElementById("certificateNumber").textContent =
    String(count).padStart(3, "0");

  showPage("certificatePage");
}


// تحديث العدادات
function updateCounters() {

  const count = Number(localStorage.getItem("rightsCount") || 0);

  const homeCount = document.getElementById("homeCount");
  const wallCount = document.getElementById("wallCount");
  const finalCount = document.getElementById("finalCount");

  if (homeCount) {
    homeCount.textContent = count;
  }

  if (wallCount) {
    wallCount.textContent = count;
  }

  if (finalCount) {
    finalCount.textContent = count;
  }
}


// حفظ PDF
async function savePDF() {

  const certificate = document.getElementById("certificate");

  const button = document.querySelector(".pdf-btn");

  const oldText = button.innerHTML;

  button.innerHTML = "جاري تجهيز الشهادة...";

  button.disabled = true;

  try {

    const canvas = await html2canvas(certificate, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff"
    });

    const imageData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });

    const pageWidth = 297;
    const pageHeight = 210;

    pdf.addImage(
      imageData,
      "PNG",
      0,
      0,
      pageWidth,
      pageHeight
    );

    const safeName = studentName
      .replace(/[\\/:*?"<>|]/g, "")
      .trim();

    pdf.save(
      `شهادة-حقوقنا-${safeName || "طالبة"}.pdf`
    );

  } catch (error) {

    console.error(error);

    alert("تعذر حفظ الشهادة حاليًا. يمكنك استخدام زر الطباعة واختيار حفظ بصيغة PDF.");

  }

  button.innerHTML = oldText;
  button.disabled = false;
}


// عند تحميل الموقع
document.addEventListener("DOMContentLoaded", function () {

  updateCounters();

});
