import { AddTask, ViewAllTasks } from "./components/index";

const App = () => {
  return (
    <div className="w-screen">
      <section className="w-[90%]">
        <h1 className="text-3xl font-bold text-center">Chronoplan</h1>
        <AddTask />
        <ViewAllTasks />
      </section>
    </div>
  );
};

export default App;
