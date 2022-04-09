

export interface Region{
    idRegion: number;
    nombre: string;
    capital: string;
    poblacion: number;
    superficie: number;
}

export interface Provincia{
    idProvincia: number;
    nombre: string;
    region: number;
}