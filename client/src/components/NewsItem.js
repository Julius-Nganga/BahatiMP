// client/src/components/NewsItem.js
import React, { useState } from 'react';

const NewsItem = ({ item, isAdmin = false, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };
  
  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
      {item.image && (
        <img 
          src={`http://localhost:5000/${item.image}`} 
          alt={item.title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-400 text-sm mb-2">
          {formatDate(item.createdAt)} | {item.author}
        </p>
        
        <div className="mb-4">
          {isExpanded ? (
            <p>{item.content}</p>
          ) : (
            <p>{truncateText(item.content, 150)}</p>
          )}
          
          {item.content.length > 150 && (
            <button 
              onClick={toggleExpand}
              className="text-yellow-400 hover:text-yellow-300 text-sm mt-2"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
        
        {item.video && (
          <div className="mb-4">
            <video controls className="w-full">
              <source src={`http://localhost:5000/${item.video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        
        {isAdmin && (
          <div className="flex justify-end space-x-2">
            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsItem;