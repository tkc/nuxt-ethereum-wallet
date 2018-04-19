import * as type from "./type";
import * as statKey from "./state";

export default {
  [type.SET_CURRENT_ADDRESS](state,address) {
    state[statKey.CurrentAddress] = address;
  },
}
