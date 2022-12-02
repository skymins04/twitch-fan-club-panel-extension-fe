import { useConfigDispatch, useConfigSelector } from "@ReduxConfig";
import { fanClubPanelConfigAction } from "@Src/redux/common/slice/fanClubConfig";
import React, { FC, useEffect, useState } from "react";

const ConfigApp: FC = () => {
  const dispatch = useConfigDispatch();
  const { fanClubPanelConfig } = useConfigSelector(({ fanClubPanelConfig }) => ({ fanClubPanelConfig }));
  const [value, setValue] = useState(fanClubPanelConfig.panel.title.main);

  useEffect(() => {
    console.log("app", fanClubPanelConfig);
    setValue(fanClubPanelConfig.panel.title.main);
  }, [fanClubPanelConfig]);

  return (
    <>
      <h1>Config App</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() =>
          dispatch(fanClubPanelConfigAction.setPanelTitle({ ...fanClubPanelConfig.panel.title, main: value }))
        }
      >
        save
      </button>
    </>
  );
};

export default ConfigApp;
