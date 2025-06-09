import { motion } from 'framer-motion';
const projects = [
    {
        title: "RaceWise",
        description: "AI model that predicts NBA game outcomes with 70% accuracy.",
        tech: ["Python", "React", "Machine Learning"],
        link: "https://github.com/WillNoon/RaceWise"
    },
    {
        title: "UniSphere",
        description: "Student Connection and Collaboration Social Media App.",
        tech: ["Python", "Javascript", "HTML/CSS"],
        link: "https://github.com/WillNoon/Codebrew2024"
    },
    {
        title: "Smart Fridge Prototype",
        description: "Built a smart fridge using a Raspberry Pi, camera, and thermometer to detect and monitor food items. Trained a custom ML.NET model for image recognition and developed the system in C# with real-time temperature tracking.",
        tech: ["Python", "Javascript", "HTML/CSS"]
    }
]

function Projects(){
    return (
        <div id="projects" className="px-6 py-20 bg-white text-gray-800 font-sans dark:bg-gray-700 dark:text-gray-200">
            <h2 className="text-3xl font-bold mb-6 mx-5">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-5">
                {projects.map((project, index) => (


                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 dark:bg-gray-800"
                    >
                        <h3 className="text-x1 font-bold">{project.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                        <div className="mt-2 text-xs text-gray-500">
                            {project.tech.join(" | ")}
                        </div>

                        {project.link && (
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferencer"
                            className="inline-block mt-4 text-sm text-blue-600 hover:underline"
                            >
                                View on Github →
                            </a>
                        )}
                    </motion.div>  
                    
                    
                ))}
            </div>
        </div>
    );
}
export default Projects;