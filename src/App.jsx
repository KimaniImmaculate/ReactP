import './App.css'
import MovieCard from './components/MovieCard'  
function App() {

  return (
    <>
      <MovieCard movie={{
        title: "Inception",
        release_date: "2024",
      }} />

      <MovieCard movie={{
        title: "Inception",
        release_date: "2029",
      }} />
    </>
  );
}

export default App;
