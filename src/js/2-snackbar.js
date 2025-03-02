import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

/**
 * @param {SubmitEvent} event
 */
function createPromise(event) {
  event.preventDefault();
  const state = event.target.state.value;
  const delay = Number(event.target.delay.value);

  if (isNaN(delay) || delay === Infinity || delay === -Infinity) {
    iziToast.warning({
      position: 'topRight',
      message: `Value ${delay} is not a valide number, please do no change value, input type and attribute "required" in the code inspector`,
    });
    return;
  }

  if (delay < 0) {
    iziToast.warning({
      position: 'topRight',
      message: 'Please enter a positive number',
    });
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') resolve(delay);
      else reject(delay);
    }, delay);
  })
    .then(delay =>
      iziToast.success({
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      })
    )
    .catch(delay =>
      iziToast.error({
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
      })
    );
}

form.addEventListener('submit', createPromise);
