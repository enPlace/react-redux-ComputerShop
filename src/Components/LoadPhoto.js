const LoadPhoto = ({ source, width }) => {
  return (
    <img
      style={{
        width: width,
      }}
      src={source}
      alt="not working"
    />
  );
};

export default LoadPhoto;
