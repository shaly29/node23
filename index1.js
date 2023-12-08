require('dotenv').config();
// In programming or scripting languages, "require" is often used as a keyword or function to include and use external modules or libraries. For example, in JavaScript, Node.js uses require to import modules.
// This part of the code is using Node.js's require function to import the "dotenv" module. 
// The "dotenv" module is a popular npm package that helps manage environment variables in Node.js applications.


// The config() function is a method provided by the "dotenv" module. When called, it reads the contents of the ".env" file (if it exists) and adds the variables defined in that file to the process.env object. The process.env object in Node.js is used to store environment variables.

const express = require('express');
// This part of the code uses Node.js's require function to import the "express" module. The "express" module is a popular web application framework for Node.js, simplifying the process of building robust web applications by providing a set of features and utilities.
// The result of require('express') is assigned to the variable express. This means that the express variable now holds a reference to the functionality provided by the Express.js framework.


const mongoose = require('mongoose');
// The result of require('mongoose') is assigned to the variable mongoose. This means that the mongoose variable now holds a reference to the functionality provided by the Mongoose library.


const mongoString = process.env.DATABASE_URL;
// mongoString: This is the name of the constant variable being declared.
//  It will hold the value of the MongoDB connection string.

// process.env: This is a Node.js global object that provides information about the current environment. It has a property called env, which is an object containing user environment information.

// DATABASE_URL: This is a key used to access an environment variable. Environment variables are external values that can be accessed by a running process. They are often used to store configuration settings.



mongoose.connect(mongoString);
// connect() method: This method is part of Mongoose and is used to establish a connection to a MongoDB database.
//  The mongoose.connect() method takes a connection string as an argument, which specifies the details of the MongoDB server to connect to. The connection string usually includes information such as the host, port, username, password, and database name.



const database = mongoose.connection;
// mongoose.connection: This is a property of the Mongoose library that represents the connection to the MongoDB database. When you use mongoose.connect(), it returns a connection object, and mongoose.connection is a reference to that object.

// const database: This line declares a constant variable named database and assigns it the value of the mongoose.connection object.

database.on('error', (error) => {
    console.log(error)
})

// database.on('error', ...): This line sets up an event listener for the 'error' event on the database object. The on method is a way to register callback functions for specific events.

// (error) => {...}: This is an arrow function that serves as the callback function to be executed when the 'error' event occurs. The error parameter will contain information about the error that occurred.

// console.log(error): Inside the callback function, the console.log statement is used to print the details of the error to the console. This is a common practice for debugging and logging purposes. The error message or object can provide information about what went wrong during the database connection process.




database.once('connected', () => {
    console.log('Database Connected');
})

// database.once('connected', ...): This line sets up an event listener for the 'connected' event on the database object. The once method is similar to on, but it will execute the callback function only once when the specified event occurs. After the event is triggered and the callback is executed, the listener is automatically removed.

// () => {...}: This is an arrow function that serves as the callback function to be executed when the 'connected' event occurs.

// console.log('Database Connected'): Inside the callback function, the console.log statement is used to print the message "Database Connected" to the console. This is a simple log indicating that the connection to the database was successfully established.

const app = express();
// express(): express is a Node.js web application framework that simplifies the process of building robust and scalable web applications. The express() function is the top-level function exported by the Express module. When invoked, it creates a new Express application.

// const app: This line declares a constant variable named app and assigns it the value returned by express(). The app variable represents your Express application instance, and you use it to configure and define routes, middleware, and other settings for your web application.

app.use(express.json());

// express.json(): This is a built-in middleware in Express that parses incoming requests with JSON payloads. It is part of the body-parser middleware, which is now included with Express by default as of Express version 4.16.0. When this middleware is applied using app.use(), it enables your Express application to automatically parse the JSON data in the body of incoming requests.

// app.use(): This method is used to mount middleware functions in Express. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware functions can perform actions on the request, response, or pass control to the next middleware in the stack.

// In this case, app.use(express.json()); is applying the express.json() middleware to all routes, meaning that for any incoming request, this middleware will be executed before reaching the route handlers.

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

// app.listen(port, callback): This method is used to bind and listen for connections on the specified network port. In this case, it's telling the Express application to listen on port 3000.

// 3000: This is the port number on which the server will listen for incoming HTTP requests. Port 3000 is a commonly used port for development purposes, but you can choose a different port if needed.

// () => { console.log(Server Started at ${3000}) }: This is the callback function that will be executed once the server has successfully started and is listening for incoming requests. In this case, it logs a message to the console indicating that the server has started and is listening on port 3000.

// The backticks (``) are used to create a template literal in JavaScript, allowing variables to be interpolated into the string.
// ${3000} is the placeholder for the port number, and it will be replaced with the actual port number when the message is logged.


const routes = require('./routes/routes');
// require('./routes/routes'): The require function in Node.js is used to import modules. In this case, it is importing the module located at the path './routes/routes'. The path can be relative to the current file or an absolute path. The use of './routes/routes' suggests that there is a directory named 'routes,' and within that directory, there is a file named 'routes' without a file extension (it could be a JavaScript file, as Node.js automatically looks for a '.js' extension by default).

// const routes = ...: The result of the require function call is assigned to a variable named routes. This variable now holds whatever is exported from the './routes/routes' module.

app.use('/api', routes)
// app: This is an instance of the Express application. It is created using the express() function.

// use(): This method is used to specify middleware functions in Express.

// '/api': This is the path at which the middleware function specified in the routes variable will be mounted. In this case, it's '/api', which means that the middleware will be applied to any route that starts with '/api'. For example, if you have a route '/api/users', the middleware will be executed.

// routes: This is likely a variable that holds a set of route-handling middleware functions. These functions define the behavior of your application for specific routes under the '/api' path.