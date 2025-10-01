interface UserFamilyDTO {
  id: string;
  name: string;
  familyId: string | null;
}
export interface FamilyDTO {
  id: string;
  name: string;
  users: UserFamilyDTO[];
}
