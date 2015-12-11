json.array! @users do |user|
  json.id user.id
  json.firstName user.first_name
  json.lastName user.last_name
  json.bio user.bio
  json.mission user.mission
  json.imageUrl user.image_url
end