import { Resource } from "../Resource.js";
export class ResourceProxy {
    constructor(resource) {
        this.resource = resource;
    }

    display() {
        this.resource.display();
    }
    download() {
        if (!this.isAuthenticated()) {
            console.log("You do not have permission to download");
            return;
        }
        this.resource.download()
    }

    isAuthenticated() {
        if (this.resource.user.username !== "admin" || this.resource.user.password !== "123") {
            return false;
        }
        return true;
    }
}

