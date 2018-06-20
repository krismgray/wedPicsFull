class AddAttachmentImgToPhotographers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :photographers do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :photographers, :img
  end
end
