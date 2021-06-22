@jobs.each do |job|
    json.set! job.id do
        json.extract! job, :id, :title, :field, :company, :location, :description, :start_date, :end_date, :user_id
    end
end
