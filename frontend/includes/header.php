<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diário</title>
    <link rel="stylesheet" href="/static/css/style.css">
</head>

<body>

    <header>
        <h1>Diário</h1>

        <nav id="main-nav">
            <a id="home-screen-button">Início</a>
            <a id="diary-screen-button">Diário</a>
            <a id="settings-screen-button">Configurações</a>
            <a id="profile-screen-button">Perfil</a>
        </nav>
    </header>

    <dialog id="login-modal">
        <button class="close-button">X</button>
        <h1>Login</h1>
        <label for="login-email" required>Email</label>
        <input type="email" id="login-email">
        <label for="login-email" required>Senha</label>
        <input type="password" id="login-password">
        <button id="register-button">Não possuo conta ainda</button>
        <button class="confirm-button" id="login">Login</button>
    </dialog>

    <dialog id="register-modal">
        <button class="close-button">X</button>
        <h1>Cadastrar</h1>
        <label for="register-username" required>Nome de usuário</label>
        <input type="text" id="register-username">
        <label for="register-email" required>Email</label>
        <input type="email" id="register-email">
        <label for="register-password" required>Senha</label>
        <input type="password" id="register-password">
        <label for="register-confirm-password" required>Confirmar senha</label>
        <input type="password" id="register-confirm-password">
        <button id="register-modal-login-button">Já possuo conta</button>
        <button id="register" class="confirm-button">Registrar</button>
    </dialog>