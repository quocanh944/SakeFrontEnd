"use client";

import { Dropdown } from "flowbite-react";
import { Avatar } from "flowbite-react";
import ava from "../../assets/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png";
export default function DefaultDropdown() {
  return (
    <Dropdown inline label={<Avatar alt="" img={ava} rounded />}>
      <Dropdown.Item href="/setting">Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
