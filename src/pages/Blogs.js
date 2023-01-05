
const Blogs = () => {
    // const { user } = useAuth();
    // const { data: blogs, status } = useQuery("blogs", getBlogs);
    
    // return (
    //     <div>
    //     <h1>Blogs</h1>
    //     {status === "loading" && <div>Loading...</div>}
    //     {status === "error" && <div>Error fetching data</div>}
    //     {status === "success" && (
    //         <div>
    //         {blogs.map((blog) => (
    //             <div key={blog.id}>
    //             <Link to={`/blogs/${blog.id}`}>
    //                 <h2>{blog.title}</h2>
    //             </Link>
    //             <p>Written by {blog.author}</p>
    //             <p>{blog.body}</p>
    //             </div>
    //         ))}
    //         </div>
    //     )}
    //     {user && <Link to="/create">New Blog</Link>}
    //     </div>
    // );

    return (
        <div>Blogs</div>
    );
};

export default Blogs;