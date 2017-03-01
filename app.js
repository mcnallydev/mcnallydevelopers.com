const express = require('express');
const enrouten = require('express-enrouten');
const cookieParser = require('cookie-parser');
const adaro = require('adaro');
const makara = require('makara');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// public/assets
app.use(express.static('app/assets'));

// cookies
app.use(cookieParser());

app.use(require('./app/middleware/locale'));

// i18n
app.use(makara({
    i18n: {
        contentPath: path.resolve(__dirname, 'config/locales'),
        fallback: 'es-NI'
    }
}));

// controllers & middleware
let routes = enrouten({
  directory: 'app/controllers',
});

app.use(routes);

// views
app.engine('dust', makara.dust({ cache: false, helpers: [ 'dust-makara-helpers' ] }));
//app.engine('dust', adaro.dust({}));
app.set('views', 'app/views');
app.set('view engine', 'dust');

// listen
app.listen(port, () => {
  console.log(`Listen on ${port}`);
});
