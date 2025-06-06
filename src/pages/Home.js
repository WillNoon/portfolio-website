function Home(){
    return (
        <div id="home" className="px-6 py-20 bg-white text-gray-800 animate-fade">
            <div className="mx-5">
                <h1 className="text-4xl font-bold">William Noonan</h1>
                <h2 className="text-2xl mt-2">Computing and Software Systems Student</h2>
                <p className="mt-5">Undergraduate computer science student at The University of Melbourne, majoring in Computing and software systems. <br />
                Self-motivated and industry-trained software developer with experience in web development, artificial intelligence, and real-world application design.</p>

                <div className="flex flex-wrap gap-4 mt-6">
                    <a href="/projects">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            View Projects
                        </button>
                    </a>
                    <a href="/William_Noonan_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                            Download Resume
                        </button>
                    </a>
                    <a href="https://github.com/WillNoon" target="_blank">
                        <button className="px-6 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white">
                            Github
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;