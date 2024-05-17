import Header from "./Header";
import { MyComponentProps } from "../types/App.types";

const DefaultUI = ({ children }: MyComponentProps) => {
  return (
    <div className="bg-black sm:bg-[url('./assets/netflix_bg.jpg')] min-h-screen ">
      <Header />
      <main className="page-body min-h-screen text-gray-500">{children}</main>
    </div>
  );
};

export default DefaultUI;
