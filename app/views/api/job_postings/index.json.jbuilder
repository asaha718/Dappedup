@job_postings.each do |jobPost|
  json.set! jobPost.id do 
    json.extract! jobPost, :id, :header, :body, :company_id
  end
end