"use client";

import React, { useEffect, useRef } from "react";

const STAR_COUNT = 35;
const STAR_MIN_SIZE = 8; // px, for SVG size
const STAR_MAX_SIZE = 16;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// Helper to generate spaced positions
function generateSpacedPositions(count: number) {
  const positions: { x: number; y: number }[] = [];
  const gridSize = Math.ceil(Math.sqrt(count));
  const cellW = 100 / gridSize;
  const cellH = 100 / gridSize;
  let usedCells: Set<string> = new Set();

  for (let i = 0; i < count; i++) {
    let cellX, cellY, key;
    do {
      cellX = Math.floor(Math.random() * gridSize);
      cellY = Math.floor(Math.random() * gridSize);
      key = `${cellX},${cellY}`;
    } while (usedCells.has(key));
    usedCells.add(key);
    // Add some jitter within the cell
    const x = cellX * cellW + randomBetween(5, cellW - 5);
    const y = cellY * cellH + randomBetween(5, cellH - 5);
    positions.push({ x, y });
  }
  return positions;
}

const StarField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<SVGSVGElement[]>([]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Remove any previous stars
    container.innerHTML = "";
    const positions = generateSpacedPositions(STAR_COUNT);
    const stars: SVGSVGElement[] = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const size = randomBetween(STAR_MIN_SIZE, STAR_MAX_SIZE);
      const { x, y } = positions[i];
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", `${size}`);
      svg.setAttribute("height", `${size}`);
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.style.position = "absolute";
      svg.style.left = `${x}vw`;
      svg.style.top = `${y}vh`;
      svg.style.opacity = "0";
      svg.style.pointerEvents = "none";
      svg.style.transition = `opacity 0.6s, transform 0.6s`;
      svg.style.filter = "drop-shadow(0 0 6px white) drop-shadow(0 0 16px white)";
      svg.innerHTML = `
        <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" fill="white"/>
      `;
      container.appendChild(svg);
      stars.push(svg);
    }
    starsRef.current = stars;

    function animateStars() {
      stars.forEach((star) => {
        setTimeout(() => {
          star.style.opacity = "1";
          star.style.transform = `scale(${randomBetween(1, 1.3)})`;
          setTimeout(() => {
            star.style.opacity = "0";
            star.style.transform = "scale(1)";
          }, randomBetween(1200, 2500));
        }, randomBetween(0, 2000));
      });
    }

    const interval = setInterval(animateStars, 1000);
    animateStars();

    return () => {
      clearInterval(interval);
      stars.forEach((star) => container.removeChild(star));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
};

export default StarField; 