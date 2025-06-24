class Ticket {
  constructor(
    public destination: string,
    public price: number,
    public status: string
  ) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function manageTickets(ticketDestinations: string[], sortBy: string) {
  const tickets: Ticket[] = ticketDestinations.map((dest) => {
    const [destination, priceStr, status] = dest.split("|");
    return new Ticket(destination, Number(priceStr), status);
  });

  tickets.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else {
      return a[sortBy].localeCompare(b[sortBy]);
    }
  });

  return tickets;
}

const input = [
  "Philadelphia|94.20|available",
  "New York City|95.99|available",
  "New York City|95.99|sold",
  "Boston|126.20|departed",
];

const sorted = manageTickets(input, "destination");
console.log(sorted);
