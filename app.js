const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const rootValue = require("./graphql/resolvers");
const schema = require("./graphql/schema/index");

const app = express();
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up on port ${5000}...`));
