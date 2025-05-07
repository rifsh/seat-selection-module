export type Seat = {
    id: string;
    row: number;
    col: number;
    selected?: boolean;
    booked?: boolean;
};

export function generateSeatMap(rows: number, cols: number): Seat[] {
    const seatMap: Seat[] = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            seatMap.push({
                id: `${r}-${c}`,
                row: r,
                col: c,
                selected: false,
                booked: false
            });
        }
    }
    return seatMap;
}

export function toggleSeatSelection(seats: Seat[], seatId: string): Seat[] {
    return seats.map(seat =>
        seat.id === seatId && !seat.booked
            ? { ...seat, selected: !seat.selected }
            : seat
    );
}

export function getSelectedSeats(seats: Seat[]): Seat[] {
    return seats.filter(seat => seat.selected);
}
