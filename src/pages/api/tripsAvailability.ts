import corsMiddleware from './cors';

export default function handler(req, res): void {
  corsMiddleware(req, res, () => {
    res.status(200).json([
      {
        id: "dubai-booking-1",
        availablePeriods: [
          {
            id: "booking-dubai-booking-1-1",
            from: "2022-02-01T17:20:00.000Z",
            to: "2022-04-01T17:20:00.000Z",
            available: true
          },
          {
            id: "booking-dubai-booking-1-2",
            from: "2022-04-01T17:20:00.000Z",
            to: "2022-08-01T17:20:00.000Z",
            available: true
          },
          {
            id: "booking-dubai-booking-1-3",
            from: "2022-08-01T17:20:00.000Z",
            to: "2022-10-01T17:20:00.000Z",
            available: true
          }
        ]
      },
      {
        id: "campinas-booking-1",
        availablePeriods: [
          {
            id: "booking-campinas-booking-1-1",
            from: "2022-04-01T17:20:00.000Z",
            to: "2022-08-01T17:20:00.000Z",
            available: true
          },
          {
            id: "booking-campinas-booking-1-2",
            from: "2022-08-01T17:20:00.000Z",
            to: "2022-10-01T17:20:00.000Z",
            available: true
          }
        ]
      },
      {
        id: "new-york-booking-1",
        availablePeriods: [
          {
            id: "booking-new-york-booking-1-1",
            from: "2022-04-01T17:20:00.000Z",
            to: "2022-08-01T17:20:00.000Z",
            available: true
          },
          {
            id: "booking-new-york-booking-1-2",
            from: "2022-08-01T17:20:00.000Z",
            to: "2022-10-01T17:20:00.000Z",
            available: true
          }
        ]
      },
      {
        id: "caribe-booking-1",
        availablePeriods: [
          {
            id: "booking-caribe-booking-1-1",
            from: "2022-01-01T17:20:00.000Z",
            to: "2022-02-01T17:20:00.000Z",
            available: true
          },
          {
            id: "booking-caribe-booking-1-2",
            from: "2022-02-01T17:20:00.000Z",
            to: "2022-04-01T17:20:00.000Z",
            available: true
          },
          {
            id: "booking-caribe-booking-1-3",
            from: "2022-04-01T17:20:00.000Z",
            to: "2022-08-01T17:20:00.000Z",
            available: true
          },
          {
            id: "booking-caribe-booking-1-4",
            from: "2022-10-01T17:20:00.000Z",
            to: "2022-12-01T17:20:00.000Z",
            available: false
          }
        ]
      },
      {
        id: "california-booking-1",
        availablePeriods: [
          {
            id: "booking-california-booking-1-1",
            from: "2022-04-01T17:20:00.000Z",
            to: "2022-08-01T17:20:00.000Z",
            available: true
          },
          {
            id: "booking-california-booking-1-2",
            from: "2022-08-01T17:20:00.000Z",
            to: "2022-10-01T17:20:00.000Z",
            available: true
          }
        ]
      }
    ]
    );
  });
}
