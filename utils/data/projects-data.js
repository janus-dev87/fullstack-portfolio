import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SmartChat',
        description: "Developed a conversational AI chatbot for a healthcare company, allowing patients to interact with a virtual assistant for appointment scheduling, medication reminders, and symptom checking. Integrated Langchain and ChatGPT to enable natural language processing and understanding. Built a React Native mobile app for a seamless user experience. Result: 30% increase in patient engagement and 25% reduction in support queries.",
        tools: ['React Native', 'Node.js', 'OpenAI API', 'Langchain', 'Natural Language Processing (NLP)', 'ChatGPT'],
        role: 'Lead Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'EcomPlus',
        description: 'Built a scalable e-commerce platform for a retail company, featuring a machine learning-based recommendation system. Utilized Next.js for the frontend and Django for the backend, with Python and TensorFlow for machine learning model development. Implemented a real-time inventory management system and integrated payment gateways. Result: 25% increase in sales and 30% reduction in inventory costs.',
        tools: ['NextJS', 'Tailwind CSS', "Django", "Python", "Machine Learning", "MySQL", "AWS S3", "TensorFlow", "Gmail Passkey"],
        role: 'Senior Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'MedMinder',
        description: "Developed a cross-platform mobile app for medication reminders and tracking, using Flutter and FlutterFlow. Designed a user-friendly interface and integrated with Bubble.io for no-code development. Built a backend using Node.js and MongoDB for data storage and analytics. Result: 4.5-star rating on the app store and 20% increase in user engagement.",
        tools: ['Flutter', 'FlutterFlow', 'iOS', 'Android', 'React', 'Redux', 'Bubble.io'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Lead Mobile App Developer',
    }
];
