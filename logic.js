var age = 16;
var isMember = true;
var ticketPrice = null;

if (age <= 15) {
    ticketPrice = 800;
} else if (age >= 16 && isMember) {
    ticketPrice = 1000;
} else {
    ticketPrice = 1800;
}
document.write(ticketPrice);