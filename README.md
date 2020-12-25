# Equilibrium
An nginx load balancing example.

### Getting Started:
You can start the services with a single command as follows.

    docker-compose up

Once everything is up you can navigate to the balancer url:port. localhost:3000 if you haven't changed anything.

```bash
# curl request
$ curl http://localhost:8000
```

There are 4 instances configured in the balancer. By reloading the page frequently will see the different hostnames (container-ids) coming out. The expected behavior is that the hashes get repeated every 4 calls, because down under the hood, Nginx is performing a round-robin balancing strategy.

```bash
Browser -> Nginx(Load Balancer) -> [Api(1), Api(2), Api(3), Api(4)]
```

Although here we are only applying this strategy to the backend web-api, we could apply the same strategy with a frontend or a multi-layer distributed application. A frontend with perhaps 3 instances and a backend webapi with 5 instances. That, obviously, would depend on your use case scenario, but definitely doable. 