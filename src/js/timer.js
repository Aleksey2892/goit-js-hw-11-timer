class CountdownTimer {
  constructor({ selector, myBirthday }) {
    this.selector = selector;
    this.myBirthday = myBirthday;
  }
}

const birthdayTimer = new CountdownTimer({
  selector: '#timer-1',
  myBirthday: new Date('Nov 28, 2020'), // my birthday
});

const clockElemRefs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

// FUNCTIONS
(function timer() {
  const targetTime = birthdayTimer.myBirthday.getTime();

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
