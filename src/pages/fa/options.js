export default {
  title: 'گزینه های دستور',
  sections: [
    {
      title: 'گزینه های make:module',
      content: `
# گزینه های make:module

برای ساخت ماژول های کامل لاراول با معماری قابل تنظیم استفاده می شود.

## ساخت کامل

```bash
php artisan make:module Product --all
```

تمام لایه ها شامل Controller، Request، Resource، Test، Provider، DTO، Swagger و Action ساخته می شوند.

## ساخت API

```bash
php artisan make:module Product --api
```

## گزینه ها

- --controller ساخت کنترلر
- --requests ساخت Form Request
- --tests ساخت تست
- --actions ساخت Action
- --policy ساخت Policy
- --swagger ساخت مستندات OpenAPI
- --fields دریافت اسکیمای فیلدها
- --from-migration استخراج از migration
- --force بازنویسی فایل ها
- --no-controller حذف کنترلر
- --no-resource حذف Resource
- --no-dto حذف DTO
- --no-test حذف Test
- --no-provider حذف Provider
- --no-actions حذف Action
- --no-policy حذف Policy
- --no-swagger حذف Swagger

## نمونه Schema

```bash
php artisan make:module Product --api \\
 --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```
`
    }
  ]
}
