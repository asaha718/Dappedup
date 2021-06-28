json.partial! 'api/users/user', user: @user

json.followers do
    json.array! @user.followers.map {|follower| follower.id}
end

json.followed do
    json.array! @user.followed.map {|followed| followed.id}
end