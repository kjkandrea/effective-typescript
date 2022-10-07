const el = document.getElementById('foo');

if (el) {
  // el: HTMLElement
  el.textContent = 'Party Time';
} else {
  // el: null
  alert('No Party');
}
