import { Resource } from './Resource.js'
import { User } from './User.js'
const user = new User('admin', '123')
const resource = new Resource("Video", user)
resource.display()
resource.download()


/*
    - Class User có một constructor nhận vào tên người dùng và mật khẩu và lưu chúng trong các thuộc tính của class.

    - Class Resource có một constructor nhận vào tên tài nguyên và một đối tượng User. Trong constructor, tài nguyên được tải bằng cách gọi phương thức load(), và tên tài nguyên và đối tượng User được lưu trong các thuộc tính của class. Class cũng có hai phương thức khác là display() và download(), mỗi phương thức đơn giản chỉ là in ra màn hình thông báo tương ứng.

    - Trong file index.js, nó import hai class Resource và User từ các file khác và tạo ra một đối tượng User với tên người dùng và mật khẩu đã cung cấp. Sau đó, nó tạo ra một đối tượng Resource với tên tài nguyên và đối tượng User đã tạo và gọi các phương thức display() và download() trên đối tượng Resource.

    - Vấn đề là việc xác thực người dùng chỉ xảy ra khi đối tượng User được tạo ra và truyền vào đối tượng Resource trong file index.js. Điều này có nghĩa là mọi tác vụ liên quan đến xác thực người dùng đã hoàn thành trước khi tài nguyên được tải hoặc các phương thức display() và download() được gọi trên đối tượng Resource. Tuy nhiên, trong một ứng dụng thực tế, xác thực người dùng có thể cần được thực hiện ở mỗi bước hoạt động, bao gồm cả việc tải tài nguyên và hiển thị nội dung.
*/