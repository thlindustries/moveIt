import corsMiddleware from './cors';

export default function handler(req, res): void {
  corsMiddleware(req, res, () => {
    res.status(200).json({
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
    });
  });
}
