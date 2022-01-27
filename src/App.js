import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FullForm from './components/FullForm';
import Header from './components/Header';
import MainCanvas from './components/MainCanvas';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<main className='d-flex'>
					<section className='sidebar bg-dark w-25 p-5'>
						<Sidebar />
					</section>
					<section className='main-canvas p-5 w-75 mx-auto'>
						<Routes>
							<Route path='/' element={<FullForm />} />
							<Route path='/fullForm' element={<FullForm />} />
							<Route
								path='/listOfFormDetails'
								element={<MainCanvas />}
							/>
						</Routes>
					</section>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
