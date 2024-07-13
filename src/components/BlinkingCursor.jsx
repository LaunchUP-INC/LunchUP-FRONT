import React, { useState, useEffect } from 'react';
const BlinkingCursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span style={{ opacity: isVisible ? 1 : 0, color: 'green', marginLeft: '5px' }}>|</span>;
};

export default BlinkingCursor;