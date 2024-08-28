export function handleUploadKey(e: any) {
  // @TODO: rewrite this function
  const keyFileInput = document.getElementById('pkFile');

  if (!keyFileInput) {
    return;
  }
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const fileName = e.target.files[0].name;

  const fileContainer = keyFileInput.closest('.file');

  if (!fileContainer) {
    return;
  }

  const existingFileNameSpan = fileContainer.querySelector('.file-name');
  if (existingFileNameSpan) {
    existingFileNameSpan.remove();
  }

  if (fileName) {
    const fileNameSpan = document.createElement('span');
    fileNameSpan.classList.add('file-name');
    fileNameSpan.innerHTML = fileName;
    keyFileInput.parentElement && keyFileInput.parentElement.appendChild(fileNameSpan);
    fileContainer.classList.add('has-name');
  } else {
    fileContainer.classList.remove('has-name');
  }
}
