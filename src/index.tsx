import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useNavigate } from "react-router-dom";
import { FC, ReactNode } from "react";
import Browse from "./components/Browse";
interface AuthProps {
  children: ReactNode;
  type: "private" | "public";
}

const AuthComponent: FC<AuthProps> = ({ children, type }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.reducer.user?.uid);

  if (type === "private" && !isLoggedIn) {
    navigate("/");
    return null;
  } else if (type === "public" && isLoggedIn) {
    navigate("/browse");
    return null;
  }

  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: (
          <AuthComponent type="private">
            <Browse />
          </AuthComponent>
        ),
      },
    ],
    errorElement: <>Opps something went wrong page</>,
  },
  {
    path: "/todoApp",
    element: (
      <Suspense fallback={<h1>Loading todo app</h1>}>
        <>Todo</>
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
