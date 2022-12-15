const Entries=require('../modle/form-modle')

const addEntry = async (req,res) =>{
    let entry;
    const { name, age, month, time} = req.body;
    try{
        entry = new Entries({
            name,
            age,
            month,
            time
        })
        await entry.save()
    }
    catch(err) {
        console.log(err);
    }

    if(!entry){
        return res.status(500).json({message: "unable to add"})
    }
    return res.status(201).json({entry})
}
exports.addEntry=addEntry