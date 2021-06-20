@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :full_name, :job_title
    end
end