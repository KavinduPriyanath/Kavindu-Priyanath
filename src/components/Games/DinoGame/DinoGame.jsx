import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import obstacleImage from '../../../assets/dinorun/cactus.png'; // Import your obstacle image here

const DinoGame = () => {
    const gameRef = useRef(null);

    useEffect(() => {
        if (gameRef.current) {
            return;
        }

        const config = {
            type: Phaser.AUTO,
            width: 300,
            height: 150,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 }, // Changed to 0 for a flat ground
                    debug: false,
                },
            },
            scene: {
                preload,
                create,
                update,
            },
        };

        const game = new Phaser.Game(config);
        gameRef.current = game;

        let dino;
        let obstacles;
        let cursors;
        let isJumping = false;

        function preload() {
            this.load.image('dino', obstacleImage); // Ensure correct path
            this.load.image('obstacle', obstacleImage);
        }

        function create() {
            dino = this.physics.add.sprite(50, 120, 'dino').setScale(0.5); // Adjusted y position
            dino.setCollideWorldBounds(true);

            obstacles = this.physics.add.group({
                key: 'obstacle',
                repeat: 1,
                setXY: { x: 300, y: 120, stepX: 400 },
            });

            this.physics.add.collider(dino, obstacles, hitObstacle, null, this);

            cursors = this.input.keyboard.createCursorKeys();
            this.input.on('pointerdown', jumpDino);
        }

        function update() {
            if (cursors.left.isDown) {
                dino.setVelocityX(-160);
            } else if (cursors.right.isDown) {
                dino.setVelocityX(160);
            } else {
                dino.setVelocityX(0);
            }

            obstacles.children.iterate(function (obstacle) {
                if (obstacle.x < -50) {
                    obstacle.x = 300;
                }
            });
        }

        function jumpDino() {
            if (dino.body.touching.down && !isJumping) {
                isJumping = true;
                dino.setVelocityY(-330);
                setTimeout(() => (isJumping = false), 600);
            }
        }

        function hitObstacle() {
            dino.setTint(0xff0000);
            this.physics.pause();
        }

        return () => {
            if (game) {
                game.destroy(true);
            }
        };
    }, []);

    return <div id="dino-game-container" style={{ width: '300px', height: '150px', border: '1px solid black' }} />;
};

export default DinoGame;