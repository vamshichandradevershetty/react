import { createContext } from "react";

export const userContext = createContext({
    loggedInUser: "default user",
})