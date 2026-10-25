const express = require('express');

const loginPage = function(req,res) {
  res.render('login', {
    title: 'Login'
  });
};

const doLogin = function(req,res) {
  console.log(req.body);
  res.redirect('/');
};

const registerPage = function(req,res) {
  res.render('register', {
    title: 'Register'
  });
}

const doRegister = function(req,res) {
  console.log(req.body);
  res.redirect('/login');
}

module.exports = {
  loginPage,
  doLogin,
  registerPage,
  doRegister
};
