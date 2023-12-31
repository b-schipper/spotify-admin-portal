"use client";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen bg-primary-100">
      <div className="flex flex-row">
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default layout;
