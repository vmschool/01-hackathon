import { Module } from "../core/module";

export class Clock extends Module {
  #body;
  #day
  #hasClock

  constructor() {
    super("clock", "Показать время");
    this.#body = document.querySelector("body");
    this.#day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    this.#hasClock = false;
  }

  trigger() {
    if (!this.#hasClock) {
        this.#getClocks();
    }
  }

  #getClocks() {
    this.#body.append(this.#renderClock());

    const clockItems = document.querySelectorAll("[data-time]");
    const clock = document.querySelector(".clock");
    const deletClock = document.querySelector(".deletClock");
    this.#hasClock = true

    clock.classList.add("show");
    if (clock.className === "clock show") {
      setTimeout(() => (clock.style.opacity = "1"), 300);
    }

    setInterval(() => {
      const newDate = {
        day: new Date().getDay(),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      };

      this.#renderDateTime(
        clockItems,
        this.#parseDay(newDate, this.#day),
        newDate.hours,
        newDate.minutes,
        newDate.seconds
      );
    }, 1000);

    this.#removeTimers(deletClock, clock);
  }

  #removeTimers(deletClock, clock) {
    deletClock.addEventListener("click", () => {
      clock.style.opacity = "0";
      setTimeout(() => {
        this.#hasClock = false
        clock.remove();
      }, 300);
    });
  }

  #renderDateTime(clockItems, day, hours, minutes, seconds) {
    clockItems.forEach((item) => {
      if (item.dataset.time === "day") {
        item.textContent = day;
      }
      if (item.dataset.time === "hours") {
        item.textContent = this.#parseHours(hours);
      }
      if (item.dataset.time === "minutes") {
        item.textContent = this.#parseMinutes(minutes);
      }
      if (item.dataset.time === "seconds") {
        item.textContent = this.#parseSeconds(seconds);
      }
    });
  }

  #parseHours(hours) {
    let parseHours = `${hours}`;
    if (hours <= 1) {
      parseHours = `0${hours}`;
    }
    return parseHours;
  }

  #parseMinutes(minutes) {
    let parseMinutes = `${minutes}`;
    if (minutes <= 9) {
      parseMinutes = `0${minutes}`;
    }
    return parseMinutes;
  }

  #parseSeconds(seconds) {
    let parseSeconds = `${seconds}`;
    if (seconds <= 9) {
      parseSeconds = `0${seconds}`;
    }
    return parseSeconds;
  }

  #parseDay(date, day) {
    const dayNow = date.day;
    const parseDay = day.find((day, i) => (i === dayNow ? day : false));
    return parseDay;
  }

  #renderClock() {
    const clock = document.createElement("div");
    clock.className = "clock";
    clock.setAttribute("data", "clock");

    const deletClock = document.createElement("div");
    deletClock.className = "deletClock";

    const clockItem = document.createElement("div");
    clockItem.className = "clock-item";

    clockItem.append(
      this.#renderItem("day"),
      this.#renderItem("hours"),
      this.#renderItem("minutes"),
      this.#renderItem("seconds")
    );

    clock.append(clockItem, deletClock);
    return clock;
  }

  #renderItem(text) {
    const item = document.createElement("div");
    item.className = "item";

    const titleItem = document.createElement("div");
    titleItem.className = "title-item";
    titleItem.dataset.time = `${text}`;

    const titleDescription = document.createElement("div");
    titleDescription.className = "title-description";
    titleDescription.textContent = `${text}`;

    item.append(titleItem, titleDescription);
    return item;
  }
}
