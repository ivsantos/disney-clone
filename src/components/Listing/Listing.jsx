export default function Listing({ list }) {
  if (!list) {
    return null;
  }

  return (
    <section className="listing">
      {list.map((category) => (
        <div key={category.title}>
          <h2>{category.title}</h2>
          {category.results.map((item) => (
            <div key={item.id}>
              <h3>{item.title || item.name}</h3>
              <p>{item.overview}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
