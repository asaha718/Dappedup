class Api::UsersController < ApplicationController
  def index
    @users= User.all; 
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end 
  
  def update
    @user=User.find_by(id: params[:id])
    if @user.update(user_params)
      @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def show
    @user= User.find_by(id: params[:id])
    render :show
  end

  private 
  def user_params
    params.require(:user).permit(:email, :password, :bio, :location, :job_title, :full_name, :user_role)  
  end 
end
