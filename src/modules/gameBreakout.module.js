import { Module } from "../core/module.js";
import { allIntervals, clearAllIntervals } from "../utils";

export class GameBreakoutModule extends Module {
  #canvasBlock;
  #ctx;
  #score;
  #lives;
  #ball;
  #paddle;
  #bricksParams;
  #bricks;

  constructor(type, text) {
    super(type, text);

    this.#canvasBlock = null;
    this.#ctx = null;
    this.#score = 0;
    this.#lives = 3;

    // Задаем параметры мяч
    this.#ball = {
      ballPositionX: 0, // задается при создании canvas
      ballPositionY: 0, // задается при создании canvas
      ballRadius: 5,
      dx: 2, // Смещение мяча за один кадр по оси Х
      dy: -2, // Смещение мяча за один кадр по оси Y
    };
    // Задает  параметры ракетки
    this.#paddle = {
      paddleHeight: 5,
      paddleWidth: 75,
      paddlePositionX: 0, // задается при создании canvas
    };
    // Задает  параметры кирпичиков
    this.#bricksParams = {
      brickRowCount: 3,
      brickColumnCount: 5,
      brickWidth: 55,
      brickHeight: 10,
      brickPadding: 4,
      brickOffsetTop: 5,
      brickOffsetLeft: 5,
    };
    // Начальный параметр матрицы крипичиков
    this.#bricks = [];
  }

  trigger() {
    this.#score = 0;
    this.#lives = 3;

    document.body.append(this.#createCanvas());
    this.#createCirclAndPeddle();
  }

  #createCanvas() {
    const container = document.createElement("div");
    container.className = "gameBreakoutModule-container";

    const canvasBlock = document.createElement("canvas");
    canvasBlock.id = "canvasBlock";
    canvasBlock.className = "gameBreakoutModule-canvasBlock";
    container.append(canvasBlock);

    this.#canvasBlock = canvasBlock;
    this.#ctx = canvasBlock.getContext("2d");

    this.#ball.ballPositionX = canvasBlock.width / 2;
    this.#ball.ballPositionY = canvasBlock.height - 30;
    this.#paddle.paddlePositionX =
      (this.#canvasBlock.width - this.#paddle.paddleWidth) / 2;

    return container;
  }

  #createCirclAndPeddle() {
    // Создаем матрицу кирпичиков
    for (let c = 0; c < this.#bricksParams.brickColumnCount; c++) {
      this.#bricks[c] = [];
      for (let r = 0; r < this.#bricksParams.brickRowCount; r++) {
        this.#bricks[c][r] = { x: 0, y: 0, isRenering: true };
      }
    }

    // Логика перемещения ракетки
    document.addEventListener("keydown", (e) => {
      if (
        e.code === "ArrowRight" &&
        this.#paddle.paddlePositionX <
          this.#canvasBlock.width - this.#paddle.paddleWidth
      ) {
        this.#paddle.paddlePositionX += 7;
      } else if (e.code === "ArrowLeft" && this.#paddle.paddlePositionX > 0) {
        this.#paddle.paddlePositionX -= 7;
      }
    });

    document.addEventListener("mousemove", (e) => {
      const relativeX = e.clientX - this.#canvasBlock.offsetLeft;

      if (relativeX > 0 && relativeX < this.#canvasBlock.width) {
        this.#paddle.paddlePositionX = relativeX - this.#paddle.paddleWidth / 2;
      }
    });

    // Логика перемещения мяча

    const drawInterval = setInterval(() => {
      this.#draw();
    }, 25);

    allIntervals.push(drawInterval);
  }

  #draw() {
    this.#ctx.clearRect(
      0,
      0,
      this.#canvasBlock.width,
      this.#canvasBlock.height
    );

    this.#drawBall();
    this.#drawPaddle();
    this.#drawScore();
    this.#drawLives();
    this.#drawBricks();
    this.#collisionDetection();

    if (
      this.#ball.ballPositionX + this.#ball.dx >
        this.#canvasBlock.width - this.#ball.ballRadius ||
      this.#ball.ballPositionX + this.#ball.dx < this.#ball.ballRadius
    ) {
      this.#ball.dx = -this.#ball.dx;
    }

    if (this.#ball.ballPositionY + this.#ball.dy < this.#ball.ballRadius) {
      this.#ball.dy = -this.#ball.dy;
    } else if (
      this.#ball.ballPositionY + this.#ball.dy >
      this.#canvasBlock.height - this.#ball.ballRadius
    ) {
      if (
        this.#ball.ballPositionX + this.#ball.ballRadius >
          this.#paddle.paddlePositionX &&
        this.#ball.ballPositionX + this.#ball.ballRadius <
          this.#paddle.paddlePositionX + this.#paddle.paddleWidth
      ) {
        this.#ball.dy = -this.#ball.dy;
      } else {
        this.#lives -= 1;
        if (this.#lives <= 0) {
          alert(`GAME OVER. YOUR SCORE - ${this.#score}`);
          clearAllIntervals();
          this.#createCirclAndPeddle();
          this.#lives = 4;
          this.#score = 0;
        } else {
          this.#ball.ballPositionX = this.#canvasBlock.width / 2;
          this.#ball.ballPositionY = this.#canvasBlock.height - 30;
          this.#paddle.paddlePositionX =
            (this.#canvasBlock.width - this.#paddle.paddleWidth) / 2;
        }
      }
    }
    this.#ball.ballPositionX += this.#ball.dx;
    this.#ball.ballPositionY += this.#ball.dy;
  }

  #drawBall() {
    this.#ctx.beginPath();
    this.#ctx.arc(
      this.#ball.ballPositionX,
      this.#ball.ballPositionY,
      this.#ball.ballRadius,
      0,
      Math.PI * 2
    );
    this.#ctx.fillStyle = "red";
    this.#ctx.fill();
    this.#ctx.closePath();
  }

  #drawPaddle() {
    this.#ctx.beginPath();
    this.#ctx.rect(
      this.#paddle.paddlePositionX,
      this.#canvasBlock.height - this.#paddle.paddleHeight,
      this.#paddle.paddleWidth,
      this.#paddle.paddleHeight
    );
    this.#ctx.fillStyle = "#04aa6d";
    this.#ctx.fill();
    this.#ctx.closePath();
  }

  #drawBricks() {
    for (let c = 0; c < this.#bricksParams.brickColumnCount; c++) {
      for (let r = 0; r < this.#bricksParams.brickRowCount; r++) {
        // Проверка, попадал ли мяч в кирпичик
        if (this.#bricks[c][r].isRenering) {
          const brickPositionX =
            c *
              (this.#bricksParams.brickWidth +
                this.#bricksParams.brickPadding) +
            this.#bricksParams.brickOffsetLeft;
          const brickPositionY =
            r *
              (this.#bricksParams.brickHeight +
                this.#bricksParams.brickPadding) +
            this.#bricksParams.brickOffsetTop;

          this.#bricks[c][r].x = brickPositionX;
          this.#bricks[c][r].y = brickPositionY;

          this.#ctx.beginPath();
          this.#ctx.rect(
            brickPositionX,
            brickPositionY,
            this.#bricksParams.brickWidth,
            this.#bricksParams.brickHeight
          );
          this.#ctx.fillStyle = "#04aa6d";
          this.#ctx.fill();
          this.#ctx.closePath();
        }
      }
    }
  }

  #collisionDetection() {
    for (let c = 0; c < this.#bricksParams.brickColumnCount; c++) {
      for (let r = 0; r < this.#bricksParams.brickRowCount; r++) {
        const brick = this.#bricks[c][r];

        if (
          brick.isRenering &&
          this.#ball.ballPositionX > brick.x &&
          this.#ball.ballPositionX < brick.x + this.#bricksParams.brickWidth &&
          this.#ball.ballPositionY > brick.y &&
          this.#ball.ballPositionY < brick.y + this.#bricksParams.brickHeight
        ) {
          this.#ball.dy = -this.#ball.dy;
          brick.isRenering = false;
          this.#score += 1;
          if (
            this.#score ===
            this.#bricksParams.brickRowCount *
              this.#bricksParams.brickColumnCount
          ) {
            alert("YOU WIN, CONGRATULATIONS!");
            this.#createCirclAndPeddle();
            this.#lives = 4;
            this.#score = 0;
          }
        }
      }
    }
  }

  #drawScore() {
    this.#ctx.font = "16px Arial";
    this.#ctx.fillStyle = "#0095DD";
    this.#ctx.fillText(
      "Score: " + this.#score,
      this.#canvasBlock.width / 2 - 20,
      this.#canvasBlock.height / 2 + 20
    );
  }
  #drawLives() {
    this.#ctx.font = "16px Arial";
    this.#ctx.fillStyle = "#0095DD";
    this.#ctx.fillText(
      "Lives: " + this.#lives,
      this.#canvasBlock.width / 2 - 20,
      this.#canvasBlock.height / 2 + 40
    );
  }
}
