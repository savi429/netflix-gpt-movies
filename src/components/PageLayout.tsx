import React from "react";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}
const PageLayout = ({ children }: MyComponentProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
