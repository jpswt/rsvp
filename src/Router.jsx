import { Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/admin/dashboard" element={<Dashboard />} />
		</Routes>
	);
};
export default Router;
