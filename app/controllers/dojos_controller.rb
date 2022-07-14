class DojosController < ApplicationController
    def index
        dojos = Dojo.all
        render json: dojos
    end
end
