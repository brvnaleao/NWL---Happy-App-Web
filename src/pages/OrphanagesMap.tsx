import React from 'react';
import mapMarkerImg from '../images/Map-Marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus }  from 'react-icons/fi';
import '../styles/pages/orphanages-map.css'
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

function OrphanagesMaps(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg}/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Maricá</strong>
                    <span>Rio de Janeiro</span>
                </footer>

            </aside>

            <Map center={[-22.9246992,-42.849531]} zoom={15}
            style={{
                width: '100%', height:'100%'
            }}>
                            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            </Map>
        
            <Link className="create-orphanage" to="">
                <FiPlus size={32} color="#FFF"/>

            </Link>
        </div>
    )
}

export default OrphanagesMaps