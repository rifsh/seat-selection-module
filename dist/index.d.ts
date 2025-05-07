export interface Seat {
    id: string;
    available: boolean;
}
export declare function generateSeats(rows: number, columns: number): Seat[];
