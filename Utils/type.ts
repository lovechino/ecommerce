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
    material: string ;
    pattern: string;
    note: string;
    sBarCode: string;
    sQrCode: string;
    supplier: string;
    brand: string ;
    serial: string;
    jsonStatus: string; 
    mappingCode: string;
    Specification: string ;
    cusName: string ;
    // listProductAttrGalaxy: []
    supName: string ;
    Voucher: unknown ;
    Currency: unknown ; 
    Price: number;
    Tax: number ;
    Discount: number ;
    mpStatus: unknown ; 
    expireDate: string ; 
    CreatedTime: string; 
  }

export interface ChildrenType{
    children : React.ReactNode
}
