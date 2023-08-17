"use client";

import { Dropdown } from "flowbite-react";
import { Avatar } from "flowbite-react";

export default function DefaultDropdown() {
  return (
    <Dropdown
      inline
      label={
        <Avatar
          alt="User settings"
          img="/images/people/profile-picture-5.jpg"
          rounded
        />
      }
    >
      <Dropdown.Item href="/#">Dashboard</Dropdown.Item>
      <Dropdown.Item href="/setting">Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
