import React from 'react';
import Valorant from "../assets/fav/valorant.jpg"
import Genshin from "../assets/fav/genshin.jpg"
import Minecraft from "../assets/fav/minecraft.jpg"
import Naruto from "../assets/fav/naruto.png"
import BlackClover from "../assets/fav/blackclover.jpg"
import MHA from "../assets/fav/mha.jpg"

function AboutMore() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-black text-4xl font-semibold mb-4 text-center">
        A bit more about me...
      </h1>

      <p className="text-lg text-center mt-4 text-black">
        Well, these are my top 3 favorite PC games
      </p>
      <p className="text-sm text-center mb-8 text-black text-gray-400">
        (I also play a lot of hyper casual games 😉)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <img
            src={Valorant}
            alt="Game 1"
            className="w-32 h-32 object-cover mb-2 rounded-lg"
          />
          <p className="font-bold text-blue-600">Valorant</p>
          <p className="text-sm font-semibold text-green-600">150 hours +</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Genshin}
            alt="Game 2"
            className="w-32 h-32 object-cover mb-2 rounded-lg"
          />
          <p className="font-bold text-blue-600">Genshin Impact</p>
          <p className="text-sm text-gray-600">&gt; 500 hours</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Minecraft}
            alt="Game 3"
            className="w-32 h-32 object-cover mb-2 rounded-lg"
          />
          <p className="font-bold text-blue-600">Minecraft</p>
          <p className="text-sm text-gray-600">&gt; 1000 hours</p>
        </div>
      </div>

      <p className="text-lg text-center my-8 text-black">
        And I watch a lot of Animes. These are my top 3 favorite animes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center">
          <img
            src={Naruto}
            alt="Game 1"
            className="w-32 h-32 object-cover mb-2 rounded-lg"
          />
          <p className="font-bold text-blue-600">Naruto</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={BlackClover}
            alt="Game 2"
            className="w-32 h-32 object-cover mb-2 rounded-lg"
          />
          <p className="font-bold text-blue-600">Black Clover</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={MHA}
            alt="Game 3"
            className="w-32 h-32 object-cover mb-2 rounded-lg"
          />
          <p className="font-bold text-blue-600">My Hero Academia</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMore;
