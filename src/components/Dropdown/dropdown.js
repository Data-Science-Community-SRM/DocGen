import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import style from "./dropdown.css";
const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret  class={style.drbtn}>
    {props.name}
        </DropdownToggle>
      <DropdownMenu class={style.drmenu}>
       
        <DropdownItem class={style.drmenuitem}>{props.item1}</DropdownItem>
        <DropdownItem class={style.drmenuitem}>{props.item2}</DropdownItem>
        <DropdownItem class={style.drmenuitem}>{props.item3}</DropdownItem>
        <DropdownItem class={style.drmenuitem}>{props.item4}</DropdownItem>
    
        <DropdownItem class={style.drmenuitem}>{props.item5}</DropdownItem>
        <DropdownItem class={style.drmenuitem}>{props.item6}</DropdownItem>
        <DropdownItem class={style.drmenuitem}>{props.item7}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;