json.followers do 
    json.array! current_user.followers.map {|follower| follower.id}
end

json.followings do 
    json.array! current_user.followings.map {|following| following.id}
end