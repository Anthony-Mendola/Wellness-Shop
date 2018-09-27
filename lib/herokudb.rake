task :herokudb do
  exec 'heroku pg:reset DATABASE --confirm wellness-shop && heroku run rake db:migrate && heroku run rake db:seed'
end
