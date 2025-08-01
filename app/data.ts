type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date?: string
}

type WorkExperience = {
  description: any
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Education = {
  description: any
  institution: string
  degree: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Extending the Bandwidth of Piezoelectric Transducers with Passive Compensation',
    description: 'A practical study on extending the bandwidth of a piezoelectric transducer using passive R-L compensation and circuit optimization',
    link: '/blog/compensating-piezoelectric-transducers',
    uid: 'blog-1',
    date: '03/12/2024',
  },
  {
    title: 'Spark Gap Discharge as Ultrasonic Sound Source',
    description:
      'An experimental impulsive broadband ultrasonic emitter using spark discharge and acoustic horn filtering',
    link: '/blog/ultrasonic-spark-gap-source',
    uid: 'blog-2',
    date: '03/12/2024',
  },
  {
    title: 'uDSP-Card: XCORE.AI Development Board for Portable Applications',
    description:
      'A compact DSP development board for real-time embedded audio and sensing',
    link: '/blog/udsp-card',
    uid: 'blog-3',
    date: '03/12/2024',
  },
  {
    title: 'A Note on Room Impulse Response (RIR) measurement quality metrics',
    description:
      'Writing in progress. This article is currently in development.',
    link: '',
    uid: 'blog-4',
  },
  {
    title: 'Harmonic Fusion: A Electro-Smith DAISY based Eurorack Module',
    description:
      'Writing in progress. This article is currently in development.',
    link: '',
    uid: 'blog-5',
  },
  {
    title: 'A Note on Spatial Distribution of the Diffuse Energy in Reverb',
    description:
      'Writing in progress. This article is currently in development.',
    link: '',
    uid: 'blog-6',
  },
  {
    title: 'Multithreaded Operating Point Simulation with ngSpice and KiCad',
    description:
      'Writing in progress. This article is currently in development.',
    link: '',
    uid: 'blog-7',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Georg Neumann GmbH',
    title: 'Research Intern',
    start: '01/2024',
    end: '03/2024',
    link: 'https://www.neumann.com/',
    id: 'work1',
    description: [
      'Developed a background-noise-adaptive room impulse response measurement algorithm using Python'
    ],
  },
  {
    company: 'Professorship AIP, Technical University of Munich',
    title: 'Teaching Assistant',
    start: '04/2023',
    end: '07/2023',
    link: 'https://www.ce.cit.tum.de/en/aip/home/',
    id: 'work2',
    description: [
      'Supervised coding classes (~10 participants) on signal processing for audio effects using MATLAB'
    ],
  },
  {
    company: 'Harman GmbH',
    title: 'Working Student, Audio Engineering',
    start: '03/2022',
    end: '10/2022',
    link: 'https://www.harman.com/',
    id: 'work3',
    description: [
      'Developed and validated algorithms for loudspeaker equalization in car audio systems using MATLAB',
    ],
  },
  {
    company: 'Silver Atena GmbH',
    title: 'Working Student, Circuit Design',
    start: '09/2021',
    end: '02/2022',
    link: 'https://www.silver-atena.com/',
    id: 'work4',
    description: [
      'Designed and simulated a high-power CLLC resonant converter using ngSpice and Python',
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'Technical University of Munich',
    degree: 'M.Sc. Electrical Engineering and Information Technology',
    start: '04/2022',
    end: '03/2025',
    link: 'https://www.tum.de/',
    id: 'education1',
    description: [
      'Relevant coursework: ASIP Design Hackathon, Deep Learning and Inverse Problems, DSP for Audio Technologies, Embedded System Design for Machine Learning, Embedded Systems and Security, Machine Learning and Optimization, Multirate Signal Processing, Musical Acoustics, Seminar on Audio Research, Technical Acoustics, The Auditory System',
      'Master’s thesis on “Ultrasonic Hearing for Human Echolocation”'
    ],
  },
  {
    institution: 'Acoustics Lab, Aalto University',
    degree: 'Master’s Thesis',
    start: '06/2024',
    end: '11/2024',
    link: 'https://www.aalto.fi/en/aalto-acoustics-lab',
    id: 'education2',
    description: [
      'Designed hardware and DSP of a wearable PoC device for ultrasonic-based spatial echolocation',
      'Included a multiboard design with an XMOS MCU, broadband impedance-compensated piezo transducers, ultrasonic arc unit, MEMS microphone array, wireless capability, and BMS',
      'Supported by the EIKON e.V. scholarship (TUM)'
    ],
  },
  {
    institution: 'Technical University of Munich',
    degree: 'B.Sc. Electrical Engineering and Information Technology',
    start: '10/2018',
    end: '03/2022',
    link: 'https://www.tum.de/',
    id: 'education3',
    description: [
      'Relevant coursework: Amplifier Circuits, Communication Acoustics, Real-Time Systems, Real-Time Programming Lab, Signal Processing',
      'Bachelor’s thesis on “Simulation of diﬀuse reverb with scattering coeﬃcients”'
    ],
  },
]

export const TOOLS_TECH: {
  id: string;
  title: string;
  items: string[];
}[] = [
    {
      id: 'languages',
      title: 'Languages & Libraries',
      items: ['C', 'C++', 'JUCE', 'MATLAB', 'Python', 'Qt', 'VCV Rack', 'VHDL'].sort(),
    },
    {
      id: 'embedded',
      title: 'Embedded Platforms & RTOS',
      items: ['Embedded Linux', 'ESP32', 'FreeRTOS', 'Rockchip', 'STM32', 'XMOS'].sort(),
    },
    {
      id: 'circuits',
      title: 'Circuit Design & Simulation',
      items: ['KiCad', 'LTspice', 'ngSpice'].sort(),
    },
    {
      id: 'design',
      title: 'Design & Prototyping',
      items: ['FreeCAD', 'OpenSCAD', 'Penpot', 'Vectary', 'draw.io'].sort(),
    },
    {
      id: 'productivity',
      title: 'Productivity & Documentation',
      items: ['Git', 'Obsidian', 'ResearchRabbit', 'Texifier', 'Zotero'].sort(),
    },
  ];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/crsknr',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/christoph-kiener',
  },
]

export const EMAIL = 'christoph.kiener@outlook.com'
