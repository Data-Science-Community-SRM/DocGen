import { useState, useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import style from "./Dropdown.module.css";
import { EditContext } from "../../context/editContext";

const DropdownComponent = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const editContext = useContext(EditContext);

  const DropDownOptions = () => {
    return (
      <div>
        {props.items.map((aItem, index) => (
          <DropdownItem
            onClick={getTargetFunc()}
            name={editContext.isBody ? "bodyFont" : "headFont"}
            value={aItem}
            style={{ "font-family": `${aItem}` }}
            key={index}
          >
            {aItem}
          </DropdownItem>
        ))}
      </div>
    );
  };

  const getTargetFunc = () => {
    if (props.type == "font") return editContext.onValueChange;
    return editContext.pageSrcHandler;
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret class={style.drbtn}>
        {props.name}
      </DropdownToggle>
      <DropdownMenu>
        <DropDownOptions />
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownComponent;
