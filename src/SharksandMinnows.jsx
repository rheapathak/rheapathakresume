import React, { useRef, useEffect, useState } from "react";

const SharksAndMinnows = () => {
  const canvasRef = useRef(null);
  const scoreRef = useRef(0); // tracks current score for canvas drawing
  const [gameState, setGameState] = useState("start"); // start | playing | lost

  const canvasWidth = 800;
  const canvasHeight = 400;

  useEffect(() => {
    if (gameState !== "playing") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let player = { x: 50, y: 180, width: 30, height: 30, speed: 5 };
    let keys = {};

    const goal = { x: canvasWidth - 50, y: 0, width: 50, height: canvasHeight };
    let sharks = [
      {
        x: 200,
        y: 50,
        width: 60,
        height: 30,
        speedX: 2,
        speedY: 1.5,
      },
    ];

    const handleKeyDown = (e) => (keys[e.key.toLowerCase()] = true);
    const handleKeyUp = (e) => (keys[e.key.toLowerCase()] = false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const resetPlayer = () => {
      player.x = 50;
      player.y = 180;
    };

    function update() {
      if (keys["w"]) player.y -= player.speed;
      if (keys["s"]) player.y += player.speed;
      if (keys["a"]) player.x -= player.speed;
      if (keys["d"]) player.x += player.speed;

      player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
      player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

      sharks.forEach((shark) => {
        shark.x += shark.speedX;
        shark.y += shark.speedY;

        if (shark.x < 0 || shark.x + shark.width > canvas.width) shark.speedX *= -1;
        if (shark.y < 0 || shark.y + shark.height > canvas.height) shark.speedY *= -1;
      });

      for (let shark of sharks) {
        if (
          player.x < shark.x + shark.width &&
          player.x + player.width > shark.x &&
          player.y < shark.y + shark.height &&
          player.y + player.height > shark.y
        ) {
          setGameState("lost");
          return;
        }
      }

      if (player.x + player.width >= goal.x) {
        scoreRef.current += 1; // increment ref
        resetPlayer();

        sharks.push({
          x: Math.random() * (canvasWidth - 100),
          y: Math.random() * (canvasHeight - 50),
          width: 60,
          height: 30,
          speedX: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1),
          speedY: (Math.random() * 1.5 + 1) * (Math.random() < 0.5 ? -1 : 1),
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      ctx.fillStyle = "green";
      ctx.fillRect(goal.x, goal.y, goal.width, goal.height);

      ctx.fillStyle = "yellow";
      ctx.fillRect(player.x, player.y, player.width, player.height);

      ctx.fillStyle = "red";
      sharks.forEach((shark) =>
        ctx.fillRect(shark.x, shark.y, shark.width, shark.height)
      );

      ctx.fillStyle = "#FFD700";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${scoreRef.current}`, 20, 30); // read from ref
    }

    function gameLoop() {
      update();
      draw();
      if (gameState === "playing") requestAnimationFrame(gameLoop);
    }

    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState]);

  const startGame = () => {
    scoreRef.current = 0;
    setGameState("playing");
  };

  const restartGame = () => {
    scoreRef.current = 0;
    setGameState("playing");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {gameState === "start" && (
        <div style={{ textAlign: "center" }}>
          <h1>🐟 Sharks and Minnows 🦈</h1>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              background: "#FFD700",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "20px",
            }}
            onClick={startGame}
          >
            Play
          </button>
        </div>
      )}

      {gameState === "playing" && (
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            border: "3px solid #FFD700",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        ></canvas>
      )}

      {gameState === "lost" && (
        <div style={{ textAlign: "center" }}>
          <h1>💀 You Lost!</h1>
          <p>Final Score: {scoreRef.current}</p>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              background: "#FFD700",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "20px",
            }}
            onClick={restartGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default SharksAndMinnows;
