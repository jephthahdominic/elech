import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

const auth = getAuth()

export async function SignupController(fullName, email, password){

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