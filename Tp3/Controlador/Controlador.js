import Servicio from "../Servicio/Servicio.js"

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerLibros = async (req,res) => {
        const { id } = req.params
        const productos = await this.servicio.obtenerLibros(id)
        res.json(productos)
    }

    obtenerLibrosXID = async (req,res) => {
        const { id } = req.params
        const resultado = await this.servicio.obtenerLibrosXID(id)
        res.json(resultado)
    }

    guardarLibro = async (req,res) => {
        const libro = req.body
        const libroGardado = await this.servicio.guardarLibro(libro)
        res.json(libroGardado)
        //res.redirect('/')
    }

    // --------- PUT (actualización parcial) ----------
    actualizarLibro = async (req,res) => {
        const { id } = req.params
        const producto = await this.servicio.obtenerLibros(id)
        const libroActualizado = await this.servicio.actualizarLibro(id, producto)
        res.json(libroActualizado)
    }

    borrarLibro = async (req,res) => {
        const { id } = req.params
        const libroBorrado = await this.servicio.borrarLibro(id)
        res.json(libroBorrado)
    }
}

export default Controlador
