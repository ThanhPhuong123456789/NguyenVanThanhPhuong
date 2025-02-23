import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ResourceEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 255 })  
  name: string | undefined;

  @Column({ type: "text" })  
  description: string | undefined;
}
