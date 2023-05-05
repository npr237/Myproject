const mongoose=require ('mongoose');

const DB='mongodb+srv://nupursingh237:nprsingh237@cluster0.jn359qr.mongodb.net/mystack?retryWrites=true&w=majority'
mongoose.connect(DB,(err)=>{
    if(!err)console.log('db connected');
    else console.log('db error');
})