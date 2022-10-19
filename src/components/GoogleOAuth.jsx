import React from "react";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

function GoogleOAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If user doesn't exist sign him up
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/templates");
    } catch (error) {
      toast.error(
        "Can't authorize user credentials, please try again later, if it persist please contact us"
      );
    }
  };

  return (
    <div>
      <Button onClick={onGoogleClick} variant="outline-dark" className="mb-3">
        <FcGoogle /> Sign {location.pathname === "/signup" ? "up" : "in"}
      </Button>
    </div>
  );
}

export default GoogleOAuth;
