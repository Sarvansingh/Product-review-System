const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Product = require('../models/Product');
const products = require('./data');

dotenv.config();

const seed = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Seeded DB with products');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
