export const getInitials = (name) => {
    const words = name.trim().split(/\s+/); 
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }
  
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  export const isMobileDevice = () => {
    const width = window.innerWidth / window.devicePixelRatio;
    return width <= 780; 
};

  