import { useConfigDispatch } from "@ReduxConfig";
import { fanClubPanelConfigAction } from "@Src/redux/common/slice/fanClubConfig";
import { fanClubPanelDefaultConfiguration } from "@Util/common/constant";
import { isValidFanClubPanelConfiguration } from "@Util/common/function";
import React, { FC, ReactNode, useEffect } from "react";

const TwitchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useConfigDispatch();

  useEffect(() => {
    Twitch.ext.onAuthorized((auth) => {
      return;
    });
    Twitch.ext.configuration.onChanged(() => {
      let config: IFanClubPanelConfigurationContent;
      try {
        const twitchBroadcasterConfig = Twitch.ext.configuration.broadcaster;
        if (!twitchBroadcasterConfig || !twitchBroadcasterConfig.content) throw Error();
        config = JSON.parse(twitchBroadcasterConfig.content);
        if (!isValidFanClubPanelConfiguration(config)) throw Error();
        console.log("parsing test", config);
      } catch (e) {
        config = fanClubPanelDefaultConfiguration;
        console.log("init configuration");
      }
      dispatch(fanClubPanelConfigAction.initConfig(config));
    });
  }, []);
  return <>{children}</>;
};

export default TwitchProvider;
