# class Api::JobsController < ApplicationController
#     def index
#         @jobs= Job.all
#         render :index
#     end

#     def create
#         @job=Job.new(job_params)
#         @eduation.user_id= current_user.id

#         if @job.save
#             render :show
#         else
#             render json:@job.errors.full_messages, status: 422
#         end
#     end

#     def show
#         @job= Job.find_by(id: params[:id])
#         render :show
#     end

#     def update
#         @job= Job.find_by(id: params[:id])
#         if @job.update(edu_params)
#             render :show
#         else
#             render json:@job.errors.full_messages. status: 422
#     end

#     def job_params
#         params.require(:job).permit(:title, :field, :company, :description, :start_date)
#     end    
# end
