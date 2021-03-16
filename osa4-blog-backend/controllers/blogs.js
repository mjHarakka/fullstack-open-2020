const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs.map((blog) => blog.toJSON()));
  });
});

blogsRouter.post("/api/blogs", async (request, response, next) => {
  const blog = new Blog(request.body);

  const user = await User.find({}).populate("blogs", { });

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogsRouter;
