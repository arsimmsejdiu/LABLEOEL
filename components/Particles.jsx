import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import azure from '../assets/azure.png';
import docker from '../assets/docker.png';
import micro from '../assets/microsoft.png';
import google from '../assets/google.png';

const App = () => {
  const particlesInit = async (main) => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: 'out',
          },
          shape: {
            type: ['image', 'circle'],
            image: [
              {
                src: {azure},
                height: 20,
                width: 23,
              },
              {
                src: {docker},
                height: 20,
                width: 20,
              },
              {
                src: {micro},
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: '#CCC',
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  )
}
