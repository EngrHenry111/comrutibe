const FloatingParticles = () => {
  return (
    <>
      {[...Array(30)].map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;