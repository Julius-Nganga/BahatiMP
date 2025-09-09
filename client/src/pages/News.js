// client/src/pages/News.js
import React, { useState, useEffect } from 'react';
import NewsItem from '../components/NewsItem';
import AdminPanel from '../components/AdminPanel';

const News = () => {
  const [news, setNews] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleAdminLogin = () => {
    // In a real application, this would be a proper authentication system
    if (adminKey === process.env.REACT_APP_ADMIN_KEY) {
      setIsAdmin(true);
      setShowAdminLogin(false);
    } else {
      alert('Invalid admin key');
    }
  };

  return (
    <div className="bg-black text-yellow-400 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">News & Updates</h1>
        
        {isAdmin ? (
          <AdminPanel 
            news={news} 
            refreshNews={fetchNews} 
            onLogout={() => setIsAdmin(false)} 
          />
        ) : (
          <>
            <div className="text-right mb-4">
              <button 
                onClick={() => setShowAdminLogin(!showAdminLogin)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-md font-bold"
              >
                Admin Login
              </button>
            </div>
            
            {showAdminLogin && (
              <div className="bg-gray-800 p-4 rounded-md mb-6">
                <h3 className="text-xl font-bold mb-2">Admin Login</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="password"
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                    placeholder="Enter admin key"
                    className="flex-grow p-2 rounded-md text-black"
                  />
                  <button 
                    onClick={handleAdminLogin}
                    className="bg-yellow-400 text-black px-4 py-2 rounded-md font-bold"
                  >
                    Login
                  </button>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.length > 0 ? (
                news.map(item => (
                  <NewsItem key={item._id} item={item} />
                ))
              ) : (
                <p className="text-center col-span-3 py-8">No news items available.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default News;