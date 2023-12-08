const mongoose = require('mongoose');

// const mongoose: This line declares a constant variable named mongoose. The const keyword is used to create a variable that cannot be reassigned after its initial assignment.

// require('mongoose'): This part of the code uses the require function to import the mongoose library. In Node.js, the require function is used to load external modules or libraries into your script.

// 'mongoose' is the argument passed to require, indicating that the script wants to import the 'mongoose' module.
const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    address:{
        required: true,
        type: String
    }
})

// const dataSchema = new mongoose.Schema({ ... }): This line creates a new Mongoose schema using the mongoose.Schema constructor. The dataSchema variable will now hold the schema definition for documents that will be stored in MongoDB.

// Schema Definition:

// name: { required: true, type: String }: This defines a field named name in the schema. It specifies that the field is of type String and is required, meaning that a document must have a value for this field.
// age: { required: true, type: Number }: This defines a field named age in the schema. It specifies that the field is of type Number and is required.
// address: { required: true, type: String }: This defines a field named address in the schema. It specifies that the field is of type String and is required.

module.exports = mongoose.model('Data', dataSchema)
// mongoose.model('Data', dataSchema): This line uses the mongoose.model method to create a Mongoose model. The model method takes two arguments:

// 'Data': This is the name of the model. In this case, the model is named 'Data'. Mongoose will use this name to associate the model with a MongoDB collection. If the collection doesn't exist, Mongoose will create it.

// dataSchema: This is the Mongoose schema that defines the structure of documents stored in the MongoDB collection associated with this model.

// module.exports = ...: This line exports the created Mongoose model, making it available for use in other parts of your application.

// module.exports is a Node.js construct that allows you to export variables, functions, or objects from one module (file) so that they can be used in another module.

// By exporting the model, you make it accessible in other files when you require this module.