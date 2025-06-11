
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
