export const fanClubPanelVersion = "0.1";

export const fanClubPanelDefaultConfiguration: IFanClubPanelConfigurationContent = {
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
      main: "팬클럽패널주제목",
      sub: "팬클럽패널부제목",
      imageURL: "",
    },
    toast: {
      articleList: {
        msg: "글목록 링크가 복사되었습니다.",
        delay: 5000,
      },
      musicBook: {
        msg: "노래책 링크가 복사되었습니다.",
        delay: 5000,
      },
    },
    loading: {
      msg: {
        pending: "팬클럽패널 로딩중...",
        failed: "패널로딩을 실패했습니다.",
      },
    },
    banner: {
      interval: 5000,
      urls: [],
    },
  },
};
