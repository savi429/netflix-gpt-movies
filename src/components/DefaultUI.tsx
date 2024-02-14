import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const DefaultUI: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="bg-black sm:bg-[url('./assets/netflix_bg.jpg')] min-h-screen flex flex-col justify-between">
      <Header />
      <main className="page-body min-h-screen text-gray-500">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultUI;
