import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firestoreDb } from "./firebaseConfig";


export async function SignupController(fullName, email, password){
    const auth = getAuth()

    try{
        const createUser = await createUserWithEmailAndPassword(auth, email, password);
        const user = createUser.user;

        await updateProfile(user, {
            displayName: fullName
        })

        return user;

    } catch (error) {
        throw new Error(error)
    }
}

export async function loginController(email, password){
    const auth = getAuth();

    try{

        const loginUser = await signInWithEmailAndPassword(auth, email, password);
        const user = loginUser.user;

        if(user){
            window.localStorage.setItem("loggedInUser", user);
            return user
        }

    } catch(err){
        throw new Error(err)
    }
}

export async function logoutController(){
    const auth = getAuth()
    try {
        await signOut(auth);
        window.localStorage.removeItem("loggedInUser")
        console.log('succesful');
        console.log(auth)
    }catch (error){
        console.log(error)
    }
}