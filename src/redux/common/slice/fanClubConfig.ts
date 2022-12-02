import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fanClubPanelVersion } from "@Util/common/constant";

const initialState: IFanClubPanelConfigurationContent = {
  system: {
    version: fanClubPanelVersion,
    apiURL: "",
    cafeId: {
      naverCafe: "",
      tgd: "",
    },
  },
  panel: {
    title: {
      main: "",
      sub: "",
      imageURL: "",
    },
    toast: {
      articleList: {
        msg: "",
        delay: 0,
      },
      musicBook: {
        msg: "",
        delay: 0,
      },
    },
    loading: {
      msg: {
        pending: "",
        failed: "",
      },
    },
    banner: {
      interval: 0,
      urls: [],
    },
  },
};

const fanClubPanelConfigSlice = createSlice({
  name: "fanClubPanelConfig",
  initialState,
  reducers: {
    initConfig(state, action: PayloadAction<IFanClubPanelConfigurationContent>) {
      state.system.version = action.payload.system.version;
      state.system.apiURL = action.payload.system.apiURL;
      state.system.cafeId.naverCafe = action.payload.system.cafeId.naverCafe;
      state.system.cafeId.tgd = action.payload.system.cafeId.tgd;
      state.panel.title.main = action.payload.panel.title.main;
      state.panel.title.sub = action.payload.panel.title.sub;
      state.panel.title.imageURL = action.payload.panel.title.imageURL;
      state.panel.toast.articleList.msg = action.payload.panel.toast.articleList.msg;
      state.panel.toast.articleList.delay = action.payload.panel.toast.articleList.delay;
      state.panel.toast.musicBook.msg = action.payload.panel.toast.musicBook.msg;
      state.panel.toast.musicBook.delay = action.payload.panel.toast.musicBook.delay;
      state.panel.loading.msg.pending = action.payload.panel.loading.msg.pending;
      state.panel.loading.msg.failed = action.payload.panel.loading.msg.failed;
      state.panel.banner.interval = action.payload.panel.banner.interval;
      state.panel.banner.urls = action.payload.panel.banner.urls;
    },
    setSystemAPIURL(state, action: PayloadAction<string>) {
      state.system.apiURL = action.payload;
    },
    setSystemCafeId(state, action: PayloadAction<IFanClubPanelCafeId>) {
      state.system.cafeId.naverCafe = action.payload.naverCafe;
      state.system.cafeId.tgd = action.payload.tgd;
    },
    setPanelTitle(state, action: PayloadAction<{ main: string; sub: string; imageURL: string }>) {
      state.panel.title = action.payload;
    },
    setPanelToast(state, action: PayloadAction<IFanClubPanelToast>) {
      state.panel.toast = action.payload;
    },
    setPanelLoaingMsg(state, action: PayloadAction<{ pending: string; failed: string }>) {
      state.panel.loading.msg = action.payload;
    },
    setPanelBannerInterval(state, action: PayloadAction<number>) {
      state.panel.banner.interval = action.payload;
    },
    appendPanelBannerURL(state, action: PayloadAction<string>) {
      state.panel.banner.urls.push(action.payload);
    },
    prependPanelBannerURL(state, action: PayloadAction<string>) {
      state.panel.banner.urls.unshift(action.payload);
    },
    setPanelBannerURLs(state, action: PayloadAction<string[]>) {
      state.panel.banner.urls = action.payload;
    },
  },
});
export default fanClubPanelConfigSlice;

export const fanClubPanelConfigAction = fanClubPanelConfigSlice.actions;
