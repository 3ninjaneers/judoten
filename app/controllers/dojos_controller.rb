class DojosController < ApplicationController
    def index
        dojos = Dojo.all
        render json: dojos
    end
    def destroy
        dojo = Dojo.find(params[:id])
        dojos = Dojo.all
        dojo.destroy
        render json: dojos
    end
    def create
        dojo = Dojo.create(dojo_params)
        if dojo.valid? 
            render json: dojo 
        else
            render json: dojo.errors, status: 422
        end
    end
    private

    def dojo_params
        params.require(:dojo).permit(:name, :address, :city, :state, :website, :phone, :instructor, :email, :image, :user_id)
    end
end
