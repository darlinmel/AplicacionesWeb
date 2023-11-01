import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetshopService } from './petshop/petshop.service';
import { VentasService } from './ventas/ventas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasModule } from './ventas/ventas.module';
import { PetshopModule } from './petshop/petshop.module';
import { PetshopController } from './petshop/petshop.controller';
import { VentasController } from './ventas/ventas.controller';


@Module({
  imports: [
    TypeOrmModule,
    VentasModule,
    PetshopModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'192.168.1.34',
      port: 5432,
      username:'postgres',
      password: 'postgres',
      database:'petshop',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,

    })
    
    
  ],
  controllers: [AppController, PetshopController, VentasController],
  providers: [AppService, PetshopService, VentasService],
})
export class AppModule {}



