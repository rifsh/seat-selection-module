"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedSeats = exports.toggleSeatSelection = exports.generateSeatMap = void 0;
function generateSeatMap(rows, cols) {
    const seatMap = [];
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
exports.generateSeatMap = generateSeatMap;
function toggleSeatSelection(seats, seatId) {
    return seats.map(seat => seat.id === seatId && !seat.booked
        ? Object.assign(Object.assign({}, seat), { selected: !seat.selected }) : seat);
}
exports.toggleSeatSelection = toggleSeatSelection;
function getSelectedSeats(seats) {
    return seats.filter(seat => seat.selected);
}
exports.getSelectedSeats = getSelectedSeats;
