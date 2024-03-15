import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Quality from "./components/About";
import Course from "./components/Course";
import Reports from "./components/Reports";
import Book from "./components/Book";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop smooth/>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Quality />
        <Course />
        <Reports />
        <Book />
      </main>
      <Footer />
    </>
  );
}

export default App;
