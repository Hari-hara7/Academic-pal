export interface Resource {
  id?: string;
  userEmail: string;
  resourceName: string;
  resourceType: "file" | "link";
  resourceUrl: string;
  shareableLink?: string;
  year: string;
  semester: string | number;
  branch: string;
  subject: string;
  createdAt?: Date;
}
