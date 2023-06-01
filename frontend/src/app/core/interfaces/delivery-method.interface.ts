export interface DeliveryMethod {
  id?: number;
  deliveryMethodName: string;
  phoneNumber: string;
  deliveryTime: string;
  deliveryMethod?: DeliveryMethod;
  createdAt?: Date;
  updatedAt?: Date;
}
