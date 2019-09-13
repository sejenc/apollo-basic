const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        title: String
        author: Author
    }

    type Author {
        name: String
    }

    type Query {
        books: [Book]
    }

`

const books = [
    {
        title: 'A Terrible Thing to Waste',
        author: {
            name: 'Harriet A. Washington'
        }
    },
    {
        title: 'Song of Solomon',
        author: {
            name: 'Toni Morrison'
        }
    }
]

const resolvers = {
    Query: {
        books: () => books
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`)
})