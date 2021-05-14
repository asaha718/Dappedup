json.array! @posts do |post|
  json.extract! post, :id, :body
  if post.photo.attached?
    json.photoUrl url_for(post.photo)
  end 

end