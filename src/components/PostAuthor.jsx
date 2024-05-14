import { Link } from 'react-router-dom';
import Avatar from '../assets/avatar1.jpg'
import useAuth from '../Hooks/useAuth';

const PostAuthor = () => {
    const {user}=useAuth()
    console.log(user);
    const{displayName,photoUrl}=user
    return (
        <div className='flex mt-4 gap-5 items-start'  >
            <div className="w-16 overflow-hidden rounded-md">
                <img className='rounded-3xl'  src={photoUrl} alt="" />
            </div>
            <div className='w-full' >
                <h1 className='text-gray-800  font-semibold' >{displayName}</h1>
                <small>Just Now</small>
            </div>
        </div>
    );
};

export default PostAuthor;