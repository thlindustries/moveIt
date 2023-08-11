import corsMiddleware from './cors';

export default function handler(req, res): void {
  corsMiddleware(req, res, () => {
    res.status(200).json({
      portfolio: {
        'pt-br': [
          {
            img:
              'https://raw.githubusercontent.com/thlindustries/nlw-06-reactjs/d64687c482991f6796f56a335126cd658db7f53f/.github/cover.svg',
            title: 'Let Me Ask - Sessão de dúvidas ao vivo',
            key: 'Let Me Ask - Live doubt session',
            githubLink: 'https://github.com/thlindustries/letmeask',
            liveDemoLink: 'https://doubts.thlinc.com/',
            uKey: 'ced4897f-0cd4-4cac-b152-7f379ddb3eb1',
          },
          {
            img:
              'https://camo.githubusercontent.com/1e2a883c8ceabe1561312937f1721ef23910270eeeb86a2644f148c537d04d48/68747470733a2f2f692e696d6775722e636f6d2f513755695a64392e706e67',
            title:
              'Ecoleta - Maneira mais fácil de pontos de coleta de lixo próximos',
            key: 'Ecoleta - Easiest way to nearby Waste collection spots',
            githubLink: 'https://github.com/thlindustries/ecoleta',
            liveDemoLink: '/',
            uKey: '044923b3-53dc-4e29-8da9-869735438d8e',
          },
          {
            img: 'https://i.imgur.com/0JRzI80.png',
            title: 'BikeCast - Uma plataforma de podcast',
            key: 'BikeCast - A poadcast platform',
            githubLink: 'https://github.com/thlindustries/bikecast',
            liveDemoLink: 'https://bikecast.thlinc.com/',
            uKey: 'd6606fea-915b-430d-8b6d-eb0aa95cf206',
          },
          {
            img: 'https://i.imgur.com/LIttpyZ.png',
            title:
              'Pomodoro - Uma plataforma pomodoro para ajudá-lo a se concentrar',
            key: 'Pomodoro - A pomodoro platform to help you focus',
            githubLink: 'https://github.com/thlindustries/moveIt',
            liveDemoLink: 'https://pomodoro.thlinc.com/',
            uKey: 'e5f2bc9c-cc80-4e42-9405-709f823fab8d',
          },
          {
            img:
              'https://camo.githubusercontent.com/23d5b1f720c13a27fbd2c69ecc208fe4bb7bd038019fbea87caefe36694c6726/68747470733a2f2f692e696d6775722e636f6d2f30684e6a79326c2e706e67',
            title:
              'Stoom Pizzas - Uma plataforma para construir e personalizar sua pizza',
            key: 'Stoom Pizzas - A platform to build and customize your pizza',
            githubLink: 'https://github.com/thlindustries/stoompizzas',
            liveDemoLink: 'https://pizza.thlinc.com/',
            uKey: 'c639cd75-f380-4f8f-97be-4af47c74aa34',
          },
          {
            img:
              'https://raw.githubusercontent.com/rocketseat-education/nlw-03-omnistack/master/.github/happy.png',
            title:
              'Happy Project - Encontre os orfanatos mais próximos para visitar',
            key: 'Happy Project - Find nearest orphanages to visit',
            githubLink: 'https://github.com/thlindustries/happyProject',
            liveDemoLink: '/',
            uKey: '3911689d-6785-4392-bf0b-9c01d4a57ffa',
          },
          {
            img:
              'https://camo.githubusercontent.com/a58ea87b652c891f03c7696e8373e42fd2462146410f0c44f5839a6361065772/68747470733a2f2f692e696d6775722e636f6d2f333143454c444b2e706e67',
            title: 'Profy - Uma plataforma para encontrar professores',
            key: 'Proffy - A platform to find teachers/proffessors',
            githubLink: 'https://github.com/thlindustries/proffyProject',
            liveDemoLink: '/',
            uKey: 'f951d51b-4db7-4d3e-ba06-d4a3b24b7176',
          },
          {
            img:
              'https://tendaatacado.secure.force.com/resource/1603461343000/brandInverse',
            title:
              'Tenda Atacado - Uma plataforma de comércio eletrônico totalmente funcional',
            key: 'Tenda Atacado - A fully functional ecommerce platform',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://www.tendaatacado.com.br/',
            uKey: '2084e849-6d56-4d0c-9e97-63ebde45f72a',
          },
          {
            img: 'https://i.imgur.com/sWrSPpe.png',
            title:
              'Bindemy - Uma plataforma de ensino à distância totalmente funcional e mercado de cursos',
            key:
              'Bindemy - A fully functional distance learning platform and courses marketplace',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://objetivomogi.bindemy.com.br/courses',
            uKey: '220fdfe9-a73a-479c-8c0f-c415ba4922e4',
          },
          {
            img: 'https://i.imgur.com/eVBfOnR.png',
            title:
              'Next Level Plantões - Uma plataforma do tipo Uber para encontrar tutores e professores',
            key:
              'Next Level Plantões - An Uber-like platform to find tutors and teachers',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://plantoes.bindemy.com.br/',
            uKey: 'cf50ced3-80c6-484b-92e9-a38682328c17',
          },
          {
            img: 'https://i.imgur.com/sHSVfHv.png',
            title:
              'Vite Blog - Uma plataforma de blog para compartilhar seu conhecimento e ajudar outras pessoas (Feito para estudar ViteJS)',
            key:
              'Vite Blog - A Blog platform to share your knowledge and help others (Made to study ViteJS)',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://blog.thlinc.com/',
            uKey: 'bf589948-0477-4564-8990-4192de760110',
          },
          {
            img: 'https://i.imgur.com/rfZAPKC.png',
            title: 'Avenida - Mercado de roupas',
            key: 'Avenida - Clothing marketPlace',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://www.avenida.com.br/',
            uKey: '5b7d21fe-d12a-4c9f-8fc9-d74efd08a06e',
          },
        ],
        'en-us': [
          {
            img:
              'https://raw.githubusercontent.com/thlindustries/nlw-06-reactjs/d64687c482991f6796f56a335126cd658db7f53f/.github/cover.svg',
            title: 'Let Me Ask - Live doubt session',
            key: 'Let Me Ask - Live doubt session',
            githubLink: 'https://github.com/thlindustries/letmeask',
            liveDemoLink: 'https://doubts.thlinc.com/',
            uKey: 'cff6d33e-f60d-4917-a3fb-fd40cf81a688',
          },
          {
            img:
              'https://camo.githubusercontent.com/1e2a883c8ceabe1561312937f1721ef23910270eeeb86a2644f148c537d04d48/68747470733a2f2f692e696d6775722e636f6d2f513755695a64392e706e67',
            title: 'Ecoleta - Easiest way to nearby Waste collection spots',
            key: 'Ecoleta - Easiest way to nearby Waste collection spots',
            githubLink: 'https://github.com/thlindustries/ecoleta',
            liveDemoLink: '/',
            uKey: '2435a15d-6f5b-4ca0-8597-5cec188e7e50',
          },
          {
            img: 'https://i.imgur.com/0JRzI80.png',
            title: 'BikeCast - A poadcast platform',
            key: 'BikeCast - A poadcast platform',
            githubLink: 'https://github.com/thlindustries/bikecast',
            liveDemoLink: 'https://bikecast.thlinc.com/',
            uKey: 'b8f108d2-f706-4844-a990-e2fe41a925d0',
          },
          {
            img: 'https://i.imgur.com/LIttpyZ.png',
            title: 'Pomodoro - A pomodoro platform to help you focus',
            key: 'Pomodoro - A pomodoro platform to help you focus',
            githubLink: 'https://github.com/thlindustries/moveIt',
            liveDemoLink: 'https://pomodoro.thlinc.com/',
            uKey: '489c9222-d315-4c52-aca0-d08c467e2c5a',
          },
          {
            img:
              'https://camo.githubusercontent.com/23d5b1f720c13a27fbd2c69ecc208fe4bb7bd038019fbea87caefe36694c6726/68747470733a2f2f692e696d6775722e636f6d2f30684e6a79326c2e706e67',
            title:
              'Stoom Pizzas - A platform to build and customize your pizza',
            key: 'Stoom Pizzas - A platform to build and customize your pizza',
            githubLink: 'https://github.com/thlindustries/stoompizzas',
            liveDemoLink: 'https://pizza.thlinc.com/',
            uKey: '87666d45-db23-48e2-98b8-b8311b6326af',
          },
          {
            img:
              'https://raw.githubusercontent.com/rocketseat-education/nlw-03-omnistack/master/.github/happy.png',
            title: 'Happy Project - Find nearest orphanages to visit',
            key: 'Happy Project - Find nearest orphanages to visit',
            githubLink: 'https://github.com/thlindustries/happyProject',
            liveDemoLink: '/',
            uKey: 'f9f8340a-22c7-4ef8-8eac-9cdea532bbd9',
          },
          {
            img:
              'https://camo.githubusercontent.com/a58ea87b652c891f03c7696e8373e42fd2462146410f0c44f5839a6361065772/68747470733a2f2f692e696d6775722e636f6d2f333143454c444b2e706e67',
            title: 'Proffy - A platform to find teachers/proffessors',
            key: 'Proffy - A platform to find teachers/proffessors',
            githubLink: 'https://github.com/thlindustries/proffyProject',
            liveDemoLink: '/',
            uKey: '32c3c2f7-6056-4a55-acf6-b25bc51f1404',
          },
          {
            img:
              'https://tendaatacado.secure.force.com/resource/1603461343000/brandInverse',
            title: 'Tenda Atacado - A fully functional ecommerce platform',
            key: 'Tenda Atacado - A fully functional ecommerce platform',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://www.tendaatacado.com.br/',
            uKey: '2dd3f87f-617a-432b-84bd-9c2022e2be67',
          },
          {
            img: 'https://i.imgur.com/LaZAWdZ.png',
            title:
              'Next Level - A fully functional distance learning platform and courses marketplace',
            key:
              'Next Level - A fully functional distance learning platform and courses marketplace',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://objetivomogi.bindemy.com.br/courses',
            uKey: '381d9be9-cb77-49f0-9c4d-e599278714fd',
          },
          {
            img: 'https://i.imgur.com/eVBfOnR.png',
            title:
              'Next Level Plantões - An Uber like platform to find tutors and teachers',
            key:
              'Next Level Plantões - An Uber-like platform to find tutors and teachers',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://plantoes.bindemy.com.br/',
            uKey: '0b703522-f773-4a65-b9d1-997d06e28ae1',
          },
          {
            img: 'https://i.imgur.com/sHSVfHv.png',
            title:
              'Vite Blog - A Blog platform to share your knowledge and help others (Made to study ViteJS)',
            key:
              'Vite Blog - A Blog platform to share your knowledge and help others (Made to study ViteJS)',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://blog.thlinc.com/',
            uKey: '6488741e-53cd-4d66-80e5-81885ea0d062',
          },
          {
            img: 'https://i.imgur.com/rfZAPKC.png',
            title: 'Avenida - Clothing marketPlace',
            key: 'Avenida - Clothing marketPlace',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://www.avenida.com.br/',
            uKey: '4ef0bf0b-1cdf-406c-81b3-dd2314b009f0',
          },
        ],
        'es-sp': [
          {
            img:
              'https://raw.githubusercontent.com/thlindustries/nlw-06-reactjs/d64687c482991f6796f56a335126cd658db7f53f/.github/cover.svg',
            title: 'Let Me Ask - Sesión de dudas en vivo',
            key: 'Let Me Ask - Live doubt session',
            githubLink: 'https://github.com/thlindustries/letmeask',
            liveDemoLink: 'https://doubts.thlinc.com/',
            uKey: 'f0380f0e-fabd-4331-a719-178e091473a2',
          },
          {
            img:
              'https://camo.githubusercontent.com/1e2a883c8ceabe1561312937f1721ef23910270eeeb86a2644f148c537d04d48/68747470733a2f2f692e696d6775722e636f6d2f513755695a64392e706e67',
            title:
              'Ecoleta - La forma más fácil de llegar a los puntos de recogida de residuos cercanos',
            key: 'Ecoleta - Easiest way to nearby Waste collection spots',
            githubLink: 'https://github.com/thlindustries/ecoleta',
            liveDemoLink: '/',
            uKey: '15130bb0-c14c-4a7f-a8e8-97f5f0386c88',
          },
          {
            img: 'https://i.imgur.com/0JRzI80.png',
            title: 'BikeCast - Una plataforma de podcasts',
            key: 'BikeCast - A poadcast platform',
            githubLink: 'https://github.com/thlindustries/bikecast',
            liveDemoLink: 'https://bikecast.thlinc.com/',
            uKey: '1647c260-9356-4005-b26b-20ab83771c78',
          },
          {
            img: 'https://i.imgur.com/LIttpyZ.png',
            title:
              'Pomodoro - Una plataforma pomodoro para ayudarte a concentrarte',
            key: 'Pomodoro - A pomodoro platform to help you focus',
            githubLink: 'https://github.com/thlindustries/moveIt',
            liveDemoLink: 'https://pomodoro.thlinc.com/',
            uKey: 'fd790e95-ac1d-4754-b393-2b5f8f91764d',
          },
          {
            img:
              'https://camo.githubusercontent.com/23d5b1f720c13a27fbd2c69ecc208fe4bb7bd038019fbea87caefe36694c6726/68747470733a2f2f692e696d6775722e636f6d2f30684e6a79326c2e706e67',
            title:
              'Stoom Pizzas - Una plataforma para construir y personalizar tu pizza',
            key: 'Stoom Pizzas - A platform to build and customize your pizza',
            githubLink: 'https://github.com/thlindustries/stoompizzas',
            liveDemoLink: 'https://pizza.thlinc.com/',
            uKey: 'c81b20ab-e055-475b-84a0-f7e1f94d1520',
          },
          {
            img:
              'https://raw.githubusercontent.com/rocketseat-education/nlw-03-omnistack/master/.github/happy.png',
            title:
              'Happy Project - Encuentra los orfanatos más cercanos para visitar',
            key: 'Happy Project - Find nearest orphanages to visit',
            githubLink: 'https://github.com/thlindustries/happyProject',
            liveDemoLink: '/',
            uKey: '4ff676a4-1f8d-420d-bf67-06712c954036',
          },
          {
            img:
              'https://camo.githubusercontent.com/a58ea87b652c891f03c7696e8373e42fd2462146410f0c44f5839a6361065772/68747470733a2f2f692e696d6775722e636f6d2f333143454c444b2e706e67',
            title: 'Proffy - Una plataforma para encontrar maestros/profesores',
            key: 'Proffy - A platform to find teachers/proffessors',
            githubLink: 'https://github.com/thlindustries/proffyProject',
            liveDemoLink: '/',
            uKey: '3726fa3d-a5ec-4212-a4d6-43c0d263e145',
          },
          {
            img:
              'https://tendaatacado.secure.force.com/resource/1603461343000/brandInverse',
            title:
              'Tenda Atacado - Una plataforma de comercio electrónico totalmente funcional',
            key: 'Tenda Atacado - A fully functional ecommerce platform',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://www.tendaatacado.com.br/',
            uKey: '26d31eee-a9d7-4dbf-883b-88d11498cd18',
          },
          {
            img: 'https://i.imgur.com/LaZAWdZ.png',
            title:
              'Next Level: una plataforma de aprendizaje a distancia y un mercado de cursos completamente funcionales',
            key:
              'Next Level - A fully functional distance learning platform and courses marketplace',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://objetivomogi.bindemy.com.br/courses',
            uKey: 'd13154c2-cf39-45a3-a064-4a735aadd253',
          },
          {
            img: 'https://i.imgur.com/eVBfOnR.png',
            title:
              'Next Level Plantões - Una plataforma tipo Uber para encontrar tutores y profesores',
            key:
              'Next Level Plantões - An Uber-like platform to find tutors and teachers',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://plantoes.bindemy.com.br/',
            uKey: '85282f02-3500-4504-ad9c-85fddb0d562a',
          },
          {
            img: 'https://i.imgur.com/sHSVfHv.png',
            title:
              'Vite Blog: una plataforma de blog para compartir su conocimiento y ayudar a otros (Hecho para estudiar ViteJS)',
            key:
              'Vite Blog - A Blog platform to share your knowledge and help others (Made to study ViteJS)',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://blog.thlinc.com/',
            uKey: '910910d9-c4fc-4bd7-b24d-43f2d4004bde',
          },
          {
            img: 'https://i.imgur.com/rfZAPKC.png',
            title: 'Avenida - Mercado de ropa',
            key: 'Avenida - Clothing marketPlace',
            githubLink: 'https://github.com/thlindustries',
            liveDemoLink: 'https://www.avenida.com.br/',
            uKey: '55908702-3cb0-4c26-8ed3-7aa804d05da3',
          },
        ],
      },
    });
  });
}
