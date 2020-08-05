import Settings from "../Settings/Settings";
import Output from "../OutputComponent/Output";

const MainContainer = () => {
  return (
    <div className="row col-12 px-0">
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
