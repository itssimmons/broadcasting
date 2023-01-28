import React, { createContext } from "react";
import type { User, UserCtx } from "../types";

export default createContext<UserCtx>({} as UserCtx)
