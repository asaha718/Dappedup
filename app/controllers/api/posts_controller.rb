class Api::PostsController < ApplicationController
    def index
        @posts= Post.all
        render :index
    end

    def show
        @post= Post.find_by(id: params[:id])
        render :show
    end

    def create
        # debugger
        @post= Post.new(post_params)
        @post.author_id= current_user.id
        if @post.save
            render :show
        else
            render json:@post.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @post = Post.find_by(id: params[:id])
        #should only be able to update your own post 
        if @post.update(post_params)
            render :show
        else
            render json:@post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post= Post.find_by(id: params[:id])
        #should only be able to destroy your own post
         
        if @post.destroy
            render :show
        else
            render json:@post.errors.full_messages, status: 422
        end

    end

    def post_params
        params.require(:post).permit(:body, :photo)
    end

end
