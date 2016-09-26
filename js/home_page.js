console.log('home_page');

require('../css/main.css');
require('../css/test.scss');

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.jpg');

document.getElementById('img_container').appendChild(img);