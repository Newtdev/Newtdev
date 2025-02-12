import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import { RoutesEnum } from "./components/Navbar";

const About = lazy(() => import("./Pages/About"))
const Projects = lazy(() => import('./Pages/Projects'))
const Main = lazy(() => import("./Pages/Home"))
const Contact = lazy(() => import("./Pages/Contact"))


const App = () => {
	return (
		<div className="lg:h-[100vh] h-[100vh]">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index path={RoutesEnum.Home} element={<Main />} />
					<Route path={RoutesEnum.About} element={<About />} />
					<Route path={RoutesEnum.Projects} element={<Projects />} />
					<Route path={RoutesEnum.Contact} element={<Contact />} />
				</Routes>
			</BrowserRouter>

		</div>
	);
};

export default App;


