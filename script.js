const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <button class="modal-close" aria-label="סגירת תמונה">×</button>
  <img class="modal-content" alt="תמונה מוגדלת">
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-content');
const closeBtn = modal.querySelector('.modal-close');

function openModal(src, alt) {
  if (!src) return;
  modalImg.src = src;
  modalImg.alt = alt || 'תמונה מוגדלת';
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
  modalImg.src = '';
}

document.querySelectorAll('img[data-modal]').forEach((img) => {
  img.addEventListener('click', () => openModal(img.getAttribute('src'), img.getAttribute('alt')));
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});
