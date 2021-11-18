var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_huancavelica_provincias_1 = new ol.format.GeoJSON();
var features_huancavelica_provincias_1 = format_huancavelica_provincias_1.readFeatures(json_huancavelica_provincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huancavelica_provincias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huancavelica_provincias_1.addFeatures(features_huancavelica_provincias_1);
var lyr_huancavelica_provincias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_huancavelica_provincias_1, 
                style: style_huancavelica_provincias_1,
                interactive: true,
    title: 'huancavelica_provincias<br />\
    <img src="styles/legend/huancavelica_provincias_1_0.png" /> ACOBAMBA<br />\
    <img src="styles/legend/huancavelica_provincias_1_1.png" /> ANGARAES<br />\
    <img src="styles/legend/huancavelica_provincias_1_2.png" /> CASTROVIRREYNA<br />\
    <img src="styles/legend/huancavelica_provincias_1_3.png" /> CHURCAMPA<br />\
    <img src="styles/legend/huancavelica_provincias_1_4.png" /> HUANCAVELICA<br />\
    <img src="styles/legend/huancavelica_provincias_1_5.png" /> HUAYTARA<br />\
    <img src="styles/legend/huancavelica_provincias_1_6.png" /> TAYACAJA<br />'
        });
var format_huancavelica_via_de_acceso_2 = new ol.format.GeoJSON();
var features_huancavelica_via_de_acceso_2 = format_huancavelica_via_de_acceso_2.readFeatures(json_huancavelica_via_de_acceso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huancavelica_via_de_acceso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huancavelica_via_de_acceso_2.addFeatures(features_huancavelica_via_de_acceso_2);
var lyr_huancavelica_via_de_acceso_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_huancavelica_via_de_acceso_2, 
                style: style_huancavelica_via_de_acceso_2,
                interactive: true,
    title: 'huancavelica_via_de_acceso<br />\
    <img src="styles/legend/huancavelica_via_de_acceso_2_0.png" /> Asfaltado,Pavimento Basico,Pavimento Rigido<br />\
    <img src="styles/legend/huancavelica_via_de_acceso_2_1.png" /> Afirmado<br />\
    <img src="styles/legend/huancavelica_via_de_acceso_2_2.png" /> Sin Afirmar<br />\
    <img src="styles/legend/huancavelica_via_de_acceso_2_3.png" /> Trocha<br />'
        });
