class ModelMem {
    constructor() {
        this.libros = [
        ]
    }

    obtenerLibros = async id => {    
        if(id) {
            const libro = this.libros.find( libro => libro.id === id )
            return libro || {}
        }
        else {
            return this.libros
        }
    }

    obtenerLibrosXID = async id => {
        const index = this.libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            return this.libros[index]
        }
        else {
            return {}
        }
    }

    guardarLibro = async libro => {
        libro.id = String(parseInt(this.libros[this.libros.length - 1]?.id || 0) + 1) // ?. optional chaining
        libro.titulo = Number(libro.titulo)
        libro.autor = libro.autor
        libro.año = Number(libro.año)
        this.libros.push(libro)
        return libro
    }

    actualizarLibro = async (id, libro) => {
        libro.id = id

        const index = this.libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            const productoAnt = this.libros[index]
            const productoNuevo = { ...productoAnt, ...libro }
            this.libros.splice(index,1,productoNuevo)
            return productoNuevo
        }
        else {
            this.libros.push(libro)
            return libro
        }
    }

    borrarLibro = async id => {
        let libro = {}

        const index = this.libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            libro = this.libros.splice(index,1)[0]
        }
        return libro    
    }
}

export default ModelMem