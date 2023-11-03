import ModelMem from "../Model/Modelo.js"

class Servicio {
    constructor() {
        this.model = new ModelMem()
    }

    obtenerLibros = async id => {
        const productos = await this.model.obtenerLibros(id)
        return productos
    }   

    obtenerLibrosXID = async id => {
        const producto = await this.model.obtenerLibrosXID(id)
        return producto
    }   

    guardarLibro = async producto => {
        const productoGuardado = await this.model.guardarLibro(producto)
        return productoGuardado
    }

    actualizarLibro = async (id, producto) => {
        const productoActualizado = await this.model.actualizarLibro(id,producto)
        return productoActualizado
    }

    borrarLibro = async id => {
        const productoBorrado = await this.model.borrarLibro(id)
        return productoBorrado
    }
}

export default Servicio