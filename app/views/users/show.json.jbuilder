
@user.attributes.each do |attr, val|
  camelized = attr.camelize(:lower)
  json.set! camelized.to_sym, val
end





