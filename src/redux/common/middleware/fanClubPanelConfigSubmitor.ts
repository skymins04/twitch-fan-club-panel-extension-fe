import { PayloadAction } from "@reduxjs/toolkit";
import { submitTwitchBroadcasterConfig } from "@Util/common/function";
import { Middleware } from "redux";

const fanClubPanelConfigSubmitor: Middleware = (store) => (next) => (action: PayloadAction<unknown>) => {
  const result = next(action);
  if (action.type.split("/")[0] === "fanClubPanelConfig") {
    const config: IFanClubPanelConfigurationContent = store.getState().fanClubPanelConfig;

    setTimeout(() => {
      submitTwitchBroadcasterConfig(config);
      console.log("submited FanClub Panel Configuration to Twitch");
    }, 500);
  }
  return result;
};

export default fanClubPanelConfigSubmitor;
