import { Route, Routes } from 'react-router';
import { routing } from './components/common/routing';

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
        <Route path={routing.home} element={<Home />} />
        <Route path={routing.about} element={<About />} />
        <Route path={routing.post} element={<PostPage />} />
        <Route path={routing.postAdd} element={<PostAdd />} />
        <Route path={routing.postEdit} element={<PostEdit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>

  );
}

export default App;
