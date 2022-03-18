import About from '../models/about'

export default {
 addAbout: async(req,res,next)=>{
   try {
     const body = req.body;
     const about = await About.create(body);
     res.status(200).json(about);  
   } catch (err) {
     res.status(500).send({
        message: `An error ocurred ${err}`
     }) 
     next(err);
   }
 },
  getAbouts: async(req,res,next)=>{
    try {
        const abouts = await About.find({})
        res.status(200).json(abouts);  
      } catch (err) {
        res.status(500).send({
           message: `An error ocurred ${err}`
        }) 
        next(err);
    }
  },
  updateAbout: async(req,res,next)=>{
    try {
        const { id } = req.params;
        const update  = req.body;
        const about  = await About.findByIdAndUpdate(id,update,{new:true});
        res.status(200).json(about);
        const abouts = await About.find({})
      } catch (err) {
        res.status(500).send({
           message: `An error ocurred ${err}`
        }) 
        next(err);
    }
  },
  deleteAbout: async(req,res,next)=>{
    try {
        const { id } = req.params;
        const update  = req.body;
        const about  = await About.findByIdAndUpdate(id,{state:false},{new:true});

        res.status(200).json({message:'About delete succesfully'});
      } catch (err) {
        res.status(500).send({
           message: `An error ocurred ${err}`
        }) 
        next(err);
    } 
  }  
}