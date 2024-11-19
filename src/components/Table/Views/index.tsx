import { Line } from "./Line";
import { Status } from "./Status";

export const components = {
  Line,
  Status,
};

export const getComponent = (type: keyof typeof components) => {
  return components[type];
};
