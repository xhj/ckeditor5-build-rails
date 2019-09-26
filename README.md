CKEditor 5 for Rails
====================

## Documentation

CKEditor 5 for Rails application

- Base on **@ckeditor/ckeditor5-build-classic**.
- Default config toolbars.
- Upload image for Rails applicaiton (CSRF).
- All-in one file (build/ckeditor.js) for using.

---

- 基于 CKEditor 官方的 **@ckeditor/ckeditor5-build-classic** 实现；
- 根据实践经验总结出的 Toolbar 配置，具体看图；
- 上传支持 Rails 应用的（CSRF）；
- 使用需要一个文件即可 (build/ckeditor.js)

![](https://user-images.githubusercontent.com/5518/65653118-a01b7f80-e046-11e9-9a75-1c49d2b5c75e.png)

## Quick start

Put `build/ckeditor.js` in your Rails application.

```
public
  js
    ckeditor.js
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <%= csrf_meta_tags %>
    <%= stylesheet_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
    <script type="text/javascript" src="<%= asset_path("/js/ckeditor.js", skip_pipeline: true) %>"></script>
    ...
  </head>
</html>
```
    

In your JavaScript application:

```js
document.addEventListener('turbolinks:load', () => {
  ClassicEditor
    .create(document.querySelector('.ckeditor'), {
      simpleUpload: {
        uploadUrl: '/uploads',
      },
    })
})
```

In your Rails controller:

```rb
class UploadsController < ApplicationController
	# POST /uploads
  def create
    uploader = FileUploader.new
    uploader.store!(params[:upload])
    render json: { url: uploader.url }
  end
end
```
