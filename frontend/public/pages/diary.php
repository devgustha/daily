<section id="diary-screen">
    <h1 class="center-text">Meu diário</h1>
    <button id="new-entry-button">Nova entrada</button>

    <dialog id="new-entry-modal">
        <button class="close-button">X</button>
        <h1>Nova entrada</h1>

        <label for="new-entry-title" required>Título</label>
        <input type="text" id="new-entry-title" required>

        <label for="new-entry-date">Data</label>
        <input type="date" id="new-entry-date">

        <label for="new-entry-content" required>Conteúdo</label>
        <textarea id="new-entry-content"></textarea>

        <label for="new-entry-password">Senha</label>
        <input type="text" id="new-entry-password">

        <div class="actions">
            <button class="confirm-button" id="create-entry-button">Criar
                entrada</button>
            <button class="cancel-button">Cancelar</button>
        </div>
    </dialog>
    <section id="diary-section">
    </section>

</section>
