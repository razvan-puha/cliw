// const express = require('express')

// var path = require('path');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var session = require('express-session');
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017', {
//     useMongoClient: true
// });

// const app = express()
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(session({ secret: "Shh, its a secret!" }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets')));
// app.use(express.static(path.join(__dirname, 'public/javascripts')));

// require('./models/User');

// var routes = require('./routes');
// var views = require('./views');

// app.use(routes);
// app.use('/', views);



// /// catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //     var err = new Error('Not Found');
// //     err.status = 404;
// //     next(err);
// //   });


// app.get('/', (request, response) => response.redirect('/login.html'))

// app.listen(3000, () => console.log('Example app listening on port 3000!'))

// var https = require('https');
// // var options = {
// //     host: 'https://profs.info.uaic.ro',
// //     path: '/~orar/participanti/orar_I1.html'
// // };

// const { URL } = require('url');
// // const get_schedule_options = new URL('https://profs.info.uaic.ro/~orar/participanti/orar_I1.html');

// const get_schedule_options = new URL('https://profs.info.uaic.ro/~orar/participanti/orar_I2A6.html');
// var req = https.get(get_schedule_options, function (res) {
//     console.log('STATUS: ' + res.statusCode);
//     console.log('HEADERS: ' + JSON.stringify(res.headers));

//     // Buffer the body entirely for processing as a whole.
//     var bodyChunks = [];
//     res.on('data', function (chunk) {
//         // You can process streamed parts here...
//         bodyChunks.push(chunk);
//     }).on('end', function () {
//         var body = Buffer.concat(bodyChunks);

//         var htmlStr = body.toString('utf8');

//         // var extractedTdArray = htmlStr.split("<td>")
//         //     .filter(function (v) { return v.indexOf('</td>') > -1 })
//         //     .map(function (value) {
//         //         return value.split("</td>")[0]
//         //     })
//         // console.log(extractedTdArray)

//         var extractedTrArray = htmlStr.split("<tr>")
//         .filter(function (v) { return v.indexOf('</tr>') > -1 })
//         .map(function (value) {
//             return value.split("</tr>")[0]
//         })

//         var data = [];
//         var keys = ['from', 'to', 'name', 'type', 'teacher', 'room'];
//         extractedTrArray.forEach(function (elem, index, arr) {
    
//             var extractedTdArray = elem.split("<td>")
//             .filter(function (v) { return v.indexOf('</td>') > -1 })
//             .map(function (value) {
//                 return value.split("</td>")[0]
//              })
//             //  console.log(extractedTdArray);
            
//             var course = {};

//             extractedTdArray.forEach( function(elem, index) {
//                 var aKey = keys[index];
//                 if (aKey === 'teacher') {
//                     var temps = elem.split('.html">')
//                     .filter(function (vv) { return vv.indexOf('</a>' > -1)})
//                     .map(function (val) {
//                         return val.split("</a>")
//                     })

//                     if (temps.length == 2) {
//                         var result = temps[1];
//                         // console.log(result[0]);
//                         course[aKey] = result[0];
//                     } else if (temps.length > 2){
//                         var result = temps[1]
//                         // console.log(result[0]);
//                         course[aKey] = result[0];
//                         result = temps[2];
//                         // console.log(result[0]);
//                         course[aKey] = course[aKey] + ', ' + result[0];
//                         // console.log(temps);
//                     }
//                     //  console.log('####');
//                     // course[aKey] = temps;
//                 } 
//                 // else if (aKey === 'room') {
//                     // var temps = elem.replace('\r\n','');
//                     // temps = temps.replace('<a href="../resurse/orar_', '');
//                     // temps = temps.replace('.html">','');
                    
//                     // console.log(temps.split('.html'));
//                     // console.log(temps);
//                     // var temps = elem.split();
//                     // var temps = elem.split('orar_')
//                     // var temps2 = temps[0].split('.html');

//                     // .filter(function (vv) { return vv.indexOf('.html' > -1)})
//                     // .map(function (val) {
//                     //     return val.split(".html")
//                     // })
//                     // console.log(temps);
//                     // console.log(temps2);
//                 // }
//                 else {
//                     course[keys[index]] = elem.trim()
//                 }
//             });
//             // console.log('-------');
//             console.log('-------');

//             console.log(course)


//             console.log('-------');
//             // console.log('-------');
//         })

//         console.log('-------');
//         // console.log(course);
//         console.log('-------');

//     })
// });

// req.on('error', function (e) {
//     console.log('ERROR: ' + e.message);
// });
