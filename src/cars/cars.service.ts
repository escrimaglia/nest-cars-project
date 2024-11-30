import { BadRequestException, Injectable, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     marca: 'Toyota',
        //     modelo: 'Corolla',
        //     year: 2018,
        // }
    ]

    public get getCars() {
        return this.cars;
    }

    public findCarById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    public carExist({marca, modelo, year}: Car) {
        const car = this.cars.find(car => car.marca === marca && car.modelo === modelo && car.year === year);
        if (car) 
            throw new BadRequestException(`Car with marca ${marca} and modelo ${modelo} already exists`);
        return false;
    }

    public addCar(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        if (!this.carExist(car)) this.cars.push(car);
        return car;
    }

    public modifyCar(id: string, updateCarDto: UpdateCarDto) {
        let carDb = this.findCarById(id);
        this.cars = this.cars.map(car => { 
            if (car.id === id) {
                carDb = {
                    ...carDb,
                    ...updateCarDto,
                }
                return carDb;
            }
            return car
        })
        return carDb;
    }

    public deleteCar(id: string) {
        this.findCarById(id);
        const car = this.cars.pop();
        return {"result":`Car with id ${id} deleted`, "car": car};
    }

    public fillCars(cars: Car[]) {
        this.cars = cars;
    }   
}
