const Particles = () => {
  const particles = [];
  const numberOfParticles = 50;

  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(i);
  }

  return (
    <div id="particle-container">
      {particles.map((particle) => {
        return <div key={`particle-${particle}`} className="particle"></div>;
      })}
    </div>
  );
};

export default Particles;
