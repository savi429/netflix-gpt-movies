import { useState, useRef } from "react";
import { checkValidData } from "./../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

interface stateTypes {
  email: string;
  password: string;
  fullname?: string;
}
interface UserType {
  displayName: string;
  uid: string;
  email: string;
}
const Login = () => {
  const [state, setState] = useState<stateTypes>({} as stateTypes);
  const [isSignInForm, setIsSingInForm] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const email = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const loginHandler = () => {
    const errorMessage = checkValidData(state.email, state.password);
    setError(errorMessage);
    if (errorMessage) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: state.fullname,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const currentUser: UserType = auth.currentUser as UserType;
              dispatch(
                addUser({
                  uid: currentUser.uid,
                  email: currentUser.email,
                  displayName: currentUser.displayName,
                })
              );
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage + ":" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage + ":" + errorCode);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSingInForm(!isSignInForm);
    setState({ email: "", password: "", fullname: "" });
  };
  return (
    <div className="my-0 mx-auto sm:w-[450px] bg-black bg-opacity-80">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        className="py-4 px-5 sm:max-w-[550px] h-auto flex flex-col"
      >
        <h1 className="text-white ml-4 text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            value={state.fullname}
            placeholder="FullName"
            id="fullname"
            onChange={handleInput}
            className="p-4 m-4 bg-gray-700 text-white"
            ref={email}
          />
        )}
        <input
          type="email"
          value={state.email}
          placeholder="Email"
          id="email"
          required
          onChange={handleInput}
          className="p-4 m-4 bg-gray-700 text-white"
        />

        <input
          type="password"
          value={state.password}
          placeholder="Password"
          id="password"
          required
          onChange={handleInput}
          className="p-4 m-4 bg-gray-700 text-white"
        />

        <p className="text-red-500 ml-4">{error}</p>
        <button
          type="submit"
          className="p-2 m-4 bg-red-500 text-white rounded-sm"
          onClick={loginHandler}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="ml-4">Forgot Password?</p>
        <p
          onClick={toggleSignInForm}
          className="text-white cursor-pointer ml-4"
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
