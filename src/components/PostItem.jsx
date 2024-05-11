import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import { Button } from '@mui/material';

const PostItem = ({ id, thumbnail, title, category, description, authorID }) => {
    const shortDescription =description.length >145 ? description.substr(0,145)+"...":description;
    const postTitle =description.length > 30 ? description.substr(0,30)+"...":title;
    
    return (
        <article className=' my-4 hover:shadow-md bg-slate-50 p-2 rounded-xl pb-2 translate-x-0 cursor-default' >
            <div>
                <img className='rounded-xl h-[16rem]  overflow-hidden '  src={thumbnail} alt="" />
            </div>
            <div className='mt-2' >
                <Link to={`/posts/${id}`}>
                    <h3 className='m-1 text-xl font-bold' >{postTitle}</h3>
                </Link>
                <p>{shortDescription}</p>
                <div className='flex justify-between items-end' >
                    <PostAuthor authorID={authorID} />
                    <Button variant="outlined">  <Link  to={`/posts/categories/${category}`}>{category}</Link></Button>
                </div>
            </div>
        </article>
    );
};

export default PostItem;
