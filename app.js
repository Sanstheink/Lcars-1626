function navigate(section) {
  document.querySelectorAll('.view')
    .forEach(v => v.classList.remove('active'));

  document.getElementById(section)
    .classList.add('active');
}
