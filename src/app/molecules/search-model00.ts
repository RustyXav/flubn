
export class SearchModel00 {


    constructor() {
        this.checkInDate = new Date();
        this._checkInDateAsString = this.transformToInputString(this.checkInDate);
        this.checkOutDate = this.checkInDate;
        this.checkOutDate.setDate(this.checkInDate.getDate() + 1);
        this._checkOutDateAsString = this.transformToInputString(this.checkOutDate);
    }



    private transformToDate(value: string): Date | undefined {
        return new Date(value);
    }

    private transformToInputString(date: Date | undefined): string {
        if (date) {
            return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
        } else {
            return '';
        }

    }
    destination = '';
    private _checkInDateAsString: string;
    public get checkInDateAsString(): string {
        return this._checkInDateAsString;
    }
    public set checkInDateAsString(value: string) {
        this._checkInDateAsString = value;
        this.checkInDate = this.transformToDate(value);
    }


    private _checkOutDateAsString: string;
    public get checkOutDateAsString(): string {
        return this._checkOutDateAsString;
    }
    public set checkOutDateAsString(value: string) {
        this._checkOutDateAsString = value;
        this.checkOutDate = this.transformToDate(value);
    }

    checkInDate: Date | undefined;
    checkOutDate: Date | undefined;
    childrenCount: number | undefined;
    adultCount: number | undefined;
    roomCount: number | undefined;
}


