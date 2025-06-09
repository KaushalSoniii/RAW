
import { Project, NavLink } from './types';

export const SECTION_IDS = {
  HERO: 'hero',
  PROJECTS: 'projects',
  ABOUT: 'about',
  CONTACT: 'contact', // This ID will be used for the new ContactSection
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Projects', targetId: SECTION_IDS.PROJECTS },
  { label: 'About Us', targetId: SECTION_IDS.ABOUT },
  { label: 'Contact Us', targetId: SECTION_IDS.CONTACT },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj1',
    name: 'Sentinel Bot X1',
    description: 'Advanced autonomous surveillance robot with AI-powered threat detection and environmental analysis capabilities.',
    imageUrl: 'https://picsum.photos/seed/techcircuit/600/400', // More specific seed
    technologies: ['ROS2', 'Python', 'TensorFlow', 'LIDAR', 'Jetson AGX'],
    longDescription: 'The Sentinel Bot X1 is designed for high-stakes surveillance in complex environments. It features a robust sensor suite including advanced LIDAR and thermal imaging, real-time data processing via edge computing, and adaptive navigation algorithms for optimal performance in dynamic terrains. Its modular design allows for quick payload swaps for different mission profiles.',
    projectUrl: '#',
  },
  {
    id: 'proj2',
    name: 'AquaDrone Explorer',
    description: 'Submersible drone for underwater research, equipped with high-resolution imaging and water sampling systems.',
    imageUrl: 'https://picsum.photos/seed/abstractwater/600/400', // More specific seed
    technologies: ['C++', 'Arduino', 'Sonar', 'HD Camera', 'GPS', 'BlueRobotics BlueOS'],
    longDescription: 'AquaDrone Explorer can operate at depths up to 100 meters, providing valuable data for marine biology, environmental monitoring, and underwater infrastructure inspection. Its modular design allows for easy customization of sensor payloads, including multi-parameter water quality sensors and acoustic modems for subsea communication.',
    projectUrl: '#',
  },
  {
    id: 'proj3',
    name: 'Cobot Arm Assistant',
    description: 'Collaborative robotic arm for precision assembly tasks in manufacturing, enhancing productivity and worker safety.',
    imageUrl: 'https://picsum.photos/seed/roboticfactory/600/400', // More specific seed
    technologies: ['PLC', 'Python', 'OpenCV', 'Force Sensors', 'URDF', 'ROS Industrial'],
    longDescription: 'This Cobot Arm Assistant is engineered for seamless human-robot collaboration. It incorporates advanced safety features like power and force limiting, and intuitive programming interfaces (e.g., teaching by demonstration). Suitable for small to medium-sized enterprises looking to automate repetitive or ergonomically challenging tasks.',
    projectUrl: '#',
  },
  {
    id: 'proj4',
    name: 'AgriRover Automated',
    description: 'Smart agricultural rover for crop monitoring, soil analysis, and targeted pesticide/fertilizer application.',
    imageUrl: 'https://picsum.photos/seed/greenfieldtech/600/400', // More specific seed
    technologies: ['IoT', 'Raspberry Pi', 'GPS-RTK', 'Spectrometer', 'MQTT', 'LoRaWAN'],
    longDescription: 'AgriRover aims to revolutionize precision agriculture by providing farmers with actionable insights. It autonomously navigates fields, collects data using multispectral cameras and soil sensors, and performs tasks like micro-dosing fertilizers with high accuracy, contributing to sustainable farming practices and increased yields.',
  },
   {
    id: 'proj5',
    name: 'AeroScout VTOL',
    description: 'Vertical Take-Off and Landing (VTOL) drone for aerial surveying and emergency response.',
    imageUrl: 'https://picsum.photos/seed/vtolblueprint/600/400', // More specific seed
    technologies: ['PX4 Autopilot', 'C++', 'Long-range Comms', 'Thermal Cam', 'RTK GPS', 'QGroundControl'],
     longDescription: 'AeroScout VTOL combines the flexibility of multirotor drones with the endurance and speed of fixed-wing aircraft. It is ideal for large-area mapping, search and rescue operations over challenging terrain, and rapid infrastructure inspection in remote locations. Features redundant systems for enhanced reliability.',
  },
];