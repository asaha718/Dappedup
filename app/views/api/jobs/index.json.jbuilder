@jobs.each do |job|
    json.extract! job, :id, :title, :field, :company, :location, :description, :start_date, :end_date
end