import corsMiddleware from './cors';

export default function handler(req, res): void {
  corsMiddleware(req, res, () => {
    res.status(200).json({
      info: {
        playstoreAppUri:
          'https://play.google.com/store/apps/details?id=com.futebolinterior',
        appleStoreUri: 'https://thlinc.com',
        showAccessibilityFeat: false,
        showNewBottomTabs: true,
        scoreRefreshDelay: 5,
      },
    });
  });
}
