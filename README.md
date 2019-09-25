CKEditor 5 for Rails
====================

## Documentation

CKEditor 5 for Rails application

- Base on **@ckeditor/ckeditor5-build-classic**.
- Default config toolbars.
- Upload image for Rails applicaiton (CSRF).

## Quick start

Or in your JavaScript application:

```js
import ClassicEditor from '@ckeditor/ckeditor5-build-rails';

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
