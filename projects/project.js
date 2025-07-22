async function fetchProjects() {
      try {
        const response = await fetch('http://localhost:1337/api/projects'); // replace with your actual API
        const result = await response.json(); // get the JSON response
        // console.log(result);
        
        const projects = result.data; // access the array from result

        const container = document.getElementById('tab-display');
        container.innerHTML = ''; // clear previous content

        projects.forEach((project) => {
          const div = document.createElement('div');
          div.style.border = '1px solid #ccc';
          div.style.padding = '10px';
          div.style.marginBottom = '10px';

          div.innerHTML = `
            <h3>${project.projectName}</h3>
            <p><strong>Type:</strong> ${project.projectType}</p>
            <p><strong>Description:</strong> ${project.projectDescription}</p>
            <p><a href="${project.projectUrl}" target="_blank">View Project</a></p>
          `;

          container.appendChild(div);
        });
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    // Call it
    // fetchProjects();

    

let personalInfo = document.getElementById("personal-info-container");
let contact = document.getElementById("contacts-container");
let education = document.getElementById("education-container")

let mobilePersonalInfo = document.getElementById("mobile-personal-info-container");
let mobileContact = document.getElementById("mobile-contacts-container");
let mobileEducation = document.getElementById("mobile-education-container")

mobilePersonalInfo.addEventListener("click", () => {
    document.getElementById("mobile-folder-container").classList.toggle("hidden")
})


personalInfo.addEventListener("click", () => {
    document.getElementById("folder-container").classList.toggle("hidden")
});


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

console.log(headerBtn);


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