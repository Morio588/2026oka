# 🇯🇵 Okinawa Family Trip Guide (2026oka)

Apple 風格・Ocean Blue・Glassmorphism 的沖繩家族旅行網站。
純 HTML5 / CSS3 / Vanilla JavaScript，無任何框架依賴。

**行程日期：** 2026/08/19 – 2026/08/23（5 天 4 夜）

## 專案結構

```
2026oka/
├── index.html        # 唯一頁面，所有 section 都在這裡
├── css/
│   └── style.css      # 設計系統、版面、RWD
├── js/
│   └── app.js          # nav 互動、捲動顯示動畫、dot-nav 導覽
├── images/             # 之後放景點 / 飯店照片
└── icons/               # 之後放自訂圖示（目前用 emoji 代替）
```

## 目前完成的內容

- Hero（標題、日期）
- 總覽卡片區（Trip at a glance）
- 航班資訊（去程 CI0310 / 回程 CI0313，登機證風格卡片）
- 飯店資訊（THE NEST NAHA）
- 五天行程版型（Day 1–5，各自獨立 section，含時間軸骨架）
- 頂部導覽列 + 右側章節進度小圓點（皆為捲動互動）
- Desktop / iPad / iPhone 三種寬度的響應式設計

## 尚未加入（下一版規劃）

- Google Maps 地點標示
- 每日行程的實際地點、交通細節、照片
- 飯店地址與交通資訊
- images/、icons/ 內的實際素材

## 本機預覽

不需要建置工具，用瀏覽器直接開啟 `index.html`，或用簡單的本機伺服器：

```bash
cd 2026oka
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

## 部署到 GitHub Pages

1. 將本資料夾內容 push 到 `Morio588/2026oka` repo 的 `main` 分支
2. GitHub repo → Settings → Pages → Source 選擇 `main` / `root`
3. 完成後即可透過 `https://morio588.github.io/2026oka/` 瀏覽
