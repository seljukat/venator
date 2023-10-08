// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import DocumentationsPage from './pages/DocumentationsPage';
import LogsPage from './pages/LogsPage';
import DevelopersPage from './pages/DevelopersPage';

function App() {
  return (
    <BrowserRouter basename='/venator'>
      <div className="App">
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/project' element={<ProjectPage />}/>
            <Route path='/documentations' element={<DocumentationsPage />}/>
            <Route path='/logs' element={<LogsPage />} />
            <Route path='/developers' element={<DevelopersPage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
