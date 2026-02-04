ol.proj.proj4.register(proj4);
//ol.proj.get("IGNF:WGS84GEO").setExtent([43.212221, -25.318646, 47.161789, -21.680173]);
var wms_layers = [];


        var lyr_WorldTopoMap_0 = new ol.layer.Tile({
            'title': 'World Topo Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_waterways_1 = new ol.format.GeoJSON();
var features_waterways_1 = format_waterways_1.readFeatures(json_waterways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_waterways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterways_1.addFeatures(features_waterways_1);
var lyr_waterways_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterways_1, 
                style: style_waterways_1,
                popuplayertitle: 'waterways',
                interactive: true,
    title: 'waterways<br />\
    <img src="styles/legend/waterways_1_0.png" /> canal<br />\
    <img src="styles/legend/waterways_1_1.png" /> Barrage<br />\
    <img src="styles/legend/waterways_1_2.png" /> Fossé<br />\
    <img src="styles/legend/waterways_1_3.png" /> Quai<br />\
    <img src="styles/legend/waterways_1_4.png" /> Drain<br />\
    <img src="styles/legend/waterways_1_5.png" /> Rivièr/Fleuve<br />\
    <img src="styles/legend/waterways_1_6.png" /> Ruisseau<br />\
    <img src="styles/legend/waterways_1_7.png" /> un<br />\
    <img src="styles/legend/waterways_1_8.png" /> wadi<br />\
    <img src="styles/legend/waterways_1_9.png" /> Rivière<br />\
    <img src="styles/legend/waterways_1_10.png" /> <br />' });
var format_SAPM_H4H_AREAS_2 = new ol.format.GeoJSON();
var features_SAPM_H4H_AREAS_2 = format_SAPM_H4H_AREAS_2.readFeatures(json_SAPM_H4H_AREAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_SAPM_H4H_AREAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAPM_H4H_AREAS_2.addFeatures(features_SAPM_H4H_AREAS_2);
var lyr_SAPM_H4H_AREAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAPM_H4H_AREAS_2, 
                style: style_SAPM_H4H_AREAS_2,
                popuplayertitle: 'SAPM_H4H_AREAS',
                interactive: true,
    title: 'SAPM_H4H_AREAS<br />\
    <img src="styles/legend/SAPM_H4H_AREAS_2_0.png" /> Monument Naturel<br />\
    <img src="styles/legend/SAPM_H4H_AREAS_2_1.png" /> Parc National<br />\
    <img src="styles/legend/SAPM_H4H_AREAS_2_2.png" /> Paysage Harmonieux Protégé<br />\
    <img src="styles/legend/SAPM_H4H_AREAS_2_3.png" /> Réserve de Ressources Naturelles<br />\
    <img src="styles/legend/SAPM_H4H_AREAS_2_4.png" /> Réserve Spéciale<br />\
    <img src="styles/legend/SAPM_H4H_AREAS_2_5.png" /> <br />' });
var format_LimiteCommunes6Sites_3 = new ol.format.GeoJSON();
var features_LimiteCommunes6Sites_3 = format_LimiteCommunes6Sites_3.readFeatures(json_LimiteCommunes6Sites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_LimiteCommunes6Sites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteCommunes6Sites_3.addFeatures(features_LimiteCommunes6Sites_3);
var lyr_LimiteCommunes6Sites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteCommunes6Sites_3, 
                style: style_LimiteCommunes6Sites_3,
                popuplayertitle: 'LimiteCommunes6Sites',
                interactive: true,
                title: '<img src="styles/legend/LimiteCommunes6Sites_3.png" /> LimiteCommunes6Sites'
            });
var format_routes_4 = new ol.format.GeoJSON();
var features_routes_4 = format_routes_4.readFeatures(json_routes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_routes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_4.addFeatures(features_routes_4);
var lyr_routes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_routes_4, 
                style: style_routes_4,
                popuplayertitle: 'routes',
                interactive: true,
    title: 'routes<br />\
    <img src="styles/legend/routes_4_0.png" /> autre<br />\
    <img src="styles/legend/routes_4_1.png" /> cip<br />\
    <img src="styles/legend/routes_4_2.png" /> rip<br />\
    <img src="styles/legend/routes_4_3.png" /> rn<br />\
    <img src="styles/legend/routes_4_4.png" /> rnc<br />\
    <img src="styles/legend/routes_4_5.png" /> <br />' });
var format_cart_track_5 = new ol.format.GeoJSON();
var features_cart_track_5 = format_cart_track_5.readFeatures(json_cart_track_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_cart_track_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cart_track_5.addFeatures(features_cart_track_5);
var lyr_cart_track_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cart_track_5, 
                style: style_cart_track_5,
                popuplayertitle: 'cart_track',
                interactive: true,
    title: 'cart_track<br />\
    <img src="styles/legend/cart_track_5_0.png" /> chemin<br />\
    <img src="styles/legend/cart_track_5_1.png" /> piste<br />\
    <img src="styles/legend/cart_track_5_2.png" /> <br />' });
