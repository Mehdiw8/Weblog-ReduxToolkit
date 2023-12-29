# React + Vite

npm i -D concurrently
npm init -y && npm i json-server
date-fns-jalali @reduxjs/toolkit react-redux axios
"start": "json-server --watch db.json -p 9000"
"dev": "concurrently \" vite --port 3000 \" ",

# نکته ها

- ما نمیتونیم از کلاس ها وتوابع ساختن توی ریداکس استفاده کنیم (همون کلمه کلیدی this)
  اکشن ها و استیت های ریداکس باید حاوی تنها آبجکت معمولی باشند مثل آبجکت ، آرایه و ...

* قانون : reducer ها هرگز نباید مقدار تصادفی محاسبه کنند.
* اگر یک اکشن نیاز داشت یک شناسه منحصر به فرد داشته باشد یا یک مقدار تصادفی همیشه این مقدار تصادفی ساخته میشه و بعد درون اکشن قرار داده میشه.
