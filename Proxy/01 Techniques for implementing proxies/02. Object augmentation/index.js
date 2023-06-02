import { Resource } from "../Resource.js"
import { User } from "../User.js"
function SecurityResource(resource) {
    const downloadResourceOrig = resource.download
    resource.download = () => {
        if (resource.user.username !== "admin" || resource.user.password !== "123") {
            console.log("You do not have permission to download")
            return;
        }
        return downloadResourceOrig.apply(resource)
    }
    return resource
}


const user01 = new User("nva", "1234");
const resource01 = new Resource("Video 10GB", user01);
resource01.download()
const securityResource01 = new SecurityResource(resource01)
securityResource01.download()

console.log("\n")

const user02 = new User("admin", "123");
const resource02 = new Resource("Video 10GB", user02);
resource02.download()
const securityResource02 = new SecurityResource(resource02)
securityResource02.download()

console.log("\n")
resource01.download()
resource02.download()

// const user02 = new User("nva", "1234");
// const resource = new Resource("Video 10GB");
// const securityResource = new SecurityResource(resource, user02)
// securityResource.download()

/*
    - "Object augmentation" hay còn được gọi là "monkey patching" là một cách đơn giản và phổ biến nhất để tạo proxy cho một số phương thức của một đối tượng. Nó sửa đổi đối tượng gốc trực tiếp bằng cách thay thế một phương thức bằng phương thức mới.
    Bằng cách này, chúng ta có thể kiểm soát được các phương thức cụ thể mà chúng ta muốn tạo proxy mà không cần phải tạo một đối tượng mới.
    - Tuy nhiên, phương pháp này có thể dẫn đến việc làm rối loạn hoặc làm hỏng các tính năng khác của đối tượng, vì vậy nó nên được sử dụng cẩn thận.


    - Function SecurityResource: Đây là một hàm nhận đối tượng resource làm tham số và thực hiện việc mở rộng đối tượng đó để triển khai xác thực người dùng.

        Tạo một biến downloadResourceOrig để lưu trữ phiên bản ban đầu của phương thức download trong đối tượng resource.

        Ghi đè phương thức download của đối tượng resource bằng một hàm mới. Hàm này kiểm tra xem người dùng có tên người dùng và mật khẩu là "admin" và "123" hay không. Nếu không, hiển thị một thông báo và không tiến hành tải tài nguyên. Nếu xác thực thành công, hàm gọi lại phương thức download ban đầu bằng cách sử dụng apply và truyền đối tượng resource làm ngữ cảnh (this).

        Trả về đối tượng resource sau khi đã được mở rộng.

    - Ở phần demo: chúng ta thấy tương tự như ở Object composition, nó sẽ thực hiện xác thực, nếu đúng thì sẽ cho phép tải tài nguyên. Nhưng khi gọi download() ở các đối tượng lớp Resource thì nó đã bị "mutate" (thay đổi) so với ban đầu là nó đã thêm việc xác thực user

    - Phương pháp Object Augmentation trong trường hợp này được sử dụng để mở rộng (augment) đối tượng Resource để triển khai xác thực người dùng trước khi cho phép truy cập vào phương thức download(). Phương pháp này có ưu điểm và nhược điểm sau:

        Ưu điểm:

            Đơn giản và dễ hiểu: Object augmentation là một phương pháp đơn giản và dễ hiểu để mở rộng chức năng của đối tượng.

            Tiện lợi và linh hoạt: Bạn có thể dễ dàng mở rộng và thay đổi chức năng của đối tượng trong quá trình chạy.

            Không yêu cầu tạo lớp mới: Không cần phải tạo ra một lớp mới (như Proxy) để triển khai chức năng bổ sung. Điều này giúp tránh việc tạo ra quá nhiều lớp và giữ mã nguồn gọn gàng hơn.

        Nhược điểm:

            Ghi đè trực tiếp lên đối tượng gốc: Phương pháp này ghi đè trực tiếp lên đối tượng gốc. Điều này có thể gây xung đột và ảnh hưởng đến các phần khác của mã sử dụng đối tượng đó.

            Khó quản lý và theo dõi: Vì việc mở rộng đối tượng xảy ra tại nhiều điểm khác nhau trong mã, việc quản lý và theo dõi các thay đổi có thể trở nên khó khăn.

            Không có kiểm soát truy cập: Phương pháp này không cung cấp cơ chế kiểm soát truy cập tường minh. Việc xác thực và kiểm tra truy cập được thực hiện trong mã mở rộng, và không có quy tắc cụ thể để kiểm soát việc truy cập vào phương thức hay thuộc tính.

            Khả năng xâm phạm bảo mật: Một kẻ tấn công có thể ghi đè và thay đổi mã mở rộng để bypass xác thực và có quyền truy cập không hợp lệ.

    - Với những ưu nhược điểm trên, việc sử dụng phương pháp Object augmentation nên được cân nhắc dựa trên quy mô và yêu cầu cụ thể của dự án để đảm bảo tính bảo mật và quản lý mã nguồn hiệu quả.
*/

// Nêu ý nghĩa phương pháp ở trên kia, Object composition trong code ở trên về proxy pattern