const getScrollDownPercentage = ({ scrollHeight, scrollPos, clientHeight }) => {
  const currentPosition = scrollPos + clientHeight;
  const percentageScrolled = currentPosition / scrollHeight;
  return percentageScrolled;
};

export default getScrollDownPercentage;
