import express, {NextFunction, Request, Response} from 'express'
import {blogsRouter} from "./routes/blogs-router";
import {postsRouter} from "./routes/posts-router";



const postValidators = []
const app = express()
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)
const PORT = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('w')
})

app.use('/blogs',blogsRouter)
app.use('/posts',postsRouter)

app.delete('/testing/all-data', (req: Request, res: Response) => {
    res.sendStatus(204)
})



app.listen(PORT, () => {
    console.log(`START on PORT ${PORT}`)
})
