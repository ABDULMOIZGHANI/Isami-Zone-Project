import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <menu className="bg-[#246545]">
      <ul className="flex items-center justify-between w-[85%] m-auto h-[60px]">
        <Link to="/home">
          <MenuList>HOME</MenuList>
        </Link>
        <Link to="/about-us">
          <MenuList>ABOUT</MenuList>
        </Link>
        <MenuList className="relative group flex h-[60px] items-center">
          COURSES <FaAngleDown className="ml-2 mt-[-3px] " />
          <Dropdown className="group-hover:block">
            <DropdownItem>Courses for Children</DropdownItem>
            <DropdownItem>Courses for Adults</DropdownItem>
            <DropdownItem>Courses for Females</DropdownItem>
            <DropdownItem className="relative group flex">
              <Link to="/all-courses" className="flex">
                All Courses
                <FaAngleDown className="ml-2 text-xs mt-[5px]" />
              </Link>
              <SubDropdown className="group-hover:block">
                <DropdownItem>Course 1</DropdownItem>
                <DropdownItem>Course 2</DropdownItem>
                <DropdownItem>Course 3</DropdownItem>
              </SubDropdown>
            </DropdownItem>
          </Dropdown>
        </MenuList>
        <MenuList>FAQs</MenuList>
        <MenuList>REGISTRATION</MenuList>
        <MenuList>FEE</MenuList>
        <MenuList>CONTACT US</MenuList>
      </ul>
    </menu>
  );
};

export default Menu;

const MenuList = styled.li`
  font-family: "Poppins";
  font-size: 17px;
  font-weight: 500;
  color: #f9f9f9;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #e2e2e2;
    transition: all 0.4s ease-in-out;
  }
`;

const Dropdown = styled.ul`
  display: none;
  position: absolute;
  background-color: #ffffff;
  color: #000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  list-style: none;
  margin-top: 235px;
  border-radius: 6px;
  z-index: 1000;
  width: 200px;

  ${MenuList}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #246545;
    color: #fff;
  }
`;

const SubDropdown = styled.ul`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #ffffff;
  color: #000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  list-style: none;
  margin-top: -10px;
  border-radius: 6px;
  z-index: 1000;

  ${DropdownItem}:hover & {
    display: block;
  }
`;
