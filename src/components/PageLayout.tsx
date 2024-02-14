import React from "react";
import Navbar from "./Navbar";
import { ReactNode } from "react";
import Footer from "./Footer";

interface MyComponentProps {
  children: ReactNode;
}
const PageLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default PageLayout;
