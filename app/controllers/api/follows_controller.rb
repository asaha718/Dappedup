class Api::FollowsController < ApplicationController
    def create
        @user= User.find_by(id: current_user.id)
        @following= @user.given_follows.new(follow_params)

        if @following.save
            render :show
        else
            render json:@following.errors.full_messages, status: 422
        end
    end

    def show
        render :show
    end
    
    def destroy
        @user= User.find_by(id: current_user.id)
        @following= @user.given_follows.find_by(followed_user_id: params[:id])

        if @following
            @following.delete
        else
            # render json: params[:followed_user_id]
            render json:@following.errors.full_messages, status: 422
        end
    end

    def follow_params
        params.require(:follow).permit(:followed_user_id)
    end
end
