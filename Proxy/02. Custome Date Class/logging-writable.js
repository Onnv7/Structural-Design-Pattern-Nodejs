export function createLoggingWritable(writable) {
    return new Proxy(writable, { // (1)
        get(target, propKey, receiver) { // (2)
            if (propKey === 'write') { // (3)
                return function (...args) { // (4)
                    const [chunk] = args
                    console.log(chunk, "ne")
                    console.log('Writing', chunk)
                    return writable.write(...args)
                }
            }
            return target[propKey] // (5)
        }
    })
}

/* 
viết hàm tạo một đối tượng proxy, nhận target là writable, handler trả về một hàm được chỉnh sửa thêm chức năng log chunk ra console
*/