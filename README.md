# 即時文字雲 Teaching Wordcloud

用 Firebase Firestore 打造的課堂即時文字雲工具。學生在手機輸入詞語,老師端螢幕即時顯示文字雲。

## 線上展示

- 首頁:https://lintehao.github.io/teaching-wordcloud/
- 學生輸入:https://lintehao.github.io/teaching-wordcloud/input.html
- 老師顯示:https://lintehao.github.io/teaching-wordcloud/display.html

## 檔案結構

| 檔案 | 用途 |
|------|------|
| `index.html` | 導覽頁 |
| `input.html` | 學生輸入頁(手機友善) |
| `display.html` | 老師顯示頁(即時文字雲) |
| `firebase-config.js` | Firebase Web SDK 設定 |
| `firestore.rules` | Firestore 安全性規則 |
| `firebase.json` / `.firebaserc` | Firebase CLI 設定 |

## 資料模型

集合 `wordcloud_words` 內每筆文件:

```json
{
  "word": "詞語",
  "created_at": <Timestamp>
}
```

老師端用 `onSnapshot` 監聽集合變化,前端統計每個詞出現次數後渲染文字雲。

## 安全性

- Firebase Web Config (`apiKey` 等) 本來就是給前端用的公開資訊,不是機密。實際存取權限靠 Firestore Rules 控制。
- 目前 Rules 允許任何人讀寫 `wordcloud_words` 集合。適合課堂測試,**不適合長期公開使用**。
- 課程結束後可以調整 `firestore.rules` 加入時間限制或 Authentication。

## 部署 Firestore 規則

```powershell
npx -y firebase-tools@latest deploy --only firestore:rules
```

## 技術組成

- Firebase Firestore (即時資料庫)
- wordcloud2.js (文字雲渲染)
- 純 HTML / CSS / JS,無建置流程
- GitHub Pages 靜態託管
