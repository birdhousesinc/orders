# Birdhouses Inc. Orders Service

This orders service allows us to create and list orders from the database. 

# Group Orders API

# orders [/orders]

'Orders' endpoint.

## list [GET] 

'List Orders' endpoint.

+ Request (application/json)

+ Response 200 (application/json)
    + Body
    
            {
              "list": ["order", "order2..."]
            }

## list [POST] 

'Create Order' endpoint.

+ Request (application/json)
    + Body
    
            {
              "some": "order data"
            }

+ Response 200 (application/json)
    + Body
    
            {
              "msg": "order goes here"
            }
