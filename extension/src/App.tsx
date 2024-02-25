import { AddTask, ViewAllTasks } from "./components/index";

const App = () => {
  return (
    <div className="w-screen">
      <section className="">
        <h1 className="text-3xl font-bold text-center">Chronoplan</h1>
        <AddTask />
        <ViewAllTasks />
      </section>
      <div></div>
      
    </div>
  );
};

export default App;
