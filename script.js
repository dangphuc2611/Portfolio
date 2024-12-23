let gameContainer = document.getElementById("gameCanvas");
let startButton = document.getElementById("startButton");

// Xử lý khi nhấn nút Start
startButton.addEventListener("click", () => {
    // Tạo thẻ canvas mới
    const canvas = document.createElement("canvas");
    canvas.id = "gameCanvas";
    canvas.width = 299.23;
    canvas.height = 550;

    // Thay thế thẻ div bằng thẻ canvas
    gameContainer.replaceWith(canvas);

    // Bắt đầu game
    startGame(canvas);
});

function startBtn(){
    const canvas = document.createElement("canvas");
    canvas.id = "gameCanvas";
    canvas.width = 299.23;
    canvas.height = 550;

    // Thay thế thẻ div bằng thẻ canvas
    gameContainer.replaceWith(canvas);

    // Bắt đầu game
    startGame(canvas);
}

// Hàm khởi động trò chơi rắn
let listenerAdded = false; // Đánh dấu sự kiện đã được thêm

function startGame(canvas) {
    const ctx = canvas.getContext("2d");
    let snake = [{ x: 10, y: 10 }];
    let direction = { x: 0, y: 0 };
    let food = { x: 15, y: 15 };
    const cellSize = 12;
    const rows = canvas.height / cellSize;
    const cols = canvas.width / cellSize;
    let gameOver = false;

    // Vẽ ô vuông
    function drawCell(x, y, color, isHead = false, nextSegment = null) {
        if (isHead) {
            // Vẽ gradient tròn cho đầu
            const gradient = ctx.createRadialGradient(
                x * cellSize + cellSize / 2, // Tâm gradient x
                y * cellSize + cellSize / 2, // Tâm gradient y
                0,                          // Bán kính trong
                x * cellSize + cellSize / 2, // Tâm gradient x
                y * cellSize + cellSize / 2, // Tâm gradient y
                cellSize / 2                 // Bán kính ngoài
            );
            gradient.addColorStop(0, "#43d9ad"); // Màu trung tâm // Màu viền ngoài
    
            // Vẽ đầu rắn hình tròn
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(
                x * cellSize + cellSize / 2, // Tọa độ x tâm
                y * cellSize + cellSize / 2, // Tọa độ y tâm
                cellSize / 2,                // Bán kính
                0,
                Math.PI * 2
            );
            ctx.fill();
    
            // Vẽ phần nối liền với thân (nếu có)
            if (nextSegment) {
                ctx.fillStyle = "#43d9ad";
                if (nextSegment.x > x) {
                    // Nối bên phải
                    ctx.fillRect(x * cellSize + cellSize / 2, y * cellSize, cellSize / 2, cellSize);
                } else if (nextSegment.x < x) {
                    // Nối bên trái
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize / 2, cellSize);
                } else if (nextSegment.y > y) {
                    // Nối phía dưới
                    ctx.fillRect(x * cellSize, y * cellSize + cellSize / 2, cellSize, cellSize / 2);
                } else if (nextSegment.y < y) {
                    // Nối phía trên
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize / 2);
                }
            }
        } else {
            // Vẽ thân hoặc đuôi với màu gradient
            ctx.fillStyle = color;
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
    
    // Khai báo hình ảnh mồi
const foodImage = new Image();
foodImage.src = "static/images/snake-food.png"; // Đường dẫn đến hình ảnh mồi
const foodScale = 2; // Tăng kích thước lên 2 lần

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Vẽ mồi bằng hình ảnh với kích thước tăng
    if (foodImage.complete) {
        ctx.drawImage(
            foodImage,
            food.x * cellSize - (foodScale - 1) * cellSize / 2, // Canh chỉnh tâm x
            food.y * cellSize - (foodScale - 1) * cellSize / 2, // Canh chỉnh tâm y
            cellSize * foodScale, // Chiều rộng mồi
            cellSize * foodScale  // Chiều cao mồi
        );
    } else {
        foodImage.onload = () => {
            ctx.drawImage(
                foodImage,
                food.x * cellSize - (foodScale - 1) * cellSize / 2, 
                food.y * cellSize - (foodScale - 1) * cellSize / 2,
                cellSize * foodScale,
                cellSize * foodScale
            );
        };
    }

    // Vẽ các phần của rắn
    snake.forEach((segment, index) => {
        const isHead = index === 0;
        const isTail = index === snake.length - 1;
        const nextSegment = !isTail ? snake[index + 1] : null;

        // Tính toán gradientFactor: giá trị từ 0 (đầu) đến 1 (đuôi)
        const gradientFactor = index / (snake.length - 1);

        // Điều chỉnh màu gradient
        const startColor = { r: 67, g: 217, b: 173 }; // Màu ở đầu
        const endColor = { r: 10, g: 50, b: 80 }; // Màu ở đuôi
        const gradientColor = `rgba(
            ${startColor.r - gradientFactor * (startColor.r - endColor.r)},
            ${startColor.g - gradientFactor * (startColor.g - endColor.g)},
            ${startColor.b - gradientFactor * (startColor.b - endColor.b)},
            1
        )`;

        // Vẽ đoạn thân hoặc đầu rắn
        drawCell(segment.x, segment.y, gradientColor, isHead, nextSegment);
    });
}

    
    
    
    

    // Cập nhật trạng thái rắn
    function update() {
        if (gameOver) return;

        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food = {
                x: Math.floor(Math.random() * cols),
                y: Math.floor(Math.random() * rows),
            };
        } else {
            snake.pop();
        }

        // Kiểm tra va chạm tường hoặc chính mình
        if (
            head.x < 0 ||
            head.x >= cols ||
            head.y < 0 ||
            head.y >= rows ||
            snake.slice(1).some(seg => seg.x === head.x && seg.y === head.y)
        ) {
            gameOver = true;
            endGame(); // Kết thúc trò chơi
        }
    }

    // Kết thúc trò chơi
    function endGame() {
        if (listenerAdded) {
            window.removeEventListener("keydown", handleKeyDown); // Gỡ bỏ sự kiện
            listenerAdded = false;
        }
        let cf = confirm("Game Over! Reload để chơi lại.");
        if (cf) {
            startGame(canvas)
        } else {
            // document.getElementById("left-right-main").innerHTML = `
            //     <div id="gameCanvas">
            //         <img style="width: 50%; grid-column: 2; grid-row: 2; margin: auto;" src="static/images/Snake.png" alt="">
            //         <button onclick="startBtn()" id="startButton">start-game</button>
            //     </div>`;
            location.reload();
        }
    }

    // Điều khiển rắn
    function handleKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                if (direction.y === 0) direction = { x: 0, y: -1 };
                break;
            case "ArrowDown":
                if (direction.y === 0) direction = { x: 0, y: 1 };
                break;
            case "ArrowLeft":
                if (direction.x === 0) direction = { x: -1, y: 0 };
                break;
            case "ArrowRight":
                if (direction.x === 0) direction = { x: 1, y: 0 };
                break;
        }
    }

    if (!listenerAdded) {
        window.addEventListener("keydown", handleKeyDown); // Thêm sự kiện keydown
        listenerAdded = true; // Đánh dấu sự kiện đã được thêm
    }

    // Vòng lặp trò chơi
    function gameLoop() {
        update();
        draw();
        if (!gameOver) {
            setTimeout(gameLoop, 150);
        }
    }

    gameLoop();
}



