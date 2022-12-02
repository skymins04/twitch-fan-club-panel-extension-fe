import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slice/common";
import fanClubPanelConfigSlice from "../common/slice/fanClubConfig";
import reduxLogger from "redux-logger";
import fanClubPanelConfigSubmitor from "../common/middleware/fanClubPanelConfigSubmitor";

const reduxConfigStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
    fanClubPanelConfig: fanClubPanelConfigSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fanClubPanelConfigSubmitor).concat(reduxLogger),
});

type TConfigRootState = ReturnType<typeof reduxConfigStore.getState>;
type TConfigDispatch = typeof reduxConfigStore.dispatch;

export default reduxConfigStore;
export const useConfigSelector: TypedUseSelectorHook<TConfigRootState> = useSelector;
export const useConfigDispatch: () => TConfigDispatch = useDispatch;