var format_LocaliteCommuneDistrictBetiokyAmpanihy_6 = new ol.format.GeoJSON();
var features_LocaliteCommuneDistrictBetiokyAmpanihy_6 = format_LocaliteCommuneDistrictBetiokyAmpanihy_6.readFeatures(json_LocaliteCommuneDistrictBetiokyAmpanihy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_LocaliteCommuneDistrictBetiokyAmpanihy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaliteCommuneDistrictBetiokyAmpanihy_6.addFeatures(features_LocaliteCommuneDistrictBetiokyAmpanihy_6);
var lyr_LocaliteCommuneDistrictBetiokyAmpanihy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaliteCommuneDistrictBetiokyAmpanihy_6, 
                style: style_LocaliteCommuneDistrictBetiokyAmpanihy_6,
                popuplayertitle: 'LocaliteCommuneDistrictBetiokyAmpanihy',
                interactive: true,
    title: 'LocaliteCommuneDistrictBetiokyAmpanihy<br />\
    <img src="styles/legend/LocaliteCommuneDistrictBetiokyAmpanihy_6_0.png" /> Autre<br />\
    <img src="styles/legend/LocaliteCommuneDistrictBetiokyAmpanihy_6_1.png" /> Capital<br />\
    <img src="styles/legend/LocaliteCommuneDistrictBetiokyAmpanihy_6_2.png" /> Chef-lieu-Commune<br />\
    <img src="styles/legend/LocaliteCommuneDistrictBetiokyAmpanihy_6_3.png" /> Chef-Lieu-Commune<br />\
    <img src="styles/legend/LocaliteCommuneDistrictBetiokyAmpanihy_6_4.png" /> Chef-Lieu-Departement<br />\
    <img src="styles/legend/LocaliteCommuneDistrictBetiokyAmpanihy_6_5.png" /> Chef-Lieu-Region<br />\
    <img src="styles/legend/LocaliteCommuneDistrictBetiokyAmpanihy_6_6.png" /> <br />' });
var format_CIREACEF_7 = new ol.format.GeoJSON();
var features_CIREACEF_7 = format_CIREACEF_7.readFeatures(json_CIREACEF_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_CIREACEF_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIREACEF_7.addFeatures(features_CIREACEF_7);
var lyr_CIREACEF_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CIREACEF_7, 
                style: style_CIREACEF_7,
                popuplayertitle: 'CIREA&CEF',
                interactive: true,
    title: 'CIREA&CEF<br />\
    <img src="styles/legend/CIREACEF_7_0.png" /> CEF<br />\
    <img src="styles/legend/CIREACEF_7_1.png" /> CIRAE<br />' });
var format_ForagesPointdEau_8 = new ol.format.GeoJSON();
var features_ForagesPointdEau_8 = format_ForagesPointdEau_8.readFeatures(json_ForagesPointdEau_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_ForagesPointdEau_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForagesPointdEau_8.addFeatures(features_ForagesPointdEau_8);
var lyr_ForagesPointdEau_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForagesPointdEau_8, 
                style: style_ForagesPointdEau_8,
                popuplayertitle: 'Forages&PointdEau',
                interactive: true,
    title: 'Forages&PointdEau<br />\
    <img src="styles/legend/ForagesPointdEau_8_0.png" /> Forage<br />\
    <img src="styles/legend/ForagesPointdEau_8_1.png" /> Forage équipé de PMH<br />\
    <img src="styles/legend/ForagesPointdEau_8_2.png" /> Puits équipé de PMH<br />\
    <img src="styles/legend/ForagesPointdEau_8_3.png" /> Puits simple<br />\
    <img src="styles/legend/ForagesPointdEau_8_4.png" /> <br />' });
var format_SixCommunesLakes_9 = new ol.format.GeoJSON();
var features_SixCommunesLakes_9 = format_SixCommunesLakes_9.readFeatures(json_SixCommunesLakes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_SixCommunesLakes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SixCommunesLakes_9.addFeatures(features_SixCommunesLakes_9);
var lyr_SixCommunesLakes_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SixCommunesLakes_9, 
                style: style_SixCommunesLakes_9,
                popuplayertitle: 'SixCommunesLakes',
                interactive: true,
                title: '<img src="styles/legend/SixCommunesLakes_9.png" /> SixCommunesLakes'
            });

