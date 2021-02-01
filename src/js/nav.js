document.addEventListener(
  'click',
  function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('#mmClose')) return;

    // Don't follow the link
    event.preventDefault();

    // Log the clicked element in the console
    var men = document.getElementById('men');
    men.style.display = 'none';
    var bod = document.getElementById('bod');
    bod.classList.remove('hid');
  },
  false
);

document.addEventListener(
  'click',
  function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('#mmOpen')) return;

    // Don't follow the link
    event.preventDefault();

    // Log the clicked element in the console
    var men = document.getElementById('men');
    men.style.display = 'block';
    bod.classList.add('hid');
  },
  false
);
//to bypass using --no-verify
//git commit -m "Your message about the commit" --no-verify
//git push