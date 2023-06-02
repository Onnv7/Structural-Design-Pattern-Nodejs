import { createDateTime } from "./date.js"


const now = new Date();

const dateProxy = createDateTime(now)
console.log(dateProxy.getMonth())
