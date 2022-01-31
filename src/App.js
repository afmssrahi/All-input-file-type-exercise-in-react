import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FullForm from './components/FullForm';
import Header from './components/Header';
import MainCanvasDetails from './components/MainCanvasDetails';
import Sidebar from './components/Sidebar';
import { FullFormDetailsContextProvider } from './contexts/fullFormDetailsContext';

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
						<FullFormDetailsContextProvider>
							<Routes>
								<Route path='/' element={<FullForm />} />
								<Route
									path='/fullForm'
									element={<FullForm />}
								/>

								<Route
									path='/listOfFormDetails'
									element={<MainCanvasDetails />}
								/>
							</Routes>
						</FullFormDetailsContextProvider>
					</section>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
