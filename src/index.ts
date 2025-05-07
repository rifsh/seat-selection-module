export interface Seat {
    id: string;
    available: boolean;
}

export function generateSeats(rows: number, columns: number): Seat[] {
    const seats: Seat[] = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            seats.push({
                id: `${String.fromCharCode(65 + row)}${col + 1}`,
                available: true,
            });
        }
    }
    return seats;
}
