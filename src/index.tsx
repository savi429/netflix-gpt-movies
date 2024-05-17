import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import Browse from "./components/Browse";
import Search from "./components/Search/Search";
import Watch from "./components/Movies/Watch";
import "./index.css";

interface AuthProps {
  children: ReactNode;
  type: "private" | "public";
}

const AuthComponent = ({ children, type }: AuthProps) => {
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
        element: (
          <AuthComponent type="public">
            <Login />
          </AuthComponent>
        ),
      },
      {
        path: "/browse",
        element: (
          <AuthComponent type="private">
            <Browse />
          </AuthComponent>
        ),
      },
      {
        path: "/search",
        element: (
          <AuthComponent type="private">
            <Search />
          </AuthComponent>
        ),
      },
      {
        path: "/watch/:movieId",
        element: (
          <AuthComponent type="private">
            <Watch />
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
