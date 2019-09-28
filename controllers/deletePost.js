const Post = require('../database/models/Post')

module.exports = (req, res) => {
    

    Post.findOneAndRemove({_id:req.params.id},(error,sucess)=>{
        if(error){
            console.log(error)
            res.redirect('/createPost')
        }
        else{
            res.redirect('/createPost')
        }
    })
}
