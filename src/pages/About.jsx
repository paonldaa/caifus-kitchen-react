import InfoBlock from "../components/InfoBlock.jsx";

export default function About() {
  return (
    <>
      <section className="page-header">
        <h1>About Caifu's Kitchen</h1>
      </section>

      <section className="section two-col">
        <img src="/images/about.svg" alt="Chef cooking" />
        <div>
          <h2>What we do</h2>
          <p>
            We prepare fresh meals every day for dine-in, takeaway and home delivery. Our menu
            mixes classic favourites with light, healthy options for busy people.
          </p>
          <h2>Our story</h2>
          <p>
            Caifu's Kitchen started in 2018 as a small home kitchen serving neighbours and friends.
            Word spread quickly, and in 2021 we opened our first restaurant. Today we serve
            hundreds of happy customers every week.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Our mission, vision and values</h2>
        <div className="grid">
          <InfoBlock icon="🎯" title="Mission">
            To serve delicious, affordable and freshly cooked meals with great customer care.
          </InfoBlock>
          <InfoBlock icon="🌍" title="Vision">
            To become the most loved neighbourhood kitchen in the city.
          </InfoBlock>
          <InfoBlock icon="💚" title="Values">
            Quality ingredients, cleanliness, honesty and respect for every customer.
          </InfoBlock>
        </div>
      </section>
    </>
  );
}
