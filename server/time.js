var getCurrentTimestamp = () => {
  var date = new Date();

  var y = date.getFullYear();
  var m = date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth();
  var d = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
  var h = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
  var min = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
  var s = date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : date.getSeconds();

  var currentTimestamp = `${y}-${m}-${d} ${h}:${min}:${s}`;

  return currentTimestamp;
}

var getLastSundayTimestamp = () => {
  var date = new Date();
  var minsOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - minsOffset);
  var weekDayNum = date.getDay();
  date.setDate(date.getDate() - weekDayNum);

  var y = date.getFullYear();
  var m = date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth();
  var d = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
  var h = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
  var min = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
  var s = date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : date.getSeconds();

  var lastSundayTimestamp = `${y}-${m + 1}-${d} 00:00:00`;

  return lastSundayTimestamp;
}

module.exports.getCurrentTimestamp = getCurrentTimestamp;
module.exports.getLastSundayTimestamp = getLastSundayTimestamp;
