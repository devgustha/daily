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

        <nav>
            <a id="home-screen-button">Início</a>
            <a id="diary-screen-button">Diário</a>
            <a id="settings-screen-button">Configurações</a>

            <button id="login-button">Login</button>
        </nav>
    </header>

    <dialog id="login-modal">
        <button class="close-button">X</button>
        <h1>Login</h1>
        <input type="email" id="login-email">
        <input type="password" id="login-password">
        <button>Não possuo conta ainda</button>
        <button class="confirm-button" id="login">Login</button>
    </dialog>

    <dialog id="register-modal">
        <button class="close-button">X</button>
        <h1>Cadastrar</h1>
        <input type="text" id="register-username">
        <input type="email" id="register-email">
        <input type="password" id="register-password">
        <button id="register">Registrar</button>
        <button>Já possuo conta</button>
    </dialog>

    <script type="module" src="/static/js/login.js"></script>