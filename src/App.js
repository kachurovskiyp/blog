import { Route, Routes } from 'react-router';

import { Container } from 'react-bootstrap';

import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import PostPage from './components/pages/PostPage/PostPage';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';

import Header from './components/views/Header/Hader';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit/:id' element={<PostEdit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>

  );
}

export default App;
