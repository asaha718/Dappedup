class Api::ConnectionsController < ApplicationController
    def create
        @user= User.find_by(id: current_user.id)
        @connection= @user.active_connections.new(connection_params)

        if @connection.save
            render :show
        else
            render json: @connection.errors.full_messages, status: 422
    end

    def show
        render :show
    end

    def destroy
        @user= User.find_by(id: current_user.id)
        @connection = @user.active_connections.find_by(connectee_id: params[:id])
        if @connection
            @connection.delete
        else
            render json: params[:connectee_id]
        end 
    end

    def connection_params
        params.require(:connection).permit(:connectee_id)
    end

end
