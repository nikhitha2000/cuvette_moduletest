export const getInitials = (name) => {
    const words = name.trim().split(/\s+/);  // Split the name into words
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();  // Take the first two letters if there's only one word
    }
    // Take the first letter of the first word and the first letter of the last word
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };