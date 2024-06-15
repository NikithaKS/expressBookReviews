const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/', async function (req, res) {
  try {
    const response = await axios.get('https://ksnikitha200-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/books'); 
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
  const isbn = req.params.isbn;
  try {
    const response = await axios.get('https://ksnikitha200-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/books/${isbn}');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get book details based on author
public_users.get('/author/:author', async function (req, res) {
  const author = req.params.author;
  try {
    const response = await axios.get('https://ksnikitha200-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/books/author/${author}');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
  const title = req.params.title;
  try {
    const response = await axios.get('https://ksnikitha200-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/books/title/${title}');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get book review
public_users.get('/review/:isbn', async function (req, res) {
  const isbn = req.params.isbn;
  try {
    const response = await axios.get('https://ksnikitha200-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/books/review/${isbn}');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports.general = public_users;