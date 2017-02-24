/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = '0.4.2';
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Draw an awesome polygon'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: 'Keskeytä piirtäminen',
				text: 'Keskeytä'
			},
			finish: {
				title: 'Viimeistele piirtäminen',
				text: 'Viimeistele'
			},
			undo: {
				title: 'Poista viimeisin piirretty piste',
				text: 'Poista viimeisin piste'
			},
			buttons: {
				polyline: 'Piirrä reitti',
				polygon: 'Piirrä alue',
				rectangle: 'Piirrä suorakaide',
				circle: 'Piirrä ympyrä',
				marker: 'Piirrä merkki'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Klikkaa ja vedä piirtääksesi ympyrän'
				},
				radius: 'Säde'
			},
			marker: {
				tooltip: {
					start: 'Klikkaa sijoittaaksesi merkin'
				}
			},
			polygon: {
				tooltip: {
					start: 'Klikkaa aloittaaksesi piirtämisen ',
					cont: 'Klikkaa jatkaaksesi piirtämistä',
					end: 'Klikkaa ensimmäistä pistettä viimeistelläksesi muodon'
				}
			},
			polyline: {
				error: '<strong>Virhe:</strong> muodon reunat eivät saa ristetä!',
				tooltip: {
					start: 'Klikkaa piirtääksesi reitin',
					cont: 'Klikkaa jatkaaksesi piirtämistä',
					end: 'Klikkaa viimeistä pistettä päättääksesi reitin'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Klikkaa ja vedä piirtääksesi suorakaiteen'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Vapauta hiirennappi lopettaaksesi piirtämisen'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Tallenna muutokset',
					text: 'Tallenna'
				},
				cancel: {
					title: 'Peruuta muokkaus, hylkää muutokset',
					text: 'Peruuta'
				},
				clearAll:{
					title: 'Tyhjennä piirretyt',
					text: 'Tyhjennä kaikki'
				}
			},
			buttons: {
				edit: 'Muokkaa piirrettyjä',
				editDisabled: 'Ei piirrettyjä muokattavaksi',
				remove: 'Poista piirretyt',
				removeDisabled: 'Ei piirrettyjä poistettavaksi'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Vedä pisteitä tai merkkiä muokataksesi',
					subtext: 'Klikkaa peruuta hylätäksesi muutokset'
				}
			},
			remove: {
				tooltip: {
					text: 'Klikkaa elementtiä poistaaksesi sen'
				}
			}
		}
	}
};
