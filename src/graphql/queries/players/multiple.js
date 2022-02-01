import { GraphQLList } from "graphql";
import { PlayerType } from "../../types/player";
import Player from "../../../db/models/player";

export default {
  type: new GraphQLList(PlayerType),
  resolve(root, params) {
    const players = Player.find({}).exec();
    if (!players) {
      throw new Error("Error finding players");
    }
    return players;
  },
};
