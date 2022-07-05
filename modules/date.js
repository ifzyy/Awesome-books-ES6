import luxon from "./luxon.js";

const dateSection = document.querySelector(".date");
const dateNow = () => {
  const dateTime = luxon.DateTime.now().toLocaleString(
    luxon.DateTime.DATETIME_FULL
  );
  dateSection.innerHTML = dateTime;
};
export default dateNow();
