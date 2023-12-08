router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        department: req.body.department,
        destination:req.body.destination,
        salary:req.body.salary
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

// const data = new Model({ ... }): This line creates a new instance of the Model using the data provided in the request body (req.body).
// The assumption here is that your MongoDB model (Model) has fields such as name, department, destination, and salary, which correspond to the properties in the req.body.
// Handling Database Interaction:

// try {...} catch (error) {...}: This block is used to handle asynchronous operations, specifically interactions with the MongoDB database.
// const dataToSave = await data.save();: This line attempts to save the newly created instance (data) to the database. The await keyword is used because the save method is asynchronous.
// If the save operation is successful, the saved data is sent back to the client as a JSON response with a status code of 200 (res.status(200).json(dataToSave)).
// If an error occurs during the save operation, the error message is sent back to the client with a status code of 400 (res.status(400).json({ message: error.message })).