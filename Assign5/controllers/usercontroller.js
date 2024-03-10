const { User } = require('../models/usermodel.js');

exports.getCreateUserForm = async (req, res, next) => {
    res.render('create', { title: 'Create User' });
  };
  

exports.addUser = async (req, res, next) => {
  try {
    const { userName } = req.body;
    await User.create({ userName });
    res.redirect('/users');
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.render('users', { title: 'Users', users });
    } catch (error) {
      next(error);
    }
  };
