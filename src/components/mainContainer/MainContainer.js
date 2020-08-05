import Settings from "../Settings/Settings";
import Output from "../OutputComponent/Output";

const MainContainer = () => {
  return (
    <div className="row col-12 px-0 mt-2" style={{ height: "100%" }}>
      <div className="col-6">
        <Settings />
      </div>
      <div className="col-6">
        <Output />
      </div>
    </div>
  );
};
export default MainContainer;