var format_huancavelica_ccpp_3 = new ol.format.GeoJSON();
var features_huancavelica_ccpp_3 = format_huancavelica_ccpp_3.readFeatures(json_huancavelica_ccpp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huancavelica_ccpp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huancavelica_ccpp_3.addFeatures(features_huancavelica_ccpp_3);
var lyr_huancavelica_ccpp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_huancavelica_ccpp_3, 
                style: style_huancavelica_ccpp_3,
                interactive: true,
    title: 'huancavelica_ccpp<br />\
    <img src="styles/legend/huancavelica_ccpp_3_0.png" /> Capital del distrito<br />\
    <img src="styles/legend/huancavelica_ccpp_3_1.png" /> PUEBLO<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_huancavelica_provincias_1.setVisible(true);lyr_huancavelica_via_de_acceso_2.setVisible(true);lyr_huancavelica_ccpp_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_huancavelica_provincias_1,lyr_huancavelica_via_de_acceso_2,lyr_huancavelica_ccpp_3];
lyr_huancavelica_provincias_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_huancavelica_via_de_acceso_2.set('fieldAliases', {'gid': 'gid', 'ccodruta': 'ccodruta', 'dlongitud': 'dlongitud', 'csentido': 'csentido', 'csuperfici': 'csuperfici', 'rst_lbl': 'rst_lbl', 'sentido': 'sentido', 'data': 'data', 'fecha_act': 'fecha_act', 'base': 'base', 'iddpto': 'iddpto', 'nombdep': 'nombdep', 'idprov': 'idprov', 'nombprov': 'nombprov', 'iddist': 'iddist', 'nombdist': 'nombdist', 'trayectori': 'trayectori', 'cambios': 'cambios', 'ruta': 'ruta', 'notas': 'notas', 'mod_eje': 'mod_eje', });
lyr_huancavelica_ccpp_3.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'provincia': 'provincia', 'distrito': 'distrito', 'region_nat': 'region_nat', 'longitud': 'longitud', 'latitud': 'latitud', 'categoria': 'categoria', 'codigo': 'codigo', 'ubigeo': 'ubigeo', 'departamen': 'departamen', 'altitud': 'altitud', 'descripcio': 'descripcio', 'cpv2017_gi': 'cpv2017_gi', 'poblacion': 'poblacion', 'origen': 'origen', 'ccdd': 'ccdd', 'ccpp': 'ccpp', 'ccdi': 'ccdi', 'cod_grupo': 'cod_grupo', 'flag_tipo_': 'flag_tipo_', });
lyr_huancavelica_provincias_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_huancavelica_via_de_acceso_2.set('fieldImages', {'gid': 'TextEdit', 'ccodruta': 'TextEdit', 'dlongitud': 'TextEdit', 'csentido': 'TextEdit', 'csuperfici': 'TextEdit', 'rst_lbl': 'TextEdit', 'sentido': 'TextEdit', 'data': 'TextEdit', 'fecha_act': 'TextEdit', 'base': 'TextEdit', 'iddpto': 'TextEdit', 'nombdep': 'TextEdit', 'idprov': 'TextEdit', 'nombprov': 'TextEdit', 'iddist': 'TextEdit', 'nombdist': 'TextEdit', 'trayectori': 'TextEdit', 'cambios': 'TextEdit', 'ruta': 'TextEdit', 'notas': 'TextEdit', 'mod_eje': 'TextEdit', });
lyr_huancavelica_ccpp_3.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'region_nat': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'categoria': 'TextEdit', 'codigo': 'TextEdit', 'ubigeo': 'TextEdit', 'departamen': 'TextEdit', 'altitud': 'TextEdit', 'descripcio': 'TextEdit', 'cpv2017_gi': 'TextEdit', 'poblacion': 'TextEdit', 'origen': 'TextEdit', 'ccdd': 'TextEdit', 'ccpp': 'TextEdit', 'ccdi': 'TextEdit', 'cod_grupo': 'TextEdit', 'flag_tipo_': 'TextEdit', });
lyr_huancavelica_provincias_1.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'ccdd': 'no label', 'nombdep': 'no label', 'ccpp': 'no label', 'nombprov': 'no label', 'capital': 'no label', 'idprov': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_huancavelica_via_de_acceso_2.set('fieldLabels', {'gid': 'no label', 'ccodruta': 'no label', 'dlongitud': 'no label', 'csentido': 'no label', 'csuperfici': 'no label', 'rst_lbl': 'no label', 'sentido': 'no label', 'data': 'no label', 'fecha_act': 'no label', 'base': 'no label', 'iddpto': 'no label', 'nombdep': 'no label', 'idprov': 'no label', 'nombprov': 'no label', 'iddist': 'no label', 'nombdist': 'no label', 'trayectori': 'no label', 'cambios': 'no label', 'ruta': 'no label', 'notas': 'no label', 'mod_eje': 'no label', });
lyr_huancavelica_ccpp_3.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'provincia': 'no label', 'distrito': 'no label', 'region_nat': 'no label', 'longitud': 'no label', 'latitud': 'no label', 'categoria': 'no label', 'codigo': 'no label', 'ubigeo': 'no label', 'departamen': 'no label', 'altitud': 'no label', 'descripcio': 'no label', 'cpv2017_gi': 'no label', 'poblacion': 'no label', 'origen': 'no label', 'ccdd': 'no label', 'ccpp': 'no label', 'ccdi': 'no label', 'cod_grupo': 'no label', 'flag_tipo_': 'no label', });
lyr_huancavelica_ccpp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});