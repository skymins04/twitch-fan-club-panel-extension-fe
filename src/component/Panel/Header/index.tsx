import { usePanelSelector } from "@ReduxPanel";
import React, { FC } from "react";

const Header: FC = () => {
  const { fanClubPanelConfig } = usePanelSelector(({ fanClubPanelConfig }) => ({ fanClubPanelConfig }));

  return (
    <div className="panel-header">
      <span className="panel-header-icon">
        <span className="panel-header-icon-img">
          <img src="#" alt="" />
        </span>
      </span>
      <span className="panel-header-title">
        <span className="panel-header-title-main">{fanClubPanelConfig.panel.title.main}</span>
        <span className="panel-header-title-sub">{fanClubPanelConfig.panel.title.sub}</span>
      </span>
    </div>
  );
};

export default Header;
