const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

usersRouter.get('/', (request, response) => {
  User.find({}).then((users) => {
    response.json(users.map((user) => user.toJSON()))
  })
})

usersRouter.post('/', async (request, response, next) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save().catch((error) => {
    next(error)
  })
  response.json(savedUser)
})

module.exports = usersRouter
