"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSeats = void 0;
function generateSeats(rows, columns) {
    const seats = [];
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
exports.generateSeats = generateSeats;
