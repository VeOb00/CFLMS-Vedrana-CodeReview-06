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
locations.push(new Events("Cats - the musical", "http://catsmusical.at", new Date(2020, 12, 15), new Date(2020,12,15,20,0), "Ronacher- Seilerstätte 9", 1010, "Wien", 120.50,"media/loce-cats.jpg", new Date (2020,6,10)));
locations.push(new Events("Guns N' Roses", "www.gunsandroses.com", new Date(2020,6,9), new Date(2020,6,9,19,30), "Ernst-Happel Stadion, Meierstraße 7", 1020, "Wien", 95.50, "media/loce-gunsnroses.jpg", new Date (2020,3,2)));
locations.push(new MyLocation("Kahlenberg", "Am Kahlenberg 2-3", 1190, "Wien", "media/loc-kb.jpg", new Date(2018,8,12)));
locations.push(new MyLocation("Haus des Meeres", "Fritz-Grünbaum-Platz 1", 1060, "Wien", "media/loc-hdm.jpg", new Date(2019,3,4)));
locations.push(new MyLocation("Donauinsel", "Donauinsel", 1220, "Wien", "media/loc-donauinsel.jpg", new Date(2017,7,24)));
locations.push(new MyLocation("Belvedere Palace", "Prinz Eugen-Straße 58", 1030, "Wien", "media/loc-belvedere.jpg", new Date(2016,4,11)));
locations.push(new MyLocation("Hunderwasser House", "Kegelgasse 36-38", 1030, "Wien", "media/loc-hundertw.jpg", new Date(2015,9,1)));
locations.push(new Events("Tool", "https://toolband.com/", new Date(2019,6,5), new Date(2019,6,5,19,30), "Roland-Rainer-Platz 1", 1150, "Wien", 120, "media/loce-tool.jpg", new Date(2019,6,1)));
locations.push(new Events ("Muse", "https://www.muse.mu/", new Date(2016,5,9), new Date(2016,5,9,19,30), "Roland-Rainer-Platz 1", 1150, "Wien", 110, "media/loce-muse.jpg", new Date(2016,4,29)));
locations.push(new Restaurant("Noble Savage", "Salzgries 15", 1010, "Wien", "media/locrest-noble.jpg", new Date(2019.11,10), "0664/99 49 83 89", "International", "https://www.noblesavage.at/"));
locations.push(new Restaurant("Seidengasse 31", "Seidengasse 31", 1070, "Wien", "media/locrest-seidengasse.jpg", new Date(2020,1,5), "0677/637 57 940", "Mediterranean",""));
locations.push(new Restaurant("Sperling im Augarten", "Obere Augartenstraße 1", 1020, "Wien", "media/locrest-sperling.jpg", new Date(2019,12,11), "01/997 72 66", "austrian international","https://www.sperling.wien/"));



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








