import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import News_Feed from "./Components/News_Feed";
import Events from "./Components/Events";
import Job from "./Job";
import Contact from "./Components/Contact";
import Blog_page from "./pages/Blog_page";

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="news" element={<News_Feed />} ></Route>
          <Route path="events" element={<Events />} ></Route>
          <Route path="job" element={<Job />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/blog/:id" element={<Blog_page />} />
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
