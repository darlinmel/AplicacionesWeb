import { Module } from '@nestjs/common';
import { PetshopService } from './petshop.service';
import { PetshopController } from './petshop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor.entity';
import { PetEntity } from './pet.entity';
import { ClientEntity } from './client.entity';
import { LocalEntity } from './local.entity';


@Module({
  imports:[
    TypeOrmModule.forFeature([LocalEntity,ClientEntity,DoctorEntity,PetEntity])
  ],
  providers: [PetshopService],
  controllers: [PetshopController]
})
export class PetshopModule {}
