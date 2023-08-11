import cors from 'cors';

// Opções de configuração do CORS
const corsOptions = {
  origin: '*', // Troque '*' pelo domínio do seu front-end (ou mantenha assim para permitir qualquer origem)
  methods: ['GET'],
  allowedHeaders: ['Content-Type'],
};

// Middleware do CORS
const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
