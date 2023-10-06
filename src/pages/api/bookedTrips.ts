import corsMiddleware from './cors';

export default function handler(req, res): void {
  corsMiddleware(req, res, () => {
    res.status(200).json([
      {
        name: "Thiago",
        lastName: "Kraetzer",
        age: "24",
        id: "new-york-booking-1-1",
        parentTripId: "new-york-booking-1",
        from: "2022-04-01T17:20:00.000Z",
        to: "2022-08-01T17:20:00.000Z"
      }
    ],
    );
  });
}
