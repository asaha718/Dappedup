class Api::JobApplicationsController < ApplicationController
    def create
        @user= User.find_by(id: current_user.id)
        @job_app= @user.job_applications.new(job_app_params)
        
        if @job_app.save
            render :show
        else
            render json:@job_app.errors.full_messages, status: 422
        end

    end

    def show
        render :show
    end

    def job_app_params
        params.require(:job_application).permit(:job_post_id)
    end
end
