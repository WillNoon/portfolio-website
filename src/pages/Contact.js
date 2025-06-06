import { motion } from 'framer-motion';
function Contact(){
    return (
        <div id="contact" className="px-6 py-20 bg-gray-100 text-gray-800 font-sans">
            <div className="mx-5">
                <h2 className="text-2xl font-bold mb-6">Contact</h2>
                
                <div className="space-y-2">
                    <p>Email: <a href="mailto:willnoonan10@gmail.com" className="text-blue-600 underline">willnoonan10@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/william-noonan-4b140428b" className="text-blue-600 underline">william-noonan</a></p>
                    <p>Github: <a href="https://github.com/WillNoon" className="text-blue-600 underline">WillNoon</a></p>
                </div>

            </div>
        </div>
    );
}

export default Contact;