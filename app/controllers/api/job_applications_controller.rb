class Api::JobApplicationsController < ApplicationController
    def create
        # @user= User.find_by(id: current_user.id)

        # @job_app= @user.job_applications.new(job_app_params)
        if(current_user.user_role == 'company')
            render "Company can not apply to position"
        else
            @job_app= JobApplication.new(job_post_id: params[:job_application], applicant_id: current_user.id)

            if @job_app.save!
                render :show
            else
                render json:@job_app.errors.full_messages, status: 422
            end
        end



    end

    def show
        render :show
    end

end
