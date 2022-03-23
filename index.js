const express = require('express');
const port = 8000;
const app = express();
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// flash messages
const flash = require('connect-flash');
const customMware = require('./config/middleware');

// json
app.use(express.json());
app.use(express.urlencoded());

// setting static folder for assets
app.use('/assets' , express.static('./assets'));



// setting up layouts
app.use(expressLayout);
// extracting style and script in layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// session
app.use(
    session({
      name: "offer-system",
      secret: "KeptSecret",
      resave: true,
      saveUninitialized: true,
      cookies: {
        maxAge: 10000 * 60 * 100,
      },
    })
  );

//   passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setflash);

// setting up ejs as view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

// add routes path
app.use('/' , require('./routes'));


// connecting to the server
app.listen(port , (err)=>{
    if(err){console.log('error in creating server', err); return;}
    console.log(`connect to the server on http://localhost:${port}`);
})