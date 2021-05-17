# class Api::EducationsController < ApplicationController
#     def index
#         @educations= Education.all
#         render :index
#     end

#     def create
#         @education=Education.new(edu_params)
#         @eduation.user_id= current_user.id

#         if @education.save
#             render :show
#         else
#             render json:@education.errors.full_messages, status: 422
#         end
#     end

#     def show
#         @education= Education.find_by(id: params[:id])
#         render :show
#     end

#     def update
#         @education= Education.find_by(id: params[:id])
#         if @education.update(edu_params)
#             render :show
#         else
#             render json:@education.errors.full_messages. status: 422
#     end

#     def edu_params
#         params.require(:education).permit(:school, :field_of_study, :start_date)
#     end
# end
