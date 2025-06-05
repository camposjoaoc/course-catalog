import { ClipLoader } from "react-spinners";

const Spinner = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px"
  }}>
    <ClipLoader color="#3498db" size={48} />
  </div>
);

export default Spinner;