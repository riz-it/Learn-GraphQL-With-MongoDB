import { GraphQLNonNull } from "graphql";
import { PlayerType, PlayerInputType } from "../../types/player";
import Player from "../../../db/models/player";

export default {
  type: PlayerType,
  args: {
    data: {
      name: "data",
      type: new GraphQLNonNull(PlayerInputType),
    },
  },
  resolve(root, params) {
    const PlayerModel = new Player(params.data);
    const newPlayer = PlayerModel.save();
    if (!newPlayer) {
      throw new Error("Error saving data");
    }
    return newPlayer;
  },
};
