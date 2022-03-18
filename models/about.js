import mongoose,{Schema} from 'mongoose'

const AboutSchema = new Schema({
  title: String,
  description: String  
},{versionKey:false})

const About = mongoose.model('About',AboutSchema);

export default About;