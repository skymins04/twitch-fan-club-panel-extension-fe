import { objectTypeCompare, isValidFanClubPanelConfiguration } from "./function";

describe("Util Common Funcion.ts", () => {
  describe("objectTypeCompare()", () => {
    it("should be return false", () => {
      const aObj = {
        a: 1,
        b: true,
        c: {
          d: "",
          e: {
            f: false,
          },
          g: 2,
        },
      };
      const bObj = {
        a: 3,
        b: false,
        c: {
          d: "",
          e: null,
          g: 3,
        },
      };
      const cObj = {
        a: 3,
        b: false,
        c: {
          d: 3,
          e: {
            f: false,
          },
          g: 3,
        },
      };

      expect(objectTypeCompare(aObj, bObj)).toBe(false);
      expect(objectTypeCompare(aObj, cObj)).toBe(false);
    });

    it("should be return true", () => {
      const aObj = {
        a: 1,
        b: true,
        c: {
          d: "",
          e: {
            f: false,
          },
          g: 2,
        },
      };
      const bObj = {
        a: 4,
        b: false,
        c: {
          d: "",
          g: 2,
          e: {
            f: true,
          },
        },
      };

      expect(objectTypeCompare(aObj, bObj)).toBe(true);
    });
  });
  describe("isValidFanClubPanelConfiguration()", () => {
    it("should be return false", () => {
      const configA = {
        system: {
          version: "0.1",
          apiURL: "",
          cafeId: {
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
          },
          loading: {
            msg: {
              pending: "팬클럽패널 로딩중...",
              failed: "패널로딩을 실패했습니다.",
            },
          },
          banner: {
            interval: 5000,
          },
        },
      };
      const configB = {
        system: {
          version: "0.1",
          apiURL: "https://test.com/asdf",
          cafeId: {
            naverCafe: "test",
            tgd: "test",
            imageURL: "",
          },
        },
        panel: {
          title: {
            main: "테스트",
            sub: "",
          },
          toast: {
            articleList: {
              msg: "글목록 링크가 복사되었습니다.",
              delay: 5000,
            },
            musicBook: null,
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

      expect(isValidFanClubPanelConfiguration(configA)).toBe(false);
      expect(isValidFanClubPanelConfiguration(configB)).toBe(false);
    });

    it("should be return true", () => {
      const config = {
        system: {
          version: "0.1",
          apiURL: "https://test.com/asdf",
          cafeId: {
            naverCafe: "test",
            tgd: "test",
          },
        },
        panel: {
          title: {
            main: "테스트",
            sub: "",
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

      expect(isValidFanClubPanelConfiguration(config)).toBe(true);
    });
  });
});
