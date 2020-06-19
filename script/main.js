"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//the class Location is already defined in "lib": "dom", that is why this documents Location = MyLocation
var locations = [];
var MyLocation = /** @class */ (function () {
    function MyLocation(name, streetNameAndNumber, zipCode, city, image, timeCreated) {
        this.locationName = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = streetNameAndNumber;
        this.teaserImage = image;
        this.dateTimeCreated = timeCreated;
    }
    MyLocation.prototype.display = function () {
        var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
        return "\n            <div class=\"col-md-6 col-lg-3 mb-4\">\n                <div class=\"card\">\n                    <div class=\"d-none d-md-block\">\n                        <img src=\"" + this.teaserImage + "\" class=\"card-img-top\" alt=\"" + this.locationName + " image\">\n                    </div>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.locationName + "</h5>\n                        <p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                        <p class=\"card-text text-right\"><small class=\"text-muted\">Created: " + this.dateTimeCreated.toLocaleString("en-DE", options) + "</small></p>\n                    </div>\n                </div>\n            </div>\n            ";
    };
    return MyLocation;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, streetNameAndNumber, zipCode, city, image, timeCreated, telephoneNumber, typeOfCousine, urlAdress) {
        var _this = _super.call(this, name, streetNameAndNumber, zipCode, city, image, timeCreated) || this;
        _this.telNr = telephoneNumber;
        _this.type = typeOfCousine;
        _this.url = urlAdress;
        return _this;
    }
    Restaurant.prototype.display = function () {
        var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
        return "\n        <div class=\"col-md-6 col-lg-3 mb-4\">\n            <div class=\"card\">\n                <div class=\"d-none d-md-block\">\n                    <img src=\"" + this.teaserImage + "\" class=\"card-img-top\" alt=\"" + this.locationName + " image\">\n                </div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.locationName + "</h5>\n                    <p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                    <ul>\n                        <li>tel: " + this.telNr + "</li>\n                        <li>" + this.type + "</li>\n                        <li>" + this.url + "</li>\n                    </ul>\n                    <p class=\"card-text text-right\"><small class=\"text-muted\">Created: " + this.dateTimeCreated.toLocaleString("en-DE", options) + "</small></p>\n                </div>\n            </div>\n        </div>\n        ";
    };
    return Restaurant;
}(MyLocation));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, urlAdress, eventDate, eventTime, streetNameAndNumber, zipCode, city, eventPrice, image, timeCreated) {
        var _this = _super.call(this, name, streetNameAndNumber, zipCode, city, image, timeCreated) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.eventPrice = eventPrice;
        _this.url = urlAdress;
        return _this;
    }
    Events.prototype.display = function () {
        var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
        var optionsTime = { hour: "2-digit", minute: "2-digit" };
        return "\n        <div class=\"col-md-6 col-lg-3 mb-4\">\n            <div class=\"card\">\n                <div class=\"d-none d-md-block\">\n                    <img src=\"" + this.teaserImage + "\" class=\"card-img-top\" alt=\"" + this.locationName + " image\">\n                </div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.locationName + "</h5>\n                    <p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                    <ul>\n                        <li>" + this.url + "</li>\n                        <li>date: " + this.eventDate.toLocaleString("en-DE", options) + "</li>\n                        <li>time: " + this.eventTime.toLocaleString("en-DE", optionsTime) + "</li>\n                        <li>" + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.eventPrice) + "</li>\n                    </ul>\n                    <p class=\"card-text text-right\"><small class=\"text-muted\">Created: " + this.dateTimeCreated.toLocaleString("en-DE", options) + "</small></p>\n                </div>\n            </div>\n        </div>\n        ";
    };
    return Events;
}(MyLocation));
locations.push(new MyLocation("St. Charles Church", "Karlsplartz 1", 1010, "Vienna", "media/loc-karlsplatz.jpg", new Date(2019, 10, 24)));
locations.push(new MyLocation("Schönbrunn Park", "Maxingstraße 13b", 1130, "Wien", "media/loc-schoenbrunn.jpg", new Date(2019, 12, 5)));
locations.push(new Restaurant("ON Restaurant", "Wehrgasse 8", 1050, "Vienna", "media/locrest-on.jpg", new Date(2020, 1, 15), "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/"));
locations.push(new Restaurant("BioFrische", "Stutterheimstraße 6", 1150, "Wien", "media/locrest-biofrische.jpg", new Date(2020, 3, 24), "+43(1) 9529215", "Indian", "biofrische.wien"));
locations.push(new Events("Cats - the musical", "http://catsmusical.at", new Date(2020, 12, 15), new Date(2020, 12, 15, 20, 0), "Ronacher- Seilerstätte 9", 1010, "Wien", 120.50, "media/le-cats.jpg", new Date(2020, 6, 10)));
locations.push(new Events("Guns N' Roses", "www.gunsandroses.com", new Date(2020, 6, 9), new Date(2020, 6, 9, 19, 30), "Ernst-Happel Stadion, Meierstraße 7", 1020, "Wien", 95.50, "media/le-gunsnroses.jpg", new Date(2020, 3, 2)));
if (sortOrder == "descending abc") {
    locations.sort(function (first, second) { return second.locationName.localeCompare(first.locationName); });
}
else if (sortOrder == "ascending abc") {
    locations.sort(function (first, second) { return first.locationName.localeCompare(second.locationName); });
}
else if (sortOrder == "ascending") {
    locations.sort(function (first, second) { return second.dateTimeCreated.getTime() - first.dateTimeCreated.getTime(); });
}
else if (sortOrder == "descending") {
    locations.sort(function (first, second) { return first.dateTimeCreated.getTime() - second.dateTimeCreated.getTime(); });
}
var cardsLocation = document.getElementById("content");
locations.forEach(function (location) {
    if (cardsLocation != null) {
        cardsLocation.innerHTML += location.display();
    }
});
//# sourceMappingURL=main.js.map