class PagesController < ApplicationController
  
  def home
    
  end

  def search
    query = params['q']
    redirect_to :controller => 'maps', :action => 'index', :location => query
  end

end
