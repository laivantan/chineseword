const fs = require('fs');
const path = require('path');

const vocabPath = path.join(__dirname, 'assets', 'chineseword2.json');
const rawData = fs.readFileSync(vocabPath, 'utf-8');
const vocab = JSON.parse(rawData);

/**
 * Tìm kiếm từ khóa trong từ vựng tiếng Trung
 * @param {string} keyword - từ khóa cần tìm (tiếng Trung, pinyin, nghĩa tiếng Việt, ví dụ...)
 * @returns {Array} - danh sách kết quả phù hợp
 */
function searchText(keyword) {
  if (!keyword || typeof keyword !== 'string') return [];

  const lower = keyword.toLowerCase();

  return vocab.filter(item =>
    (item.word && item.word.includes(keyword)) ||
    (item.pinyin && item.pinyin.toLowerCase().includes(lower)) ||
    (item.meaning && item.meaning.toLowerCase().includes(lower)) ||
    (item.example && item.example.toLowerCase().includes(lower)) ||
    (item.example_meaning && item.example_meaning.toLowerCase().includes(lower))
  );
}

module.exports = {
  searchText
};
