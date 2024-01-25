class Clock {
  constructor() {
    this.timeZone = "America/New_York";
    this.lang = "es-ES";
    this.is24 = false;
    this.withSeconds = false;
    this.idInterval = 0;
    this.time = 1000;
  }

  init(callback) {
    this.getTime(callback);
    this.idInterval = setInterval(() => this.getTime(callback), this.time);
  }

  getTime(callback) {
    const now = new Date();
    const options = this.withSeconds
      ? {
          timeZone: this.timeZone,
          hour12: !this.is24,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }
      : {
          timeZone: this.timeZone,
          hour12: !this.is24,
          hour: "2-digit",
          minute: "2-digit",
        };
    const hourText = now.toLocaleTimeString(this.lang, options);
    if (this.is24) callback(hourText, "");
    else {
      const hourArray = hourText.split(" ");
      const hour = hourArray[0];
      const moon = hourArray[1].replace(/\./g, "").replace(/\s/g, "");
      callback(hour, moon);
    }
  }

  clear() {
    clearInterval(this.idInterval);
  }
}
