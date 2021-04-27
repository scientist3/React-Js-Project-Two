import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilelist from "./component/Tilelist";

function App() {
	return (
		<div>
			<Header />
			<Slider />
			<MainContent />
			<Tilelist />
			<Footer />
		</div>
	);
}

export default App;
