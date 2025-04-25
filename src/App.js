import "./styles.css";
import Tabs from "./Tabs";
import services from "./services";

export default function App() {
  return (
    <div className="App">
      <h1>SqueakyClean Laundromat </h1>
      <h2>We take the dirty work out of laundry!</h2>
      <h3> Open daily 5am-9pm 123 Main St.</h3>
      <h4> 212-555-8950</h4>
      <Tabs services={services} />
    </div>
  );
}
