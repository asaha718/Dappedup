class Api::JobsController < ApplicationController
    def index
        @jobs= Job.all
        render :index
    end

    
    def show
        @job= Job.find_by(id: params[:id])
        render :show
    end
    
    def update
        @job= Job.find_by(id: params[:id])
        if @job.update(job_params)
            render :show
        else
            render json:@job.errors.full_messages, status: 422
        end
    end
    
    def create
        @job=Job.new(job_params)
        @job.user_id= current_user.id

        if @job.save
            render :show
        else
            render json:@job.errors.full_messages, status: 422
        end
    end

    def destroy
        @job= Job.find_by(id: params[:id])

        if @job.destroy
            render :show
        else
            render json:@job.errors.full_messages, status: 422
        end

    end

    def job_params
        params.require(:job).permit(:title, :field, :company, :location, :description, :start_date, :end_date)
    end    
end
