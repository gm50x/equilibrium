# Equilibrium
An nginx load balancing example

### Build:

    docker build -t marco-polo-api ./marco-polo-api

### Start everything:

    docker-compose up

### Test:

    curl http://localhost:8000

### OUTPUT:
Watch as the result changes from {appName: 'MARCO'} to {appName: 'POLO'} with each individual applicaiton response. 

The load balancer is performing a round-robin balancing strategy on the servers. 

You can also access individual applications by hitting localhost:3005 and localhost:3006.