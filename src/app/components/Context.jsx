'use client'
import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from './firebase'

export const Appcontext = createContext();

export const AppContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [view, setView] = useState(false)
  const [heart, setHeart] = useState(false)
  const [search,setSearch] = useState('trending')
  const [selectedValue, setSelectedValue] = useState('en');

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);


  const fetchNews = async () => {
    const res = await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=${selectedValue}&country=in&max=10&apikey=027574242427838fa2442f1cbdbd88ca`).then(res => res.json())

    setNewsData(res.articles)
console.log("res",res);
  }

  useEffect(() => {

    fetchNews()

  }, [search, selectedValue])
  

  const values = { user, googleSignIn, logOut, newsData, view, setView, heart , setHeart ,search,setSearch,
    selectedValue, setSelectedValue
     }


  return (
    <Appcontext.Provider value={values}>
      {children}
    </Appcontext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(Appcontext);
};

