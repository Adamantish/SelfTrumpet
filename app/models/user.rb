class User < ActiveRecord::Base

  has_many :projects
  


  def store_uploaded_file

  end

  def upload_dir
    FileUtils.mkdir_p "public/uploads/#{params[:id]}"
  end

  private

  def set_image_url
    self.image_url = image.original_filename
    FileUtils.cp image.tempfile, [upload_dir, self.image_url].join("/")
  end

  def upload_dir
    "public/uploads/#{self.image_url}"
  end


end
