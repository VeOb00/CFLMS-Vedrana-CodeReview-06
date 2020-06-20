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
        return "\n            <div class=\"col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch\">\n                <div class=\"card shadow-sm\">\n                    <div class=\"d-none d-md-block\">\n                        <img src=\"" + this.teaserImage + "\" class=\"card-img-top\" alt=\"" + this.locationName + " image\">\n                    </div>\n                    <div class=\"card-body d-flex flex-column justify-content-between\">\n                        <div>\n                            <h5 class=\"card-title\">" + this.locationName + "</h5>\n                            <p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                            <hr>\n                        </div>\n                        <div>\n                            <p class=\"card-text text-right bottom-text\">\n                                <small class=\"text-muted\">Created: \n                                    " + this.dateTimeCreated.toLocaleString("en-DE", options) + "\n                                </small>\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ";
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
        return "\n        <div class=\"col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch\">\n            <div class=\"card shadow-sm\">\n                <div class=\"d-none d-md-block\">\n                    <img src=\"" + this.teaserImage + "\" class=\"card-img-top\" alt=\"" + this.locationName + " image\">\n                </div>\n                <div class=\"card-body d-flex flex-column justify-content-between\">\n                    <div>\n                        <h5 class=\"card-title\">" + this.locationName + "</h5>\n                        <p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                        <hr>\n                        <ul class=\"list-unstyled\">\n                            <li>tel: " + this.telNr + "</li>\n                            <li>cousine: " + this.type + "</li>\n                            <li><a href=\"" + this.url + "\" class=\"text-secondary\" target=\"_blank\">" + this.url + "</a></li>\n                        </ul>\n                    </div>\n                    <div>\n                        <p class=\"card-text text-right bottom-text\">\n                            <small class=\"text-muted\">\n                                Created: " + this.dateTimeCreated.toLocaleString("en-DE", options) + "\n                            </small>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
    };
    return Restaurant;
}(MyLocation));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, urlAdress, eventDate, streetNameAndNumber, zipCode, city, eventPrice, image, timeCreated) {
        var _this = _super.call(this, name, streetNameAndNumber, zipCode, city, image, timeCreated) || this;
        _this.eventDate = eventDate;
        _this.eventPrice = eventPrice;
        _this.url = urlAdress;
        return _this;
    }
    Events.prototype.display = function () {
        var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
        var optionsTime = { hour: "2-digit", minute: "2-digit" };
        return "\n        <div class=\"col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch\">\n            <div class=\"card shadow-sm\">\n                <div class=\"d-none d-md-block\">\n                    <img src=\"" + this.teaserImage + "\" class=\"card-img-top\" alt=\"" + this.locationName + " image\">\n                </div>\n                <div class=\"card-body d-flex flex-column justify-content-between\">\n                    <div>\n                        <h5 class=\"card-title\">" + this.locationName + "</h5>\n                        <p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                        <hr>\n                        <ul class=\"list-unstyled\">\n                            <li><a href=\"" + this.url + "\" class=\"text-secondary\" target=\"_blank\">" + this.url + "</a></li>\n                            <li>date: " + this.eventDate.toLocaleString("en-DE", options) + "</li>\n                            <li>time: " + this.eventDate.toLocaleString("en-DE", optionsTime) + "</li>\n                            <li>price: " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.eventPrice) + "</li>\n                        </ul>\n                    </div>\n                    <div>\n                        <p class=\"card-text text-right bottom-text\">\n                            <small class=\"text-muted\">\n                                Created: " + this.dateTimeCreated.toLocaleString("en-DE", options) + "\n                            </small>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
    };
    return Events;
}(MyLocation));
locations.push(new MyLocation("St. Charles Church", "Karlsplartz 1", 1010, "Vienna", "media/loc-karlsplatz.jpg", new Date(2019, 10, 24)));
locations.push(new MyLocation("Schönbrunn Park", "Maxingstraße 13b", 1130, "Vienna", "media/loc-schoenbrunn.jpg", new Date(2019, 12, 5)));
locations.push(new Restaurant("ON Restaurant", "Wehrgasse 8", 1050, "Vienna", "media/locrest-on.jpg", new Date(2020, 1, 15), "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/"));
locations.push(new Restaurant("BioFrische", "Stutterheimstraße 6", 1150, "Vienna", "media/locrest-biofrische.jpg", new Date(2020, 3, 24), "+43(1) 9529215", "Indian", "https://biofrische.Vienna/"));
locations.push(new Events("Cats - the musical", "http://catsmusical.at", new Date(2020, 12, 15, 20, 0), "Ronacher- Seilerstätte 9", 1010, "Vienna", 120.50, "media/loce-cats.jpg", new Date(2020, 6, 10)));
locations.push(new Events("Guns N' Roses", "https://www.gunsnroses.com/", new Date(2020, 6, 9, 19, 30), "Ernst-Happel Stadion, Meierstraße 7", 1020, "Vienna", 95.50, "media/loce-gunsnroses.jpg", new Date(2020, 3, 2)));
locations.push(new MyLocation("Kahlenberg", "Am Kahlenberg 2-3", 1190, "Vienna", "media/loc-kb.jpg", new Date(2018, 8, 12)));
locations.push(new MyLocation("Haus des Meeres", "Fritz-Grünbaum-Platz 1", 1060, "Vienna", "media/loc-hdm.jpg", new Date(2019, 3, 4)));
locations.push(new MyLocation("Donauinsel", "Donauinsel", 1220, "Vienna", "media/loc-donauinsel.jpg", new Date(2017, 7, 24)));
locations.push(new MyLocation("Belvedere Palace", "Prinz Eugen-Straße 58", 1030, "Vienna", "media/loc-belvedere.jpg", new Date(2016, 4, 11)));
locations.push(new MyLocation("Hunderwasser House", "Kegelgasse 36-38", 1030, "Vienna", "media/loc-hundertw.jpg", new Date(2015, 9, 1)));
locations.push(new Events("Tool", "https://toolband.com/", new Date(2019, 6, 5, 19, 30), "Roland-Rainer-Platz 1", 1150, "Vienna", 120, "media/loce-tool.jpg", new Date(2019, 6, 1)));
locations.push(new Events("Muse", "https://www.muse.mu/", new Date(2016, 5, 9, 19, 30), "Roland-Rainer-Platz 1", 1150, "Vienna", 110, "media/loce-muse.jpg", new Date(2016, 4, 29)));
locations.push(new Restaurant("Noble Savage", "Salzgries 15", 1010, "Vienna", "media/locrest-noble.jpg", new Date(2019.11, 10), "0664/99 49 83 89", "International", "https://www.noblesavage.at/"));
locations.push(new Restaurant("Seidengasse 31", "Seidengasse 31", 1070, "Vienna", "media/locrest-seidengasse.jpg", new Date(2020, 1, 5), "0677/637 57 940", "Mediterranean", "")); //currently no webpage avaliable
locations.push(new Restaurant("Sperling im Augarten", "Obere Augartenstraße 1", 1020, "Vienna", "media/locrest-sperling.jpg", new Date(2019, 12, 11), "01/997 72 66", "Austrian, international", "https://www.sperling.Vienna/"));
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
    cardsLocation.innerHTML += location.display();
});
//# sourceMappingURL=main.js.map