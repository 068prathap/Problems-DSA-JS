function getSeconds() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 24*60*60;
  
    return totalSecondsInADay - totalToday;
  }
  console.log(getSeconds());