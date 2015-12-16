
@user.attributes.each do |attr, val|
  camelized = attr.camelize(:lower)
  json.set! camelized.to_sym, val
end

camel_projects = []
camel_project = {}

@user.projects.each do |project|
  project.attributes.each do |key, val|
    camel_project[key.camelize(:lower)] = val
  end
  camel_projects << camel_project
  camel_project = {}             
end

json.projects camel_projects



