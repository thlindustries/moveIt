import corsMiddleware from './cors';

export default function handler(req, res): void {
  corsMiddleware(req, res, () => {
    res.status(200).json({
      services: {
        'pt-br': [
          {
            name: 'Gestão de produtos',
            items: [
              {
                id: '634f9021-d32a-4471-bcee-052cb5d989a9',
                text:
                  'Contato direto com o cliente para realização do estudo de requisitos.',
              },
              {
                id: '39f76539-5f95-484c-82e5-7dd932cde126',
                text:
                  'Gerenciamento de equipe baseado em Scrum para otimizar as entregas e cumprir o cronograma.',
              },
            ],
          },
          {
            name: 'Desenvolvimento web',
            items: [
              {
                id: '467801b7-ffea-4e49-a866-b28d1a9a5907',
                text:
                  'E-commerces com otimização SEO e melhores práticas de mercado.',
              },
              {
                id: '3aa3aa27-b57a-4588-8fb6-d12e531b6cea',
                text:
                  'Otimização da arquitetura de design para escalabilidade.',
              },
              {
                id: 'ca36341b-2e32-49cd-8828-b0f45a46c0bf',
                text:
                  'Frameworks mais usados para e-commerces como gatsby e nextjs.',
              },
              {
                id: '2831a06d-3b47-4ee1-a9b9-b7340dbd778a',
                text:
                  'Desenvolvimento multiplataforma usando aplicativos web react-native e responsivos.',
              },
              {
                id: '42fbc71b-3756-4d10-816e-6b45eeda5478',
                text:
                  'Desenvolvimento de bibliotecas, CI/CD, testes unity&E2E e +.',
              },
            ],
          },
          {
            name: 'Plataforma de gerenciamento de conteúdos',
            items: [
              {
                id: '90cc3042-81ee-4fef-a25d-84b44f42abc3',
                text:
                  'Plataformas projetadas para gerenciar o conteúdo do seu site. (listra, do zero, etc...)',
              },
              {
                id: '09de7d36-a0ee-4293-85e3-11eb3f77d4ed',
                text:
                  'Nenhum código para temas totalmente personalizados. (Você pode encontrar um pequeno ovo de páscoa nesta página :D)',
              },
              {
                id: '70edc6fa-64c7-4cbe-874b-d2a1f1d5bcf0',
                text: 'Confiabilidade, fácil de usar e totalmente documentado.',
              },
            ],
          },
        ],
        'en-us': [
          {
            name: 'Product management',
            items: [
              {
                id: 'd76f04af-23c2-4679-b9d1-9a81044ceb09',
                text:
                  'Direct contact with the customer to carry out the requirements study.',
              },
              {
                id: '68b80c61-45df-48eb-87e5-4920915769fd',
                text:
                  'Scrum based team management to optimize deliveries and meet the schedule.',
              },
            ],
          },
          {
            name: 'Web Development',
            items: [
              {
                id: '925cbca5-576c-492b-86f8-fa51ee22d5bf',
                text:
                  'E-commerces with SEO optimization and best market pratices.',
              },
              {
                id: 'ec587c3e-15e7-4835-ba84-1652a84cf3b6',
                text: 'Design architecture optimization for scalability.',
              },
              {
                id: '447b2a57-a811-46d4-b5f6-2f15e01e2851',
                text:
                  'Most used frameworks for e-commerces like gatsby and nextjs.',
              },
              {
                id: 'fd7da56e-a74c-4dcc-9df4-d3e399ae7dfe',
                text:
                  'Cross platform development using react-native and responsive web applications.',
              },
              {
                id: '3bff9574-9b29-4de1-96ed-cd600d3441b1',
                text: 'Library development, CI/CD, unity&E2E tests and +.',
              },
            ],
          },
          {
            name: 'Content management platforms',
            items: [
              {
                id: '16f9f105-b22e-4c73-adea-01e7ca14aef4',
                text:
                  'Platforms designed to manage your website content. (stripe, from scratch, etc...)',
              },
              {
                id: 'd997f159-833a-48aa-86c1-2374b64e95d1',
                text:
                  'No code for fully customized themes. (You may find a little easter egg on this page :D)',
              },
              {
                id: 'dc0a3093-7400-49ac-86ad-6f0b7410e9f4',
                text: 'Reliability, easy to use and fully documented.',
              },
            ],
          },
        ],
        'es-sp': [
          {
            name: 'Gestión de productos',
            items: [
              {
                id: 'f622e011-f20e-4faf-8435-4f1ef175a0c8',
                text:
                  'Contacto directo con el cliente para realizar el estudio de requisitos.',
              },
              {
                id: 'd6477465-d939-428c-8ea8-0f2321064dc9',
                text:
                  'Gestión de equipos basada en Scrum para optimizar las entregas y cumplir con el cronograma.',
              },
            ],
          },
          {
            name: 'Desarrollo web',
            items: [
              {
                id: 'a3c089aa-8bf8-4a1f-81c1-dc1d3bc75cc5',
                text:
                  'E-commerces con optimización SEO y mejores prácticas de mercado.',
              },
              {
                id: '05c8fd0f-0a88-4b46-83c0-e5b718faafad',
                text:
                  'Optimización de la arquitectura de diseño para la escalabilidad.',
              },
              {
                id: 'a22f77d1-6c71-4e86-9f0a-a042502042ad',
                text:
                  'Frameworks más utilizados para e-commerces como gatsby y nextjs.',
              },
              {
                id: 'a2574fe4-490e-45f9-97de-8a558a1b2a31',
                text:
                  'Desarrollo multiplataforma utilizando aplicaciones web nativas y receptivas.',
              },
              {
                id: 'd1ab1112-53e0-4c0a-897f-a4be8aab0f68',
                text: 'Desarrollo de librería, CI/CD, pruebas unity&E2E y +.',
              },
            ],
          },
          {
            name: 'Content management platforms',
            items: [
              {
                id: '8487ce7c-a2d3-46dc-8c00-30b143f9bf83',
                text:
                  'Plataformas diseñadas para administrar el contenido de su sitio web. (stripe, desde cero, etc...)',
              },
              {
                id: '5bce72c8-efbb-41be-b8a9-b3be071ba75f',
                text:
                  'Sin código para temas totalmente personalizados. (Puede encontrar un pequeño huevo de Pascua en esta página: D)',
              },
              {
                id: '097a1fa7-41f8-416e-861a-0dab38e857eb',
                text: 'Fiabilidad, fácil de usar y totalmente documentado.',
              },
            ],
          },
        ],
      },
    });
  });
}
