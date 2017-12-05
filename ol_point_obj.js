//Point(ol.map, Array)
var Point = function(map , LonLat){
	// point position
	var position = ol.proj.fromLonLat(LonLat);
	// new openlayer feature
	var point = new ol.Feature({
		type: 'point',
		geometry: new ol.geom.Point(position)
	});
	// point style
	var styles = {
		'point': new ol.style.Style({
				image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({ 
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'image/marker.png'
        }))
		})
	};
	// new openlayer vector
	var vectorLayer = new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [point]
		}),
		style: function(feature) {
			return styles[feature.get('type')];
		}
	});
	
	Point.prototype.getPosition = function(){
		return LonLat;
	};
	
	// add vector layer to map
	Point.prototype.addToMap = function(){
		map.addLayer(vectorLayer);
	};
	Point.prototype.getFeature = function(){
		//console.log(point.getGeometry().getCoordinates());
		return point.getGeometry().getCoordinates();
	}
	
	//click event
	Point.prototype.click = function(Function){
		map.getViewport().addEventListener('click' , function(e){
			map.forEachFeatureAtPixel(map.getEventPixel(e) , function(feature , layer){
				Function();
			});
		});			
	};
	//pointer move event
	Point.prototype.mouseover = function(Function){
		map.getViewport().addEventListener('pointermove' , function(e){	
			map.forEachFeatureAtPixel(map.getEventPixel(e) , function(feature , layer){
				Function();
			});
		});			
	};	
}





