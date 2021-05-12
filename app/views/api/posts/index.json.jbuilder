json.array! @posts do |post|
  json.extract! post, :id, :body
  # debugger
  if post.photo
    json.photoUrl url_for(post.photo)
  end

end