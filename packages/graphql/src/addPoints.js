import Mark from './mark/MarkModel';
import Build from './build/BuildModel';


export default async () => {
  const marks = [
    {
      name: ['Prédio Administrativo'],
      latitude: -10.928626,
      longitude: -37.672211,
      type: 'build',
    },
    {
      name: ['Vivência', 'RefLAG'],
      latitude: -10.928837,
      longitude:  -37.671223,
      type: 'build',
    },
    {
      name: ['Biblioteca', 'Salas de Estudo'],
      latitude: -10.928853,
      longitude:  -37.670018,
      type: 'build',
    },
    {
      name: ['Estacionamento'],
      latitude: -10.928295,
      longitude: -37.669831,
      type: 'build',
    },
    {
      name: ['Estacionamento'],
      latitude: -10.929413,
      longitude:  -37.670235,
      type: 'build',
    },
    {
      name: ['Estacionamento'],
      latitude: -10.926630,
      longitude: -37.669599,
      type: 'build',
    },
    {
      name: ['Entrada'],
      latitude: -10.927080,
      longitude: -37.669931,
      type: 'build',
    },
    {
      name: ['Departamento de Odontologia', 'Departamento de Farmácia'],
      latitude: -10.927706,
      longitude: -37.672551,
      type: 'build',
    },
    {
      name: ['Centro de Simulações e Práticas'],
      latitude: -10.929979,
      longitude: -37.671917,
      type: 'build',
    }
  ];

  for(const markObj of marks) {
    try {
      const test = await Mark.find({});
      console.log(JSON.stringify(test));
      const mark = await new Mark({
        latitude: markObj.latitude,
        longitude: markObj.longitude,
        type: markObj.type,
      }).save();

      for (const name of markObj.name){
        const build = await new Build({
          name: name,
          mark: mark._id,
        }).save();
        console.log(`Added ${JSON.stringify(mark)} ${JSON.stringify(build)}`)
      }


    } catch (e) {
      console.log(e)
    }


  }
};
