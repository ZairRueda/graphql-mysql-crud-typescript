import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

// Type orm nos ayuda a crear las propiedades de las tablas
export class users_test_andres_zair_jimenez_rueda extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  segundoNombre: string;

  @Column()
  apellidoPaterno: string;
  
  @Column()
  apellidoMaterno: string;

  @Column()
  fechaDeNacimiento: string;
  
  @Column()
  correo: string;
  
  @Column()
  telefono: number;
  
}

