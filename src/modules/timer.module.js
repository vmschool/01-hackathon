import { Module } from "../core/module";
import swal from "sweetalert";

export class TimerModule extends Module {
  trigger() {
    swal("Put your time in seconds here:", {
      content: "input",
    }).then((value) => {
      if (!value || value > 60) {
        alert("Your time is wrong");
      } else {
        const timeEl = document.createElement("div");
        const body = document.querySelector("body");
        timeEl.className = "timeEl";
        body.append(timeEl);

        setInterval(decreaseTime, 1000);

        function decreaseTime() {
          if (value === 0) {
            finishTimer();
          } else {
            let current = --value;
            if (current < 10) {
              current = `0${current}`;
            }
            setTime(current);
          }
        }
        function setTime(value) {
          timeEl.innerHTML = `00:${value}`;
        }

        function finishTimer() {
          timeEl.remove();
        }
      }
    });
  }
}
