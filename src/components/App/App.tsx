import SlothForm from "../SlothForm/SlothForm";
import "./App.css";
const App = (): React.ReactElement => {
  return (
    <div>
      <header className="header">
        <h1>Sloth</h1>
      </header>
      <SlothForm />
    </div>
  );
};

export default App;
