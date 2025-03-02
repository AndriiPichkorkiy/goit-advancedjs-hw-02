import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

/**
 * @param {SubmitEvent} event
 */
function createPromise(event) {
  event.preventDefault();
  const state = event.target.state.value;
  const delay = event.target.delay.value;
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
