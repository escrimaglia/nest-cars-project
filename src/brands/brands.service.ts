import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid} from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // }
  ]

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime()
    }
    this.brands.push(brand);
    return brand;
  }
    
  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brabd => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    this.brands = this.brands.map(brand => { 
        if (brand.id === id) {
          brandDb.updatedAt = new Date().getTime();
          brandDb = {
                ...brandDb,
                ...updateBrandDto
            }
            return brandDb;
        }
        return brand;
    })
    return brandDb;
  }
  
  remove(id: string) {
    this.findOne(id);
    const car = this.brands.pop();
    return {"result":`Car with id ${id} deleted`, "car": car};
  }

  public fillBrands(brands: Brand[]) {
    this.brands = brands;
  }

}
