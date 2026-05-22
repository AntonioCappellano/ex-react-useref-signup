import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specializzazione, setSpecializzazione] = useState("");
  const [esperienza, setEsperienza] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specializzazione.trim() ||
      parseInt(esperienza) <= 0 ||
      !description.trim()
    ) {
      alert("Errore: compila tutti i campi");
      return;
    }
    console.log({
      name,
      userName,
      password,
      specializzazione,
      esperienza,
      description,
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <section>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome Completo"
          />
        </section>
        <section>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="UserName"
          />
        </section>
        <section>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Inserisci password"
          />
        </section>
        <section>
          <select
            value={specializzazione}
            onChange={(e) => setSpecializzazione(e.target.value)}
          >
            <option value="">Seleziona...</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </section>
        <section>
          <input
            type="number"
            value={esperienza}
            onChange={(e) => setEsperienza(e.target.value)}
            placeholder="Anni di esperienza"
          />
        </section>
        <section>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Inserisci una descrizione"
          />
        </section>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default App;
