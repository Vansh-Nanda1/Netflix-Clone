import React, { useEffect } from "react";
import logo from "../assets/Logonetflix.png";
import { signOut } from "firebase/auth";
import { auth } from "../Components/Utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { tooglegptSearchView } from "./utils/GptSlice";
import { Supported_Languages } from "./utils/Constants";
import { changeLanguage } from "./utils/ConfigSlice";
const Header = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handleGptSearchButton = () => {
    dispatch(tooglegptSearchView());
  };

  const handleLanguageChange = (e) =>{ 
    dispatch(changeLanguage(e.target.value))
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center ">
      <div>
        <img src={logo} alt="netflixLogo" className="sm:w-44 w-28" />
      </div>
      {user && (
        <div className="flex gap-2 items-center justify-center ">
           {
            showGptSearch &&  <select className="px-4 py-2 font-serif  bg-gray-800 text-white outline-none hover:bg-gray-600 rounded-md text-lg " onChange={handleLanguageChange}>
                      {Supported_Languages.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
          }
          <button onClick={handleGptSearchButton} className="bg-purple-900  font-serif hover:bg-purple-600 text-white rounded-md px-4 py-1 text-lg">{showGptSearch ? "Home Page" : "Gpt Search"}</button>
          <img src={user?.photoURL} alt="usericon" className="w-16 h-16 p-2" />
          <button
            onClick={handleSignOut}
            className="text-white font-serif text-lg bg-red-600 rounded-md px-4 py-1 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
