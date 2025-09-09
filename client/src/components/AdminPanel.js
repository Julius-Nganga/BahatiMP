import React, { useState } from 'react';
import NewsItem from './NewsItem';

const AdminPanel = ({ news, refreshNews, onLogout }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: 'Admin',
    category: 'General',
    isPublished: false
  });
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ensure news is always treated as an array
  const newsArray = Array.isArray(news) ? news : [];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('author', formData.author);
    data.append('category', formData.category);
    data.append('isPublished', formData.isPublished);
    
    if (image) {
      data.append('image', image);
    }
    
    if (video) {
      data.append('video', video);
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/news', {
        method: 'POST',
        body: data
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert('News item created successfully!');
        setFormData({
          title: '',
          content: '',
          author: 'Admin',
          category: 'General',
          isPublished: false
        });
        setImage(null);
        setVideo(null);
        setShowForm(false);
        refreshNews();
      } else {
        alert(`Error creating news item: ${result.error || result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating news item. Check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/news/${id}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          alert('News item deleted successfully!');
          refreshNews();
        } else {
          const errorData = await response.json();
          alert(`Error deleting news item: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error deleting news item. Check console for details.');
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <div className="flex space-x-4">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-md font-bold"
          >
            {showForm ? 'Cancel' : 'Add New Post'}
          </button>
          <button 
            onClick={onLogout}
            className="bg-gray-700 text-white px-4 py-2 rounded-md font-bold"
          >
            Logout
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md mb-8">
          <h3 className="text-xl font-bold mb-4">Create New Post</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md text-black"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md text-black"
              >
                <option value="General">General</option>
                <option value="Campaign">Campaign</option>
                <option value="Policy">Policy</option>
                <option value="Event">Event</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows="5"
              className="w-full p-2 rounded-md text-black"
              required
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 rounded-md bg-white text-black"
              />
            </div>
            
            <div>
              <label className="block mb-2">Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="w-full p-2 rounded-md bg-white text-black"
              />
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleInputChange}
              className="mr-2"
              id="publishCheckbox"
            />
            <label htmlFor="publishCheckbox">Publish Immediately</label>
          </div>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow-400 text-black px-6 py-2 rounded-md font-bold disabled:opacity-50"
          >
            {isSubmitting ? 'Creating...' : 'Create Post'}
          </button>
        </form>
      )}

      <div>
        <h3 className="text-xl font-bold mb-4">All News Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsArray.length > 0 ? (
            newsArray.map(item => (
              <div key={item._id} className="relative">
                <NewsItem item={item} isAdmin={true} />
                <button 
                  onClick={() => handleDelete(item._id)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-2 py-8">No news items available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;