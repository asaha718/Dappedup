class DropConnections < ActiveRecord::Migration[5.2]
  def change
    drop_table :connections
  end
end
