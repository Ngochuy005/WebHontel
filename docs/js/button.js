// ===== JS từ index.html =====

// Smooth scrolling for navigation links (index.html)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero button (index.html)
const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
    heroBtn.addEventListener('click', function() {
        alert('Chức năng đặt phòng sẽ được triển khai trong phần backend!');
    });
}

// Quick booking form (index.html)
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form đặt phòng đã được gửi! Chức năng sẽ được kết nối với backend.');
    });
}

// Search functionality (index.html & services.html)
const searchIcon = document.querySelector('.search-bar i');
const searchInput = document.querySelector('.search-bar input');
if (searchIcon && searchInput) {
    searchIcon.addEventListener('click', function() {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            alert(`Tìm kiếm: "${searchTerm}". Chức năng tìm kiếm sẽ được triển khai với backend.`);
        }
    });
}

// Lưu các form đăng nhập, đăng ký, quên mật khẩu
const forms = {
    login: document.getElementById('loginForm'),
    register: document.getElementById('registerForm'),
    forgot: document.getElementById('forgotForm')
};

// Lưu các nút chuyển đổi giữa các form
const buttons = {
    showRegister: document.getElementById('showRegister'),
    showLogin: document.getElementById('showLogin'),
    showForgot: document.getElementById('showForgot'),
    backToLogin: document.getElementById('backToLogin')
};

/**
 * Hiển thị form theo tên truyền vào, ẩn các form còn lại
 * @param {string} formName - Tên form: 'login', 'register', 'forgot'
 */
function showForm(formName) {
    Object.values(forms).forEach(form => form.classList.remove('active'));
    forms[formName].classList.add('active');
}

// Gán sự kiện click cho các nút chuyển đổi form
buttons.showRegister.onclick = e => { e.preventDefault(); showForm('register'); };
buttons.showLogin.onclick = e => { e.preventDefault(); showForm('login'); };
buttons.showForgot.onclick = e => { e.preventDefault(); showForm('forgot'); };
buttons.backToLogin.onclick = e => { e.preventDefault(); showForm('login'); };

// Gán sự kiện cho nút đăng nhập/đăng ký trên menu
document.getElementById('navLoginBtn').onclick = function(e) {
    e.preventDefault();
    showForm('login');
};
document.getElementById('navRegisterBtn').onclick = function(e) {
    e.preventDefault();
    showForm('register');
};

// Lấy các trường mật khẩu và thông báo lỗi
const registerPassword = document.getElementById('registerPassword');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');

/**
 * Kiểm tra mật khẩu và xác nhận mật khẩu có giống nhau không
 * Hiển thị lỗi nếu không khớp
 * @returns {boolean} true nếu hợp lệ, false nếu không
 */
function validatePasswords() {
    if (registerPassword.value && confirmPassword.value) {
        const isValid = registerPassword.value === confirmPassword.value;
        passwordError.style.display = isValid ? 'none' : 'block';
        confirmPassword.style.borderColor = isValid ? 'var(--bg-light)' : '#e74c3c';
        return isValid;
    }
    return true;
}

// Kiểm tra mật khẩu khi nhập
registerPassword.oninput = validatePasswords;
confirmPassword.oninput = validatePasswords;

// Ngăn submit form đăng ký nếu mật khẩu không khớp
document.querySelector('#registerForm form').onsubmit = e => {
    if (!validatePasswords()) e.preventDefault();
};

// Hiển thị thông báo thành công khi gửi form quên mật khẩu
document.querySelector('#forgotForm form').onsubmit = e => {
    e.preventDefault();
    const success = document.getElementById('forgotSuccess');
    success.style.display = 'block';
    setTimeout(() => {
        showForm('login');
        success.style.display = 'none';
    }, 3000);
};

// Nếu URL có ?register thì tự động mở form đăng ký
if (window.location.search.includes('register')) {
    showForm('register');
}
