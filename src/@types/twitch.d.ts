interface IFanClubPanelConfigurationContent {
  system: IFanClubPanelConfigurationContentSystem;
  panel: IFanClubPanelConfigurationContentPanel;
}

interface IFanClubPanelConfigurationContentSystem {
  version: string;
  apiURL: string;
  cafeId: IFanClubPanelCafeId;
}
interface IFanClubPanelCafeId {
  naverCafe: string;
  tgd: string;
}
interface IFanClubPanelConfigurationContentPanel {
  title: {
    main: string;
    sub: string;
    imageURL: string;
  };
  toast: IFanClubPanelToast;
  loading: {
    msg: {
      pending: string;
      failed: string;
    };
  };
  banner: {
    interval: number;
    urls: string[];
  };
}
interface IFanClubPanelToast {
  articleList: IFanClubPanelToastInfo;
  musicBook: IFanClubPanelToastInfo;
}
interface IFanClubPanelToastInfo {
  msg: string;
  delay: number;
}
