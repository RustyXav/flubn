export class HotelSearchData {
  constructor() {
    const checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + 1);
    this.checkInDateAsString = this.FromLocalDate(checkInDate);
    checkInDate.setDate(checkInDate.getDate() + 1);
    this.checkOutDateAsString = this.FromLocalDate(checkInDate);
  }

  checkOutDateAsString: string;
  checkInDateAsString: string;
  destination = '';
  childrenCount = 0;
  adultCount = 0;
  roomCount = 0;

  private FromLocalDate(localDateRef: Date): string {
    // there is no "local ISO string"
    // so we need to adjust dateTime with offset to get local as iso
    const localDate = new Date(localDateRef);
    localDate.setMinutes(
      localDate.getMinutes() - localDate.getTimezoneOffset()
    );
    return localDate.toISOString().substring(0, 10);
  }

  GetNightsNumber(): number {
    // console.log('calculcating days between ' , this.checkInDateAsString , ' and ' , this.checkOutDateAsString);
    const totalMilliseconds =
      new Date(this.checkOutDateAsString).getTime() -
      new Date(this.checkInDateAsString).getTime();
    // console.log('total milliseconds : ', totalMilliseconds);
    const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
    // console.log('total days : ', totalDays);
    return totalDays;
  }

  IsValid(): boolean {
    const retVal =
      this.adultCount > 0 && // at least 1 adult
      new Date() <= new Date(this.checkInDateAsString) && // check in at a future date
      this.GetNightsNumber() > 0 && // at least for 1 night
      this.roomCount > 0; // at least 1 room
    return retVal;
  }
}
