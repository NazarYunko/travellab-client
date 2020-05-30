import {TourType} from './TourType';
import {Country} from './Country';
import {Hotel} from './Hotel';

export class Tour {
  id: number
  tourType: TourType
  country: Country
  hotel: Hotel
  tourStartDate: Date
  tourStopDate: Date
}
