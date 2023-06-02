import { ResourceProxy } from "./ResourceProxy.js";
import { Resource } from "../Resource.js";
import { User } from "../User.js";

const user01 = new User("nva", "1234");
const user02 = new User("admin", "123");

const resource01 = new Resource("Video 10GB", user01);
const resourceProxy01 = new ResourceProxy(resource01, user01);
resourceProxy01.display()
resourceProxy01.download()

console.log("\n")

const resource02 = new Resource("Video 10GB", user02);
const resourceProxy02 = new ResourceProxy(resource02, user01);
resourceProxy02.display()
resourceProxy02.download()

console.log("\n")
resource01.download()
resource02.download()


/*
    - Để giải quyết vấn đề đó, chúng ta tạo 1 lớp proxy tên ProxyResource, proxy này kiểm soát việc truy cập và thực thi các phương thức của đối tượng gốc, nó được triển khai bằng cách viết lại các phương thức của class Resource nhưng trước khi gọi download() trên đối tượng resource, phương thức isAuthenticated() được gọi để kiểm tra xác thực người dùng. Nếu người dùng không được xác thực thành công, một thông báo sẽ được hiển thị và phương thức download() không được thực thi. Nếu người dùng xác thực thành công, phương thức download() sẽ được gọi trên đối tượng resource.

        Phương thức isAuthenticated(): Kiểm tra xem đối tượng resource có thuộc tính user (đối tượng người dùng) và xác thực người dùng bằng cách so sánh tên người dùng và mật khẩu với các giá trị được chỉ định ("admin" và "123"). Nếu xác thực thành công, phương thức trả về true, ngược lại, trả về false.

    - Trong demo, chúng ta tạo ra 2 tài nguyên resource01 và resource02 tương ứng với 2 user01 và user02. Sau đó, khởi tạo một đối tượng của lớp ProxyResource, proxyResource01 và proxyResource01 tương ứng cho 2 tài nguyên trên.
    - Khi đối tượng của lớp ProxyResource gọi download(), chúng đề thực thi isAuthenticated() để xác thực người dùng, do đó chỉ có user01 không tải được video.
    - Nếu chúng ta gọi download() từ các đối tượng của Resource, thì nó sẽ cho phép tất cả user đều có quyền tải video

    - 
    - Phương pháp Object Composition trong mã sử dụng Proxy Pattern có các ưu điểm và nhược điểm sau:

        Ưu điểm:

            Tách biệt trách nhiệm: Proxy Pattern cho phép tách biệt trách nhiệm giữa Proxy và đối tượng gốc. Proxy chịu trách nhiệm xử lý các logic bổ sung như xác thực, kiểm soát truy cập, và đối tượng gốc chỉ chịu trách nhiệm cho logic cốt lõi.

            Mở rộng và bảo vệ: Với Proxy Pattern, bạn có thể mở rộng chức năng của đối tượng gốc bằng cách thêm các logic bổ sung vào Proxy mà không cần thay đổi đối tượng gốc. Điều này giúp bảo vệ đối tượng gốc khỏi các thay đổi không mong muốn và đảm bảo tính linh hoạt của mã.

            Kiểm soát truy cập: Proxy Pattern cho phép bạn kiểm soát truy cập đến các phương thức và thuộc tính của đối tượng gốc. Bạn có thể áp dụng các quy tắc xác thực, kiểm tra quyền và thực hiện các hành động phụ khác trước khi cho phép truy cập vào đối tượng gốc.

            Kế thừa giao diện: Proxy Pattern cho phép Proxy và đối tượng gốc triển khai cùng một giao diện. Điều này đảm bảo rằng Proxy có thể được sử dụng thay thế đối tượng gốc mà không làm thay đổi mã sử dụng.

        Nhược điểm:

            Khả năng gây rối: Một cấu trúc mã phức tạp với nhiều lớp Proxy có thể gây khó khăn trong việc hiểu và theo dõi luồng điều khiển của mã.

            Hiệu suất: Việc sử dụng Proxy có thể ảnh hưởng đến hiệu suất vì các phương thức và thuộc tính phải được gọi thông qua một lớp Proxy trung gian. Điều này có thể gây ra một lượng nhỏ overhead thêm cho mã.

            Quản lý bộ nhớ: Sử dụng Proxy Pattern có thể yêu cầu quản lý bộ nhớ bổ sung do sự có mặt của các đối tượng Proxy.

            Khó khăn trong gỡ lỗi: Khi sử dụng Proxy Pattern, việc gỡ lỗi có thể trở nên phức tạp hơn do sự thêm vào các lớp Proxy trung gian và các logic bổ sung.
            
    - Trong tổng quát, việc sử dụng phương pháp Object Composition và Proxy Pattern mang lại nhiều lợi ích như tách biệt trách nhiệm, mở rộng và bảo vệ, kiểm soát truy cập và kế thừa giao diện. Tuy nhiên, cần lưu ý rằng nó có thể gây rối, ảnh hưởng đến hiệu suất, yêu cầu quản lý bộ nhớ bổ sung và làm phức tạp việc gỡ lỗi. Việc sử dụng phương pháp này nên được cân nhắc dựa trên quy mô và yêu cầu cụ thể của dự án, để đảm bảo tính linh hoạt, bảo mật và quản lý mã hiệu quả.
*/