// — — — — — — — — — — — — — — — — — —
// Задание 1 - Будильник
// — — — — — — — — — — — — — — — — — —

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(e => e.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({ callback, time, canCall: true });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(e => e.time !== time);
  }

  getCurrentFormattedTime() {
    let today = new Date();
    let hours = today.getHours();
    if (hours < 10) hours = '0' + hours;
    let minutes = today.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    return hours + ':' + minutes;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(e => {
        if (e.time === this.getCurrentFormattedTime() && e.canCall) {
          e.canCall = false;
          e.callback();
        }
      })
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(e => e.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}