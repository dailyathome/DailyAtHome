import { Address } from '../models/address.model';
import { Payment } from '../models/payment.model';
export interface User {
    email: string,
    roles: string[],
    addresses: Address[],
    paymentInfo: Payment;    
}