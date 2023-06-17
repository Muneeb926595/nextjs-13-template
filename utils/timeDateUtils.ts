import moment from "moment";
export const getLastPostDuration = (date: any) => {
  const now = moment(date);
  const expiration = moment();
  const diff = expiration.diff(now);
  const diffDuration = moment.duration(diff);
  if (diffDuration.hours() < 1 && diffDuration.days() < 1) {
    return moment(date).startOf("minutes").fromNow();
  }
  if (diffDuration.days() >= 6) {
    return moment(date).format("D MMM YY, h:mm a");
  }
  return moment(date).calendar().replace("at", ",");
};
export const getTimeDuration = (duration: any) => {
  let seconds = Math.floor((duration % 1) * 60);
  let minutes = Math.floor(duration);
  let hours = 0;
  if (minutes > 60) {
    hours = minutes / 60;
    minutes = (hours % 1) * 60;
    hours = Math.floor(hours);
  }
  let newDuration = "";
  if (hours > 0) {
    newDuration += hours + " h ";
  }
  if (minutes > 0) {
    newDuration += minutes + " min ";
  }
  if (seconds > 0) {
    newDuration += seconds + " sec";
  }
  return newDuration;
};
export const mmss = (secs: any) => {
  const formatted = moment.utc(Math.round(secs) * 1000).format("mm:ss");
  return formatted;
};
export const covertMiliToDays = (milli: any) => {
  let minutes = Math.floor(milli / 60000);
  let hours = Math.round(minutes / 60);
  let days = Math.round(hours / 24);

  return (
    (days && { value: days, unit: "days" }) ||
    (hours && { value: hours, unit: "hours" }) || {
      value: minutes,
      unit: "minutes",
    }
  );
};
export const toHHMMSS = (timeInSeconds: any) => {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds = timeInSeconds - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = +("0" + hours);
  }
  if (minutes < 10) {
    minutes = +("0" + minutes);
  }
  if (seconds < 10) {
    seconds = +("0" + seconds);
  }
  return hours + ":" + minutes + ":" + seconds;
};

export const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day} ${month} ${year}`;
};
