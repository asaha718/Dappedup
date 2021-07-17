json.applications do 
    json.array! current_user.job_applications.map {|job_app| job_app.job_post_id}
end