# 🏠 CareYouGo — Demo Website

แพลตฟอร์มเชื่อมต่อนายจ้างกับแม่บ้าน พี่เลี้ยง และผู้ดูแลมืออาชีพ

## หน้าที่มีในเว็บไซต์

| หน้า | รายละเอียด |
|------|------------|
| Homepage | หน้าแรก พร้อม Hero, Categories, Workers, How it works |
| Workers | ค้นหาผู้ช่วย พร้อม Filter sidebar และ sorting |
| Profile | โปรไฟล์ผู้ช่วยแบบเต็ม พร้อม tabs, รีวิว, บริการ |
| Login | หน้าเข้าสู่ระบบ |
| Register | สมัครสมาชิก 3 ขั้นตอน (Employer / Worker) |

## โครงสร้างไฟล์

```
careyougo/
├── index.html        ← SPA หลัก (ทุกหน้ารวมอยู่ที่นี่)
├── css/
│   └── style.css     ← Styles ทั้งหมด
├── js/
│   └── app.js        ← Logic และ navigation
├── firebase.json     ← Firebase Hosting config
├── .firebaserc       ← Firebase project config
└── README.md         ← คู่มือนี้
```

---

## วิธี Deploy บน Firebase Hosting

### ขั้นตอนที่ 1 — ติดตั้ง Firebase CLI

```bash
npm install -g firebase-tools
```

### ขั้นตอนที่ 2 — Login Firebase

```bash
firebase login
```

เบราว์เซอร์จะเปิดขึ้นมาให้ login ด้วย Google Account

### ขั้นตอนที่ 3 — สร้าง Firebase Project

1. ไปที่ https://console.firebase.google.com
2. คลิก "Create Project"
3. ตั้งชื่อ เช่น `careyougo`
4. เปิด Google Analytics ตามต้องการ
5. คลิก "Create"

### ขั้นตอนที่ 4 — เชื่อม Project กับโค้ด

แก้ไขไฟล์ `.firebaserc` เปลี่ยน `"careyougo"` เป็น Project ID จริงของคุณ:

```json
{
  "projects": {
    "default": "YOUR_ACTUAL_PROJECT_ID"
  }
}
```

> หา Project ID ได้จาก Firebase Console → Project Settings

### ขั้นตอนที่ 5 — Deploy!

```bash
cd careyougo
firebase deploy --only hosting
```

ระบบจะแสดง URL เว็บไซต์ของคุณ เช่น:
```
✔  Deploy complete!
Hosting URL: https://careyougo.web.app
```

---

## วิธีอัปเดตเว็บในอนาคต

```bash
firebase deploy --only hosting
```

แค่นั้นพอ! ไฟล์ใหม่จะถูก deploy ขึ้นไปทันที

---

## หมายเหตุ

- เว็บนี้เป็น **Static SPA** ไม่มี backend หรือ database
- ข้อมูลทั้งหมดเป็น mock data อยู่ใน `js/app.js`
- หากต้องการเพิ่ม Firebase Auth หรือ Firestore ในอนาคต สามารถเพิ่มได้ภายหลัง
