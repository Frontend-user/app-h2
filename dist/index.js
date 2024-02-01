"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogs_router_1 = require("./routes/blogs-router");
const posts_router_1 = require("./routes/posts-router");
const postValidators = [];
const app = (0, express_1.default)();
const jsonBodyMiddleware = express_1.default.json();
app.use(jsonBodyMiddleware);
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('w');
});
app.use('/blogs', blogs_router_1.blogsRouter);
app.use('/posts', posts_router_1.postsRouter);
app.delete('/testing/all-data', (req, res) => {
    res.sendStatus(204);
});
app.listen(PORT, () => {
    console.log(`START on PORT ${PORT}`);
});
