interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    id: "001",
    title: "Clean and fully furnished apartment. 5 min away from CN Tower",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg",
    address: "3210 Scotchmere Dr W, Toronto, ON, CA",
    price: 10000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  },
  {
    id: "002",
    title: "Luxurious home with private pool",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-1_aikhx7.jpg",
    address: "100 Hollywood Hills Dr, Los Angeles, California",
    price: 15000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 1,
    rating: 4
  },
  {
    id: "003",
    title: "Single bedroom located in the heart of downtown San Fransisco",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-1_qzntl4.jpg",
    address: "200 Sunnyside Rd, San Fransisco, California",
    price: 25000,
    numOfGuests: 3,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 3
  }
];
