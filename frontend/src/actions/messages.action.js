import { CREATE_MESSAGE } from "./types";

export const createMessage = (message) => ({
    type: CREATE_MESSAGE,
    payload: message
})