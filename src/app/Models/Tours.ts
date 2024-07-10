export interface Tour
{
  TourId: string;
  Name: string;
  Description?: string;
  Price: number;
  Duration: number;
  Location: string;
  isDeleted: boolean;
}