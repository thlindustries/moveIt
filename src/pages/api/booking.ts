import corsMiddleware from './cors';

export default function handler(req, res): void {
  corsMiddleware(req, res, () => {
    res.status(200).json({
      "popularRoutes": [
        {
          "name": "Dubai",
          "id": "dubai-booking-1",
          "thumb": "https://thlbooking.netlify.app/dubai.webp",
          "price": {
            "from": 100,
            "to": 50
          }
        },
        {
          "name": "Campinas - SP",
          "id": "campinas-booking-1",
          "thumb": "https://thlbooking.netlify.app/taquaral.webp",
          "price": {
            "from": 200,
            "to": 150
          }
        },
        {
          "name": "New York",
          "id": "new-york-booking-1",
          "thumb": "https://thlbooking.netlify.app/newYork.webp",
          "price": {
            "from": 150,
            "to": 100
          }
        },
        {
          "name": "Caribe",
          "id": "caribe-booking-1",
          "thumb": "https://thlbooking.netlify.app/homeBanner.webp",
          "price": {
            "from": 300,
            "to": 150
          }
        },
        {
          "name": "California",
          "id": "california-booking-1",
          "thumb": "https://thlbooking.netlify.app/california.webp",
          "price": {
            "from": 400,
            "to": 110
          }
        }
      ],
      "booking": [
        {
          "name": "Dubai",
          "id": "dubai-booking-1",
          "images": [
            {
              "altText": "dubai from sky",
              "path": "https://thlbooking.netlify.app/dubai.webp"
            },
            {
              "altText": "dubai from sky",
              "path": "https://thlbooking.netlify.app/dubai-img-2.webp"
            }
          ],
          "price": {
            "from": 100,
            "to": 50
          },
          "description": "Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant."
        },
        {
          "name": "Campinas - SP",
          "id": "campinas-booking-1",
          "images": [
            {
              "altText": "Taquaral's park, Campinas-SP, Brazil",
              "path": "https://thlbooking.netlify.app/taquaral.webp"
            },
            {
              "altText": "Campinas sky view",
              "path": "https://thlbooking.netlify.app/campinas-img-2.webp"
            }
          ],
          "price": {
            "from": 100,
            "to": 50
          },
          "description": "Campinas is a city in southeastern Brazil, northwest of São Paulo. Its Metropolitan Cathedral has an interior in jacaranda wood and a museum of sacred art. The Castle Tower, formerly a water tower, offers panoramic views. In the north, Parque Portugal includes a planetarium and restored trams from the early 20th century. At the edge of the park, the Coffee Museum recalls the city's history as a coffee producer."
        },
        {
          "name": "New York",
          "id": "new-york-booking-1",
          "images": [
            {
              "altText": "new york time square",
              "path": "https://thlbooking.netlify.app/newYork.webp"
            },
            {
              "altText": "Central park new york view",
              "path": "https://thlbooking.netlify.app/ny-image-2.webp"
            }
          ],
          "price": {
            "from": 100,
            "to": 50
          },
          "description": "New York is a city of diversity and dynamism. It is also a city of politics, economy and culture. It is even described as the economic and cultural capital of the world, and New York City is one of the most populous cities in the United States."
        },
        {
          "name": "Caribe",
          "id": "caribe-booking-1",
          "images": [
            {
              "altText": "caribbean boat",
              "path": "https://thlbooking.netlify.app/homeBanner.webp"
            },
            {
              "altText": "Caribbean beach",
              "path": "https://thlbooking.netlify.app/caribe-image-2.webp"
            }
          ],
          "price": {
            "from": 100,
            "to": 50
          },
          "description": "The Caribbean, also called Caribbean and Caribbean America, is a region of the American continent formed by the Caribbean Sea, its islands and island states. It is also called the Antilles or West Indies, a name originated by the initial European belief that the American continent was India. Those born in the islands of the Caribbean are called Caribbean people."
        },
        {
          "name": "California",
          "id": "california-booking-1",
          "images": [
            {
              "altText": "golden gate bridge",
              "path": "https://thlbooking.netlify.app/california.webp"
            },
            {
              "altText": "california golden gate from beach",
              "path": "https://thlbooking.netlify.app/california-img-2.webp"
            }
          ],
          "price": {
            "from": 100,
            "to": 50
          },
          "description": "Capital: Sacramento. California lies on the Pacific Ocean and is bordered by Mexico and the U.S. states of Oregon, Nevada, and Arizona. It is the largest state in population and the third largest in area, extending about 800 mi (1,300 km) north to south and 250 mi (400 km) east to west."
        }
      ],
      "bookedTrips": [
        {
          "name": "Thiago",
          "lastName": "Kraetzer",
          "age": "24",
          "id": "new-york-booking-1-1",
          "parentTripId": "new-york-booking-1",
          "from": "2022-04-01T17:20:00.000Z",
          "to": "2022-08-01T17:20:00.000Z"
        }
      ],
      "tripsAvailability": [
        {
          "id": "dubai-booking-1",
          "availablePeriods": [
            {
              "id": "booking-dubai-booking-1-1",
              "from": "2022-02-01T17:20:00.000Z",
              "to": "2022-04-01T17:20:00.000Z",
              "available": true
            },
            {
              "id": "booking-dubai-booking-1-2",
              "from": "2022-04-01T17:20:00.000Z",
              "to": "2022-08-01T17:20:00.000Z",
              "available": true
            },
            {
              "id": "booking-dubai-booking-1-3",
              "from": "2022-08-01T17:20:00.000Z",
              "to": "2022-10-01T17:20:00.000Z",
              "available": true
            }
          ]
        },
        {
          "id": "campinas-booking-1",
          "availablePeriods": [
            {
              "id": "booking-campinas-booking-1-1",
              "from": "2022-04-01T17:20:00.000Z",
              "to": "2022-08-01T17:20:00.000Z",
              "available": true
            },
            {
              "id": "booking-campinas-booking-1-2",
              "from": "2022-08-01T17:20:00.000Z",
              "to": "2022-10-01T17:20:00.000Z",
              "available": true
            }
          ]
        },
        {
          "id": "new-york-booking-1",
          "availablePeriods": [
            {
              "id": "booking-new-york-booking-1-1",
              "from": "2022-04-01T17:20:00.000Z",
              "to": "2022-08-01T17:20:00.000Z",
              "available": true
            },
            {
              "id": "booking-new-york-booking-1-2",
              "from": "2022-08-01T17:20:00.000Z",
              "to": "2022-10-01T17:20:00.000Z",
              "available": true
            }
          ]
        },
        {
          "id": "caribe-booking-1",
          "availablePeriods": [
            {
              "id": "booking-caribe-booking-1-1",
              "from": "2022-01-01T17:20:00.000Z",
              "to": "2022-02-01T17:20:00.000Z",
              "available": true
            },
            {
              "id": "booking-caribe-booking-1-2",
              "from": "2022-02-01T17:20:00.000Z",
              "to": "2022-04-01T17:20:00.000Z",
              "available": true
            },
            {
              "id": "booking-caribe-booking-1-3",
              "from": "2022-04-01T17:20:00.000Z",
              "to": "2022-08-01T17:20:00.000Z",
              "available": true
            },
            {
              "id": "booking-caribe-booking-1-4",
              "from": "2022-10-01T17:20:00.000Z",
              "to": "2022-12-01T17:20:00.000Z",
              "available": false
            }
          ]
        },
        {
          "id": "california-booking-1",
          "availablePeriods": [
            {
              "id": "booking-california-booking-1-1",
              "from": "2022-04-01T17:20:00.000Z",
              "to": "2022-08-01T17:20:00.000Z",
              "available": true
            },
            {
              "id": "booking-california-booking-1-2",
              "from": "2022-08-01T17:20:00.000Z",
              "to": "2022-10-01T17:20:00.000Z",
              "available": true
            }
          ]
        }
      ]
    });
  });
}
