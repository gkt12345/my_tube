export const useDurationParse = (duration) => {
  const durationPart = duration
    .replace("PT", "")
    .replace("M", ":")
    .replace("S", "")
    .split(":");
  // console.log(durationPart);

  if (durationPart.length === 2) {
    const firstPart =
      durationPart[0] > 0
        ? durationPart[0] > 9
          ? durationPart[0]
          : `0${durationPart[0]}`
        : "00";
    const secondPart =
      durationPart[1] > 0
        ? durationPart[1] > 9
          ? durationPart[1]
          : `0${durationPart[1]}`
        : "00";
    return `${firstPart}:${secondPart}`;
  }

  if (durationPart.length === 1) {
    return `00:${
      durationPart[0] < 10 ? `0${durationPart[0]}` : durationPart[0]
    }`;
  }

  return "";
};
