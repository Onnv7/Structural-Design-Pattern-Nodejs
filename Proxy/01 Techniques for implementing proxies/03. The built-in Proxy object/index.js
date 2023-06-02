import { Resource } from "../Resource.js"
import { User } from "../User.js";
const safeResourceHandler = {
    get: (target, property) => {
        if (property === 'download') {
            return function () {
                if (target.user.username !== "admin" || target.user.password !== "123") {
                    console.log("You do not have permission to download");
                    return;
                }
                return target.download();
            }
        }
        return target[property];
    }
};

const user01 = new User("nva", "123");
const user02 = new User("admin", "123");
const resource = new Resource("Music", user01);

const safeResource = new Proxy(
    resource,
    safeResourceHandler
)

safeResource.download()

console.log("\n")

const resource02 = new Resource("Music", user02);
const safeResource02 = new Proxy(
    resource02,
    safeResourceHandler
)

safeResource02.download()

console.log("\n")

resource.download()
resource02.download()
/*
Trong bản ES2015 của javascript, có giới thiệu đến cách để tạo 1 đối tượng proxy mạnh mẽ với cú pháp:
const proxy = new Proxy(target, handler)
Trong đó:

Đối tượng target đại diện cho đối tượng mà proxy được áp dụng lên (tức là subject trong định nghĩa cơ bản), trong khi handler là một đối tượng đặc biệt xác định hành vi của proxy.

Đối tượng handler chứa một loạt các phương thức tùy chọn có tên được xác định trước gọi là các phương thức trap (ví dụ như apply, get, set và has) sẽ được tự động gọi khi các hoạt động tương ứng được thực hiện trên thể hiện proxy.
 */