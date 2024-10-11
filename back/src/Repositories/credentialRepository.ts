import { AppDataSource } from "../Config/data-source";
import { credential } from "../Entities/Credential";

export const credentialRepository= AppDataSource.getRepository(credential);
