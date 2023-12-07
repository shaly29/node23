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