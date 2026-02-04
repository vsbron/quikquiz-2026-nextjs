export const technologyQuestions: QuestionsPack = {
  slug: "technology",
  title: "Technology",
  description:
    "From gadgets to innovations, explore the digital world and test your tech-savviness",
  difficulties: {
    casual: [
      {
        id: 1,
        question: `What does "CPU" stand for?`,
        answers: [
          "Central Processing Unit",
          "Computer Power Unit",
          "Core Processing Utility",
          "Central Performance Unit",
        ],
        correctAnswer: "Central Processing Unit",
      },
      {
        id: 2,
        question: "Which company created the iPhone?",
        answers: ["Apple", "Samsung", "Google", "Microsoft"],
        correctAnswer: "Apple",
      },
      {
        id: 3,
        question: "Which device is shown in the image?",
        image: "tech_device_smartphone.jpg",
        answers: ["Smartphone", "Tablet", "Smartwatch", "Laptop"],
        correctAnswer: "Smartphone",
      },
      {
        id: 4,
        question: "What does Wi-Fi allow devices to do?",
        answers: [
          "Connect to the internet wirelessly",
          "Store data",
          "Charge faster",
          "Increase screen resolution",
        ],
        correctAnswer: "Connect to the internet wirelessly",
      },
      {
        id: 5,
        question: "Which company developed Windows?",
        answers: ["Microsoft", "Apple", "IBM", "Google"],
        correctAnswer: "Microsoft",
      },
      {
        id: 6,
        question: "What is the main purpose of a web browser?",
        answers: [
          "Access websites",
          "Write code",
          "Store files",
          "Protect against viruses",
        ],
        correctAnswer: "Access websites",
      },
      {
        id: 7,
        question: "Which symbol is shown in the image?",
        image: "tech_logo_bluetooth.jpg",
        answers: ["Bluetooth", "Wi-Fi", "NFC", "USB"],
        correctAnswer: "Bluetooth",
      },
      {
        id: 8,
        question: `What does "USB" stand for?`,
        answers: [
          "Universal Serial Bus",
          "Unified System Board",
          "Universal Storage Base",
          "User Signal Bridge",
        ],
        correctAnswer: "Universal Serial Bus",
      },
      {
        id: 9,
        question: "Which device is primarily used to store data long-term?",
        answers: ["Hard drive", "CPU", "RAM", "Cache"],
        correctAnswer: "Hard drive",
      },
      {
        id: 10,
        question: "Which company created Android?",
        answers: ["Google", "Apple", "Samsung", "Nokia"],
        correctAnswer: "Google",
      },
    ],

    moderate: [
      {
        id: 1,
        question: `What does "HTTP" stand for?`,
        answers: [
          "HyperText Transfer Protocol",
          "High Transmission Text Process",
          "Hyperlink Transfer Program",
          "Host Transfer Protocol",
        ],
        correctAnswer: "HyperText Transfer Protocol",
      },
      {
        id: 2,
        question:
          "Which programming language is primarily used for web styling?",
        answers: ["CSS", "HTML", "JavaScript", "Python"],
        correctAnswer: "CSS",
      },
      {
        id: 3,
        question: "Which company developed the Linux kernel?",
        answers: ["Community-driven", "Microsoft", "Apple", "IBM"],
        correctAnswer: "Community-driven",
      },
      {
        id: 4,
        question: "Which device component is shown in the image?",
        image: "tech_component_cpu.jpg",
        answers: ["CPU", "GPU", "RAM", "SSD"],
        correctAnswer: "CPU",
      },
      {
        id: 5,
        question: `What does "SSD" stand for?`,
        answers: [
          "Solid State Drive",
          "System Storage Device",
          "Super Speed Disk",
          "Secure Storage Drive",
        ],
        correctAnswer: "Solid State Drive",
      },
      {
        id: 6,
        question: "Which technology allows contactless payments?",
        answers: ["NFC", "Bluetooth", "Infrared", "GPS"],
        correctAnswer: "NFC",
      },
      {
        id: 7,
        question: "Which company created the PlayStation?",
        answers: ["Sony", "Microsoft", "Nintendo", "Sega"],
        correctAnswer: "Sony",
      },
      {
        id: 8,
        question: "What is the purpose of an operating system?",
        answers: [
          "Manage hardware and software",
          "Increase internet speed",
          "Design websites",
          "Store files",
        ],
        correctAnswer: "Manage hardware and software",
      },
      {
        id: 9,
        question: "Which logo is shown in the image?",
        image: "tech_logo_github.jpg",
        answers: ["GitHub", "GitLab", "Bitbucket", "SourceForge"],
        correctAnswer: "GitHub",
      },
      {
        id: 10,
        question: "Which storage unit is the largest?",
        answers: ["Terabyte", "Gigabyte", "Megabyte", "Kilobyte"],
        correctAnswer: "Terabyte",
      },
    ],

    pro: [
      {
        id: 1,
        question: `What does "DNS" translate domain names into?`,
        answers: ["IP addresses", "MAC addresses", "URLs", "Ports"],
        correctAnswer: "IP addresses",
      },
      {
        id: 2,
        question:
          "Which computing concept allows multiple virtual machines on one physical machine?",
        answers: ["Virtualization", "Multithreading", "Clustering", "Caching"],
        correctAnswer: "Virtualization",
      },
      {
        id: 3,
        question: "Which protocol secures web traffic using encryption?",
        answers: ["HTTPS", "FTP", "HTTP", "SMTP"],
        correctAnswer: "HTTPS",
      },
      {
        id: 4,
        question: "Which technology diagram is shown in the image?",
        image: "tech_diagram_client_server.jpg",
        answers: [
          "Client-server model",
          "Peer-to-peer network",
          "Blockchain",
          "Mesh network",
        ],
        correctAnswer: "Client-server model",
      },
      {
        id: 5,
        question: "Which company created the first commercial microprocessor?",
        answers: ["Intel", "IBM", "AMD", "Motorola"],
        correctAnswer: "Intel",
      },
      {
        id: 6,
        question: "What is the primary role of a GPU?",
        answers: [
          "Render graphics",
          "Manage storage",
          "Handle networking",
          "Control input devices",
        ],
        correctAnswer: "Render graphics",
      },
      {
        id: 7,
        question: "Which programming paradigm emphasizes immutability?",
        answers: [
          "Functional programming",
          "Procedural programming",
          "Object-oriented",
          "Imperative",
        ],
        correctAnswer: "Functional programming",
      },
      {
        id: 8,
        question: "Which symbol is shown in the image?",
        image: "tech_logo_docker.jpg",
        answers: ["Docker", "Kubernetes", "Linux", "Git"],
        correctAnswer: "Docker",
      },
      {
        id: 9,
        question: `What does "API" stand for?`,
        answers: [
          "Application Programming Interface",
          "Advanced Processing Instruction",
          "Automated Program Interaction",
          "Application Process Index",
        ],
        correctAnswer: "Application Programming Interface",
      },
      {
        id: 10,
        question:
          "Which system uses blocks chained together to store data securely?",
        answers: [
          "Blockchain",
          "Relational database",
          "Cloud storage",
          "File system",
        ],
        correctAnswer: "Blockchain",
      },
    ],
  },
};
