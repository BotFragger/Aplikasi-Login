/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** variable elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/** variabel menyimpan informasi email & password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/**button click action */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    /**get value dari input */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /**membandingkan nilai */
    if (email == expectedEmail && password == expectedPassword) {
      //kondisi berhasil
      goToHome();
    } else {
      //kondisi gagal
      showPopUp();
    }
});
