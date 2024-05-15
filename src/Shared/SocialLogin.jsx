import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from './../Hooks/useAuth';

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const handleSocialLogin = async (socialProvider) => {
        try {
            const result = await socialProvider();
            if (result.user) {
                // Show a toast notification for successful login
                toast.success('Login successful!');
                
                // Navigate to the desired route after a short delay
                setTimeout(() => {
                    navigate(from);
                }, 1000);
            }
        } catch (error) {
            // Show a toast notification for login failure
            toast.error('Login failed. Please try again.');
            
            // Log the error for debugging purposes
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex my-5 justify-center items-center">
            <button className="btn w-2/3 btn-accent" onClick={() => handleSocialLogin(googleLogin)}>
                <FaGoogle /> Google
            </button>
          
          
        </div>
    );
};

export default SocialLogin;
