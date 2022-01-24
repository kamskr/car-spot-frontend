export interface ParkingSpotDTO {
  position?: {
    lat: number;
    lng: number;
  };
  dateStart?: string;
  dateTo?: string;
}
