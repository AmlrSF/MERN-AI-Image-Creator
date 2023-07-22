import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  heroImg,heroImg1,heroImg2,heroImg3,heroImg4,heroImg5,heroImg6,
  V1,V2,V3

} from "../assets";

const randomPrompt = [
  'an armchair in the shape of an avocado',
  'a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers',
  'teddy bears shopping for groceries in Japan, ukiyo-e',
  'an oil painting by Matisse of a humanoid robot playing chess',
  'panda mad scientist mixing sparkling chemicals, digital art',
  "a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art",
  '3D render of a cute tropical fish in an aquarium on a dark blue background, digital art',
  'an astronaut lounging in a tropical resort in space, vaporwave',
  'an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background',
  'a stained glass window depicting a hamburger and french fries',
  'a pencil and watercolor drawing of a bright city in the future with flying cars',
  'a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art',
  'a fortune-telling shiba inu reading your fate in a giant hamburger, digital art',
  '"a sea otter with a pearl earring" by Johannes Vermeer',
  'an oil pastel drawing of an annoyed cat in a spaceship',
  'a painting of a fox in the style of Starry Night',
  'a bowl of soup that looks like a monster, knitted out of wool',
  'A plush toy robot sitting against a yellow wall',
  'A synthwave style sunset above the reflecting water of the sea, digital art',
  'Two futuristic towers with a skybridge covered in lush foliage, digital art',
  'A 3D render of a rainbow colored hot air balloon flying above a reflective lake',
  'A comic book cover of a superhero wearing headphones',
  'A centered explosion of colorful powder on a black background',
  'A photo of a Samoyed dog with its tongue out hugging a white Siamese cat',
  'A photo of a white fur monster standing in a purple room',
  "A photo of Michelangelo's sculpture of David wearing headphones djing",
  'A Samurai riding a Horse on Mars, lomography.',
  'A modern, sleek Cadillac drives along the Gardiner expressway with downtown Toronto in the background, with a lens flare, 50mm photography',
  'A realistic photograph of a young woman with blue eyes and blonde hair',
  'A man standing in front of a stargate to another dimension',
  'Spongebob Squarepants in the Blair Witch Project',
  'A velociraptor working at a hotdog stand, lomography',
  'A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens',
  'A BBQ that is alive, in the style of a Pixar animated movie',
  'A futuristic cyborg dance club, neon lights',
  'The long-lost Star Wars 1990 Japanese Anime',
  'A hamburger in the shape of a Rubik’s cube, professional food photography',
  'A Synthwave Hedgehog, Blade Runner Cyberpunk',
  'An astronaut encountering an alien life form on a distant planet, photography',
  'A Dinosaur exploring Cape Town, photography',
  'A Man falling in Love with his Computer, digital art',
  'A photograph of a cyborg exploring Tokyo at night, lomography',
  'Dracula walking down the street of New York City in the 1920s, black and white photography',
  'Synthwave aeroplane',
  'A man wanders through the rainy streets of Tokyo, with bright neon signs, 50mm',
  'A Space Shuttle flying above Cape Town, digital art',
];

const aiImageTags = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Neural Networks",
  "Data Science",
  "Robotics",
  "Automation",
  "Natural Language Processing",
  "Computer Vision",
  "Big Data",
  "Algorithm",
  "Chatbot",
  "Virtual Assistant",
  "Internet of Things",
  "Data Analysis",
  "Predictive Analytics",
  "Pattern Recognition",
  "AI Ethics",
  "AI Research",
  "Automation Technology",
  "Human-Machine Interaction",
  "Speech Recognition",
  "Image Recognition",
  "Autonomous Vehicles",
  "Cognitive Computing",
  "Computer Science",
  "Data Mining",
  "Machine Vision",
  "Reinforcement Learning",
  "AI Applications",
  "AI Algorithms",
  "AI Development",
  "AI Technology",
  "AI Solutions",
  "AI Programming",
  "AI in Healthcare",
  "AI in Finance",
  "AI in Education",
  "AI in Marketing",
  "AI in Gaming",
  "AI in Agriculture",
  "AI in Manufacturing",
  "AI in Customer Service",
  "AI in Security",
  "AI in Transportation",
  "AI in Retail",
  "AI in Energy",
  "AI in Entertainment",
];


const hero = [
  {
    icon: heroImg,
  },
  {
    icon: heroImg1,
  },
  {
    icon: heroImg2,
  },
  {
    icon: heroImg3,
    rows:2
  },
  {
    icon: heroImg5,
    cols:2
  },
  {
    icon: heroImg6,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "write a prompt",
    setp: "First Step",
    icon: V1,
    iconBg: "#383E56",
    points: "Yuga Labs, the team behind the BAYC NFT collection, went further by creating MAYC. With an already established team and clear goals, this project is destined for success. There are 20,000 MAYC NFTs, which are traded for around 10.8 ETH ($12,800)."
  },{
    title: "Choose what to print",
    setp: "Second Step",
    icon: V2,
    iconBg: "#383E56",
    points: "Yuga Labs, the team behind the BAYC NFT collection, went further by creating MAYC. With an already established team and clear goals, this project is destined for success. There are 20,000 MAYC NFTs, which are traded for around 10.8 ETH ($12,800). Not bad, considering that we are in the worst bear market in the last five years."
  }, {
    title: "Order your art",
    setp: "Third Step",
    icon: V3,
    iconBg: "#383E56",
    points: "Owning land in the real world can be expensive, so why not transition to the Metaverse? The Otherside NFT collection is one of the most extensive in the world of NFTs. Considering it has over 99,000 NFTs, it’s crazy to think that the floor price per Otherside NFT stands at 1.10 ETH ($1,300), which is more than the late 2022 price of Ethereum! ."
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const navLinks = [
  {
    id: "Process",
    title: "Process",
  },
  {
    id: "Template",
    title: "Template",
  },
  {
    id: "About",
    title: "About",
  }
];

export { technologies, experiences, testimonials, projects, hero,randomPrompt ,aiImageTags};

