# My Heart • Galaxy Memories 🌌

ဒီ project က GitHub Pages နဲ့ တိုက်ရိုက်တင်လို့ရတဲ့ static website ပါ။ Framework/build step မလိုပါဘူး။

## Folder structure

```text
MyHeart-Galaxy/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── images/
        ├── 01.webp
        ├── 02.webp
        ├── 03.webp
        ├── 04.webp
        ├── 05.webp
        ├── 06.webp
        ├── 07.webp
        ├── 08.webp
        ├── 09.webp
        └── 10.webp
```

## GitHub ထဲ ဘယ်နေရာထည့်မလဲ

Repository root ထဲမှာ အပေါ်က structure အတိုင်း ထည့်ပါ။ `index.html` က repository ရဲ့ root မှာ တိုက်ရိုက်ရှိရပါမယ်။

GitHub → **Settings → Pages** → **Deploy from a branch** → `main` → `/ (root)` → Save.

## Effect ပါတာတွေ

- CSS 3D orbit rings + rotating galaxy effect
- Photo satellites လည်ပတ်မှု
- Moving stars / nebula background
- Pause / Resume button
- Random orbit shuffle
- Photo ကိုနှိပ်ရင် fullscreen-style viewer
- Mobile responsive layout
- `prefers-reduced-motion` support

`js/script.js` ထဲက `memories` array မှာ ပုံနာမည်၊ title၊ Burmese caption တွေကို ပြင်နိုင်ပါတယ်။ ပုံအသစ်ထည့်ရင် `assets/images/` ထဲ ထည့်ပြီး array ထဲမှာ file name ထပ်ထည့်ပါ။
