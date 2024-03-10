const mongoose = require('mongoose')
const connectToDb = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return false
        }else{
            await mongoose.connect('mongodb://127.0.0.1:27017/vegetableSite-db')
            console.log("connection is successfully");
        }
    } catch (err) {
        (err) => console.log("error in db", err)
    }

}
// mongoose
//     .connect('mongodb://127.0.0.1:27017/coffee-db')
//     .then(() => console.log('Connected!'))
//     .catch((err) => console.log("eror in db", err));

export default connectToDb