const CountdownTimer = {
  selector: document.querySelector('#timer-1'),
  targetDate: new Date('Jul 17, 2020'),
};

const clockElemRefs = {
  days: CountdownTimer.selector.querySelector('span[data-value="days"]'),
  hours: CountdownTimer.selector.querySelector('span[data-value="hours"]'),
  mins: CountdownTimer.selector.querySelector('span[data-value="mins"]'),
  secs: CountdownTimer.selector.querySelector('span[data-value="secs"]'),
};

// FUNCTIONS
(function timer() {
  const targetTime = CountdownTimer.targetDate.getTime();

  setInterval(() => {
    const currentTime = Date.now();

    const deltaTime = targetTime - currentTime;

    updateClock(deltaTime);
  }, 1000);
})();

function updateClock(time) {
  // converting to clock
  const days = helperPad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = helperPad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  const mins = helperPad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = helperPad(Math.floor((time % (1000 * 60)) / 1000));

  // update clockface
  clockElemRefs.days.textContent = days;
  clockElemRefs.hours.textContent = hours;
  clockElemRefs.mins.textContent = mins;
  clockElemRefs.secs.textContent = secs;
}

// helper
function helperPad(val) {
  return String(val).padStart(2, '0');
}
