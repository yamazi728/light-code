import Home from './pages/Home'

import './scss/app.scss'
import { Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<div className='wrapper'>
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
