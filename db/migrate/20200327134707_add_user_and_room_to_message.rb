class AddUserAndRoomToMessage < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :user, :reference
    add_column :messages, :room, :reference
  end
end
