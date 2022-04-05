<h1 class="nombre-pagina">Olvide mi Password</h1>
<p class="descripcion-pagina">Introduce tu email para cambiar tu contraseña</p>

<?php
        include_once __DIR__ . "/../templates/alertas.php";
?> 


<form class="formulario" method="POST" action="/olvide">
    <div class="campo">
        <label for="email">Email</label>
        <input 
            type="email"
            id="email"
            placeholder="Tu email"
            name="email"
        />
    </div>

    <input type="submit" class="boton" value="Enviar instrucciones">


</form>

<div class="acciones">
    <a href="/">¿Ya tienes una cuenta? Inicia Sesion</a>
    <a href='/crear-cuenta'>¿Aún no tienes una cuenta? Crear una</a>
</div>