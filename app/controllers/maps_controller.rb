class MapsController < ApplicationController

    def index
        coords = Geocoder.search("#{params['location']}")
        # results = Geocoder.search("Paris")
        @coords = coords.first.coordinates.reverse
        puts "????????????????????????????????????????????????????????????????????????? #{coords.first.coordinates}"


    end

end

