

let personalInfo = document.getElementById("personal-info-container");
let contact = document.getElementById("contacts-container");
let education = document.getElementById("education-container")

let mobilePersonalInfo = document.getElementById("mobile-personal-info-container");
let mobileContact = document.getElementById("mobile-contacts-container");
let mobileEducation = document.getElementById("mobile-education-container")

mobilePersonalInfo.addEventListener("click", () => {
    document.getElementById("mobile-folder-container").classList.toggle("hidden")
})

mobileContact.addEventListener("click", () => {
    document.getElementById("mobile-contact-info").classList.toggle("hidden")
})

personalInfo.addEventListener("click", () => {
    document.getElementById("folder-container").classList.toggle("hidden")
});

contact.addEventListener("click", () => {
    document.getElementById("contacts-info").classList.toggle("hidden")
})

function toggleItems(ulElement) {
    // Kiểm tra xem sự kiện có bắt nguồn từ thẻ <a> hay không
    if (event.target.tagName.toLowerCase() === 'a') {
        return; // Nếu là <a>, không làm gì cả (để link vẫn hoạt động)
    }

    // Ẩn/hiện các thẻ <li>
    const listItems = ulElement.querySelectorAll('li');
    listItems.forEach(item => {
        item.classList.toggle('hidden');
    });
}

const copyLink = document.getElementById('gmail-container');
const copyStatus = document.getElementById('copy-status');

copyLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn chuyển hướng mặc định

    // Lấy nội dung cần sao chép từ thuộc tính data-copy
    const contentToCopy = copyLink.getAttribute('data-copy');

    // Sử dụng Clipboard API để sao chép
    navigator.clipboard.writeText(contentToCopy).then(() => {
        // Hiển thị thông báo khi sao chép thành công
        copyStatus.textContent = 'Đã sao chép: ' + contentToCopy;
        copyStatus.style.color = 'green';
    }).catch(err => {
        // Hiển thị lỗi nếu sao chép thất bại
        copyStatus.textContent = 'Sao chép thất bại';
        copyStatus.style.color = 'red';
        console.error('Error copying text: ', err);
    });
});

const images = document.querySelectorAll('.icon');

// Gắn sự kiện click cho từng hình ảnh
images.forEach(image => {
    let isRotated = false; // Trạng thái xoay của từng hình ảnh

    image.addEventListener('click', () => {
        if (isRotated) {
            image.style.transform = 'rotate(0deg)'; // Quay lại vị trí ban đầu
        } else {
            image.style.transform = 'rotate(-90deg)'; // Xoay 90 độ
        }
        isRotated = !isRotated; // Đảo trạng thái xoay
    });
});

const headerBtn = document.getElementById("header-btn");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const dropMenu = document.getElementById("drop-menu");

// Hiển thị menu và overlay
headerBtn.addEventListener("click", () => {
    // alert("abc")
    overlay.classList.add("active");
    dropMenu.classList.add("active");
    document.getElementById("overlay").style.display = "block"
});

// Đóng menu và overlay
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    dropMenu.classList.remove("active");
     document.getElementById("overlay").style.display = "none"
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    dropMenu.classList.remove("active");
     document.getElementById("overlay").style.display = "none"
});