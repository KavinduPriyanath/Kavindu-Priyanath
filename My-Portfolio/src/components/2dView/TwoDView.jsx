import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import TwoDGame from "./TwoDGame";

class Example extends Phaser.Scene {
  preload() {
    this.load.setBaseURL("https://labs.phaser.io");

    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/particles/red.png");
  }

  create() {
    this.add.image(400, 300, "sky");

    const particles = this.add.particles(0, 0, "red", {
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    particles.startFollow(logo);
  }
}

const TwoDView = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const resizeGame = () => {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const footerHeight = document.querySelector('footer').offsetHeight;
      const availableHeight = window.innerHeight - navbarHeight - footerHeight;

      if (gameContainerRef.current) {
        gameContainerRef.current.style.height = `${availableHeight}px`;
      }

      if (window.game) {
        window.game.scale.resize(window.innerWidth, availableHeight);
      }
    };

    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-container',
      width: window.innerWidth,
      height: window.innerHeight, // Initial height, will be resized
      scene: Example,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
    };

    // Create the Phaser game instance
    window.game = new Phaser.Game(config);

    // Call resizeGame on load and on window resize
    resizeGame();
    window.addEventListener('resize', resizeGame);

    return () => {
      // Cleanup on component unmount
      if (window.game) {
        window.game.destroy(true);
        window.game = null;
      }
      window.removeEventListener('resize', resizeGame);
    };
  }, []);

  return (
    <div ref={gameContainerRef} id="phaser-container" style={{ width: '100%', overflow: 'hidden' }}>
      {/* The game canvas will be injected into this container */}
    </div>
  );
};

export default TwoDView;
