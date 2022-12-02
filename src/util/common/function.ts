import { fanClubPanelDefaultConfiguration, fanClubPanelVersion } from "./constant";

export const getTwitchBroadcasterConfig = () => Twitch.ext.configuration.broadcaster;

export const submitTwitchBroadcasterConfig = (config: IFanClubPanelConfigurationContent) =>
  Twitch.ext.configuration.set("broadcaster", fanClubPanelVersion, JSON.stringify(config));

export const isValidFanClubPanelConfiguration = (config: unknown) => {
  if (typeof config !== "object" && config !== null) return false;
  return objectTypeCompare(config, fanClubPanelDefaultConfiguration);
};

export const objectTypeCompare = (a: unknown, b: unknown) => {
  if (typeof a !== "object" || typeof b !== "object") throw Error("Parameter is not object type");
  if (a === null || b === null) throw Error("Parameter is null");

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.filter((x) => !bKeys.includes(x)).concat(bKeys.filter((x) => !aKeys.includes(x))).length !== 0)
    return false;

  const nextAObjects: object[] = [];
  const nextBObjects: object[] = [];
  for (const key of aKeys) {
    const tmpA = (a as { [key: string]: unknown })[key];
    const tmpB = (b as { [key: string]: unknown })[key];
    if (typeof tmpA === "object" && typeof tmpB === "object" && tmpA !== null && tmpB !== null) {
      nextAObjects.push(tmpA);
      nextBObjects.push(tmpB);
    } else if (typeof tmpA !== typeof tmpB || (tmpA !== null && tmpB === null) || (tmpA === null && tmpB !== null))
      return false;
  }

  if (nextAObjects.length !== 0)
    for (let i = 0; i < nextAObjects.length; i++)
      if (!objectTypeCompare(nextAObjects[i], nextBObjects[i])) return false;

  return true;
};
