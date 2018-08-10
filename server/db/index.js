const db = require(`./database`);
const Review = require(`./review`);
const Product = require(`./product`);

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = { db, Product, Review };
