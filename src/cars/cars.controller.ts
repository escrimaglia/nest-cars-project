import { Controller, Get, Param, ParseIntPipe, Body, Post, Patch, Delete, NotFoundException, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  
  constructor(
    private readonly cars: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.cars.getCars;
  }

  @Get(":id")
  getCarById(@Param("id", ParseUUIDPipe) id: string) {
    return this.cars.findCarById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.cars.addCar(createCarDto);
  }

  @Patch(":id")
  updateCar(@Param("id", ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.cars.modifyCar(id, updateCarDto);
  }

  @Delete(":id")
  deletecar(@Param("id", ParseUUIDPipe) id: string) {
    return this.cars.deleteCar(id);
  }
}


