export function createDateTime(datetime) {
    return new Proxy(datetime, { // (1)
        get(target, propKey, receiver) { // (2)
            if (propKey === 'getMonth') { // (3)
                return function () { // (4)
                    console.log("In proxy: ", datetime.getMonth() + 1)
                    return datetime.getMonth()
                }
            }
            return target[propKey] // (5)
        }
    })
}

/* 
viết hàm tạo một đối tượng proxy, nhận target là writable, handler trả về một hàm được chỉnh sửa thêm chức năng log chunk ra console
*/