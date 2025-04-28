export interface ProductType {
  id: number;
  productcode: string;
  productname: string;
  locationTxt: string;
  locationGps: string;
  unit: string;
  productgroup: string;
  producttype: string;
  pathimg: string;
  material: string;
  pattern: string;
  note: string;
  sBarCode: string;
  sQrCode: string;
  supplier: string;
  brand: string;
  serial: string;
  jsonStatus: string;
  mappingCode: string;
  Specification: string;
  cusName: string;
  // listProductAttrGalaxy: []
  supName: string;
  Voucher: unknown;
  Currency: unknown;
  Price: number;
  Tax: number;
  Discount: number;
  mpStatus: unknown;
  expireDate: string;
  CreatedTime: string;
}

export interface CartIntemType {
  id: number;
  productname: string;
  Price: number;
  pathimg: string;
  qualitiy: number | 0;
}

export interface ChildrenType {
  children: React.ReactNode;
}

export interface LoginType {
  username: string;
  password: string;
}

export type NotificationType = "success" | "info" | "warning" | "error";

export interface UserProfile {
  Id: number;
  UserId: number | null;
  UserName: string;
  Password?: string; // Passwords should ideally be handled securely and might not always be present in this type
  FullName: string;
  Email: string;
  Address: string;
  IsOnline: number; // Or boolean if 0/1 represents offline/online
  Phone: string;
  Photo?: string; // Path to the photo, could be optional
  Gender?: "male" | "female" | string; // Use a union type for known genders
  BirthDay?: string; // ISO 8601 format: "YYYY-MM-DDTHH:mm:ss"
  sBirthDay?: string; // Locale-specific format: "DD/MM/YYYY"
  CreatedTime?: string; // ISO 8601 format: "YYYY-MM-DDTHH:mm:ss"
  IsDeleted: boolean;
}
