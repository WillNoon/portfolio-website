import { Typewriter } from 'react-simple-typewriter';

function Home(){
    return (
        <div id="home" className="px-6 py-20 bg-white text-gray-800 animate-fade font-sans  dark:bg-gray-700 dark:text-gray-200">
            <div className="mx-5">
            
                <h1 className="text-6xl font-bold">
                <Typewriter
                    words={['William Noonan']}
                    loop={1}
                    cursor={false}
                    typeSpeed={100}
                    deleteSpeed={0}
                    delaySpeed={1500}
                />
                </h1>

                <h2 className="text-3xl mt-2">Computing and Software Systems Student</h2>
                <p className="mt-5">Undergraduate computer science student at The University of Melbourne, majoring in Computing and software systems. <br />
                Self-motivated and industry-trained software developer with experience in web development, artificial intelligence, and real-world application design.</p>

                <div className="flex flex-wrap gap-4 mt-6">
                    <a href="/projects">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            View Projects
                        </button>
                    </a>
                    <a href="/William_Noonan_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="px-6 py-2 border bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-500 dark:hover:text-white dark:hover:border-white">
                            Download Resume
                        </button>
                    </a>
                    <a href="https://github.com/WillNoon" target="_blank">
                        <button className="px-6 py-2 border bg-white border-black text-black rounded-lg hover:bg-black hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-200
                        dark:hover:bg-white dark:hover:text-black dark:hover:border-black">
                            GitHub
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;