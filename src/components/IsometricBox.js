import React, { useRef, useEffect } from "react";

function IsometricBox({
  dboxLength,
  dboxWidth,
  dboxHeight,
  dboxColor = "#ff8d4b",
}) {
  const canvasRef = useRef(null);

  // Draw function adapted for React
  function drawCube(ctx, x, y, wx, wy, h, color) {
    function shadeColor(color, percent) {
      color = color.substr(1);
      var num = parseInt(color, 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = ((num >> 8) & 0x00ff) + amt,
        B = (num & 0x0000ff) + amt;
      return (
        "#" +
        (
          0x1000000 +
          (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
          (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
          (B < 255 ? (B < 1 ? 0 : B) : 255)
        )
          .toString(16)
          .slice(1)
      );
    }

    // Draw the cube
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, -10);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 10);
    ctx.strokeStyle = shadeColor(color, 50);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 20);
    ctx.strokeStyle = shadeColor(color, 60);
    ctx.stroke();
    ctx.fill();

    // First line - from the middle of the width side to the end of the length side
    const midWidthX = x - wx / 2;
    const midWidthY = y - h - (wx * 0.5) / 2;
    const endLengthX = x - wx / 2 + wy;
    const endLengthY = y - h - (wx * 0.5) / 2 - wy * 0.5;

    ctx.beginPath();
    ctx.moveTo(midWidthX, midWidthY);
    ctx.lineTo(endLengthX, endLengthY);
    ctx.strokeStyle = "#000";
    ctx.stroke();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas width to the full viewport width
    canvas.width = window.innerWidth;

    // Optional: Set a fixed height or use a percentage of the viewport height
    canvas.height = window.innerHeight * 0.5;

    // Function to handle window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.5; // Adjust the height as needed
    };
    // Animation function
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var wobble = (Math.sin(Date.now() / 250) * window.innerHeight) / 50;

      drawCube(
        ctx,
        canvas.width / 2,
        canvas.height / 2 + wobble + dboxHeight / 2,
        dboxLength,
        dboxWidth,
        dboxHeight,
        dboxColor
      );
      requestAnimationFrame(draw);
    }
    draw();
    // Add event listener to resize canvas on window resize
    window.addEventListener("resize", resizeCanvas);

    // Cleanup: remove event listener when the component unmounts
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [dboxLength, dboxWidth, dboxHeight, dboxColor]);

  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ width: "100vw", display: "block" }} />
    </div>
  );
}

export default IsometricBox;
