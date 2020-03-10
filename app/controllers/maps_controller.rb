class MapsController < ApplicationController

    def index
        coords = Geocoder.search("#{params['location']}")
        
        if coords.first
            p "THIS IS TRUE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! #{coords.first}"
            @coords = coords.first.coordinates.reverse
            @jobs = Job.all
        else
            p "THIS IS FALSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! #{coords.first}"
            render 'pages/home'
        end
    end

end



