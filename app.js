//var createError = require('http-errors');
const express = require('express');
//const mysql = require('mysql');
//const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const appointment = require('./routes/appointment.routes');
const doctor = require('./routes/doctor.routes');
const patient = require('./routes/patient.routes');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();
//app.get('/', (req, res) => res.send('INDEX'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});

app.use(
  (error, req, res, next) => {
    console.log("It works 0");
    res.status(error.status || 500);
    console.log("status: "+error.status);
    console.log("message: "+error.message);
    res.json({
      error: {
        message: error.message,
      },
    });
    
  }
);

// Appointments routes
app.use('/appointment', appointment);
// Doctors routes
app.use('/doctor', doctor);
// Patients routes
app.use('/patient', patient);


// app.use((req, res, next) =>{
//   console.log("header works");
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
// }
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

/*const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kinder1987',
  database: 'healthtrak'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
/* // Create DB
app.get('/patient', (req, res) => {
    let sql = 'CREATE DATABASE healthtrak';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created...');
    })
}); */



/* // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
 */