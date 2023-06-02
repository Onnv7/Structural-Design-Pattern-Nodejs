export class Resource {
    constructor(resourceName, user) {
        this.resourceName = resourceName;
        this.user = user;
        this.load(this.resourceName);
    }

    load(resourceName) {
        console.log(`Loading ${resourceName}`)
    }

    display() {
        console.log("Displaying " + this.resourceName);
    }

    download() {
        console.log("Downloading " + this.resourceName);
    }
}
