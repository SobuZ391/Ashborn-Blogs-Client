import { Link } from 'react-router-dom';
import Avatar from '../assets/avatar1.jpg'

const PostAuthor = () => {
    return (
        <Link className='flex mt-4 gap-10 items-start'  to={`/posts/users/sdfsdf`}>
            <div className="w-16 overflow-hidden rounded-md">
                <img className='rounded-3xl'  src={Avatar} alt="" />
            </div>
            <div className='' >
                <h1 className='text-xl font-bold' >BY:Ernest Achiever</h1>
                <small>Just Now</small>
            </div>
        </Link>
    );
};

export default PostAuthor;