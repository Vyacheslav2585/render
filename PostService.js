import Post from "./Post.js";

class PostService{
    async create (post){

            const CreatedPost = await Post.create(post);
            return CreatedPost
    }
    async  getAll(){
            const posts = await Post.find()
            return posts
    }
    async  getOne(id){
            if(!id){
                throw new Error('Не вказано id')
            }
            const post =await Post.findById(id)
            return post
    }
    async  update(post){
            if(!post._id){
                throw new Error("ID не вказакний")
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id,post,{new:true})
            return updatedPost

    }
    async  delete(id){

            if(!id){
               throw new Error("id не введено")
            }
            const post = await Post.findByIdAndDelete(id)
            return post

    }
}
export default new PostService ()