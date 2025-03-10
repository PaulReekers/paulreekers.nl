const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

let direction;
let food = {
  x: Math.floor(Math.random() * 19 + 1) * box,
  y: Math.floor(Math.random() * 19 + 1) * box,
};

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let game;
let speed = 100; // Initial speed

// Load the snake head SVG
const snakeHeadImg = new Image();
snakeHeadImg.src =
  "data:image/svg+xml;base64," +
  btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
  <rect width="20" height="20" fill="green"/>
  <rect x="5" y="5" width="3" height="3" fill="white"/>
  <rect x="12" y="5" width="3" height="3" fill="white"/>
  <rect x="8" y="12" width="4" height="4" fill="white"/>
</svg>
`);

document.addEventListener("keydown", setDirection);

function setDirection(event) {
  const LEFT_KEY = 37;
  const UP_KEY = 38;
  const RIGHT_KEY = 39;
  const DOWN_KEY = 40;

  const goingUp = direction === "UP";
  const goingDown = direction === "DOWN";
  const goingRight = direction === "RIGHT";
  const goingLeft = direction === "LEFT";

  if (event.keyCode === LEFT_KEY && !goingRight) {
    direction = "LEFT";
  } else if (event.keyCode === UP_KEY && !goingDown) {
    direction = "UP";
  } else if (event.keyCode === RIGHT_KEY && !goingLeft) {
    direction = "RIGHT";
  } else if (event.keyCode === DOWN_KEY && !goingUp) {
    direction = "DOWN";
  }
}

function collision(newHead, snake) {
  for (let i = 0; i < snake.length; i++) {
    if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    if (i === 0) {
      // Save the current context
      ctx.save();

      // Move the origin to the center of the snake head
      ctx.translate(snake[i].x + box / 2, snake[i].y + box / 2);

      // Rotate the canvas based on the direction, adding 90 degrees
      if (direction === "LEFT") {
        ctx.rotate(Math.PI / 2); // 90 degrees
      } else if (direction === "UP") {
        ctx.rotate(Math.PI); // 180 degrees
      } else if (direction === "RIGHT") {
        ctx.rotate(-Math.PI / 2); // -90 degrees
      } else if (direction === "DOWN") {
        ctx.rotate(0); // No additional rotation needed
      }

      // Draw the snake head image
      ctx.drawImage(snakeHeadImg, -box / 2, -box / 2, box, box);

      // Restore the context to its original state
      ctx.restore();
    } else {
      ctx.fillStyle = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--snake-body-color");
      ctx.fillRect(snake[i].x, snake[i].y, box, box);
      ctx.strokeStyle = "black";
      ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
  }

  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
    "--food-color"
  );
  ctx.fillRect(food.x, food.y, box, box);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "LEFT") snakeX -= box;
  if (direction === "UP") snakeY -= box;
  if (direction === "RIGHT") snakeX += box;
  if (direction === "DOWN") snakeY += box;

  if (snakeX === food.x && snakeY === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box,
    };
    flashBorder();
  } else {
    snake.pop();
  }

  let newHead = { x: snakeX, y: snakeY };

  if (
    snakeX < 0 ||
    snakeY < 0 ||
    snakeX >= canvas.width ||
    snakeY >= canvas.height ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    updateHighScore();
    showGameOverModal();
  }

  snake.unshift(newHead);

  // Adjust the position of the score and high score to be visible
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
    "--text-color"
  );
  ctx.font = getComputedStyle(document.documentElement).getPropertyValue(
    "--font-style"
  );
  ctx.fillText("Score: " + score, box, 20); // Position just above the canvas
  ctx.fillText("High Score: " + highScore, box, 40); // Position just above the canvas
}

function flashBorder() {
  canvas.style.borderColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--flash-border-color");
  setTimeout(() => {
    canvas.style.borderColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--border-color");
  }, 100);
}

function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
  }
}

function showGameOverModal() {
  const modal = document.getElementById("gameOverModal");
  const finalScore = document.getElementById("finalScore");
  finalScore.textContent = score;
  modal.style.display = "flex";

  const playAgainButton = document.getElementById("playAgainButton");
  playAgainButton.onclick = function () {
    modal.style.display = "none";
    resetGame();
  };
}

function resetGame() {
  snake = [];
  snake[0] = { x: 9 * box, y: 10 * box };
  direction = null;
  score = 0;
  food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box,
  };
  game = setInterval(draw, speed);
}

function hideModalOnStart() {
  const modal = document.getElementById("gameOverModal");
  modal.style.display = "none";
}

window.onload = function () {
  hideModalOnStart();
  game = setInterval(draw, speed);
};
