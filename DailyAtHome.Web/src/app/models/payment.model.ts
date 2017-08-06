export interface Payment {
    PaymentType: string,
    CardNumber: string,
    ExpirationMonth: number,
    ExpirationYear: number,
    NameOnCard: string;
}