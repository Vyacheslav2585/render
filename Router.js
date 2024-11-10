import Router from 'express'
import PostControler from "./PostControler.js";

const router = new Router()
router.post('/posts', PostControler.create);
router.get('/posts',PostControler.getAll)
router.get('/posts/:id',PostControler.getOne)
router.put('/posts',PostControler.update)
router.delete('/posts/:id',PostControler.delete)

export default router
