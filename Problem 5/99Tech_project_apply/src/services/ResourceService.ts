import { Resource } from "../interfaces/Resource";
import { ResourceEntity } from "../models/ResourceEntity";
import { AppDataSource } from "../database/data-source";
import { Like, Repository } from "typeorm";

export class ResourceService {
  private repo: Repository<ResourceEntity> = AppDataSource.getRepository(ResourceEntity);

  //Create resource
  async create(resource: Omit<Resource, "id">): Promise<ResourceEntity> {
    const newResource = this.repo.create(resource);
    return this.repo.save(newResource);
  }

  //Get all or filter resource 
  async getAll(filters?: { name?: string; description?: string }): Promise<ResourceEntity[]> {
    const whereConditions: any = {};

    if (filters?.name) {
      whereConditions.name = Like(`%${filters.name}%`); 
    }

    if (filters?.description) {
      whereConditions.description = Like(`%${filters.description}%`);
    }

    return this.repo.find({ where: whereConditions });
  }

  //Get one resource
  async getById(id: number): Promise<ResourceEntity | null> {
    return this.repo.findOneBy({ id });
  }

   //Update resource
  async update(id: number, resource: Partial<Resource>): Promise<ResourceEntity | null> {
    await this.repo.update(id, resource);
    return this.getById(id);
  }

  //Delete resource
  async delete(id: number): Promise<{ message: string } | null> {
    const result = await this.repo.delete(id);
    console.log("result", result);
    return result.affected ? { message: "Delete success" } : null;
}
}