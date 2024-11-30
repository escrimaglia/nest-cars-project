import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        marca: 'Toyota',
        modelo: 'Corolla',
        year: 2018,
    },
    {
        id: uuid(),
        marca: 'Honda',
        modelo: 'Accord',
        year: 2019,
    },
    {
        id: uuid(),
        marca: 'Ford',
        modelo: 'Fusion',
        year: 2016,
    },
    {
        id: uuid(),
        marca: 'Jeep',
        modelo: 'Renegade',
        year: 2016,
    }
]