import mongoose from "mongoose"

(async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost/gqlnotes', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()