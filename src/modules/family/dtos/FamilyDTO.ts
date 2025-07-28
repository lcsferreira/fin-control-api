import { UserDTO } from "../../users/dtos/UserDTO";

export interface FamilyDTO {
  id: string;
  name: string;
  users: UserDTO[];
}
