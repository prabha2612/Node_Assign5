// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const mongoose = require('mongoose');
const User = new mongoose.Schema( {
  userName: {
    type: String,
    required : true,
  }
});

module.exports = { mongoose, User };
