json.array! @educations do |edu|
    json.extract! edu, :id, :school, :field_of_study, :start_date, :end_date
end