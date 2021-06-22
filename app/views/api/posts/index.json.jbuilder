# json.array! @posts do |post| 
#   json.extract! post, :id, :body
#   if post.photo.attached?
#     json.photoUrl url_for(post.photo)
#   end 

# end

# set up so that id is key 

@posts.each do |post|
  json.set! post.id do 
    json.extract! post, :id, :body, :author_id
    if post.photo.attached?
      json.photoUrl url_for(post.photo)
    end
  end
end