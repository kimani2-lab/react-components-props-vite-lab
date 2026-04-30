function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;