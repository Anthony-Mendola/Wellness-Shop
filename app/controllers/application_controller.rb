class ApplicationController < ActionController::API
  skip_before_action :verify_authenticity_token

  def fallback_index_html
    render :file => '/public/index.html'
  end
end
