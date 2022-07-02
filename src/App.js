import "./App.css";
import Header from "./components/Header";
import QuizSection from "./components/QuizSection";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ResultPage from "./components/ResultPage";

function App() {
  // create route with 3 pages
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path="/" component={HomePage} exact />
        <Route path="/quiz" component={QuizSection} exact />
        <Route path="/result" component={ResultPage} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
