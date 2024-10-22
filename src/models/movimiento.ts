export interface IMovimiento {
    idmovimiento: number;
    fecha_hora: string;
    descripcion: string;
    idtipo: number;
    idcategoria: number;
    idusuario: number;
    idmediopago: number;
    monto: number;
    idpago: number;
    usuarios?: [];
    medios_de_pago?: [];
    pagos?: [];
}