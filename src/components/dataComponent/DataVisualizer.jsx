import DataTemp from "../DataTemp";
import "./stylesData.css";
const DataVisualizer = ({ datos, loading }) => {
  return (
    <>
      {loading ? (
        <DataTemp datos={datos} />
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border loading text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default DataVisualizer;
