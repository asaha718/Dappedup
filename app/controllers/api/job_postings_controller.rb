class Api::JobPostingsController < ApplicationController
    def index
        @job_postings= JobPosting.all
        render :index
    end

    def show
        @job_post= JobPosting.find_by(id: params[:id])
        render :show
    end

    
    def update
        @job_post = JobPosting.find_by(id: params[:id])
        if @job_post.update(post_params)
            render :show
        else
            render json:@job_post.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @job_post= JobPosting.find_by(id: params[:id])
        
        if @job_post.destroy
            render :show
        else
            render json:@job_post.errors.full_messages, status: 422
        end
        
    end
    
    def create
        @job_post= JobPosting.new(post_params)
        @job_post.company_id= current_user.id

        if @job_post.save
            render :show
        else 
            render json:@job_post.errors.full_messages, status: 422
        end

    end
    
    def post_params
        params.require(:job_posting).permit(:header, :body)
    end
end
