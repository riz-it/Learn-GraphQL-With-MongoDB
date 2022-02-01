import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
} from "graphql";

import GraphQLDate from "graphql-date";

export const PlayerType = new GraphQLObjectType({
  name: "Player",
  description: "Player type",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    club: {
      type: GraphQLString,
    },
    position: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLDate,
    },
    updatedAt: {
      type: GraphQLDate,
    },
  }),
});

export const PlayerInputType = new GraphQLInputObjectType({
  name: "PlayerInput",
  description: "Player input type",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    club: {
      type: GraphQLString,
    },
    position: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLString,
    },
  }),
});
