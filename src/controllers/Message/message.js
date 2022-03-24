const {prismaClient} = require('../../prisma')

const QueryMessage = {
  Query:{
    messages:()=> prismaClient.message.findMany(),
    getMessage: async (_ , id)=>{
      return  prismaClient.message.findFirst({
        where:{
          text: args.id
        }
      })
    } 
  },

  Mutation:{
    createMessage: async (_ , args) => {
      const {text } = args
      return   prismaClient.message.create({
        data:{
          text
        }
      })
    },

    deleteMessage: async ( _ , args )=> {
     return prismaClient.message.delete({
        where:{
          id: args.id
        }
      })
    }
  }


}
module.exports = {
  QueryMessage
}