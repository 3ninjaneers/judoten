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
end
