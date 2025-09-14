console.log("Content script ativado!");

document.querySelectorAll('a').forEach(link => {
  link.style.border = '2px solid #0b65cf';
  link.style.borderRadius = '3px';
});
