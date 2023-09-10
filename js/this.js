const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn = document.querySelector(".js-btn");
console.log(btn);

// ✅ Працює
mango.showUsername();

// ❌ this буде посилатися на button, якщо використовувати showUsername як callback
btn.addEventListener("click", mango.showUsername); // не працює
// this буде посилатися на кнопку(на DOM-елемент, на якому висить слухач): <button class="btn js-btn">My name is BUTTON</button>
// властивість username відсутня на кнопці, тому this.username буде undefined

// ✅ Не забувайте прив'язувати контекст методів об'єкта
btn.addEventListener("click", mango.showUsername.bind(mango));
// this буде посилатися на об'єкт mango, оскільки ми його явно прив'язали через bind
// this.username, відповідно буде прочитано з об'єкта mango як: Mango