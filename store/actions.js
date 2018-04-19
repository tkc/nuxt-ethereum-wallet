import * as type from "./type";

export default {
  setCurrentAddress({commit},address) {
    commit(type.SET_CURRENT_ADDRESS, address)
  },
};
