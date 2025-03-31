import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";

const auth = getAuth();

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://elech.vercel.app/verifyEmail/success',
    // This must be true.
    handleCodeInApp: true,
};

export async function createUser(email, password){
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    console.log(user);
    localStorage.setItem("currentlyLoggedInUser", user)
    return user
}

export async function verifyEmail(email){
   await sendSignInLinkToEmail(auth, email, actionCodeSettings);
}


