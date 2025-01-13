import mongoose from "mongoose";
const dataconnection=()=>{
  mongoose.connect(process.env.MONGOCONNECTION).then(()=>{
    console.log('connected')
  }).catch((error)=>{
    console.log(error)
  })
}
export default dataconnection