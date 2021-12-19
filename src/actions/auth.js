import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile} from "firebase/auth";
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

export const loginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Felix"));
    }, 3500);
  };
};


/* 
  TODO: 
  FIX LOGIN WITH GOOGLE 
*/

export const startGoogleLogin = () =>{
  return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, googleAuthProvider)
          .then(({user}) =>{
              // dispatch(login(user.uid, user.displayName))
              console.log(user,user.uid, user.displayName);
          })
          .catch ( e => console.log(e));
  }
}

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const registerWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
      const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
              .then( async({ user }) => {
                await updateProfile( user, { displayName: name });          
                dispatch(login(user.uid, user.displayName));
                // console.log(user, user.uid, user.displayName);
              })
              .catch( e => console.log(e));
  }
}