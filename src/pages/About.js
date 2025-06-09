import { motion } from 'framer-motion';
function About(){
    return (
        <div id="about" className="px-6 py-20 bg-gray-100 text-gray-800 font-sans dark:bg-gray-800 dark:text-gray-100">
            <div className="mx-5">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p>
                    William Noonan is a penultimate-year Bachelor of Science student majoring in Computing and Software Systems at the University of Melbourne.
                    He recently completed a semester abroad at the University of Pennsylvania, where he studied a broad range of computer science topics including
                    algorithms, cryptography and applied data science. 
                </p>
                <p className="mt-2">
                    William is interested in building intelligent, real-world projects with meaningful impact. His academic interests include artificial intelligence, optimisation, 
                    machine learning and software engineering, and has applied these across a range of projects. 
                </p>
                <p className="mt-2">
                    In addition to his technical work, William has held roles as an academic tutor and swimming instructor, where he developed strong communication, leadership and mentoring skills. 
                </p>
                
                <div className="grid gap-6 md:grid-cols-2 mt-12 2xl:grid-cols-3">
                    <motion.div
                        key={1}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-6 rounded-lg shadow dark:bg-gray-700"
                    >
                        <h3 className="text-xl font-semibold mb-2">Strengths</h3>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Applied real-world AI projects</li>
                            <li>Leadership through teaching</li>
                            <li>Exchange semester experience</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        key={2}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-6 rounded-lg shadow dark:bg-gray-700"
                    >
                        <h3 className="text-xl font-semibold mb-2">Technical Interests</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">AI & ML</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Optimisation</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Software Engineering</span>
                        </div>
                    </motion.div>

                    <motion.div
                        key={3}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow dark:bg-gray-700"
                    >
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>
                             <div className="flex justify-between items-center mb-1">
                                <span className="">BSc (Comp. & Software Systems) – University of Melbourne</span>
                                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                                Exp.2026
                                </span>
                            </div>
                            </li>
                                
                            <li>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="">Semester Exchange – University of Pennsylvania</span>
                                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                                    2025
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="">MSE – University of Melbourne</span>
                                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                                    2027–2029
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        key={4}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-6 rounded-lg shadow dark:bg-gray-700"
                    >
                        <h3 className="text-xl font-semibold mb-2">Experience</h3>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Academic Tutor, St Kevin’s College</li>
                            <li>Swimming Instructor, Just Swimming</li>
                        </ul>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

export default About;