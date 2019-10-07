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
# app/javascript/packs/index.js
document.addEventListener('turbolinks:load', () => {
  # Init CKEditor
  ClassicEditor.create(document.querySelector('.ckeditor'), {
    simpleUpload: { uploadUrl: '/uploads' },
  })
})
```

In your Rails controller:

```rb
# app/controllers/uploads_controller.rb
class UploadsController < ApplicationController
  # POST /uploads { upload: <File> }
  def create
    uploader = FileUploader.new
    uploader.store!(params[:upload])
    render json: { url: uploader.url }
  end
end
```

You need a [CarrierWave](https://github.com/carrierwaveuploader/carrierwave) Uploader:

```rb
# app/uploaders/file_uploader.rb
class FileUploader < BaseUploader
  def store_dir
    "uploads"
  end

  def filename
    "files/#{Time.now.strftime("%Y%m")}/#{secure_token}.#{file.extension}" if original_filename.present?
  end

  protected
    # Generate a random key like ActiveStoreage
    def secure_token
      return SecureRandom.base58(32) if model.nil?
      var = :"@#{mounted_as}_secure_token"
      model.instance_variable_get(var) || model.instance_variable_set(var, SecureRandom.base58(32))
    end
end
```

In your edit form:

```erb
<%= form_for @post do |f| %>
  <%= f.text_area :body, class: "ckeditor" %>
<% end %>
```