<h1 class="nombre-pagina">Panel de administración</h1>

<?php
    include_once __DIR__ . '/../templates/barra.php';
?>
<h2>Buscar Citas</h2>
<div class="busqueda">
    <form class="formulario" action="">
        <div class="campo">
            <label for="fecha">Fecha</label>
            <input 
                type="date"
                id="fecha"
                name="fecha"
                value="<?php echo $fecha; ?>"
            
            />
        </div>
    </form>

</div>

<?php
    if(count($citas) === 0) {
        echo "<br>";
        echo "<h3>No hay citas para este dia</h3>";
    }
?>

<div id="citas-admin">

    <ul class="citas">
        <?php
        $idCita='';
            foreach ( $citas as $key => $cita){  
                
                if($idCita !== $cita->id){
                    $total = 0;


                    $idCita = $cita->id;
        ?>
            <li>
                <p>ID: <span><?php echo $cita->id; ?></span>
                <p>Hora: <span><?php echo $cita->hora; ?></span>
                <p>Cliente: <span><?php echo $cita->cliente; ?></span>
                <p>Email: <span><?php echo $cita->email; ?></span>
                <p>Telefono: <span><?php echo $cita->telefono; ?></span>

                <h3>Servicios:</h3>
            

        <?php
                }//Fin de if
                
        ?>
                <p class="servicio"><?php echo $cita->servicio . " - " . $cita->precio . "€"; ?>

        <?php
            $total += $cita->precio;
            $actual = $cita->id;
            $proximo = $citas[$key +1]->id ?? 0;

            
            if (esUltimo($actual, $proximo)){
                ?>

                <p>Total: <span><?php echo $total . " €" ?></span></p>
                <form action="api/eliminar" method="POST">
                    <input type="hidden" 
                        name="id" 
                        value="<?php echo $cita->id; ?>"
                    
                    />

                    <input type="submit" class="boton-eliminar" value="Eliminar">
                </form>
            </li>
                <?php
                
                
                } //End de if
       
            }//Fin de Foreach
        ?>

    </ul>

</div>

<?php
    $script = "<script src='build/js/buscador.js'></script>";
?>