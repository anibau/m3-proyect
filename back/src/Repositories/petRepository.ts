import { AppDataSource } from "../Config/data-source";
import { Pet } from "../Entities/Pets";

export const petRepository= AppDataSource.getRepository(Pet)
