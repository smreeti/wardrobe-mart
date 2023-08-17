import React, { useEffect } from 'react';
import particlesJS from 'particles.js';

const ParticleComponent = () => {
  useEffect(() => {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80, 
        },
        size: {
          value: 3, 
        },
      },
    });
  }, []);

  return <div id="particles-js" className="particles"></div>;
};

export default ParticleComponent;
