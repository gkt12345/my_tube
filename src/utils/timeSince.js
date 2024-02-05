export const timeSince = (date) => {
  // const dateObj = new Date(date);  time string in object
  const seconds = Math.floor(
    (new Date().valueOf() - new Date(date).valueOf()) / 1000
  );

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years";

  interval = seconds / 259200;
  if (interval > 1) return Math.floor(interval) + " months";

  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days";

  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes";
};
