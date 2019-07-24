var rectangle = () =>{
    let length,breadth;

    var create = (l,b) =>{
        length=l;
        breadth=b;
    }
    var area = () =>{
        return length*breadth;
    }
    var perimeter = () =>{
        return 2*(length+breadth);
    }

    var publicAPI = {
        create:create,
        area:area,
        perimeter:perimeter
    }
    return publicAPI;
}

module.exports = {
    rectangle
}