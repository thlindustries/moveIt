import corsMiddleware from './cors';

export default function handler(req, res): void {
  corsMiddleware(req, res, () => {
    res.status(200).json({
      popularRoutes: [
        {
          name: "Dubai",
          id: "dubai-booking-1",
          thumb: "https://thlbooking.netlify.app/dubai.webp",
          price: {
            from: 100,
            to: 50
          }
        },
        {
          name: "Campinas - SP",
          id: "campinas-booking-1",
          thumb: "https://thlbooking.netlify.app/taquaral.webp",
          price: {
            from: 200,
            to: 150
          }
        },
        {
          name: "New York",
          id: "new-york-booking-1",
          thumb: "https://thlbooking.netlify.app/newYork.webp",
          price: {
            from: 150,
            to: 100
          }
        },
        {
          name: "Caribe",
          id: "caribe-booking-1",
          thumb: "https://thlbooking.netlify.app/homeBanner.webp",
          price: {
            from: 300,
            to: 150
          }
        },
        {
          name: "California",
          id: "california-booking-1",
          thumb: "https://thlbooking.netlify.app/california.webp",
          price: {
            from: 400,
            to: 110
          }
        }
      ],
    });
  });
}
