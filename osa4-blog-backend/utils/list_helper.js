const blog = require('../models/blog')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let likes = 0

  blogs.forEach((blog) => {
    likes += blog.likes
  })

  return likes
}

const favoriteBlog = (blogs) => {
  let resultBlog = null
  let likes = 0

  blogs.forEach((blog) => {
    if (blog.likes > likes) {
      resultBlog = blog
      likes = blog.likes
    }
  })

  return resultBlog
}

const mostBLogs = (blogs) => {
  let authors = []
  /*
  blogs.forEach(blog) => {
    if (authors.length() === 0) {

    }
  }
  */
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
