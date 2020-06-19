//the class Location is already defined in "lib": "dom", that is why this documents Location = MyLocation
let locations: Array<MyLocation> = [];

declare var sortOrder: string;



class MyLocation {
    locationName: string;
    city: string;
    zipCode: number;
    address: string;
    teaserImage: string;
    dateTimeCreated: Date;

    constructor(name: string, streetNameAndNumber: string, zipCode: number, city: string, image: string, timeCreated: Date) {
        this.locationName = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = streetNameAndNumber;
        this.teaserImage = image;
        this.dateTimeCreated = timeCreated;
    }

    display() {
        var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
        return `
            <div class="col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch">
                <div class="card shadow-sm">
                    <div class="d-none d-md-block">
                        <img src="${this.teaserImage}" class="card-img-top" alt="${this.locationName} image">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title">${this.locationName}</h5>
                            <p class="card-text">${this.address}, ${this.zipCode} ${this.city}</p>
                            <hr>
                        </div>
                        <div>
                            <p class="card-text text-right bottom-text"><small class="text-muted">Created: ${this.dateTimeCreated.toLocaleString("en-DE", options)}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
    }
}

class Restaurant extends MyLocation {
    telNr: string;
    type: string;
    url: string;

    constructor(name: string, streetNameAndNumber: string, zipCode: number, city: string, image: string, timeCreated: Date, telephoneNumber: string, typeOfCousine: string, urlAdress: string) {
        super(name, streetNameAndNumber, zipCode, city, image, timeCreated);
        this.telNr = telephoneNumber;
        this.type = typeOfCousine;
        this.url = urlAdress;
    }

    display() {
        var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
        return `
        <div class="col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch">
            <div class="card shadow-sm">
                <div class="d-none d-md-block">
                    <img src="${this.teaserImage}" class="card-img-top" alt="${this.locationName} image">
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${this.locationName}</h5>
                        <p class="card-text">${this.address}, ${this.zipCode} ${this.city}</p>
                        <hr>
                        <ul class="list-unstyled">
                            <li>tel: ${this.telNr}</li>
                            <li>cousine: ${this.type}</li>
                            <li><a href="${this.url}" target="_blank">${this.url}</a></li>
                        </ul>
                    </div>
                    <div>
                    <p class="card-text text-right bottom-text"><small class="text-muted">Created: ${this.dateTimeCreated.toLocaleString("en-DE", options)}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

class Events extends MyLocation {
    eventDate: Date;
    eventTime: Date;
    eventPrice: number;
    url: string;

    constructor(name: string, urlAdress: string, eventDate: Date, eventTime: Date, streetNameAndNumber: string, zipCode: number, city: string, eventPrice: number, image: string, timeCreated: Date) {
        super(name, streetNameAndNumber, zipCode, city, image, timeCreated);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.eventPrice = eventPrice;
        this.url = urlAdress;
    }

    display() {
        var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
        var optionsTime = {hour: "2-digit", minute: "2-digit"};
        return `
        <div class="col-md-6 col-lg-3 mb-4 d-md-flex align-items-md-stretch">
            <div class="card shadow-sm">
                <div class="d-none d-md-block">
                    <img src="${this.teaserImage}" class="card-img-top" alt="${this.locationName} image">
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${this.locationName}</h5>
                        <p class="card-text">${this.address}, ${this.zipCode} ${this.city}</p>
                        <hr>
                        <ul class="list-unstyled">
                            <li>${this.url}</li>
                            <li>date: ${this.eventDate.toLocaleString("en-DE", options)}</li>
                            <li>time: ${this.eventTime.toLocaleString("en-DE", optionsTime)}</li>
                            <li>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.eventPrice)}</li>
                        </ul>
                    </div>
                    <div>
                        <p class="card-text text-right bottom-text"><small class="text-muted">Created: ${this.dateTimeCreated.toLocaleString("en-DE", options)}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

locations.push(new MyLocation("St. Charles Church", "Karlsplartz 1", 1010, "Vienna", "media/loc-karlsplatz.jpg", new Date(2019, 10, 24)));
locations.push(new MyLocation("Schönbrunn Park", "Maxingstraße 13b", 1130, "Wien", "media/loc-schoenbrunn.jpg", new Date(2019, 12, 5)));
locations.push(new Restaurant("ON Restaurant", "Wehrgasse 8", 1050, "Vienna", "media/locrest-on.jpg", new Date(2020, 1, 15), "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/"));
locations.push(new Restaurant("BioFrische", "Stutterheimstraße 6", 1150, "Wien", "media/locrest-biofrische.jpg", new Date(2020, 3, 24), "+43(1) 9529215", "Indian", "https://biofrische.wien/"));
locations.push(new Events("Cats - the musical", "http://catsmusical.at", new Date(2020, 12, 15), new Date(2020,12,15,20,0), "Ronacher- Seilerstätte 9", 1010, "Wien", 120.50,"media/le-cats.jpg", new Date (2020,6,10)));
locations.push(new Events("Guns N' Roses", "www.gunsandroses.com", new Date(2020,6,9), new Date(2020,6,9,19,30), "Ernst-Happel Stadion, Meierstraße 7", 1020, "Wien", 95.50, "media/le-gunsnroses.jpg", new Date (2020,3,2)));


if (sortOrder == "descending abc") {
    locations.sort((first, second) => second.locationName.localeCompare(first.locationName));
} else if (sortOrder == "ascending abc") {
    locations.sort((first, second) => first.locationName.localeCompare(second.locationName));
} else if  (sortOrder == "ascending") {
    locations.sort((first, second) => second.dateTimeCreated.getTime() - first.dateTimeCreated.getTime());
} else if (sortOrder == "descending") {
    locations.sort((first, second) => first.dateTimeCreated.getTime() - second.dateTimeCreated.getTime());
}


let cardsLocation = document.getElementById("content");
locations.forEach((location) => {
    if (cardsLocation != null) {
        cardsLocation.innerHTML += location.display()
    } 
});








