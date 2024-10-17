import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

//import service images
import GameDevelopment from "../assets/services/GameDevelopment.jpeg"
import GameDesign from "../assets/services/GameDesign.jpeg"
import InteractiveApp from "../assets/services/InteractiveApp.jpeg"
import ToolDevelopment from "../assets/services/ToolDevelopment.jpeg"
import GameData from "../assets/services/GameData.jpeg"
import GameQA from "../assets/services/GameQA.jpeg"

//import game icons
import Meta11 from "../assets/games/Meta11.png"
import Algorithmia from "../assets/games/Algorithmia.png"
import InkWorld from "../assets/games/InkWorld.png"
import DexesTrials from "../assets/games/DexesTrials.png"
import MineCantCraft from "../assets/games/MineCantCraft.png"
import EverySnake from "../assets/games/EverySnake.png"
import VIMCommandTunnel from "../assets/games/VIMCommandTunnel.png"
import TwoSwords from "../assets/games/TwoSwords.png"
import FalseReality from "../assets/games/FalseReality.png"
import SkyPrison from "../assets/games/SkyPrison.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate Software Engineer with a strong interest in game development and a drive to create immersive gaming experiences. I am knowledgeable in, game designing, game programming, machine learning, data analytics, game monetisation, user acquisition and constantly exploring emerging technologies and staying updated on the latest trends in the gaming world.`;

export const EXPERIENCES = [
  {
    year: "2024 May - 2024 Oct",
    role: "Associate Unity3D Engineer",
    company: "- Behaviol (Pty) Ltd",
    description: `Designed and developed a fully dynamic, real-time AI commentary system for Meta11 fantasy Cricket Game using ElevenLabs and OpenAI APIs. Created Python GUI app to handle commentary templates and multiple python scripts to automate cleaning and recording tasks. Implemented an in-game event tracking system, and designed an algorithm for creating highlights from video recording of games. Integrated responsive UIs and designed a custom console for Unity Engine with filtering capabilities. Worked on tasks related to Physics System , Camera Updates and also gained a huge understanding about iGaming and Web3 gaming space.`,
    trivia: "Meta-11 project got shutdown... 😢",
    technologies: ["Unity", "C#", "OpenAI API", "Python", "PyQt5", "ElevenLabsAPI"],
  },
  {
    year: "2023 Nov - 2024 May",
    role: "Game Developer Intern",
    company: "- Behaviol (Pty) Ltd",
    description: `Modelled a bowling machine drone and programmed it's behavior. Also worked on batsman FPS Camera system and some other camera effects. Studied and practiced game frameworks like PixiJS, Phaser, and GDevelop for developing web mini-games. Worked on fielder locomotion and avatar implementations. Designed the basic version of the character creator with mesh, and color customizations, webGL build optimizations, and save & load systems. Developed an automation tool to import cricket shot animations into the game engine. Worked on asset migrations, render pipeline upgrades, minimaps, and spin meters. Researched about implementing Dynamic AI commentary system`,
    trivia: "Got promoted into Associate Unity3D Engineer!!! 🎉",
    technologies: ["Unity", "C#", "PixiJs", "Phaser", "GDevelop", "Blender"],
  },
  {
    year: "2021 - 2023 Nov",
    role: "Freelance/Indie Game Developer",
    company: "",
    description: `Worked on 5+ full games and game prototypes targeting Android, iOS and Web Platforms for different clients. Implemented features like Unity Ads, Google Admob, and In-App Purchases. Participated in several Game-Jams to hone the skills.`,
    trivia: "",
    technologies: ["Unity", "C#", "Photoshop", "Blender"],
  }
];

