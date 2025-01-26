

let personalInfo = document.getElementById("personal-info-container");
let contact = document.getElementById("contacts-container");
let education = document.getElementById("education-container")

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