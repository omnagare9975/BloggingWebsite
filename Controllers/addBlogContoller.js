const mongoose = require('mongoose');
const BlogModel = require('../Models/BlogModel');

const StoreBlogInfo = async (req, res) => {
  try {
    const { title, content } = req.body;
    const coverImage = req.file ? req.file.filename : null;

    const BlogCreated = await BlogModel.create({
      title,
      content,
    });

    console.log('Blog Created:', BlogCreated);
    res.redirect('/'); // or wherever you want to go after blog creation
  } catch (err) {
    console.error('Error storing blog:', err);
    res.status(500).send('Server Error');
  }
};

module.exports = StoreBlogInfo;
