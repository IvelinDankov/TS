var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function manageTickets(ticketDestinations, sortBy) {
    var tickets = ticketDestinations.map(function (dest) {
        var _a = dest.split("|"), destination = _a[0], priceStr = _a[1], status = _a[2];
        return new Ticket(destination, Number(priceStr), status);
    });
    tickets.sort(function (a, b) {
        if (sortBy === "price") {
            return a.price - b.price;
        }
        else {
            return a[sortBy].localeCompare(b[sortBy]);
        }
    });
    return tickets;
}
var input = [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
];
var sorted = manageTickets(input, "destination");
console.log(sorted);
