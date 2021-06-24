class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.integer :connecter_id, null: false
      t.integer :connectee_id, null: false
    end
    add_index :connections, :connecter_id
    add_index :connections, :connectee_id
    
  end
end
