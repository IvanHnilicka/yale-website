export interface Publicacion {
    id: string,
    uid: string,
    titulo: string,
    descripcion: string,
    url: string,
    autor: string,
    fecha: string | null,
    hora: number,
    likes: string[]
}