const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`

}
const formatTime0 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${[month, day].map(formatNumber).join('-')}`
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
// 明天
const formatTime1 = date => {
  const month = date.getMonth() + 1
  const day1 = date.getDate()+1
  return `${[month, day1].map(formatNumber).join('-')}`
}
// 后天
const formatTime2 = date => {
  const month = date.getMonth() + 1
  const day2 = date.getDate()+2

  return `${[month, day2].map(formatNumber).join('-')}`
}

module.exports = {
  formatTime,
  formatTime0,
  formatTime1,
  formatTime2
}
