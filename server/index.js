const express = require('express');
const app = express();
app.listen(4000, () => {
  console.log('Server running on port 4000');
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/gallery.json', (req, res, next) => {
  res.json({
    id: 1,
    title: 'Honda Civic (second generation)',
    images: [{
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/1980_Honda_Civic_3-door_hatchback_%282010-07-22%29.jpg/1024px-1980_Honda_Civic_3-door_hatchback_%282010-07-22%29.jpg',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/1980_Honda_Civic_3-door_hatchback_%282010-07-22%29.jpg/320px-1980_Honda_Civic_3-door_hatchback_%282010-07-22%29.jpg',
    }, {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/80-81_Honda_Civic_DX_hatch_rear.jpg/1024px-80-81_Honda_Civic_DX_hatch_rear.jpg',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/80-81_Honda_Civic_DX_hatch_rear.jpg/320px-80-81_Honda_Civic_DX_hatch_rear.jpg',
    }, {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Honda_CIVIC_COUNTRY_in_the_Honda_Collection_Hall.JPG/1024px-Honda_CIVIC_COUNTRY_in_the_Honda_Collection_Hall.JPG',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Honda_CIVIC_COUNTRY_in_the_Honda_Collection_Hall.JPG/320px-Honda_CIVIC_COUNTRY_in_the_Honda_Collection_Hall.JPG',
    }, {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Honda_Civic_S_%281487648972%29.jpg/1024px-Honda_Civic_S_%281487648972%29.jpg',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Honda_Civic_S_%281487648972%29.jpg/320px-Honda_Civic_S_%281487648972%29.jpg',
    }, {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/1983_Honda_Civic_Saloon_%28New_Zealand%29.JPG/1024px-1983_Honda_Civic_Saloon_%28New_Zealand%29.JPG',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/1983_Honda_Civic_Saloon_%28New_Zealand%29.JPG/320px-1983_Honda_Civic_Saloon_%28New_Zealand%29.JPG',
    }, {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/3/39/1982_Honda_Civic_3-door_hatchback_%282015-07-10%29_01.jpg',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/1982_Honda_Civic_3-door_hatchback_%282015-07-10%29_01.jpg/320px-1982_Honda_Civic_3-door_hatchback_%282015-07-10%29_01.jpg',
    }, {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Honda_Civic_station_wagon_%287130738093%29.jpg/1024px-Honda_Civic_station_wagon_%287130738093%29.jpg',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Honda_Civic_station_wagon_%287130738093%29.jpg/320px-Honda_Civic_station_wagon_%287130738093%29.jpg'
    }
    ],
    price: {
      gross: '566 €',
      net: '476 €'
    }
  });
  next();
});