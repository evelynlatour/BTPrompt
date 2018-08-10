const graphql = require(`graphql`);
const { Product, Review } = require(`../db/index`);

const {
  GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLInt,
} = graphql;

// /// QUERY TYPES ///// (other type is "mutation" which encompasses create, update, and delete)
const ProductType = new GraphQLObjectType({
  name: `Product`,
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    price: { type: GraphQLInt },
    unitsInStock: { type: GraphQLInt },
  }),
});

const ReviewType = new GraphQLObjectType({
  name: `Review`,
  fields: () => ({
    id: { type: GraphQLID },
    subject: { type: GraphQLString },
    content: { type: GraphQLString },
    rating: { type: GraphQLInt },
    product: { // handling foreign keys
      type: ProductType,
      resolve(root, args) {
        return Product.findById(root.productId);
      },
    },
  }),
});


// you'll have multiple root queries
const RootQuery = new GraphQLObjectType({
  name: `RootQueryType`,
  fields: {
    product: { // this names the query for frontend usage
      type: ProductType,
      args: { id: { type: GraphQLID } }, // what you'll use to look up individual products (id)
      resolve(root, args) { // code to get data from db or other source (e.g. linkedIn api)
        return Product.findById(args.id);
      },
    },
    review: {
      type: ReviewType,
      args: { id: { type: GraphQLID } },
      resolve(root, args) {
        return Review.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});


/* RESOLVERS: at base, a GraphQL server will have one resolver function per field in its schema.
The resolver knows how to fetch the data for its field -- the graphQL server will
invoke all resolver funcs for the fields specified in a query */

/* EXAMPLE */
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: `Query`,
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve: (root, args, context, info) => `Hello World`,
//       },
//     },
//   }),
// });

// (root, args, context, info)
// parent === root: the result of the previous call in the resolver chain
// args carries the parameters for the query
// context: an object passed through the  chain which resolvers can read and write to
// info: AST representation of the query or mutation
