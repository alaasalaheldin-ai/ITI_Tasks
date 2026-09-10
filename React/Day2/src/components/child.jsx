export default function Child({ item, onIncrease, onDecrease, onDelete }) {
  return (
    <div className="row align-items-center py-3 border-bottom">
      <div className="col-3 fw-medium">{item.name}</div>
      <div className="col-3">{item.price}</div>
      <div className="col-3">{item.qty}</div>

      <div className="col-3 d-flex gap-2 justify-content-end">
        <button
          className="btn btn-success btn-sm"
          onClick={() => onIncrease(item.id)}
        >
          +
        </button>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => onDecrease(item.id)}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(item.id)}
        >
          🗑
        </button>
      </div>
    </div>
  );
}