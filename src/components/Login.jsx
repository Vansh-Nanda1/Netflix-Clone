import React, { useRef, useState } from "react";
import Header from "./Header";
import backgroundImg from "../assets/background-Img.jpg";
import checkValidateData from "./utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Components/Utils/FireBase"; 
import { useDispatch } from "react-redux";
import { addUser } from "./utils/UserSlice";
import { MY_AVATATR } from "./utils/Constants";

const Login = () => {
  // let navigate = useNavigate();
  let dispatch = useDispatch();
  let [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  let name = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the Form Data
    let mainEmail = email.current.value;
    let mainPassword = password.current.value;
    const message = checkValidateData(mainEmail, mainPassword);
    seterrorMessage(message);
    if (message) return; // if my message is null then only create a new  user

    //! Sign In Sign-Up lOgic
    if (!isSignInForm) {
      // sign Up Logic
      createUserWithEmailAndPassword(auth, mainEmail, mainPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: MY_AVATATR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {

              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "---" + errorMessage);
        });
    } else {
      // sign In Logic
      signInWithEmailAndPassword(auth, mainEmail, mainPassword)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "---" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full absolute">
        <img
          src={backgroundImg}
          alt="backgroundImg"
          className="h-screen sm:w-full  w-auto"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  w-[70%] sm:w-[25%]  bg-[rgba(0,0,0,0.8)] my-44 sm:my-24 p-12 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="sm:text-3xl text-xl font-bold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="py-3 px-4 my-4 w-full text-xl rounded-sm bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="py-3 px-4 sm:my-4 my-2 w-full sm:text-xl text-[15px] rounded-sm bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-3 px-4 sm:my-4 my-2 w-full sm:text-xl text-[15px] rounded-sm bg-gray-800"
        />
        <p className="text-red-700 font-bold text-sm py-2">{errorMessage}</p>
        <button
          className="px-4 py-3 sm:my-6 my-2 w-full bg-red-800 sm:text-2xl text-[15px] rounded-sm"
          onClick={() => {
            handleButtonClick();
          }}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-3 text-center  cursor-pointer sm:text-xl text-[16px]"
          onClick={() => {
            toggleSignInForm();
          }}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registerd? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

