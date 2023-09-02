import "./App.css";
import Tasks from "./component/Tasks";
function App() {
  return (
    <div className="text-red-500">
      <div>
        <h3>TODO TASK</h3>
        <form>
          <input placeholder="Nhập nhiệm vụ" className="w-[300px]"></input>
        </form>
      </div>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
