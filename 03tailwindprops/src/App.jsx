import Card from "./components/Card";

function App() {
  return (
    <div className="mx-4 flex flex-col gap-5 my-10">
      <h1 className="text-5xl bg-neutral-500 font-extrabold p-3 text-neutral-50 rounded-xl my-2">
        Vite with Tailwind
      </h1>
      <div className="flex flex-col gap-4">
        <Card
          img="https://images.pexels.com/photos/38877501/pexels-photo-38877501.jpeg"
          category="human"
        />
        <Card
          img="https://images.pexels.com/photos/37876738/pexels-photo-37876738.jpeg"
          category="human"
        />
        <Card
          img="https://images.pexels.com/photos/39117646/pexels-photo-39117646.jpeg"
          category="wedding"
        />
        <Card
          img="https://images.pexels.com/photos/38854773/pexels-photo-38854773.jpeg"
          category="food"
        />
      </div>
    </div>
  );
}

export default App;