lyr_WorldTopoMap_0.setVisible(true);lyr_waterways_1.setVisible(true);lyr_SAPM_H4H_AREAS_2.setVisible(true);lyr_LimiteCommunes6Sites_3.setVisible(true);lyr_routes_4.setVisible(true);lyr_cart_track_5.setVisible(true);lyr_LocaliteCommuneDistrictBetiokyAmpanihy_6.setVisible(true);lyr_CIREACEF_7.setVisible(true);lyr_ForagesPointdEau_8.setVisible(true);lyr_SixCommunesLakes_9.setVisible(true);
var layersList = [lyr_WorldTopoMap_0,lyr_waterways_1,lyr_SAPM_H4H_AREAS_2,lyr_LimiteCommunes6Sites_3,lyr_routes_4,lyr_cart_track_5,lyr_LocaliteCommuneDistrictBetiokyAmpanihy_6,lyr_CIREACEF_7,lyr_ForagesPointdEau_8,lyr_SixCommunesLakes_9];
lyr_waterways_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_SAPM_H4H_AREAS_2.set('fieldAliases', {'DATAADMIN': 'DATAADMIN', 'NOM': 'NOM', 'CAT__IUCN': 'CAT__IUCN', 'CREATION': 'CREATION', 'STATUT_AP': 'STATUT_AP', 'DESCRIPT_1': 'DESCRIPT_1', 'PERIMETER': 'PERIMETER', 'SUPERFICIE': 'SUPERFICIE', 'AREA': 'AREA', 'HECTARES': 'HECTARES', 'DATAADMI_1': 'DATAADMI_1', 'NOM_1': 'NOM_1', 'CAT__IUC_1': 'CAT__IUC_1', 'CREATION_1': 'CREATION_1', 'STATUT_A_1': 'STATUT_A_1', 'DESCRIPT_2': 'DESCRIPT_2', 'PERIMETE_1': 'PERIMETE_1', 'SUPERFIC_1': 'SUPERFIC_1', 'AREA_1': 'AREA_1', 'NUM_ATLAS_': 'NUM_ATLAS_', 'SHORT_NAME': 'SHORT_NAME', 'FULL_NAME': 'FULL_NAME', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', 'DISTRICT': 'DISTRICT', 'SUP_DECR_H': 'SUP_DECR_H', 'STATUT_JUR': 'STATUT_JUR', 'CATEG_IUCN': 'CATEG_IUCN', 'GEST_1': 'GEST_1', 'GEST_2': 'GEST_2', 'DAT_ST_DEF': 'DAT_ST_DEF', 'STAT_DEF': 'STAT_DEF', 'DATE_CREAT': 'DATE_CREAT', 'GOUVERNANC': 'GOUVERNANC', 'TYPE_AP': 'TYPE_AP', });
lyr_LimiteCommunes6Sites_3.set('fieldAliases', {'FOKONTANY': 'FOKONTANY', 'P_CODE': 'P_CODE', 'F_CODE': 'F_CODE', 'COMMUNE': 'COMMUNE', 'COM_PCODE': 'COM_PCODE', 'C_CODE': 'C_CODE', 'DISTRICT': 'DISTRICT', 'DIST_PCODE': 'DIST_PCODE', 'D_CODE': 'D_CODE', 'REGION': 'REGION', 'REG_PCODE': 'REG_PCODE', 'R_CODE': 'R_CODE', 'fktCode': 'fktCode', 'fkt_code2': 'fkt_code2', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_routes_4.set('fieldAliases', {'ENTITY': 'ENTITY', 'COLOR': 'COLOR', 'ID': 'ID', 'TYPE': 'TYPE', 'ETAT': 'ETAT', 'NUMERO': 'NUMERO', 'POSITION': 'POSITION', 'NOM_ROUTE': 'NOM_ROUTE', 'LONG': 'LONG', });
lyr_cart_track_5.set('fieldAliases', {'FID_': 'FID_', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'PISTE_CH_': 'PISTE_CH_', 'PISTE_CH_I': 'PISTE_CH_I', 'TYPE': 'TYPE', });
lyr_LocaliteCommuneDistrictBetiokyAmpanihy_6.set('fieldAliases', {'ID': 'ID', 'TOPONYME': 'TOPONYME', 'CLA_ADM_AN': 'CLA_ADM_AN', 'CLA_ADM_NO': 'CLA_ADM_NO', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'CODE_COMMU': 'CODE_COMMU', 'NOM_COMMUN': 'NOM_COMMUN', 'DISTRICT': 'DISTRICT', 'NOM_REGION': 'NOM_REGION', 'NOM_FARI': 'NOM_FARI', 'NBR_FKT': 'NBR_FKT', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', });
lyr_CIREACEF_7.set('fieldAliases', {'ID': 'ID', 'TOPONYME': 'TOPONYME', 'REGION': 'REGION', 'COMMUNE': 'COMMUNE', 'DISTRICT': 'DISTRICT', 'NBR_FKT': 'NBR_FKT', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'Bureau': 'Bureau', });
lyr_ForagesPointdEau_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'loc1_ref': 'loc1_ref', 'loc2_ref': 'loc2_ref', 'loc3_ref': 'loc3_ref', 'loc4_ref': 'loc4_ref', 'Lat_DMS': 'Lat_DMS', 'Long_DMS': 'Long_DMS', 'Lat_DD': 'Lat_DD', 'Long_DD': 'Long_DD', 'Alt_m': 'Alt_m', 'FacLitho1': 'FacLitho1', 'NomAquif1': 'NomAquif1', 'CodeAquif1': 'CodeAquif1', 'TypeAquif1': 'TypeAquif1', 'TypeNappe1': 'TypeNappe1', 'Toit1': 'Toit1', 'Mur1': 'Mur1', 'FacLitho2': 'FacLitho2', 'NomAquif2': 'NomAquif2', 'CodeAquif2': 'CodeAquif2', 'TypeAquif2': 'TypeAquif2', 'TypeNappe2': 'TypeNappe2', 'Toit2': 'Toit2', 'Mur2': 'Mur2', 'FacLitho3': 'FacLitho3', 'NomAquif3': 'NomAquif3', 'CodeAquif3': 'CodeAquif3', 'TypeAquif3': 'TypeAquif3', 'TypeNappe3': 'TypeNappe3', 'Toit3': 'Toit3', 'Mur3': 'Mur3', 'ProfAlt_m': 'ProfAlt_m', 'Ouvrage': 'Ouvrage', 'État': 'État', 'DiamTN1_mm': 'DiamTN1_mm', 'ProfTN1_m': 'ProfTN1_m', 'DiamTN2_mm': 'DiamTN2_mm', 'ProfTN2_m': 'ProfTN2_m', 'Diam1_mm': 'Diam1_mm', 'Prof1_m': 'Prof1_m', 'Diam2_mm': 'Diam2_mm', 'Prof2_m': 'Prof2_m', 'Diam3_mm': 'Diam3_mm', 'Prof3_m': 'Prof3_m', 'Diam4_mm': 'Diam4_mm', 'Prof4_m': 'Prof4_m', 'Diam5_mm': 'Diam5_mm', 'Prof5_m': 'Prof5_m', 'Diam6_mm': 'Diam6_mm', 'Prof6_m': 'Prof6_m', 'Diam7_mm': 'Diam7_mm', 'Prof7_mm': 'Prof7_mm', 'TopCrep1_m': 'TopCrep1_m', 'BasCrep1_m': 'BasCrep1_m', 'SlotCrep1': 'SlotCrep1', 'VidCrep1_%': 'VidCrep1_%', 'TopCrep2_m': 'TopCrep2_m', 'BasCrep2_m': 'BasCrep2_m', 'SlotCrep2': 'SlotCrep2', 'VidCrep2_%': 'VidCrep2_%', 'TopCrep3_m': 'TopCrep3_m', 'BasCrep3_m': 'BasCrep3_m', 'SlotCrep3': 'SlotCrep3', 'VidCrep3_%': 'VidCrep3_%', 'TopCrep4_m': 'TopCrep4_m', 'BasCrep4_m': 'BasCrep4_m', 'SlotCrep4': 'SlotCrep4', 'VidCrep4_%': 'VidCrep4_%', 'TopCrep5_m': 'TopCrep5_m', 'BasCrep5_m': 'BasCrep5_m', 'SlotCrep5': 'SlotCrep5', 'VidCrep5_%': 'VidCrep5_%', 'TopCrep6_m': 'TopCrep6_m', 'BasCrep6_m': 'BasCrep6_m', 'SlotCrep6': 'SlotCrep6', 'VidCrep6_%': 'VidCrep6_%', 'TopCrep7_m': 'TopCrep7_m', 'BasCrep7_m': 'BasCrep7_m', 'SlotCrep7': 'SlotCrep7', 'VidCrep7_%': 'VidCrep7_%', 'TopCrep8_m': 'TopCrep8_m', 'BasCrep8_m': 'BasCrep8_m', 'SlotCrep8': 'SlotCrep8', 'VidCrep8_%': 'VidCrep8_%', 'TopCrep9_m': 'TopCrep9_m', 'BasCrep9_m': 'BasCrep9_m', 'SlotCrep9': 'SlotCrep9', 'VidCrep9_%': 'VidCrep9_%', 'SWL_m': 'SWL_m', 'DateSWL': 'DateSWL', 'DurDev_h': 'DurDev_h', 'QDev_m3/h': 'QDev_m3/h', 'DurPal1_h': 'DurPal1_h', 'QPal1_m3/h': 'QPal1_m3/h', 'Rabat1_m': 'Rabat1_m', 'DurPal2_h': 'DurPal2_h', 'QPal2_m3/h': 'QPal2_m3/h', 'Rabat2_m': 'Rabat2_m', 'DurPal3_h': 'DurPal3_h', 'QPal3_m3/h': 'QPal3_m3/h', 'Rabat3_m': 'Rabat3_m', 'DurPal4_h': 'DurPal4_h', 'QPal4_m3/h': 'QPal4_m3/h', 'Rabat4_m': 'Rabat4_m', 'DurPal5_h': 'DurPal5_h', 'QPal5_m3/h': 'QPal5_m3/h', 'Rabat5_m': 'Rabat5_m', 'Qexpl_m3/h': 'Qexpl_m3/h', 'Tran_m2/s': 'Tran_m2/s', 'CoeffS_%': 'CoeffS_%', 'DateChimie': 'DateChimie', 'Temp_°C': 'Temp_°C', 'Turbi_NTU': 'Turbi_NTU', 'pHinstu': 'pHinstu', 'pHlab': 'pHlab', 'EC_µ/cm': 'EC_µ/cm', 'Miner_mg/l': 'Miner_mg/l', 'DureTH_°F': 'DureTH_°F', 'DureCa_°F': 'DureCa_°F', 'AlcaTA_°F': 'AlcaTA_°F', 'ClRes_mg/l': 'ClRes_mg/l', 'Ca++_mg/l': 'Ca++_mg/l', 'Mg++_mg/l': 'Mg++_mg/l', 'Na+_mg/l': 'Na+_mg/l', 'K+_mg/l': 'K+_mg/l', 'NH4+_mg/l': 'NH4+_mg/l', 'Fe++_mg/l': 'Fe++_mg/l', 'Mn++_mg/l': 'Mn++_mg/l', 'Al+++_mg/l': 'Al+++_mg/l', 'CO3-_mg/l': 'CO3-_mg/l', 'HCO3-_mg/l': 'HCO3-_mg/l', 'Cl-_mg/l': 'Cl-_mg/l', 'SO4--_mg/l': 'SO4--_mg/l', 'NO2-_mg/l': 'NO2-_mg/l', 'NO3-_mg/l': 'NO3-_mg/l', 'PO4--_mg/l': 'PO4--_mg/l', 'F-_mg/l': 'F-_mg/l', 'OH-_mg/l': 'OH-_mg/l', 'PDF': 'PDF', 'Région': 'Région', 'District': 'District', 'Commune': 'Commune', 'Fokontany': 'Fokontany', 'Alt_DEM_m': 'Alt_DEM_m', 'NivPiezo_m': 'NivPiezo_m', 'Zone_Hydro': 'Zone_Hydro', 'ZH_code': 'ZH_code', 'BV_ID_6': 'BV_ID_6', 'BV_ID_7': 'BV_ID_7', 'BV_ID_12': 'BV_ID_12', 'F_CODE': 'F_CODE', 'COMMUNE_2': 'COMMUNE_2', 'COM_PCODE': 'COM_PCODE', 'DISTRICT_2': 'DISTRICT_2', 'DIST_PCODE': 'DIST_PCODE', 'D_CODE': 'D_CODE', 'REGION': 'REGION', 'REG_PCODE': 'REG_PCODE', 'R_CODE': 'R_CODE', });
lyr_SixCommunesLakes_9.set('fieldAliases', {'Hylak_id': 'Hylak_id', 'Lake_name': 'Lake_name', 'Country': 'Country', 'Continent': 'Continent', 'Poly_src': 'Poly_src', 'Lake_type': 'Lake_type', 'Grand_id': 'Grand_id', 'Lake_area': 'Lake_area', 'Shore_len': 'Shore_len', 'Shore_dev': 'Shore_dev', 'Vol_total': 'Vol_total', 'Vol_res': 'Vol_res', 'Vol_src': 'Vol_src', 'Depth_avg': 'Depth_avg', 'Dis_avg': 'Dis_avg', 'Res_time': 'Res_time', 'Elevation': 'Elevation', 'Slope_100': 'Slope_100', 'Wshd_area': 'Wshd_area', 'Pour_long': 'Pour_long', 'Pour_lat': 'Pour_lat', });
lyr_waterways_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'Range', });
lyr_SAPM_H4H_AREAS_2.set('fieldImages', {'DATAADMIN': 'TextEdit', 'NOM': 'TextEdit', 'CAT__IUCN': 'TextEdit', 'CREATION': 'TextEdit', 'STATUT_AP': 'TextEdit', 'DESCRIPT_1': 'TextEdit', 'PERIMETER': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'AREA': 'TextEdit', 'HECTARES': 'TextEdit', 'DATAADMI_1': 'TextEdit', 'NOM_1': 'TextEdit', 'CAT__IUC_1': 'TextEdit', 'CREATION_1': 'TextEdit', 'STATUT_A_1': 'TextEdit', 'DESCRIPT_2': 'TextEdit', 'PERIMETE_1': 'TextEdit', 'SUPERFIC_1': 'TextEdit', 'AREA_1': 'TextEdit', 'NUM_ATLAS_': 'Range', 'SHORT_NAME': 'TextEdit', 'FULL_NAME': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', 'DISTRICT': 'TextEdit', 'SUP_DECR_H': 'TextEdit', 'STATUT_JUR': 'TextEdit', 'CATEG_IUCN': 'TextEdit', 'GEST_1': 'TextEdit', 'GEST_2': 'TextEdit', 'DAT_ST_DEF': 'DateTime', 'STAT_DEF': 'TextEdit', 'DATE_CREAT': 'DateTime', 'GOUVERNANC': 'TextEdit', 'TYPE_AP': 'TextEdit', });
lyr_LimiteCommunes6Sites_3.set('fieldImages', {'FOKONTANY': 'TextEdit', 'P_CODE': 'TextEdit', 'F_CODE': 'TextEdit', 'COMMUNE': 'TextEdit', 'COM_PCODE': 'TextEdit', 'C_CODE': 'TextEdit', 'DISTRICT': 'TextEdit', 'DIST_PCODE': 'TextEdit', 'D_CODE': 'TextEdit', 'REGION': 'TextEdit', 'REG_PCODE': 'TextEdit', 'R_CODE': 'TextEdit', 'fktCode': 'TextEdit', 'fkt_code2': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_routes_4.set('fieldImages', {'ENTITY': 'TextEdit', 'COLOR': 'Range', 'ID': 'TextEdit', 'TYPE': 'TextEdit', 'ETAT': 'TextEdit', 'NUMERO': 'TextEdit', 'POSITION': 'TextEdit', 'NOM_ROUTE': 'TextEdit', 'LONG': 'TextEdit', });
lyr_cart_track_5.set('fieldImages', {'FID_': 'Range', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'PISTE_CH_': 'TextEdit', 'PISTE_CH_I': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_LocaliteCommuneDistrictBetiokyAmpanihy_6.set('fieldImages', {'ID': 'Range', 'TOPONYME': 'TextEdit', 'CLA_ADM_AN': 'TextEdit', 'CLA_ADM_NO': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'CODE_COMMU': 'TextEdit', 'NOM_COMMUN': 'TextEdit', 'DISTRICT': 'TextEdit', 'NOM_REGION': 'TextEdit', 'NOM_FARI': 'TextEdit', 'NBR_FKT': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', });
lyr_CIREACEF_7.set('fieldImages', {'ID': 'Range', 'TOPONYME': 'TextEdit', 'REGION': 'TextEdit', 'COMMUNE': 'TextEdit', 'DISTRICT': 'TextEdit', 'NBR_FKT': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'Bureau': 'TextEdit', });
lyr_ForagesPointdEau_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'loc1_ref': 'TextEdit', 'loc2_ref': 'TextEdit', 'loc3_ref': 'TextEdit', 'loc4_ref': 'TextEdit', 'Lat_DMS': 'TextEdit', 'Long_DMS': 'TextEdit', 'Lat_DD': 'TextEdit', 'Long_DD': 'TextEdit', 'Alt_m': 'TextEdit', 'FacLitho1': 'TextEdit', 'NomAquif1': 'TextEdit', 'CodeAquif1': 'TextEdit', 'TypeAquif1': 'TextEdit', 'TypeNappe1': 'TextEdit', 'Toit1': 'TextEdit', 'Mur1': 'TextEdit', 'FacLitho2': 'TextEdit', 'NomAquif2': 'TextEdit', 'CodeAquif2': 'TextEdit', 'TypeAquif2': 'TextEdit', 'TypeNappe2': 'TextEdit', 'Toit2': 'TextEdit', 'Mur2': 'TextEdit', 'FacLitho3': 'TextEdit', 'NomAquif3': 'TextEdit', 'CodeAquif3': 'TextEdit', 'TypeAquif3': 'TextEdit', 'TypeNappe3': 'TextEdit', 'Toit3': 'TextEdit', 'Mur3': 'TextEdit', 'ProfAlt_m': 'TextEdit', 'Ouvrage': 'TextEdit', 'État': 'TextEdit', 'DiamTN1_mm': 'TextEdit', 'ProfTN1_m': 'TextEdit', 'DiamTN2_mm': 'TextEdit', 'ProfTN2_m': 'TextEdit', 'Diam1_mm': 'TextEdit', 'Prof1_m': 'TextEdit', 'Diam2_mm': 'TextEdit', 'Prof2_m': 'TextEdit', 'Diam3_mm': 'TextEdit', 'Prof3_m': 'TextEdit', 'Diam4_mm': 'TextEdit', 'Prof4_m': 'TextEdit', 'Diam5_mm': 'TextEdit', 'Prof5_m': 'TextEdit', 'Diam6_mm': 'TextEdit', 'Prof6_m': 'TextEdit', 'Diam7_mm': 'TextEdit', 'Prof7_mm': 'TextEdit', 'TopCrep1_m': 'TextEdit', 'BasCrep1_m': 'TextEdit', 'SlotCrep1': 'TextEdit', 'VidCrep1_%': 'TextEdit', 'TopCrep2_m': 'TextEdit', 'BasCrep2_m': 'TextEdit', 'SlotCrep2': 'TextEdit', 'VidCrep2_%': 'TextEdit', 'TopCrep3_m': 'TextEdit', 'BasCrep3_m': 'TextEdit', 'SlotCrep3': 'TextEdit', 'VidCrep3_%': 'TextEdit', 'TopCrep4_m': 'TextEdit', 'BasCrep4_m': 'TextEdit', 'SlotCrep4': 'TextEdit', 'VidCrep4_%': 'TextEdit', 'TopCrep5_m': 'TextEdit', 'BasCrep5_m': 'TextEdit', 'SlotCrep5': 'TextEdit', 'VidCrep5_%': 'TextEdit', 'TopCrep6_m': 'TextEdit', 'BasCrep6_m': 'TextEdit', 'SlotCrep6': 'TextEdit', 'VidCrep6_%': 'TextEdit', 'TopCrep7_m': 'TextEdit', 'BasCrep7_m': 'TextEdit', 'SlotCrep7': 'TextEdit', 'VidCrep7_%': 'TextEdit', 'TopCrep8_m': 'TextEdit', 'BasCrep8_m': 'TextEdit', 'SlotCrep8': 'TextEdit', 'VidCrep8_%': 'TextEdit', 'TopCrep9_m': 'TextEdit', 'BasCrep9_m': 'TextEdit', 'SlotCrep9': 'TextEdit', 'VidCrep9_%': 'TextEdit', 'SWL_m': 'TextEdit', 'DateSWL': 'DateTime', 'DurDev_h': 'TextEdit', 'QDev_m3/h': 'TextEdit', 'DurPal1_h': 'TextEdit', 'QPal1_m3/h': 'TextEdit', 'Rabat1_m': 'TextEdit', 'DurPal2_h': 'TextEdit', 'QPal2_m3/h': 'TextEdit', 'Rabat2_m': 'TextEdit', 'DurPal3_h': 'TextEdit', 'QPal3_m3/h': 'TextEdit', 'Rabat3_m': 'TextEdit', 'DurPal4_h': 'TextEdit', 'QPal4_m3/h': 'TextEdit', 'Rabat4_m': 'TextEdit', 'DurPal5_h': 'TextEdit', 'QPal5_m3/h': 'TextEdit', 'Rabat5_m': 'TextEdit', 'Qexpl_m3/h': 'TextEdit', 'Tran_m2/s': 'TextEdit', 'CoeffS_%': 'TextEdit', 'DateChimie': 'DateTime', 'Temp_°C': 'TextEdit', 'Turbi_NTU': 'TextEdit', 'pHinstu': 'TextEdit', 'pHlab': 'TextEdit', 'EC_µ/cm': 'TextEdit', 'Miner_mg/l': 'TextEdit', 'DureTH_°F': 'TextEdit', 'DureCa_°F': 'TextEdit', 'AlcaTA_°F': 'TextEdit', 'ClRes_mg/l': 'TextEdit', 'Ca++_mg/l': 'TextEdit', 'Mg++_mg/l': 'TextEdit', 'Na+_mg/l': 'TextEdit', 'K+_mg/l': 'TextEdit', 'NH4+_mg/l': 'TextEdit', 'Fe++_mg/l': 'TextEdit', 'Mn++_mg/l': 'TextEdit', 'Al+++_mg/l': 'TextEdit', 'CO3-_mg/l': 'TextEdit', 'HCO3-_mg/l': 'TextEdit', 'Cl-_mg/l': 'TextEdit', 'SO4--_mg/l': 'TextEdit', 'NO2-_mg/l': 'TextEdit', 'NO3-_mg/l': 'TextEdit', 'PO4--_mg/l': 'TextEdit', 'F-_mg/l': 'TextEdit', 'OH-_mg/l': 'TextEdit', 'PDF': 'TextEdit', 'Région': 'TextEdit', 'District': 'TextEdit', 'Commune': 'TextEdit', 'Fokontany': 'TextEdit', 'Alt_DEM_m': 'TextEdit', 'NivPiezo_m': 'TextEdit', 'Zone_Hydro': 'TextEdit', 'ZH_code': 'TextEdit', 'BV_ID_6': 'TextEdit', 'BV_ID_7': 'TextEdit', 'BV_ID_12': 'TextEdit', 'F_CODE': 'TextEdit', 'COMMUNE_2': 'TextEdit', 'COM_PCODE': 'TextEdit', 'DISTRICT_2': 'TextEdit', 'DIST_PCODE': 'TextEdit', 'D_CODE': 'TextEdit', 'REGION': 'TextEdit', 'REG_PCODE': 'TextEdit', 'R_CODE': 'TextEdit', });
lyr_SixCommunesLakes_9.set('fieldImages', {'Hylak_id': '', 'Lake_name': '', 'Country': '', 'Continent': '', 'Poly_src': '', 'Lake_type': '', 'Grand_id': '', 'Lake_area': '', 'Shore_len': '', 'Shore_dev': '', 'Vol_total': '', 'Vol_res': '', 'Vol_src': '', 'Depth_avg': '', 'Dis_avg': '', 'Res_time': '', 'Elevation': '', 'Slope_100': '', 'Wshd_area': '', 'Pour_long': '', 'Pour_lat': '', });
lyr_waterways_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'width': 'no label', });
lyr_SAPM_H4H_AREAS_2.set('fieldLabels', {'DATAADMIN': 'no label', 'NOM': 'no label', 'CAT__IUCN': 'no label', 'CREATION': 'no label', 'STATUT_AP': 'no label', 'DESCRIPT_1': 'no label', 'PERIMETER': 'no label', 'SUPERFICIE': 'no label', 'AREA': 'no label', 'HECTARES': 'no label', 'DATAADMI_1': 'no label', 'NOM_1': 'no label', 'CAT__IUC_1': 'no label', 'CREATION_1': 'no label', 'STATUT_A_1': 'no label', 'DESCRIPT_2': 'no label', 'PERIMETE_1': 'no label', 'SUPERFIC_1': 'no label', 'AREA_1': 'no label', 'NUM_ATLAS_': 'no label', 'SHORT_NAME': 'no label', 'FULL_NAME': 'no label', 'PROVINCE': 'no label', 'REGION': 'no label', 'DISTRICT': 'no label', 'SUP_DECR_H': 'no label', 'STATUT_JUR': 'no label', 'CATEG_IUCN': 'no label', 'GEST_1': 'no label', 'GEST_2': 'no label', 'DAT_ST_DEF': 'no label', 'STAT_DEF': 'no label', 'DATE_CREAT': 'no label', 'GOUVERNANC': 'no label', 'TYPE_AP': 'no label', });
lyr_LimiteCommunes6Sites_3.set('fieldLabels', {'FOKONTANY': 'no label', 'P_CODE': 'no label', 'F_CODE': 'no label', 'COMMUNE': 'no label', 'COM_PCODE': 'no label', 'C_CODE': 'no label', 'DISTRICT': 'no label', 'DIST_PCODE': 'no label', 'D_CODE': 'no label', 'REGION': 'no label', 'REG_PCODE': 'no label', 'R_CODE': 'no label', 'fktCode': 'no label', 'fkt_code2': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_routes_4.set('fieldLabels', {'ENTITY': 'no label', 'COLOR': 'no label', 'ID': 'no label', 'TYPE': 'no label', 'ETAT': 'no label', 'NUMERO': 'no label', 'POSITION': 'no label', 'NOM_ROUTE': 'no label', 'LONG': 'no label', });
lyr_cart_track_5.set('fieldLabels', {'FID_': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'PISTE_CH_': 'no label', 'PISTE_CH_I': 'no label', 'TYPE': 'no label', });
lyr_LocaliteCommuneDistrictBetiokyAmpanihy_6.set('fieldLabels', {'ID': 'no label', 'TOPONYME': 'no label', 'CLA_ADM_AN': 'no label', 'CLA_ADM_NO': 'no label', 'REGION': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'CODE_COMMU': 'no label', 'NOM_COMMUN': 'no label', 'DISTRICT': 'no label', 'NOM_REGION': 'no label', 'NOM_FARI': 'no label', 'NBR_FKT': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', });
lyr_CIREACEF_7.set('fieldLabels', {'ID': 'no label', 'TOPONYME': 'no label', 'REGION': 'no label', 'COMMUNE': 'no label', 'DISTRICT': 'no label', 'NBR_FKT': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'Bureau': 'no label', });
lyr_ForagesPointdEau_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'loc1_ref': 'no label', 'loc2_ref': 'no label', 'loc3_ref': 'no label', 'loc4_ref': 'no label', 'Lat_DMS': 'no label', 'Long_DMS': 'no label', 'Lat_DD': 'no label', 'Long_DD': 'no label', 'Alt_m': 'no label', 'FacLitho1': 'no label', 'NomAquif1': 'no label', 'CodeAquif1': 'no label', 'TypeAquif1': 'no label', 'TypeNappe1': 'no label', 'Toit1': 'no label', 'Mur1': 'no label', 'FacLitho2': 'no label', 'NomAquif2': 'no label', 'CodeAquif2': 'no label', 'TypeAquif2': 'no label', 'TypeNappe2': 'no label', 'Toit2': 'no label', 'Mur2': 'no label', 'FacLitho3': 'no label', 'NomAquif3': 'no label', 'CodeAquif3': 'no label', 'TypeAquif3': 'no label', 'TypeNappe3': 'no label', 'Toit3': 'no label', 'Mur3': 'no label', 'ProfAlt_m': 'no label', 'Ouvrage': 'no label', 'État': 'no label', 'DiamTN1_mm': 'no label', 'ProfTN1_m': 'no label', 'DiamTN2_mm': 'no label', 'ProfTN2_m': 'no label', 'Diam1_mm': 'no label', 'Prof1_m': 'no label', 'Diam2_mm': 'no label', 'Prof2_m': 'no label', 'Diam3_mm': 'no label', 'Prof3_m': 'no label', 'Diam4_mm': 'no label', 'Prof4_m': 'no label', 'Diam5_mm': 'no label', 'Prof5_m': 'no label', 'Diam6_mm': 'no label', 'Prof6_m': 'no label', 'Diam7_mm': 'no label', 'Prof7_mm': 'no label', 'TopCrep1_m': 'no label', 'BasCrep1_m': 'no label', 'SlotCrep1': 'no label', 'VidCrep1_%': 'no label', 'TopCrep2_m': 'no label', 'BasCrep2_m': 'no label', 'SlotCrep2': 'no label', 'VidCrep2_%': 'no label', 'TopCrep3_m': 'no label', 'BasCrep3_m': 'no label', 'SlotCrep3': 'no label', 'VidCrep3_%': 'no label', 'TopCrep4_m': 'no label', 'BasCrep4_m': 'no label', 'SlotCrep4': 'no label', 'VidCrep4_%': 'no label', 'TopCrep5_m': 'no label', 'BasCrep5_m': 'no label', 'SlotCrep5': 'no label', 'VidCrep5_%': 'no label', 'TopCrep6_m': 'no label', 'BasCrep6_m': 'no label', 'SlotCrep6': 'no label', 'VidCrep6_%': 'no label', 'TopCrep7_m': 'no label', 'BasCrep7_m': 'no label', 'SlotCrep7': 'no label', 'VidCrep7_%': 'no label', 'TopCrep8_m': 'no label', 'BasCrep8_m': 'no label', 'SlotCrep8': 'no label', 'VidCrep8_%': 'no label', 'TopCrep9_m': 'no label', 'BasCrep9_m': 'no label', 'SlotCrep9': 'no label', 'VidCrep9_%': 'no label', 'SWL_m': 'no label', 'DateSWL': 'no label', 'DurDev_h': 'no label', 'QDev_m3/h': 'no label', 'DurPal1_h': 'no label', 'QPal1_m3/h': 'no label', 'Rabat1_m': 'no label', 'DurPal2_h': 'no label', 'QPal2_m3/h': 'no label', 'Rabat2_m': 'no label', 'DurPal3_h': 'no label', 'QPal3_m3/h': 'no label', 'Rabat3_m': 'no label', 'DurPal4_h': 'no label', 'QPal4_m3/h': 'no label', 'Rabat4_m': 'no label', 'DurPal5_h': 'no label', 'QPal5_m3/h': 'no label', 'Rabat5_m': 'no label', 'Qexpl_m3/h': 'no label', 'Tran_m2/s': 'no label', 'CoeffS_%': 'no label', 'DateChimie': 'no label', 'Temp_°C': 'no label', 'Turbi_NTU': 'no label', 'pHinstu': 'no label', 'pHlab': 'no label', 'EC_µ/cm': 'no label', 'Miner_mg/l': 'no label', 'DureTH_°F': 'no label', 'DureCa_°F': 'no label', 'AlcaTA_°F': 'no label', 'ClRes_mg/l': 'no label', 'Ca++_mg/l': 'no label', 'Mg++_mg/l': 'no label', 'Na+_mg/l': 'no label', 'K+_mg/l': 'no label', 'NH4+_mg/l': 'no label', 'Fe++_mg/l': 'no label', 'Mn++_mg/l': 'no label', 'Al+++_mg/l': 'no label', 'CO3-_mg/l': 'no label', 'HCO3-_mg/l': 'no label', 'Cl-_mg/l': 'no label', 'SO4--_mg/l': 'no label', 'NO2-_mg/l': 'no label', 'NO3-_mg/l': 'no label', 'PO4--_mg/l': 'no label', 'F-_mg/l': 'no label', 'OH-_mg/l': 'no label', 'PDF': 'no label', 'Région': 'no label', 'District': 'no label', 'Commune': 'no label', 'Fokontany': 'no label', 'Alt_DEM_m': 'no label', 'NivPiezo_m': 'no label', 'Zone_Hydro': 'no label', 'ZH_code': 'no label', 'BV_ID_6': 'no label', 'BV_ID_7': 'no label', 'BV_ID_12': 'no label', 'F_CODE': 'no label', 'COMMUNE_2': 'no label', 'COM_PCODE': 'no label', 'DISTRICT_2': 'no label', 'DIST_PCODE': 'no label', 'D_CODE': 'no label', 'REGION': 'no label', 'REG_PCODE': 'no label', 'R_CODE': 'no label', });
lyr_SixCommunesLakes_9.set('fieldLabels', {'Hylak_id': 'no label', 'Lake_name': 'no label', 'Country': 'no label', 'Continent': 'no label', 'Poly_src': 'no label', 'Lake_type': 'no label', 'Grand_id': 'no label', 'Lake_area': 'no label', 'Shore_len': 'no label', 'Shore_dev': 'no label', 'Vol_total': 'no label', 'Vol_res': 'no label', 'Vol_src': 'no label', 'Depth_avg': 'no label', 'Dis_avg': 'no label', 'Res_time': 'no label', 'Elevation': 'no label', 'Slope_100': 'no label', 'Wshd_area': 'no label', 'Pour_long': 'no label', 'Pour_lat': 'no label', });
lyr_SixCommunesLakes_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});