# Equilibrium
An nginx load balancing example.

### Getting Started:
You can start the services with a single command as follows.

    docker-compose up

Then you can test the services by navigating to the balancer url:port.

    curl http://localhost:8000


Watch as the output changes from {appName: 'MARCO'} to {appName: 'POLO'} with each individual application's response.

Under the hood, the load balancer is performing a round-robin balancing strategy to distribute the load on the servers.

    Browser --> Nginx(Load Balancer) -> [Api(1)[MARCO], Api(2)[POLO]]