export interface ParkingSpotDTO {
  position?: {
    lat: number;
    lng: number;
  };
  dateStart?: string | null;
  dateTo?: string | null;
  user?: string | null;
  car?: string | null;
  allowContact?: boolean;
}
