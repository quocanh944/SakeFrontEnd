"use client";

import { Dropdown } from "flowbite-react";
import { Avatar } from "flowbite-react";
import ava from "../../assets/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png";
import { useNavigate } from "react-router-dom";
export default function DefaultDropdown() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Dropdown inline label={<Avatar alt="" img={ava} rounded />}>
      <Dropdown.Item href="/setting">Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={handleLogOut}>Log out</Dropdown.Item>
    </Dropdown>
  );
}
