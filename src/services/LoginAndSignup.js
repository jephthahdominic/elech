import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";

const auth = getAuth();

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://elech.vercel.app/verifyEmail/success',
    // This must be true.
    handleCodeInApp: true,
};

export function getErrorMessages(errorCode){
    return errorCode;
}

export async function createUser(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        const user = userCredential.user;
        return user
    })
    .catch(err => {
        if(err.code === "auth/email-already-in-use"){
            const message = getErrorMessages(err.code);
            return message
        }
    })
}

export function verifyEmail(email, callback){
   sendSignInLinkToEmail(auth, email, actionCodeSettings)
   .then(() => {
        window.localStorage.setItem("email for signunp", email);
        return callback()
   })
   .catch((error)=>{
        const code = error.code;
        const message = error.message;
        console.log(error)
   })
}


