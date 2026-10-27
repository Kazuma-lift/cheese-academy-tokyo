// フォームは実在しない学校向けのデモ。送信せず、受け付けたことだけ知らせる。
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const done = contactForm.querySelector(".form-done");
    contactForm.reset();
    if (done) {
      done.hidden = false;
    }
  });
}

