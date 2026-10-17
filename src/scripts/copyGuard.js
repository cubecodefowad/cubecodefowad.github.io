// Deters casual copying: the browser's copy, cut and paste events, the context
// menu, text selection and image dragging are all cancelled before they reach
// the page.
//
// It is not protection. The markup is still downloadable, JS can be disabled,
// and devtools or a screenshot bypass it entirely — this only stops the
// right-click / Ctrl+C routes most visitors use.
const BLOCKED_EVENTS = [
  "copy",
  "cut",
  "paste",
  "contextmenu",
  "dragstart",
  "selectstart",
];

// Fields must keep working, or the guard would break every future input on the
// page. Returning early leaves the browser's default handling untouched.
function isEditable(target) {
  if (!target || typeof target.closest !== "function") return false;
  return Boolean(
    target.closest("input, textarea, select, [contenteditable='true']")
  );
}

export default function initCopyGuard() {
  BLOCKED_EVENTS.forEach((type) => {
    document.addEventListener(
      type,
      (event) => {
        if (isEditable(event.target)) return;
        // Cancelling the default action is what stops the copy; the event is
        // left to propagate so other page code still sees it.
        event.preventDefault();
      },
      { capture: true }
    );
  });
}
