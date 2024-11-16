function findTopLeft(pointlist)  {
    var maxLat = null;
    var minLon = null;

    pointlist.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                minLon = point.lon
            }
            else{
                if (point.lat > maxLat){ //max lat
                    maxLat = point.lat
                }
                if (point.lon < minLon){ //min lon
                    minLon = point.lon
                }
            }
        }
    )
    return{"pointId": 1,"lat": maxLat, "lon": minLon}
}

function findTopRight(pointlist)  { //maxlat and max lon
    var maxLat = null;
    var maxLon = null;

    pointlist.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                maxLon = point.lon
            }
            else{
                if (point.lat > maxLat){ //maxlat
                    maxLat = point.lat
                }
                if (point.lon > maxLon){ //maxlong
                    maxLon = point.lon
                }
            }
        }
    )
    return{"pointId": 2,"lat": maxLat, "lon": maxLon}
}

function findBottomLeft(pointlist)  {
    var minLat = null;
    var minLon = null;

    pointlist.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                minLon = point.lon
            }
            else{
                if (point.lat < minLat){
                    minLat = point.lat
                }
                if (point.lon < minLon){
                    minLon = point.lon
                }
            }
        }
    )
    return{"pointId": 3,"lat":minLat, "lon": minLon}
}

function findBottomRight(pointlist)  {
    var minLat = null;
    var maxLon = null;

    pointlist.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                maxLon = point.lon
            }
            else{
                if (point.lat < minLat){
                    minLat = point.lat
                }
                if (point.lon > maxLon){
                    maxLon = point.lon
                }
            }
        }
    )
    return{"pointId": 4,"lat": minLat, "lon": maxLon}
}

function Run(){
    // get the corners by creating functions which select an item from the data which has the correct values
    var topLeftPoint = findTopLeft(theJSON);
    var topRightPoint = findTopRight(theJSON);
    var bottomLeftPoint = findBottomLeft(theJSON);
    var bottomRightPoint = findBottomRight(theJSON);

    // make an output object containing the corner points
    var boundingBox = 
{
    topLeft: topLeftPoint,
    topRight: topRightPoint,
    bottomLeft: bottomLeftPoint,
    bottomRight: bottomRightPoint
}

   

    console.log("Bounding box computed for carlos.g54@tamu.edu");
    console.log(boundingBox);
}