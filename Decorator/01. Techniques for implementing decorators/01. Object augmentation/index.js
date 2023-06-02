import { CoffeeBeverage } from "../../CoffeeBeverage.js";

function milkCoffee(coffee) {
    const cost = coffee.getCost()
    const description = coffee.getDescription()

    coffee.getCost = function () {
        return cost + 2;
    }

    coffee.getDescription = () => {
        return description + " + Milk"
    }

    return coffee;
}

const coffee = new CoffeeBeverage();
const milkCf = milkCoffee(coffee)

console.log(milkCf.getDescription())
console.log(milkCf.getCost())

/*


Trong đoạn mã, chúng ta có một đối tượng CoffeeBeverage đại diện cho một loại cà phê. Chúng ta muốn thêm chức năng là thêm sữa vào cà phê này mà không phải thay đổi lớp CoffeeBeverage gốc.

Để làm điều đó, chúng ta tạo một hàm milkCoffee nhận đối tượng coffee làm tham số. Trong hàm này, chúng ta lưu trữ giá trị hiện tại của cost và description bằng cách gọi các phương thức getCost() và getDescription() của đối tượng coffee.

Sau đó, chúng ta ghi đè phương thức getCost() bằng cách tạo một hàm mới. Trong hàm này, chúng ta sử dụng giá trị cost đã lưu trữ trước đó và thêm 2 vào nó, đại diện cho giá trị sữa được thêm vào.

Tương tự, chúng ta cũng ghi đè phương thức getDescription() bằng cách tạo một hàm mới. Trong hàm này, chúng ta sử dụng giá trị description đã lưu trữ trước đó và thêm chuỗi " + Milk" vào cuối, đại diện cho việc thêm sữa vào mô tả của cà phê.

Cuối cùng, chúng ta trả về đối tượng coffee đã được mở rộng và sử dụng nó để in ra mô tả và giá của cà phê đã thêm sữa.

Decorate Pattern cho phép chúng ta mở rộng chức năng của đối tượng mà không làm thay đổi đối tượng gốc, và cũng giúp chúng ta linh hoạt trong việc thêm nhiều tính năng mở rộng khác nhau cho các đối tượng.
*/