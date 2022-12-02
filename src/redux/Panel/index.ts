import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slice/common";
import fanClubPanelConfigSlice from "../common/slice/fanClubConfig";
import reduxLogger from "redux-logger";
import fanClubPanelConfigSubmitor from "../common/middleware/fanClubPanelConfigSubmitor";

const reduxPanelStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
    fanClubPanelConfig: fanClubPanelConfigSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fanClubPanelConfigSubmitor).concat(reduxLogger),
});

type TPanelRootState = ReturnType<typeof reduxPanelStore.getState>;
type TPanelDispatch = typeof reduxPanelStore.dispatch;

export default reduxPanelStore;
export const usePanelSelector: TypedUseSelectorHook<TPanelRootState> = useSelector;
export const usePanelDispatch: () => TPanelDispatch = useDispatch;
