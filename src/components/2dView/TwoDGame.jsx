import React, { useEffect } from 'react'
import Phaser from "phaser";

const TwoDGame = ({ config }) => {
  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true)
    }
  }, [])

  return (
    <div id="phaser-container" />
  )
}

export default TwoDGame