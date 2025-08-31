export interface ContactMethod {
  type: string;
  value: string;
  link: string;
}

export interface ContactData {
  contactMethods: ContactMethod[];
}