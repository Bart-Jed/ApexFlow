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

module.exports = {
  loginPage,
  doLogin
};
