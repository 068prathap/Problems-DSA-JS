function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
  }
  console.log(truncate("Hi everyone!", 20));