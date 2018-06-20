class AddAttachmentImgToVideographers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :videographers do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :videographers, :img
  end
end
