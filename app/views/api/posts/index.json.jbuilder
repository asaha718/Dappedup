json.array! @posts do |post|
  json.extract! post, :id, :body
  json.photoUrl url_for(post.photo)
  # debugger
  # if post.photo
  # end

end