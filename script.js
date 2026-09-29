// ======================================
// 1. MENU HAMBURGER
// ======================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Đóng menu khi click vào một link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// ======================================
// 2. DARK / LIGHT MODE
// ======================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ======================================
// 3. TÌM KIẾM DỰ ÁN
// ======================================

const searchProject =
    document.getElementById("searchProject");

const projectCards =
    document.querySelectorAll(".project-card");


searchProject.addEventListener("input", function() {

    const keyword =
        searchProject.value.toLowerCase();

    projectCards.forEach(function(card) {

        const projectName =
            card.dataset.name.toLowerCase();

        if (projectName.includes(keyword)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ======================================
// 4. ĐẾM KÝ TỰ FORM
// ======================================

const message =
    document.getElementById("message");

const charCount =
    document.getElementById("charCount");


message.addEventListener("input", function() {

    charCount.textContent =
        message.value.length;

});


// ======================================
// 5. VALIDATE FORM
// ======================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const messageValue =
        document.getElementById("message").value.trim();


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");


    // Xóa thông báo cũ

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";


    let isValid = true;


    // Kiểm tra tên

    if (name === "") {

        nameError.textContent =
            "Vui lòng nhập họ tên.";

        isValid = false;

    }


    // Kiểm tra email

    if (email === "") {

        emailError.textContent =
            "Vui lòng nhập email.";

        isValid = false;

    } else if (!email.includes("@")) {

        emailError.textContent =
            "Email không hợp lệ.";

        isValid = false;

    }


    // Kiểm tra nội dung

    if (messageValue === "") {

        messageError.textContent =
            "Vui lòng nhập nội dung.";

        isValid = false;

    } else if (messageValue.length < 10) {

        messageError.textContent =
            "Nội dung phải có ít nhất 10 ký tự.";

        isValid = false;

    }


    // Nếu hợp lệ

    if (isValid) {

        alert("Gửi liên hệ thành công!");

        contactForm.reset();

        charCount.textContent = "0";

    }

});


// ======================================
// 6. HIỂN THỊ NĂM HIỆN TẠI
// ======================================

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


// ======================================
// 7. NÚT CUỘN LÊN ĐẦU TRANG
// ======================================

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

    });

});