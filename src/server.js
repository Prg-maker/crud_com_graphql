const {ApolloServer} = require('apollo-server')
const {typeDefs} = require('./schema/schema')
const {resolvers} = require('./controllers/resolver')



const server =  new  ApolloServer({
  typeDefs,
  resolvers
})



server.listen().then(({url})=> {
  console.log(url)
})