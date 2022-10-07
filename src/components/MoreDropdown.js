import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({onClick }, ref) => (
    <i
        ref={ref}
        className="fas fa-ellipsis-v"
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        />
    ));

export const MoreDropdown = () => {
    return (
    <Dropdown className="ml-auto" drop="left">
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Custom toggle
    </Dropdown.Toggle>

    <Dropdown.Menu
    className="text-center"
    >
        <Dropdown.Item 
        className={styles.DropdownItem}
        onClick={()=>{}}
        aria-label="edit"
        >
            <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
        className={styles.DropdownItem}
        onClick={()=>{}}
        aria-label="delete"
        >
            <i className="fas fa-trash-alt" />
        </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    );
};
