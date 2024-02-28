import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService:CoffeesService){}
  @Get()
  findAll(@Query() paginationquery) {
    // const { limit, offset } = paginationquery;
    // return `this action returns all coffees with ${limit} and ${offset}`;
    return this.coffeeService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `this action return #${id} coffee`;
    return this.coffeeService.findOne(id);
  }
  @Post()
  create(@Body() craeteCoffeeDto:CreateCoffeeDto) {
    // return body;
    console.log(craeteCoffeeDto instanceof CreateCoffeeDto)
    return this.coffeeService.create(craeteCoffeeDto)
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto:UpdateCoffeeDto) {
    // return `this action updates #${id} coffee`;
    return this.coffeeService.update(id,updateCoffeeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `this action removes #${id} coffee`;
    return this.coffeeService.remove(id); 
  }
}
 