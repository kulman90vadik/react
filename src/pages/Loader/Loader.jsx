
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader 
    speed={2}
    width={275}
    height={300}
    viewBox="0 0 275 230"
    backgroundColor="#404040"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="275" height="300" /> 
    <rect x="26" y="15" rx="0" ry="0" width="218" height="49" /> 
    <rect x="13" y="36" rx="0" ry="0" width="223" height="15" />
  </ContentLoader>
  );
};

export default Loader;

