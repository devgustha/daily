<section id="profile-screen">

    <h1 class="screen-title">Meu Perfil</h1>

    <section id="profile-card" class="profile-card">

        <div class="profile-avatar-container">
            <img id="profile-avatar" class="profile-avatar" src="/img/default-avatar.png" alt="Foto de perfil">
        </div>

        <div class="profile-info">

            <div class="profile-field">
                <label for="profile-username">Nome de usuário</label>
                <input id="profile-username" class="profile-input" type="text">
            </div>

            <div class="profile-field">
                <label for="profile-email">E-mail</label>
                <input id="profile-email" class="profile-input" type="email">
            </div>

            <div class="profile-field">
                <label for="profile-created-at">Criado em</label>
                <input id="profile-created-at" class="profile-input" type="text" readonly>
            </div>

        </div>

        <div class="profile-actions">
            <button id="save-profile-button" class="confirm-button">
                Salvar alterações
            </button>

            <button id="change-password-button" class="button">
                Alterar senha
            </button>

            <button id="logout-button" class="cancel-button">
                Sair da conta
            </button>

            <button id="delete-account-button" class="danger-button">
                Excluir conta
            </button>
        </div>

    </section>

</section>