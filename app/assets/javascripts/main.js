/ Create a new map instance
var map = L.map('map').setView([37.8, -96], 4)

// Add the tile layer to the map (in this case, we're using OpenStreetMap)
L.tilelayer('https://{s}.titleopenstreetmap.org/{z}/{x}/{y}.png', 
{attribution: 'Map data &copy; <a href="https://www.openstreetmaps.org/">OpenStreetMap</a> contributors'}).addTo(map);

// Define the boundaries of each state Numbers are based on latitude and longitude of each state North, East, South, West
var stateBoundaries = {
  'Alabama': [[35, -88.5], [31, -84]],
  'Alaska': [[71.5, -180], [50, -130]],
  'Arizona': [[37, -115], [31, -109]],
  'Arkansas': [[36.5, -95.5], [33, -89.5]],
  'California': [[42, -124.5], [32.5, -114.5]],
  'Colorado': [[41, -109.5], [36.5, -102]],
  'Connecticut': [[42, -73.5], [40.5, -71]],
  'Delaware': [[40.5, -76.5], [38.5, -74.5]],
  'Florida': [[31, -87.5], [24.5, -80]],
  'Georgia': [[35, -85.5], [30.5, -80.5]],
  'Hawaii': [[23.5, -160.5], [18, -154]],
  'Idaho': [[49, -117], [41.5, -111]],
  'Illinois': [[42.5, -91.5], [36.5, -87]],
  'Indiana': [[41.5, -88.5], [37, -84.5]],
  'Iowa': [[43.5, -96.5], [40.5, -90.5]],
  'Kansas': [[40, -102.5], [36.5, -94.5]],
  'Kentucky': [[39, -89.5], [36.5, -81]],
  'Louisiana': [[33, -94.5], [28, -88.5]],
  'Maine': [[47, -71], [43.5, -66]],
  'Maryland': [[39.5, -79], [37, -75.5]],
  'Massachusetts': [[43, -73.5], [41, -69]],
  'Michigan': [[48.5, -90.5], [41.5, -82.5]],
  'Minnesota': [[49, -97], [43.5, -89.5]],
  'Mississippi': [[35, -91], [30.5, -88]],
  'Missouri': [[40.5, -95.5], [35.5, -89]],
  'Montana': [[49, -116.5], [44.5, -104]],
  'Nebraska': [[43, -104], [39, -95]],
  'Nevada': [[42, -120], [35, -114]],
  'New Hampshire': [[45, -72.5], [42.5, -70.5]],
  'New Jersey': [[41.5, -75.5], [38.5, -73]],
  'New Mexico': [[37, -109.5], [31.5, -103.5]],
  'New York': [[45.5, -79.5], [40.5, -71.5]],
  'North Carolina': [[36.5, -84], [33, -75.5]],
  'North Dakota': [[49, -104], [45, -96]],
  'Ohio': [[42, -84.5], [38.5, -80]],
  'Oklahoma': [[37, -103], [33, -94]],
  'Oregon': [[46, -124.5], [41, -116.5]],
  'Pennsylvania': [[42, -80.5], [39, -74.5]],
  'Rhode Island': [[42, -72.5], [41, -71]],
  'South Carolina': [[35, -83.5], [32, -78.5]],
  'South Dakota': [[45.5, -104.5], [42.5, -96.5]],
  'Tennessee': [[36.5, -90.5], [34, -81]],
  'Texas': [[36.5, -106.5], [25.5, -93.5]],
  'Utah': [[42, -114.5], [36, -109.5]],
  'Vermont': [[45, -73.5], [42.5, -71]],
  'Virginia': [[39.5, -83.5], [36.5, -75]],
  'Washington': [[49, -124.5], [45.5, -116]],
  'West Virginia': [[40.5, -83.5], [37, -77.5]],
  'Wisconsin': [[47, -92.5], [42.5, -86.5]],
  'Wyoming': [[45, -111], [40, -104]]
};

// loop through the state boundaries and create a new layer for each state
Object.keys(stateBoundaries).forEach(function(state) {
  var bounds = stateBoundaries[state];
  var layer = L.rectangle(bounds, {className: 'state'});
  layer.on('click', function() { 
    // TODO: Handle the click event for this state
    window.location.href = "/states/create/" + state; // This should take me to my State#create Action where I can pass off the abbreviation and then store that in the database along with the uploaded picture
  });
  layer.addTo(map)
});