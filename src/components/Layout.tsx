import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import PageLayout from "./PageLayout";
import DefaultUI from "./DefaultUI";
import { MyComponentProps } from "../types/App.types";

const Layout = ({ children }: MyComponentProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    //unscubscribe when component unmounts
  }, []);
  const isLoggedIn = useSelector(
    (state: RootState) => state?.reducer?.user?.uid
  );
  return isLoggedIn ? (
    <PageLayout>{children}</PageLayout>
  ) : (
    <DefaultUI>{children}</DefaultUI>
  );
};

export default Layout;
