const CountdownTimer = {
  selector: document.querySelector('#timer-1'),
  secs: document.querySelector('span[data-value="secs"]'),
  targetDate: new Date('Jul 17, 2020'),
};

function timer() {
  const targetTime = CountdownTimer.targetDate.getTime();

  setInterval(() => {
    const currentTime = Date.now();

    const deltaTime = targetTime - currentTime;

    updateClock(deltaTime);
  }, 1000);
}
console.log(CountdownTimer.selector.querySelector('span[data-value="secs"]'));
timer();

function updateClock(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  console.log(`${days}:${hours}:${mins}:${secs}`);
}

function pad(val) {
  return String(val).padStart(2, '0');
}
