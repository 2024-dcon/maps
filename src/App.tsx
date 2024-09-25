// Mapbox GL CSS
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {useEffect, useRef} from "react";

function App() {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);

	useEffect(() => {
		mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

		if (mapContainerRef.current) {
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: import.meta.env.VITE_MAPBOX_STYLE_URL as string,
				zoom: 12,
				minZoom: 12,
				center: [126.978, 37.566],
			});

			mapRef.current.on('load', () => {
				if (mapRef.current) {
					mapRef.current.addSource('dem', {
						type: 'raster-dem',
						url: 'mapbox://mapbox.mapbox-terrain-dem-v1'
					});
				}
			});
		}

		return () => {
			if (mapRef.current) {
				mapRef.current.remove();
			}
		}
	}, []);

	return (
		<>
			<div style={{width: '100vw', height: '100vh'}} ref={mapContainerRef}></div>
		</>
	)
}

export default App
