export default function handler(req, res): void {
  res.status(200).json({
    info: {
      playstoreAppUri: 'https://thlinc.com',
    },
  });
}
