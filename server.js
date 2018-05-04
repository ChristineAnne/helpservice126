var consolidate = require('consolidate');
var bodyparser = require('body-parser');
var express = require('express');
var db = require('./database');
var app = express();

var _foods = require('./database')._foods;

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);


app.get('/', function(request, response) {
    response.render('index.html');

    const foodName = "Mang Inasal"; 
    console.log("MAO NI: " + foodName);
    console.log("food name " + _foods[0].name);
    var found = _foods.find(function(_foods) {
      return foodName === _foods.name;
    })
    
    if (found === null) {
        console.log("does not exist");
        response.render('index.html');
    }else{
    	console.log("found");
    	response.render('categories.html');
    }
});

app.get('/archive', function(request, response) {
    response.render('archive.html');
});

app.get('/categories', function(request, response) {
    response.render('categories.html');
});

app.get('/contact', function(request, response) {
    response.render('contact.html');
});

app.get('/forum', function(request, response) {
    response.render('forum.html');
});

app.get('/register', function(request, response) {
    response.render('index.html');
});

app.listen('3000');
console.log('working on 3000');



// app.post('/login', function(request, response) {
//     const username = request.body.username;
//     const password = request.body.password;
//     console.log("MAO NI: " + username);
//     user.findOne({
//         where: {
//             username: username
//         }
//     }).then(function(u) {
//         // console.log(u)
//         if (u === null) {
//             console.log("Account do not exist");
//             return response.redirect('/');
//         }

//         if (password === u.password) {
//             return response.redirect('/profile');
//         } else {
//             return response.redirect('/');
//         }
//     });
// });