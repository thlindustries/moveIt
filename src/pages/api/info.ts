export default function handler(req, res): void {
  res.status(200).json({
    info: {
      playstoreAppUri:
        'https://play.google.com/store/apps/details?id=com.futebolinterior',
      appleStoreUri: 'https://thlinc.com',
    },
  });
}
