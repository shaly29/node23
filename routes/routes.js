const Model = require('../model/model');

// const Model: This line declares a constant variable named Model. The const keyword is used to create a variable that cannot be reassigned after its initial assignment.

// require('../model/model'): This part of the code is using the require function, which is a built-in function in Node.js for including external modules or files in your program. In this case, it is attempting to import a module or file located at '../model/model'.

// The ../ in the path is a relative file path notation, indicating that the module or file is located in the parent directory (..) relative to the current file's location.
// The file name or module name being imported is 'model', and it is expected to have a file extension like .js (although the extension might be omitted if it's a standard JavaScript file).

const express = require('express');

// const express: This line declares a constant variable named express. The const keyword is used to create a variable that cannot be reassigned after its initial assignment.

// require('express'): This part of the code uses the require function to import the 'express' module. In Node.js, require is a built-in function that allows you to include external modules or libraries in your JavaScript code.

// The argument passed to require is the name of the module to be imported. In this case, it's 'express'.

const router = express.Router()

// const router: This line declares a constant variable named router. The const keyword is used to create a variable that cannot be reassigned after its initial assignment.

// express.Router(): This part of the code creates a new instance of an Express Router. In Express.js, a router is a middleware that allows you to group route handlers for a specific part of your application under a common path. It is often used to modularize and organize your routes.

// express is the instance of the Express application that you previously created using express().
// Router() is a method provided by Express to create a new router instance.

module.exports = router;
// module.exports: In Node.js, each file is treated as a module, and the module object is a special object that is available in every module. The exports property of the module object is used to expose functionalities, objects, or values from one module so that they can be used in another module.

// router: In this case, the router instance that was created using express.Router() is being exported. This means that when another module requires the module containing this line of code, it will get access to the router object.




//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

//Get all Method
router.get('/getAll1', (req, res) => {
    res.send('Get All1 API')
})

// router.get('/getAll1', ...): This line specifies an HTTP GET route using the Express router (router). The get method is used to define a route that handles GET requests.

// /getAll1 is the path for this route. When a client makes a GET request to the specified path, the callback function provided as the second argument will be executed.
// (req, res) => {...}: This is an arrow function representing the callback function that will be executed when a request is made to the specified route.

// req stands for the request object, which contains information about the incoming HTTP request, such as parameters, headers, and more.
// res stands for the response object, which is used to send the HTTP response back to the client.
// res.send('Get All1 API'): Inside the callback function, res.send is used to send a response back to the client. In this case, a simple string, 'Get All1 API', is being sent as the response.

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

// router.get('/getOne/:id', ...): This line specifies an HTTP GET route using the Express router (router). The get method is used to define a route that handles GET requests.

// /getOne/:id is the path for this route. The :id in the path is a route parameter, and it indicates that this route expects a dynamic value to be passed as part of the URL. The actual value will be available as req.params.id in the callback function.
// (req, res) => {...}: This is an arrow function representing the callback function that will be executed when a request is made to the specified route.

// req stands for the request object, which contains information about the incoming HTTP request, such as parameters, headers, and more.
// res stands for the response object, which is used to send the HTTP response back to the client.
// res.send('Get by ID API'): Inside the callback function, res.send is used to send a response back to the client. In this case, a simple string, 'Get by ID API', is being sent as the response.

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

// router.patch('/update/:id', ...): This line specifies an HTTP PATCH route using the Express router (router). The patch method is used to define a route that handles PATCH requests.

// /update/:id is the path for this route. Similar to the previous examples, :id is a route parameter, indicating that this route expects a dynamic value to be passed as part of the URL. The actual value will be available as req.params.id in the callback function.
// (req, res) => {...}: This is an arrow function representing the callback function that will be executed when a request is made to the specified route.

// req stands for the request object, which contains information about the incoming HTTP request, such as parameters, headers, and more.
// res stands for the response object, which is used to send the HTTP response back to the client.
// res.send('Update by ID API'): Inside the callback function, res.send is used to send a response back to the client. In this case, a simple string, 'Update by ID API', is being sent as the response.


//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
// router.delete('/delete/:id', ...): This line specifies an HTTP DELETE route using the Express router (router). The delete method is used to define a route that handles DELETE requests.

// /delete/:id is the path for this route. Similar to the previous examples, :id is a route parameter, indicating that this route expects a dynamic value to be passed as part of the URL. The actual value will be available as req.params.id in the callback function.
// (req, res) => {...}: This is an arrow function representing the callback function that will be executed when a request is made to the specified route.

// req stands for the request object, which contains information about the incoming HTTP request, such as parameters, headers, and more.
// res stands for the response object, which is used to send the HTTP response back to the client.
// res.send('Delete by ID API'): Inside the callback function, res.send is used to send a response back to the client. In this case, a simple string, 'Delete by ID API', is being sent as the response.

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
        address:req.body.address
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// router.post('/post', ...): This line specifies an HTTP POST route using the Express router (router). The post method is used to define a route that handles POST requests.

// /post is the path for this route. When a client makes a POST request to this path, the callback function provided as the second argument will be executed.
// async (req, res) => {...}: This is an asynchronous arrow function representing the callback function that will be executed when a POST request is made to the specified route.

// req stands for the request object, which contains information about the incoming HTTP request, such as the request body (req.body), headers, and more.
// res stands for the response object, which is used to send the HTTP response back to the client.
// Creating and Saving a Model Instance:

// const data = new Model({...}): This line creates a new instance of the Model using the data provided in the request body (req.body).
// The assumption here is that your MongoDB model (Model) has fields such as name, age, and address, which correspond to the properties in the req.body.
// Handling Database Interaction:

// try {...} catch (error) {...}: This block is used to handle asynchronous operations, specifically interactions with the MongoDB database.
// const dataToSave = await data.save();: This line attempts to save the newly created instance (data) to the database. The await keyword is used because the save method is asynchronous.
// If the save operation is successful, the saved data is sent back to the client as a JSON response with a status code of 200 (res.status(200).json(dataToSave)).
// If an error occurs during the save operation, the error message is sent back to the client with a status code of 400 (res.status(400).json({ message: error.message })).


// How to Get All the Data
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// router.get('/getAll', ...): This line defines an HTTP GET route using the Express router (router). The get method is used to handle GET requests.

// /getAll is the path for this route. When a client makes a GET request to this path, the callback function provided as the second argument will be executed.
// async (req, res) => {...}: This is an asynchronous arrow function representing the callback function that will be executed when a GET request is made to the specified route.

// req stands for the request object, which contains information about the incoming HTTP request, such as parameters, headers, and more.
// res stands for the response object, which is used to send the HTTP response back to the client.
// Handling Database Interaction:

// try {...} catch (error) {...}: This block is used to handle asynchronous operations, specifically interactions with the MongoDB database.
// const data = await Model.find();: This line queries the database using the find method of the Model. The await keyword is used because the find operation is asynchronous.
// If the query is successful, the retrieved data is stored in the data variable.
// The retrieved data is then sent back to the client as a JSON response using res.json(data).
// Error Handling:

// If an error occurs during the database query, the catch block is executed.
// res.status(500).json({ message: error.message });: This line sends a JSON response to the client with a status code of 500 (Internal Server Error) and an error message.
