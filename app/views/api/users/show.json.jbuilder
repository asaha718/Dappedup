json.extract! @user, :id ,:full_name, :email, :bio, :location, :job_title, :user_role

# json.partial! 'api/users/user', user: @user

json.followers do 
    json.array! @user.followers.map {|follower| follower.id}
end

json.followings do 
    json.array! @user.followings.map {|following| following.id}
end