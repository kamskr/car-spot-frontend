export interface ParkingSpotDTO {
  position?: {
    lat: number;
    lng: number;
  };
  dateStart?: string;
  dateTo?: string;
  user?: string;
  car?: string;
  allowContact?: boolean;
}
