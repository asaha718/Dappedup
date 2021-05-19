@educations.each do |edu|
    json.set! edu.id do
        json.extract! edu, :id, :school, :field_of_study, :start_date, :end_date
    end
end
