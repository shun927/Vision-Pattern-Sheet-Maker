# Vision Pattern Sheet Maker

複数の ArUco / AprilTag マーカーやカメラキャリブレーション用チェッカーボードを、1枚または複数枚の用紙に並べて印刷するための静的Webアプリです。

## 使い方

1. `index.html` をブラウザで開きます。
2. ArUcoまたはチェッカーを選び、サイズ(mm)を指定して追加します。
3. 必要なら「連番追加」で同じ種類・サイズのIDをまとめて追加します。
4. 用紙、余白、間隔、ラベル表示を調整して「印刷」を押します。

マーカーのパターンは OpenCV 4.12 の `cv2.aruco` から生成しています。対応辞書はアプリ内の「種類」プルダウンに含まれる22種類です。

## Cloudflare Pages

Git連携で以下を設定します。

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: 空欄

`dist` には公開に必要なHTML、CSS、JavaScriptだけが出力されます。
