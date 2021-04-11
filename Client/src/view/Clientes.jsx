import Map from "../components/common/map.jsx";

export default function Clientes() {
  return (
    <main className="container mt-5" style={{ minHeight: "100vh" }}>
      <h1>Clientes </h1>
      <div className="row">
        <form>
          <div className="mb-3">
            <label htmlFor="InputNome" className="form-label">
              Nome
            </label>
            <input
              type="email"
              className="form-control"
              id="InputNome"
              placeholder="Nome completo"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputTel" className="form-label">
              Telefone
            </label>
            <input
              type="email"
              className="form-control"
              id="InputTel"
              placeholder="(xx) xxxxx-xxxx"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputLocation" className="form-label">
              Marque no mapa localição do cliente
            </label>
            <Map id="InputLocation" />
          </div>
        </form>
      </div>
    </main>
  );
}
