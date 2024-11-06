import { AppDataSource } from "../Config/data-source";
import { Credential } from "../Entities/Credential";

export const credentialRepository= AppDataSource.getRepository(Credential);
