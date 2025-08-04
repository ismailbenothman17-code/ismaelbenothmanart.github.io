function switchLang(lang) {
  document.querySelectorAll('[lang="fr"]').forEach(el => el.style.display = lang === 'fr' ? '' : 'none');
  document.querySelectorAll('[lang="en"]').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
}