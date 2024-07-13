import React, { useEffect, useState } from 'react';

const TypingEffect = ({ strings, typeSpeed = 50, backSpeed = 50 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[index];
      const updatedText = isDeleting
        ? currentString.substring(0, text.length - 1)
        : currentString.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentString) {
        setTimeout(() => setIsDeleting(true), 4000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? backSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, strings, typeSpeed, backSpeed]);

  return <span>{text}</span>;
};

export default TypingEffect;
