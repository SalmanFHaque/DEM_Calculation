var data = img.clip(COX);
print (data)
var dem = data.select('elevation')
print (dem,'elevation');
Map.addLayer(dem);
Export.image.toDrive({
  image:dem,
  description:'SRTM DEM',
  scale:30,
  region:COX,
})