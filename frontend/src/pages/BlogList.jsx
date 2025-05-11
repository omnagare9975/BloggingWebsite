import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const ShowBlog = `${import.meta.env.VITE_API_BASE_URL}/show/blogs`;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(ShowBlog);
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="border border-gray-300 rounded-md bg-white cursor-pointer hover:shadow-md transition"
          onClick={() => navigate(`/blog/${blog._id}`)}
        >
          {blog.coverImage && (
          <img 
            src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${blog.coverImage}`}
            alt="Cover"
            className="w-100 h-28 object-cover rounded-md"
          />


          )}
          <div className="p-3">
            <h2 className="text-lg font-medium text-gray-800 mb-1">{blog.title}</h2>
            <p className="text-sm text-gray-600">
              {blog.content.length > 80
                ? blog.content.slice(0, 80) + '...'
                : blog.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
