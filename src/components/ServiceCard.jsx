// Reusable component: receives data through props
export default function ServiceCard({ name, category, price, description, image, onAdd }) {
  return (
    <article className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <span className="tag">{category}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="card-footer">
          <strong>${price}</strong>
          <button className="btn small" onClick={onAdd}>Add to order</button>
        </div>
      </div>
    </article>
  );
}
