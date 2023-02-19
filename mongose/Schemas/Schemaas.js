const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name: String,
    title:String,
    description:String,
    price:String,
})

module.exports = mongoose.model('book_collection', bookSchema);































//     const androidSchema = new mongoose.Schema({
//     name:String,
//     title:String,
//     price:String,
//     description:String,
//     descount:String,
//     waranty:String,
//     availability:String,
//     photo_1:  {
//         data: Buffer,
//         contentType: String
//     }
//     })
    
// const andro = mongoose.model('android_collection', androidSchema);




//     const clothSchema = new mongoose.Schema({
//         name:String,
//         title:String,
//         price:String,
//         discountPrice:String,
//         description:String,
//         availability:String,
        
//     })
// const cloth = mongoose.model('cloth_collection', clothSchema);
//     const foodSchema = new mongoose.Schema({
//         name: String,
//         title:String,
//         dataIn:String,
//         dataFinished:String,
//         price:String,
//         discountPrice:String,
//         availability:String,
//         description:String,
//         img_1:  {
//             data: Buffer,
//             contentType: String
//         },
//         img_2:  {
//             data: Buffer,
//             contentType: String
//         },
//         img3:  {
//             data: Buffer,
//             contentType: String
//         },
//         img4: {
//             data:Buffer,
//             contentType:String
//         },
//         shipmentPrice:String,
//         totalPrice:String
        
//     }) 
// const food = mongoose.model("food_collection", foodSchema);

//     const laptoSchema = mongoose.Schema({
//         name:String,
//         title:String,
//         price:String,
//         discount:String,
//         discountPrice:String,
//         description:String,
//         img_1:{
//             data:Buffer,
//             contentType:String
//         },
//         img_2:{
//             data:Buffer,
//             contentType:String
//         },
//         img3:{
//             data: Buffer,
//             contentType:String
//         },
//         img4:{
//             data:Buffer,
//             contentType:String
//         },
//         availability:String

//     }) 

// const laptop = mongoose.model("laptop_collection", laptoSchema);

// module.exports = {book, andro, cloth ,food, laptop}



