import { GraphQLNonNull, GraphQLID } from "graphql";
import { PlayerType } from "../../types/player";
import Player from "../../../db/models/player";

export default {
  type: PlayerType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    const deletePlayer = Player.findByIdAndRemove(params.id).exec();
    if (!deletePlayer) {
      throw new Error("Error removing player");
    }
    return deletePlayer;
  },
};