export const PROJECTS = [
  {
    title: "Game Development",
    image: GameDevelopment,
    description:
      "Full cycle development services with concept to deployment, making high-quality, engaging games for mobile, web and desktop platforms",
    offers: [
      "Fully detailed game design document",
      "Unity, UE5, Godot, GDevelop and Phaser expertise",
      "Well structured code base with optmized performance",
      "Free playtesting sessions"
    ],
  },
  {
    title: "Game Design",
    image: GameDesign,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    offers: [
      "Crafting narratives and game mechanics",
      "Designing fully functional game economies",
      "Progression systems, Reward systems"
    ],
  },
  {
    title: "Tool Development",
    image: ToolDevelopment,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    offers: [
      "Design tools to streamline pipeline from Blender to game engine",
      "Write Python scripts to automate repetitive tasks",
      "Custom editor scripts, and inspectors for Unity",
    ],
  },
  {
    title: "Interactive Applications",
    image: InteractiveApp,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    offers: [
      "Fully detailed game design document",
      "Unity, UE5, Godot, GDevelop and Phaser expertise",
      "Well structured code base with optmized performance",
      "Free playtesting sessions"
    ],
  },
  {
    title: "Game Data Analysis",
    image: GameData,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    offers: [
      "Fully detailed game design document",
      "Unity, UE5, Godot, GDevelop and Phaser expertise",
      "Well structured code base with optmized performance",
      "Free playtesting sessions"
    ],
  },
  {
    title: "Game QA and Playtesting",
    image: GameQA,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    offers: [
      "Fully detailed game design document",
      "Unity, UE5, Godot, GDevelop and Phaser expertise",
      "Well structured code base with optmized performance",
      "Free playtesting sessions"
    ],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const GAMES = [
  {
    title: "Meta 11 - Fantasy Cricket Game",
    image: Meta11,
    link: "https://youtu.be/0VlOiQCyMzk",
    game: "https://meta11.com/",
    description:
      "Meta11 is a fantasy virtual cricket game where every cricketer is an AI-driven Athlete. I joined the company behind Meta11, Behaviol as an intern and then promoted to an Associate Unity3D Engineer.",
  },
  {
    title: "Algorithmia - Edu-Sim Game",
    image: Algorithmia,
    link: "https://www.youtube.com/embed/ORsZ02-xxBI",
    game: "https://kavigames.itch.io/algorithmia",
    description:
      "An education simulation video game for learning Data Structures and Algorithms. It features adaptive learning based progression system to deliver the optimal results for players, In-game Pseudo code compiler, mini-games, life simulation features and many more.",
  },
  {
    title: "InkWorld",
    image: InkWorld,
    link: "https://www.youtube.com/embed/8-46jyqC3rg",
    game: "https://kavigames.itch.io/inkworld",
    description:
      "I have always wanted to play Splatoon, but since it’s not available for PCs, I decided to create a small prototype version of it and have some fun shooting paints.",
  },
  {
    title: "Dexes Trial",
    image: DexesTrials,
    link: "https://www.youtube.com/embed/I0YkNz-H3fo",
    game: "https://kavigames.itch.io/dexes-trial",
    description:
      "This is a First Person Adventure game I made for GMTK GameJam 2022 in 48 hours under the theme of 'Roll of the Dice'.",
  },
  {
    title: "MineCan'tCraft",
    image: MineCantCraft,
    link: "https://www.youtube.com/embed/QQBdYO_Ja-8",
    game: "https://kavigames.itch.io/minecantcraft",
    description:
      "A clone inspired by Minecraft and it's predecessor Infiniminer. After playing Minecraft for months, I got curious about it is actually made, so decided to learn by making a ripoff",
  },
  {
    title: "Every Snake",
    image: EverySnake,
    link: "https://youtu.be/0VlOiQCyMzk",
    game: "https://kavigames.itch.io/every-snake",
    description:
      "This game is the first remake of my 'My Own Image' game remakes series. Here I created many kinds of snake games I have seen/played into one game separated by game modes.",
  },
  {
    title: "VIM Command Tunnel",
    image: VIMCommandTunnel,
    link: "https://youtu.be/0VlOiQCyMzk",
    game: "https://kavigames.itch.io/vim-command-tunnel",
    description:
      "This is a game made for practicing VIM editor commands in a fun and interactive way. As a student, I had hard time memorizing the Vim Editor commands so I thought to make a game to practice myself.",
  },
  {
    title: "Two Swords",
    image: TwoSwords,
    link: "https://www.youtube.com/embed/0VlOiQCyMzk",
    game: "https://kavigames.itch.io/two-swords",
    description:
      "This is a game made for GMTK GameJam 2021 in 48 hours unders the theme of 'Joined Together'. Even though I managed to complete the game before the deadline, could not submit the game to the jam due to poor internet connection.",
  },
  {
    title: "False Reality",
    image: FalseReality,
    link: "https://youtu.be/0VlOiQCyMzk",
    game: "https://kavigames.itch.io/false-reality",
    description:
      "This is a 2D platformer game made for Brackey's GameJam 5 in 2021 under the theme of 'Stronger Together'.",
  },
  {
    title: "Sky Prison",
    image: SkyPrison,
    link: "https://youtu.be/0VlOiQCyMzk",
    game: "https://kavigames.itch.io/skyprison",
    description:
      "This is my first game I completed and published and it was made for Blackthornprod's first ever gamejam under the theme of 'Less is More'.",
  },
];