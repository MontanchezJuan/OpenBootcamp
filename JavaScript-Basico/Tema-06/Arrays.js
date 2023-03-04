const listaCompra = ['Oil', 'Rice', 'Potatos', 'Chicken', 'Vegetables']

listaCompra.push('Aceite de Girasol')
listaCompra.pop('Aceite de Girasol')

const listaPeliculas = [
    {
        titulo: 'Encanto',
        director: 'Byron Howard, Jared Bush',
        fecha: new Date(2021, 10, 24)
    },
    {
        titulo: 'Forrest Gump',
        director: 'Robert Zemeckis',
        fecha: new Date(1994, 5, 6)
    },
    {
        titulo: 'Social Media',
        director: 'David Fincher',
        fecha: new Date(2010, 10, 26)
    }]

const filterListaPeliculas = listaPeliculas.filter(value => value.fecha > new Date(2010, 0, 1))

const mapListaPeliculas = listaPeliculas.map(value => value.director)

const mapListaPeliculas01 = listaPeliculas.map(value => value.titulo)

const listasUnidas = mapListaPeliculas.concat(mapListaPeliculas01)

const listasUnidas01 = [...mapListaPeliculas, ...mapListaPeliculas01]
