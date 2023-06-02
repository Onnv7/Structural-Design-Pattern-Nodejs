import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import level from 'level'
import { levelSubscribe } from './level-subscribe.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const dbPath = join(__dirname, 'db')
const db = level(dbPath, { valueEncoding: 'json' }) // ①
levelSubscribe(db) // ②

db.subscribe( // ③
  { doctype: 'tweet', language: 'en' },
  (k, val) => console.log(val)
)
db.put('1', { // ④
  doctype: 'tweet',
  text: 'Hi',
  language: 'en'
})
db.put('2', {
  doctype: 'company',
  name: 'ACME Co.'
})


/*

Module level-subscribe export một hàm levelSubscribe và thực hiện việc mở rộng đối tượng db bằng cách thêm phương thức subscribe vào đó.

Đối tượng db được chuyển vào hàm levelSubscribe và sau đó một phương thức subscribe mới được thêm vào đối tượng này. Điều này tương đương với việc "trang trí" (decorate) đối tượng db bằng cách bổ sung chức năng mới.

Phương thức subscribe có logic để lắng nghe sự kiện 'put' của db và kiểm tra xem giá trị mới được thêm vào có khớp với mẫu (pattern) hay không. Nếu khớp, nó gọi hàm lắng nghe được cung cấp để xử lý sự kiện.

Qua đó, việc sử dụng mẫu Decorator cho phép mở rộng chức năng của đối tượng db bằng cách thêm phương thức subscribe mà không làm thay đổi hoặc can thiệp vào code gốc của db.
*/