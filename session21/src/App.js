import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Post from './components/Post';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostProvider } from './components/PostProvider';
import { ThemeModeProvider } from './components/ThemeProvider';

function App() {

  return (
    <ThemeModeProvider>
      <PostProvider>
        <Header>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/post' element={<Post />} />
            </Routes>
          </BrowserRouter>
        </Header>
      </PostProvider>
    </ThemeModeProvider>

  );
}

export default App;
