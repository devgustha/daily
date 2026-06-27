<?php require __DIR__ . "/../includes/header.php"; ?>

<main>

    <h1 class="center-text">Meu diário</h1>
	<center><button id="new-entry" onclick="showNewEntryModal()">Nova entrada</button></center>

	<dialog id="new-entry-modal">
		<button class="close-btn" onclick="closeNewEntryModal(false)">X</button>
		<h1>Nova entrada</h1>
		<label for="new-entry-title">Título</label>
		<input type="text" id="new-entry-title">

		<label for="new-entry-date">Data</label>
		<input type="date" id="new-entry-date">

		<label for="new-entry-content">Conteúdo</label>
		<textarea id="new-entry-content"></textarea>

		<div class="actions">
			<button class="confirm-btn" onclick="createNewEntry(); closeNewEntryModal(true)">Criar entrada</button>
			<button class="cancel-btn" onclick="closeNewEntryModal(true)">Cancelar</button>
		</div>
	</dialog>

    <template id="entry-card-template">
		<article class="entry-card">
			<h2>Titulo</h2>
		abel>Criado em: </label>
			<time class="entry-created-at" datetime="2026-06-17">
		7 de Junho de 2026
			</time>
		abel>Data: </label>
			<time class="entry-date" datetime="2026-06-17">
				17 de Junho de 2026
			</time>
		etails>
		summary> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</summary>
		
			 <p>KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK</p>
		details>
		</article>
	</template>

	<script src="/js/diary.js"></script>
</main>

<?php require __DIR__ . "/../includes/footer.php"; ?>