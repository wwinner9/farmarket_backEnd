const {Schema,model, SchemaType}= require('mongoose')

const cartSchema= new Schema({ 
    customer:{type: Schema.Types.ObjectId, ref:'User'},
    products:[{type: Schema.Types.ObjectId, ref:'Product'}]
},{timestamps:true})


module.exports= model('Cart',cartSchema)