import { PropagateLoader } from "react-spinners";

const LoadingIndicator = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "20vh",
      }}>
      <PropagateLoader color="red" />
    </div>
  );
};

export default LoadingIndicator;
