import { ClipLoader } from "react-spinners";
import "../styles/Spinner.scss";

const Spinner = () => (
  <div className="spinner-root">
    <ClipLoader color="#3498db" size={48} />
    <p className="spinner-text">Loading course information...</p>
  </div>
);

export default Spinner;
