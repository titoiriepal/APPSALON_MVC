<h1 class="nombre-pagina">Recuperar mi Password</h1>
<p class="descripcion-pagina">Introduce tu nuevo Password </p>

<?php
        include_once __DIR__ . "/../templates/alertas.php";
?> 

<?php if($error) return; ?>
<form class="formulario" method="POST">
    <div class="campo">
        <label for="password">Nuevo Password</label>
        <input 
            type="password"
            id="password"
            placeholder="Tu nuevo password"
            name="password"
        />
    </div>

    <input type="submit" class="boton" value="Reestablecer Password">


</form>

<div class="acciones">
    <a href="/">¿Ya tienes una cuenta? Inicia Sesion</a>
    <a href='/crear-cuenta'>¿Aún no tienes una cuenta? Crear una</a>
</div>