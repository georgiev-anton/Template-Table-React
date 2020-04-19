import { ADD_DATA } from "./types";

export function addData(payload) {
  return {
    type: ADD_DATA,
    payload
  };
}
