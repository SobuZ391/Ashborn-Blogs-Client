import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import { Button } from '@mui/material';

const PostItem = ({ id, thumbnail, title, category, description, authorID }) => {
    const shortDescription =description.length >145 ? description.substr(0,145)+"...":description;
    const postTitle =description.length > 30 ? description.substr(0,30)+"...":title;
    
    return (
        <article className='w-[100%]  lg:w-[80%]  my-4 hover:shadow-md bg-slate-50 p-2 rounded-2xl border-y-2  pb-2 translate-x-0 cursor-default' >
            <div>
                <img className='rounded-xl h-[16rem]  overflow-hidden '  src={thumbnail} alt="" />
            </div>
            <div className='mt-4' >
                <Link to={`/posts/${id}`}>
                    <h3 className='m-1 text-xl font-bold' >{postTitle}</h3>
                </Link>
                <p className='text-gray-700 m-2' >{shortDescription}</p>
                <div className='flex my-2 justify-between items-end' >
                    <PostAuthor authorID={authorID} />
                    <Button variant="outlined"><Link  to={`/posts/${category}`}>{category}</Link></Button>
                </div>
            </div>
        </article>
    );
};

export default PostItem;
