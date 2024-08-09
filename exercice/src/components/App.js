
import '../styles/App.css';
import Hello from './Hello';

function App() {
  return (
    <Hello name="Edou" age="23" ville="Yaounde">
     Ce paragraphe est ma description mais n'a pas été passé par les props.
    </Hello>
  );
}

export default App;
