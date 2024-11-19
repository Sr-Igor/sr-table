export const access = (obj: any, str: any) => {
  return str.split(".").reduce((acc: { [x: string]: any }, key: string) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, obj);
};
