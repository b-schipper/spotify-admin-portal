"use client";
import { useState } from "react";
import HomeButton from "./HomeButton";
import LibraryOverview from "./LibraryOverview";

const NavigationSidebar = () => {
  const [selectedOption, setSelectedOption] = useState("direct-messages");

  return (
    <div className="flex h-screen flex-col bg-primary-1000 p-8">
      <HomeButton />
      <LibraryOverview />
    </div>
  );
};

export default NavigationSidebar;
