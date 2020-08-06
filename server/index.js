const express = require("express")
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express")
var graphqlHTTP = require('express-graphql');

const typeDefs = require("./api/Types")
const resolvers = require("./api/Resolvers")

var cors = require("cors");

const app = express()

const server = new ApolloServer({
	typeDefs,
	resolvers
})

server.applyMiddleware({ app })

// Connect to Database
const MONGO_URI =
  "mongodb+srv://test:qGrjG5mQE8X32yF4@demo-xzslx.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use('*', cors());

// app.use('/graphql', cors(), graphqlHTTP({
// 	schema: schema,
// 	rootValue: global,
// 	graphiql: true,
// }));


// Listen for HTTP Requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

