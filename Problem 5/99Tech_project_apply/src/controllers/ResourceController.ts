import { Request, Response } from "express";
import { ResourceService } from "../services/ResourceService";

const resourceService = new ResourceService();

export const createResource = async (req: Request, res: Response) => {
  const resource = await resourceService.create(req.body);
  res.status(201).json(resource);
};

export const listResources = async (req: Request, res: Response) => {
    const filters = {
      name: req.query.name as string | undefined,
      description: req.query.description as string | undefined,
    };
  
    const resources = await resourceService.getAll(filters);
    res.json(resources);
  };
  

export const getResource = async (req: Request, res: Response) => {
  const resource = await resourceService.getById(Number(req.params.id));
  resource ? res.json(resource) : res.status(404).json({ message: "Not Found" });
};

export const updateResource = async (req: Request, res: Response) => {
  const resource = await resourceService.update(Number(req.params.id), req.body);
  resource ? res.json(resource) : res.status(404).json({ message: "Not Found" });
};

export const deleteResource = async (req: Request, res: Response) => {
   const success = await resourceService.delete(Number(req.params.id));
   success ? res.status(200).json({ message: "Delete success" }) : 
   res.status(404).json({ message: "Delete fail" });
  };
  