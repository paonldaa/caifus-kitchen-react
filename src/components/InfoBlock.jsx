// Small reusable component used on the About page
export default function InfoBlock({ icon, title, children }) {
  return (
    <div className="info-block">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
