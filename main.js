document.getElementById('form-validacao').addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = Number(document.getElementById('campoA').value);
    const campoB = Number(document.getElementById('campoB').value);
    const msgSucesso = document.querySelector('.msg-sucesso');
    const msgErro = document.querySelector('.msg-erro');

    if (campoB > campoA) {
        msgSucesso.style.display = 'block';
        msgErro.style.display = 'none';
    } else {
        msgErro.style.display = 'block';
        msgSucesso.style.display = 'none';
    }
});