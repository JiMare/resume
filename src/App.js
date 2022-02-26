import { Aside } from "./components/Aside";
import { BlackLine } from "./components/BlackLine";
import { Header } from "./components/Header";
import { Main } from "./components/Main";



function App() {
  return (
    <div className="App">
      <BlackLine />
      <Header name="Jitka Marešová" role="Junior React Developer" />
      <Aside />
      <Main />
      <BlackLine />
    </div>
  );
}

export default App;
