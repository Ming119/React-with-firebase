import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Home = () => {
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user)
            setUser(user);
        else
            window.location.href = "/signin";
    });

    const onSignOutBtnClick = () => {
        auth.signOut();
    };

    return (
        <div>
        <h2>Welcome { user && <span>{ user.email }</span> }</h2>
        <button onClick={ onSignOutBtnClick }>Sign out</button>
        </div>
    );
}

export default Home;