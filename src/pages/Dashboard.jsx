import { useState } from "react";
import DUMMY_POSTS from "../data";
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '../assets/avatar1.jpg'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Blog Title', width: 430 },
    { field: 'authorID', headerName: 'Blog Owner', width: 200 },
    { 
        field: 'thumbnail', 
        headerName: 'Blog Owner Profile Picture', 
        width: 200,
        renderCell: () => (
            <img src={Avatar} alt="Avatar" className="rounded-xl w-16 h-16 overflow-hidden" />
        )
    },
    // Add other fields as needed
];
  
const Dashboard = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);
    
    return (
        <div className="mx-auto" style={{ height: '100%', width: '80%' }}>
            <DataGrid
                rows={posts}
                columns={columns}
                pageSize={5} // Adjust page size as needed
                pagination={true}
            />
        </div>
    );
}

export default Dashboard;
