import React, { createContext } from "react";
import { User } from "../types";

export default createContext<User | {}>({}) // auth user always is the emisor
