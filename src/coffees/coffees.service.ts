import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees :Coffee[] = [{
        id:1,
        name:"latee",
        brand:"brew",
        flavors:['van illa','chocllete']
    },];

    findAll(){
        return this.coffees;
    }
    findOne(id:string){
        return this.coffees.find(item=>item.id === +id);
    }
    create(createCoffeeDto:any){
         this.coffees.push(createCoffeeDto);
         return createCoffeeDto;
    }
    update(id:string,createCoffeeDto:any){
        const exsitingCoffee=this.findOne(id)
        if(exsitingCoffee){
            //update the existing entity
        }
    }
    remove(id:string){
        const coffeeIndex=this.coffees.findIndex(item =>item.id === +id);
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex,1)
        }
    }
}
