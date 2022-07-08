import { Prestamo } from './Prestamo'
import { PrestamoPage } from './PrestamoPage'


export const PRESTAMOS_DATA: PrestamoPage = {
    content: [
        { id: 1, game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } }, client: { id: 1, name: 'Cliente 1' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('10/05/2022')  },
        { id: 2, game: { id: 2, title: 'Juego 2', age: 8, category: { id: 2, name: 'Categoría 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' } }, client: { id: 2, name: 'Cliente 2' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('10/08/2022')  },
        { id: 3, game: { id: 3, title: 'Juego 3', age: 5, category: { id: 3, name: 'Categoría 3' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3' } }, client: { id: 3, name: 'Cliente 3' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('10/05/2022')  },
        { id: 4, game: { id: 4, title: 'Juego 4', age: 5, category: { id: 4, name: 'Categoría 4' }, author: { id: 4, name: 'Autor 4', nationality: 'Nacionalidad 4' } }, client: { id: 4, name: 'Cliente 4' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('11/05/2022')  },
        { id: 5, game: { id: 5, title: 'Juego 5', age: 5, category: { id: 5, name: 'Categoría 5' }, author: { id: 5, name: 'Autor 5', nationality: 'Nacionalidad 5' } }, client: { id: 5, name: 'Cliente 5' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('11/05/2022')  },
        { id: 6, game: { id: 6, title: 'Juego 6', age: 5, category: { id: 6, name: 'Categoría 6' }, author: { id: 6, name: 'Autor 6', nationality: 'Nacionalidad 6' } }, client: { id: 6, name: 'Cliente 6' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('12/05/2022')  },
        { id: 7, game: { id: 7, title: 'Juego 7', age: 5, category: { id: 7, name: 'Categoría 7' }, author: { id: 7, name: 'Autor 7', nationality: 'Nacionalidad 7' } }, client: { id: 7, name: 'Cliente 7' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('12/05/2022')  },
        { id: 8, game: { id: 8, title: 'Juego 8', age: 5, category: { id: 8, name: 'Categoría 8' }, author: { id: 8, name: 'Autor 8', nationality: 'Nacionalidad 8' } }, client: { id: 8, name: 'Cliente 8' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('12/05/2022')  },

    ],  
    pageable : {
        pageSize: 5,
        pageNumber: 0,
        sort: [
            {property: "id", direction: "ASC"}
        ]
    },
    totalElements: 8
}

export const PRESTAMOS_DATA_FILTERED: Prestamo[] = [
    
        { id: 1, game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } }, client: { id: 1, name: 'Cliente 1' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('10/05/2022')  },
        { id: 2, game: { id: 2, title: 'Juego 2', age: 8, category: { id: 2, name: 'Categoría 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' } }, client: { id: 2, name: 'Cliente 2' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('10/08/2022')  },
        { id: 3, game: { id: 3, title: 'Juego 3', age: 5, category: { id: 3, name: 'Categoría 3' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3' } }, client: { id: 3, name: 'Cliente 3' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('10/05/2022')  },
        { id: 4, game: { id: 4, title: 'Juego 4', age: 5, category: { id: 4, name: 'Categoría 4' }, author: { id: 4, name: 'Autor 4', nationality: 'Nacionalidad 4' } }, client: { id: 4, name: 'Cliente 4' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('11/05/2022')  },
        { id: 5, game: { id: 5, title: 'Juego 5', age: 5, category: { id: 5, name: 'Categoría 5' }, author: { id: 5, name: 'Autor 5', nationality: 'Nacionalidad 5' } }, client: { id: 5, name: 'Cliente 5' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('11/05/2022')  },
        { id: 6, game: { id: 6, title: 'Juego 6', age: 5, category: { id: 6, name: 'Categoría 6' }, author: { id: 6, name: 'Autor 6', nationality: 'Nacionalidad 6' } }, client: { id: 6, name: 'Cliente 6' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('12/05/2022')  },
        { id: 7, game: { id: 7, title: 'Juego 7', age: 5, category: { id: 7, name: 'Categoría 7' }, author: { id: 7, name: 'Autor 7', nationality: 'Nacionalidad 7' } }, client: { id: 7, name: 'Cliente 7' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('12/05/2022')  },
        { id: 8, game: { id: 8, title: 'Juego 8', age: 5, category: { id: 8, name: 'Categoría 8' }, author: { id: 8, name: 'Autor 8', nationality: 'Nacionalidad 8' } }, client: { id: 8, name: 'Cliente 8' }, fechaIn: new Date('10/05/2022'), fechaOut: new Date('12/05/2022')  },
]