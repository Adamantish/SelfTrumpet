class AddGithubDataToUsers < ActiveRecord::Migration
  def change
    add_column :users, :github_access_token, :string
    add_column :users, :github_id, :integer

  end
end
