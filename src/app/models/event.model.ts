export class Event {
  public dateCreated = new Date();

  constructor(
    public name: string,
    public email: string,
    public address: string,
    public city: string,
    public state: string,
    public zip: string,
    public phone: string,
    public dates: any[],
    public numAdults: string,
    public numChildren: string,
    public deliveryTimePreference: string,
    public specialInstructions: string,
    public favoriteMeals: string,
    public leastFavoriteMeals: string,
    public foodRestrictions: string
  ) { }

}
