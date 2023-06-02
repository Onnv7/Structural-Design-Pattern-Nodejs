import { createObservable } from './create-observable.js'

function area(rectangle) {
    return rectangle.height * rectangle.width;
}
const rectangle = {
    height: 32,
    width: 10
}

let result = area(rectangle)
console.log(`Starting result: ${result}`)

const obsRectangle = createObservable(
    rectangle,
    ({ prop, prev, curr }) => {
        result = area(rectangle)
        console.log(`Area: ${result} (${prop} changed: ${prev} -> ${curr})`)
    }
)

obsRectangle.height = 10
obsRectangle.width = 5

console.log(`Final total: ${result}`)


/*
Trong đoạn mã trên, chúng ta tạo một hàm createObservable được sử dụng để tạo một đối tượng proxy được gọi là observable. Đối tượng observable này sẽ theo dõi sự thay đổi của các thuộc tính trong đối tượng target và thông báo cho một hàm gọi là observer mỗi khi có sự thay đổi xảy ra.

Hàm area được định nghĩa để tính diện tích của một hình chữ nhật. Nó nhận vào một đối tượng rectangle có thuộc tính height và width và trả về diện tích của hình chữ nhật đó.

Đối tượng rectangle được khởi tạo với các thuộc tính height và width.

Hàm createObservable được sử dụng để tạo một đối tượng proxy obsRectangle từ đối tượng rectangle. Proxy này sẽ theo dõi sự thay đổi của các thuộc tính trong rectangle và gọi hàm observer để thông báo về các thay đổi này. Trong trường hợp này, observer là một hàm được định nghĩa ngay tại đoạn mã và nhận một đối số gồm các thông tin về thuộc tính đã thay đổi.

Sau đó, chúng ta thực hiện một số thay đổi trên obsRectangle.height và xem kết quả. Mỗi lần obsRectangle.height obsRectangle.width hoặc  thay đổi, hàm observer sẽ được gọi và tính lại diện tích của hình chữ nhật thông qua hàm area. Kết quả diện tích mới sẽ được hiển thị trên console cùng với thông tin về thuộc tính đã thay đổi.

Cuối cùng, chúng ta in ra kết quả tổng cộng cuối cùng của biến result sau khi các thay đổi đã được áp dụng.

Tóm lại, đoạn mã trên sử dụng proxy để theo dõi sự thay đổi của thuộc tính trong đối tượng rectangle và thực hiện một hành động tương ứng mỗi khi có sự thay đổi xảy ra.
*/