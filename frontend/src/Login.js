import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
    const signIn = async () => {
        try {
            await signInWithPopup(auth, provider);
            window.location.href = "/home";
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button className="bg-blue-500 text-white p-4 rounded" onClick={signIn}>
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;
