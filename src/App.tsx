import style from './app.module.scss';
// Mapbox GL CSS
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
	return (
		<>
            <div className={style.mapContainer}></div>
		</>
	)
}

export default App
