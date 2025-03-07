import "./ProductMeny.css";
export default function ProductMeny(props) {
  return (
    <div className="container">
      <h3>{props.data.tittel}</h3>
      <h4>{props.data.kategori}</h4>
      <p>{props.data.ingredienser}</p>
      <h4>{props.data.pris}</h4>
    </div>
  );
}
