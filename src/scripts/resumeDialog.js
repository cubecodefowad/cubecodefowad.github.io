// The resume is not published, so its button opens a short dialog explaining
// that it can be requested by email. The trigger keeps its mailto href, so
// without dialog support (or without JS) it still composes an email instead of
// doing nothing.
export default function initResumeDialog() {
  const dialog = document.getElementById("resume-modal");
  const triggers = document.querySelectorAll(".js-resume-trigger");
  if (!dialog || !triggers.length) return;

  // showModal() is what gives us the focus trap, Esc-to-close and inert
  // background; without it, leave the mailto behaviour alone.
  if (typeof dialog.showModal !== "function") return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      if (!dialog.open) dialog.showModal();
    });
  });

  // Clicking the dimmed area closes it. Comparing against the dialog's own box
  // keeps clicks in its padding from counting as "outside".
  dialog.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    const outside =
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom;
    if (outside) dialog.close();
  });
}
