const getScrollDownPercentage = ({ scrollHeight, scrollPos, clientHeight }) => {
  const currentPosition = scrollPos + clientHeight;
  return currentPosition / scrollHeight;
};

export default getScrollDownPercentage;
