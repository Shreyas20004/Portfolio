import React, { useState, useEffect } from 'react';

const technologies = [
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'JavaScript',
    'Tailwind CSS',
    'Python',
    'Django',
    'Flask',
    'FastAPI',
];

const TypingCarousel = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const current = technologies[index % technologies.length];
        let updatedText = '';

        if (isDeleting) {
            updatedText = current.substring(0, text.length - 1);
            setTypingSpeed(50);
        } else {
            updatedText = current.substring(0, text.length + 1);
            setTypingSpeed(100);
        }

        setText(updatedText);

        if (!isDeleting && updatedText === current) {
            setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setIndex(prev => prev + 1);
        }

        const timer = setTimeout(() => { }, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    return (
        <p className="text-md md:text-lg text-gray-400">
            <span className="text-blue-400">Technology:</span> <span className="border-r-2 border-white pr-1 animate-pulse">{text}</span>
        </p>
    );
};

export default TypingCarousel;
