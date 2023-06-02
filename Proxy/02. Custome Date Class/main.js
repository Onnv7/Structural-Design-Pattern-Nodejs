import { createWriteStream } from 'fs'
import { createLoggingWritable } from './logging-writable.js'
const writable = createWriteStream('test.txt')
const writableProxy = createLoggingWritable(writable)
writableProxy.write('First chunk')
writableProxy.write('Second chunk')
writable.write('This is not logged')
writableProxy.end()


/*
Chúng ta khởi tạo đối tượng writable từ lớp createWriteStream của thư viện fs.
Sau đó tạo proxy từ hàm tạo proxy ở file logging-writable.js,
*/

/*
Viết một hàm createLoggingWritable, trả về một đối tượng proxy với một writable stream đã cho và một handler được định nghĩa để ghi log khi các phương thức của writable stream được gọi.

Cụ thể, khi một phương thức được gọi trên đối tượng proxy, handler sẽ được kích hoạt thông qua các phương thức "get trap" được định nghĩa, trong đó phương thức get được sử dụng để theo dõi việc gọi phương thức.

Khi get được kích hoạt, nó kiểm tra xem tên phương thức được yêu cầu có phải là "write" hay không. Nếu phương thức là "write", handler sẽ thực hiện ghi log, sau đó chuyển tiếp yêu cầu gọi phương thức đến writable stream thực tế.

Nếu tên phương thức không phải là "write", handler sẽ chỉ trả về giá trị tương ứng trên đối tượng writable stream ban đầu.

Sau đó, mã sử dụng createWriteStream để tạo một writable stream đến tệp "test.txt", tạo một đối tượng proxy với writable stream đã cho bằng cách gọi createLoggingWritable, và sử dụng đối tượng proxy để ghi một số nội dung vào tệp và kết thúc việc ghi. Bởi vì đối tượng proxy bao bọc writable stream, khi gọi write trên đối tượng writable stream trực tiếp, việc ghi log không được thực hiện.
*/