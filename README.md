# chineseword

📚 **chineseword** là thư viện từ vựng tiếng Trung có hỗ trợ tìm kiếm theo `word`, `pinyin`, hoặc `meaning`.

## 🚀 Cài đặt

```bash
npm install chineseword

const { searchText } = require('chineseword');

// Tìm kiếm từ '你好'
const result = searchText('你好');

console.log(result)