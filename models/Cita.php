<?php

namespace Model;

class Cita extends ActiveRecord{
    // Base de datos

    protected static $tabla = 'citas';
    protected static $columnasDB = ['id', 'fecha', 'hora', 'idusuario'];

    public $id;
    public $fecha;
    public $hora;
    public $idusuario;

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->fecha = $args['fecha'] ?? '';
        $this->hora = $args['hora'] ?? '';
        $this->idusuario = $args['idusuario'] ?? '';
    }
}