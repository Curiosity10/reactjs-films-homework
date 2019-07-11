const truncate = (description = '', maxLength) => (
  description.length > maxLength ? `${description.slice(0, maxLength)}...` : description
);

export default truncate;
