export default function handler(req, res): void {
  res.status(200).json({
    info: {
      testimonials: {
        'pt-br': [
          {
            id: 'f4b074e2-3769-11ed-a261-0242ac120002',
            name: 'Gabriel Matos Marconato',
            title: 'Civil Engineer',
            description:
              'Uma das pessoas mais inteligentes e gente boa que conheço. Muito capacitada em diversas áreas e focado nos objetivos.',
            image: 'https://i.imgur.com/MyqqwX3.jpg',
          },
          {
            id: '86686ea3-6bb4-4659-a9c7-7bad83a1fc82',
            name: 'Jorge Afonso',
            title: "DMS Systems's CEO",
            description:
              'Saudades de ter você no squad cara! Aprendi demais com você, ainda mais que na faculdade! Sem dúvida, uma pessoa impar. O famoso thiagão que salva os projetos hahaha Foi uma honra fritar a cabeça resolvendo problemas e bebendo muito café com você, que um dia a gente volte a trabalhar juntos em um projeto daqueles que a gente gosta, beeem complexo para queimar a cabeça! Você vai chegar longe cara, continue trabalhado que você ainda vai revolucionar muito a nosso mundo! Grande abraço e todo o sucesso!',
            image: 'https://i.imgur.com/rbpuNRh.jpg',
          },
          {
            id: '96ef6eb2-bd15-441a-b47d-4a7ef7a6d393',
            name: 'Wilson Lima',
            title: 'Journalist',
            description:
              'O que mais admiro no Thiagão é a inteligência, a rapidez com que entende as dores e necessidades dos clientes. Não é necessário explicar várias vezes o que vc tá procurando. Dada sua perspicácia e experiência, Thiagão apresenta a melhor solução, com eficácia, agilidade e ótimo suporte, tudo dentro de um orçamento coerente. Por tudo isso eu recomendo esse cara.',
            image: 'https://i.imgur.com/HzyFJGY.jpg',
          },
          {
            id: '352cde3c-99c4-454c-8881-4aa9d3a02795',
            name: 'Alexandre Cunha Almeida Leite',
            title: 'Fisioterapeuta',
            description:
              'Excelente profissional, atencioso e competente. Ele fez um ótimo trabalho.',
            image: 'https://i.imgur.com/dJfq5qS.jpg',
          },
          {
            id: '770994fa-f83b-46c4-928c-63780e37b107',
            name: 'Daniel Viola',
            title: "CEO Agência de Marketing Digital Bro's",
            description:
              'Trabalhei em diversos projeto com o Thiagao e as principais características posso destacar pontualidade, comunicação e profissionalismo. Super recomendo, um dos top no mercado!',
            image: 'https://i.imgur.com/2YnXXGu.jpg',
          },
        ],
        'en-us': [
          {
            id: '8fab9e8d-015e-486a-97de-2e017939c350',
            name: 'Gabriel Matos Marconato',
            title: 'Civil Engineer',
            description:
              'One of the smartest and nicest people I know. Very capable in several areas and focused on goals.',
            image: 'https://i.imgur.com/MyqqwX3.jpg',
          },
          {
            id: '794b2225-b63c-4d5c-8626-f483bb489f7c',
            name: 'Jorge Afonso',
            title: "DMS Systems's CEO",
            description:
              "Miss having you on the squad man! I learned a lot from you, even more than in college! Undoubtedly, an odd person. The famous thiagão who saves projects hahaha It was an honor to fry our heads solving problems and drinking a lot of coffee with you, that one day we will work together again on a project that we like, very complex to burn our heads! You'll get far, man, keep working, you're going to revolutionize our world a lot! Big hugs and all the success!",
            image: 'https://i.imgur.com/rbpuNRh.jpg',
          },
          {
            id: '6c90286f-577f-4439-b5a8-3b55e9f3ad6f',
            name: 'Wilson Lima',
            title: 'Journalist',
            description:
              'What I admire most about Thiagão is his intelligence, the speed with which he understands the pain and needs of his clients. It is not necessary to explain several times what you are looking for. Given his acumen and experience, Thiagão presents the best solution, with efficiency, agility and great support, all within a consistent budget. For all that I recommend this guy.',
            image: 'https://i.imgur.com/HzyFJGY.jpg',
          },
          {
            id: 'cc45fd60-255f-4fff-b9af-d70799b10d2c',
            name: 'Alexandre Cunha Almeida Leite',
            title: 'Physiotherapist',
            description:
              'Excellent professional, attentive and competent. He did a great job.',
            image: 'https://i.imgur.com/dJfq5qS.jpg',
          },
          {
            id: '1650bd8e-5934-4286-b916-5dff2368cdd0',
            name: 'Daniel Viola',
            title: "Bro's publicity CEO",
            description:
              'I worked on several projects with Thiagao and the main characteristics I can highlight is punctuality, communication and professionalism. I highly recommend it, one of the best on the market!',
            image: 'https://i.imgur.com/2YnXXGu.jpg',
          },
        ],
        'es-sp': [
          {
            id: 'a8c79c4d-b8c9-4455-a4d3-c8a79a8ecb23',
            name: 'Gabriel Matos Marconato',
            title: 'Civil Engineer',
            description:
              'Una de las personas más inteligentes y agradables que conozco. Bien entrenado en varias áreas y enfocado en nuestros objetivos.',
            image: 'https://i.imgur.com/MyqqwX3.jpg',
          },
          {
            id: 'fe7d0d31-a6e4-4ec6-8a2e-83c742d0b4f5',
            name: 'Jorge Afonso',
            title: "DMS Systems's CEO",
            description:
              '¡Extraño tenerte en el escuadrón! Aprendí mucho de ti, ¡incluso más que en la universidad! Sin duda, una persona rara. El famoso thiagão que salva proyectos jajaja Fue un honor freírnos la cabeza resolviendo problemas y tomando mucho café contigo, que algún día volveremos a trabajar juntos en un proyecto que nos gusta, muy complejo para quemarnos la cabeza! Llegarás lejos, tío, sigue trabajando, ¡vas a revolucionar mucho nuestro mundo! Un fuerte abrazo y todo el éxito!',
            image: 'https://i.imgur.com/rbpuNRh.jpg',
          },
          {
            id: 'a67aca23-c5e3-460a-92ca-951d4bdd561b',
            name: 'Wilson Lima',
            title: 'Journalist',
            description:
              'Lo que más admiro de Thiagão es su inteligencia, la rapidez con la que comprende el dolor y las necesidades de sus clientes. No es necesario que expliques varias veces lo que buscas. Dada su perspicacia y experiencia, Thiagão presenta la mejor solución, con eficiencia, agilidad y gran soporte, todo dentro de un presupuesto consistente. Por todo eso recomiendo a este chico.',
            image: 'https://i.imgur.com/HzyFJGY.jpg',
          },
          {
            id: '5d2f628f-0b44-4845-8308-f73a8049f8b8',
            name: 'Alexandre Cunha Almeida Leite',
            title: 'Fisioterapeuta',
            description:
              'Excelente profesional, atento y competente. Él hizo un gran trabajo.',
            image: 'https://i.imgur.com/dJfq5qS.jpg',
          },
          {
            id: '9397b715-ff28-4f3e-a2fd-c84e36800726',
            name: 'Daniel Viola',
            title: ' - ',
            description:
              'Trabalhei em diversos projeto com o Thiagao y as principais caracteristicas posso destacan pontualidade, comunicação y profissionalism. Súper recomendado, um dos top no mercado!',
            image: 'https://i.imgur.com/2YnXXGu.jpg',
          },
        ],
      },
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
    },
  });
}
