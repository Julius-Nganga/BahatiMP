// server/routes/news.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const News = require('../models/News');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10000000 }, // 10MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|mp4|mov|avi|wmv/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images and Videos only!');
  }
}

// Get all published news
router.get('/', async (req, res) => {
  try {
    const news = await News.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all news (admin)
router.get('/admin', async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new news item
router.post('/', upload.fields([{ name: 'image' }, { name: 'video' }]), async (req, res) => {
  try {
    const news = new News({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author,
      isPublished: req.body.isPublished
    });

    if (req.files) {
      if (req.files.image) {
        news.image = req.files.image[0].path;
      }
      if (req.files.video) {
        news.video = req.files.video[0].path;
      }
    }

    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update news item
router.patch('/:id', upload.fields([{ name: 'image' }, { name: 'video' }]), async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News item not found' });
    }

    if (req.body.title != null) {
      news.title = req.body.title;
    }
    if (req.body.content != null) {
      news.content = req.body.content;
    }
    if (req.body.category != null) {
      news.category = req.body.category;
    }
    if (req.body.author != null) {
      news.author = req.body.author;
    }
    if (req.body.isPublished != null) {
      news.isPublished = req.body.isPublished;
    }

    if (req.files) {
      if (req.files.image) {
        news.image = req.files.image[0].path;
      }
      if (req.files.video) {
        news.video = req.files.video[0].path;
      }
    }

    const updatedNews = await news.save();
    res.json(updatedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete news item
router.delete('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News item not found' });
    }

    await news.remove();
    res.json({ message: 'News item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;