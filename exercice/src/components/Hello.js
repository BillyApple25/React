import '../styles/Hello.css'

function Hello({ name, age, ville, children }) {
  return (
    <div className="hello-description">
      <h1> Bonjour a tous!</h1>
      <h2>Je suis</h2>
      <p>{name}</p>
      <h2>j'ai</h2>
      <p>{age}ans</p>
      <h2>Né à </h2>
      <p>{ville}</p>
      <h2>Description</h2>
      <p> {children} </p>
    </div>
  );
}

export default Hello;
