import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from 'react-router-dom'
import { MovieList } from "./features/movies/MovieList";
import { MovieDetails } from "./features/movies/MovieDetails";
import { Header } from "./common/Header";
import { PeopleDetails } from "./features/people/peopleDetails";
import { PeopleList } from "./features/people/peopleList";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/movies-browser/movie/:id" element={<MovieDetails/>}/>
        <Route path="/movies-browser/movie" element={<MovieList/>}/>
        <Route path="/movies-browser/people/:id" element={<PeopleDetails/>}/>
        <Route path="/movies-browser/people" element={<PeopleList/>}/>
        <Route path="/movies-browser/" element={<Navigate to="/movies-browser/movie"/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;