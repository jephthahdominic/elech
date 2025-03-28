import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";

const auth = getAuth();

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
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
   const data = await sendSignInLinkToEmail(auth, email, actionCodeSettings);
   if(data){
    console.log(data)
   }
}


