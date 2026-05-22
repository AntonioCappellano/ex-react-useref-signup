import { useState, useMemo } from "react";
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specializzazione, setSpecializzazione] = useState("");
  const [esperienza, setEsperienza] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specializzazione.trim() ||
      parseInt(esperienza) <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isDescriptionValid ||
      !isPasswordValid
    ) {
      alert("Errore: compila tutti i campi");
      return;
    }
    console.log({
      name,
      username,
      password,
      specializzazione,
      esperienza,
      description,
    });
  };

  const isUsernameValid = useMemo(() => {
    const charsValid = username
      .split("")
      .every((char) => letters.includes(char) || numbers.includes(char));
    return charsValid && username.length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    return (
      password.length >= 8 &&
      password.split("").some((char) => letters.includes(char)) &&
      password.split("").some((char) => numbers.includes(char)) &&
      password.split("").some((char) => symbols.includes(char))
    );
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return (
      description.trim().length >= 100 && description.trim().length <= 1000
    );
  }, [description]);

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
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="UserName"
          />
          {username && (
            <p style={{ color: isUsernameValid ? "green" : "red" }}>
              {isUsernameValid
                ? "username valido"
                : "deve avere almeno 6 caratteri"}
            </p>
          )}
        </section>
        <section>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Inserisci password"
          />
          {password && (
            <p style={{ color: isPasswordValid ? "green" : "red" }}>
              {isPasswordValid
                ? "password valida"
                : "deve avere almeno 8 caratteri, 1 lettera, 1 numero, 1 simbolo"}
            </p>
          )}
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
          {description && (
            <p style={{ color: isDescriptionValid ? "green" : "red" }}>
              {isDescriptionValid
                ? "descrizione valida"
                : "deve avere almeno tra i 100 e 1000 caratteri"}
            </p>
          )}
        </section>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default App;
