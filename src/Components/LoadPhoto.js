const LoadPhoto = ({ source, width }) => {
  console.log(width)
  return width !==undefined ? (
  
    <img
      style={{
        width: width,
      }}
      src={source}
      alt="not working"
    />
  ) : (
    <img src={source} alt="not working" />
  );
};

export default LoadPhoto;
